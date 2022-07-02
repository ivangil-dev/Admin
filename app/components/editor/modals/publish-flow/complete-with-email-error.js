import Component from '@glimmer/component';
import EmailFailedError from 'ghost-admin/errors/email-failed-error';
import {CONFIRM_EMAIL_MAX_POLL_LENGTH, CONFIRM_EMAIL_POLL_LENGTH} from '../../publish-management';
import {htmlSafe} from '@ember/template';
import {isServerUnreachableError} from 'ghost-admin/services/ajax';
import {task, timeout} from 'ember-concurrency';
import {tracked} from '@glimmer/tracking';

function isString(str) {
    return toString.call(str) === '[object String]';
}

export default class PublishFlowCompleteWithEmailError extends Component {
    @tracked newEmailErrorMessage;
    @tracked retryErrorMessage;

    get emailErrorMessage() {
        return this.newEmailErrorMessage || this.args.emailErrorMessage;
    }

    @task({drop: true})
    *retryEmailTask() {
        this.retryErrorMessage = null;

        try {
            let email = yield this.args.publishOptions.post.email.retry();

            let pollTimeout = 0;
            if (email && email.status !== 'submitted') {
                while (pollTimeout < CONFIRM_EMAIL_MAX_POLL_LENGTH) {
                    yield timeout(CONFIRM_EMAIL_POLL_LENGTH);
                    pollTimeout += CONFIRM_EMAIL_POLL_LENGTH;

                    email = yield email.reload();

                    if (email.status === 'submitted') {
                        break;
                    }
                    if (email.status === 'failed') {
                        throw new EmailFailedError(email.error);
                    }
                }
            }

            return email;
        } catch (e) {
            // update "failed" state if email fails again
            if (e && e.name === 'EmailFailedError') {
                this.newEmailErrorMessage = e.message;
                return false;
            }

            if (e) {
                let errorMessage = '';

                if (isServerUnreachableError(e)) {
                    errorMessage = 'No se puede conectar, consulta tu conexión a Internet y vuelve a intentarlo.';
                } else if (e && isString(e)) {
                    errorMessage = e;
                } else if (e?.payload?.errors?.[0].message) {
                    errorMessage = e.payload.errors[0].message;
                } else {
                    errorMessage = 'Se produjo un error desconocido al intentar reenviar';
                }

                this.retryErrorMessage = htmlSafe(errorMessage);
                return false;
            }
        }
    }
}
