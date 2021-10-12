import Controller from '@ember/controller';
import {inject as service} from '@ember/service';
import {task} from 'ember-concurrency-decorators';

export default class SettingsDesignIndexController extends Controller {
    @service config;
    @service customThemeSettings;
    @service notifications;
    @service settings;
    @service themeManagement;

    @task
    *saveTask() {
        try {
            if (this.settings.get('errors').length !== 0) {
                return;
            }

            yield Promise.all([
                this.settings.save(),
                this.customThemeSettings.save()
            ]);

            // ensure task button switches to success state
            return true;
        } catch (error) {
            if (error) {
                this.notifications.showAPIError(error);
                throw error;
            }
        }
    }
}
