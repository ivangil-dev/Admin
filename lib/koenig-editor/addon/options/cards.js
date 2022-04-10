import createComponentCard from '../utils/create-component-card';

// map card names to component names
export const CARD_COMPONENT_MAP = {
    hr: 'koenig-card-hr',
    image: 'koenig-card-image',
    markdown: 'koenig-card-markdown',
    'card-markdown': 'koenig-card-markdown', // backwards-compat with markdown editor
    html: 'koenig-card-html',
    code: 'koenig-card-code',
    embed: 'koenig-card-embed',
    bookmark: 'koenig-card-bookmark',
    gallery: 'koenig-card-gallery',
    email: 'koenig-card-email',
    button: 'koenig-card-button',
    callout: 'koenig-card-callout',
    nft: 'koenig-card-nft',
    toggle: 'koenig-card-toggle',
    'email-cta': 'koenig-card-email-cta',
    paywall: 'koenig-card-paywall',
    video: 'koenig-card-video',
    audio: 'koenig-card-audio',
    file: 'koenig-card-file',
    product: 'koenig-card-product',
    'before-after': 'koenig-card-before-after',
    header: 'koenig-card-header'
};

// map card names to generic icons (used for ghost elements when dragging)
export const CARD_ICON_MAP = {
    hr: 'koenig/kg-card-type-divider',
    image: 'koenig/kg-card-type-image',
    markdown: 'koenig/kg-card-type-markdown',
    'card-markdown': 'koenig/kg-card-type-markdown',
    html: 'koenig/kg-card-type-html',
    code: 'koenig/kg-card-type-gen-embed',
    embed: 'koenig/kg-card-type-gen-embed',
    bookmark: 'koenig/kg-card-type-bookmark',
    gallery: 'koenig/kg-card-type-gallery',
    email: 'koenig/kg-card-type-gen-embed',
    button: 'koenig/kg-card-type-gen-embed',
    callout: 'koenig/kg-card-type-callout',
    nft: 'koenig/kg-card-type-gen-embed',
    toggle: 'koenig/kg-card-type-toggle',
    'email-cta': 'koenig/kg-card-type-gen-embed',
    paywall: 'koenig/kg-card-type-divider',
    video: 'koenig/kg-card-type-video',
    audio: 'koenig/kg-card-type-audio',
    file: 'koenig/kg-card-type-file',
    product: 'koenig/kg-card-type-product',
    'before-after': 'koenig/kg-card-type-before-after',
    header: 'koenig/kg-card-type-gen-embed'
};

// TODO: move koenigOptions directly into cards now that card components register
// themselves so that they are available on card.component
export default [
    createComponentCard('card-markdown'), // backwards-compat with markdown editor
    createComponentCard('code'),
    createComponentCard('embed', {hasEditMode: false}),
    createComponentCard('bookmark', {hasEditMode: false}),
    createComponentCard('hr', {hasEditMode: false, selectAfterInsert: false}),
    createComponentCard('html'),
    createComponentCard('image', {hasEditMode: false}),
    createComponentCard('markdown'),
    createComponentCard('gallery', {hasEditMode: false}),
    createComponentCard('email'),
    createComponentCard('email-cta'),
    createComponentCard('button'),
    createComponentCard('callout'),
    createComponentCard('nft', {hasEditMode: false}),
    createComponentCard('toggle'),
    createComponentCard('video'),
    createComponentCard('audio'),
    createComponentCard('file'),
    createComponentCard('product'),
    createComponentCard('paywall', {hasEditMode: false, selectAfterInsert: false}),
    createComponentCard('before-after'),
    createComponentCard('header')
];

export const CARD_MENU = [
    {
        title: 'Primary',
        rowLength: 1,
        items: [{
            label: 'Imagen',
            icon: 'koenig/kg-card-type-image',
            desc: 'Subir, o insertar con /image [url]',
            iconClass: 'kg-card-type-native',
            matches: ['image', 'img'],
            type: 'card',
            replaceArg: 'image',
            params: ['src'],
            payload: {
                triggerBrowse: true
            }
        },
        {
            label: 'Markdown',
            icon: 'koenig/kg-card-type-markdown',
            desc: 'Insertar un espacio del editor Markdown',
            iconClass: 'kg-card-type-native',
            matches: ['markdown', 'md'],
            type: 'card',
            replaceArg: 'markdown'
        },
        {
            label: 'HTML',
            icon: 'koenig/kg-card-type-html',
            desc: 'Insertar un espacio con código HTML',
            iconClass: 'kg-card-type-native',
            matches: ['html'],
            type: 'card',
            replaceArg: 'html'
        },
        {
            label: 'Galería',
            icon: 'koenig/kg-card-type-gallery',
            desc: 'Crear una galería de imágenes',
            iconClass: 'kg-card-type-native',
            matches: ['gallery'],
            type: 'card',
            replaceArg: 'gallery'
        },
        {
            label: 'Divisor',
            icon: 'koenig/kg-card-type-divider',
            desc: 'Insertar una línea divisoria',
            iconClass: 'kg-card-type-native',
            matches: ['divider', 'horizontal-rule', 'hr'],
            type: 'card',
            replaceArg: 'hr'
        },
        {
            label: 'Marcador',
            icon: 'koenig/kg-card-type-bookmark',
            desc: 'Incrustar un enlace con imagen y descripción',
            matches: ['bookmark'],
            type: 'card',
            replaceArg: 'bookmark',
            params: ['url']
        },
        {
            label: 'Exclusivo email',
            icon: 'koenig/kg-card-type-email',
            desc: 'Espacio solo visible cuando se envía por email.',
            matches: ['email'],
            type: 'card',
            replaceArg: 'email',
            postType: 'post'
        },
        {
            label: 'Llamada a la acción para email',
            icon: 'koenig/kg-card-type-email-cta',
            desc: 'Llamada a la acción para suscriptores y usuarios de pago',
            matches: ['email', 'cta'],
            type: 'card',
            replaceArg: 'email-cta',
            postType: 'post'
        },
        {
            label: 'Vista previa pública',
            icon: 'koenig/kg-card-type-paywall',
            desc: 'Introducción pública en publicaciones de pago.',
            matches: ['public preview', 'preview', 'paywall'],
            type: 'card',
            replaceArg: 'paywall'
        },
        {
            label: 'Botón',
            icon: 'koenig/kg-card-type-button',
            desc: 'Añadir un botón',
            matches: ['button'],
            type: 'card',
            replaceArg: 'button'
        },
        {
            label: 'Caja destacada',
            icon: 'koenig/kg-card-type-callout',
            desc: 'Cajas de información que destacan',
            matches: ['callout', 'infobox'],
            type: 'card',
            replaceArg: 'callout'
        },
        {
            label: 'GIF',
            icon: 'koenig/kg-card-type-gif',
            desc: 'Busca e incrusta gifs',
            iconClass: 'kg-card-type-unsplash',
            matches: ['gif', 'giphy', 'tenor'],
            type: 'card',
            replaceArg: 'image',
            insertOnSpace: true,
            payload: {
                imageSelector: 'tenor'
            },
            isAvailable: 'config.tenor.publicReadOnlyApiKey'
        },
        {
            label: 'Plegable',
            icon: 'koenig/kg-card-type-toggle',
            desc: 'Añadir contenido plegable',
            matches: ['toggle'],
            type: 'card',
            replaceArg: 'toggle'
        },
        {
            label: 'Video',
            icon: 'koenig/kg-card-type-video',
            desc: 'Sube e inserta un video.',
            matches: ['video'],
            type: 'card',
            replaceArg: 'video',
            payload: {
                triggerBrowse: true
            }
        },
        {
            label: 'Audio',
            icon: 'koenig/kg-card-type-audio',
            desc: 'Sube e inserta un archivo de audio.',
            matches: ['audio'],
            type: 'card',
            replaceArg: 'audio',
            payload: {
                triggerBrowse: true
            }
        },
        {
            label: 'Archivo',
            icon: 'koenig/kg-card-type-file',
            desc: 'Sube un archivo descargable',
            matches: ['file', 'upload'],
            type: 'card',
            replaceArg: 'file',
            payload: {
                triggerBrowse: true
            }
        },
        {
            label: 'Producto',
            icon: 'koenig/kg-card-type-product',
            desc: 'Inserta una recomendación de producto',
            matches: ['product'],
            type: 'card',
            replaceArg: 'product'
        },
        {
            label: 'Antes/después',
            icon: 'koenig/kg-card-type-before-after',
            desc: 'Compara dos imagenes',
            matches: ['before', 'after', 'compare'],
            type: 'card',
            replaceArg: 'before-after',
            isAvailable: 'feature.beforeAfterCard'
        }, {
            label: 'Cabecera',
            icon: 'koenig/kg-card-type-header',
            desc: 'Añadir un encabezado de sección',
            matches: ['header'],
            type: 'card',
            replaceArg: 'header'
        }]
    },
    {
        title: 'Incrustar',
        rowLength: 1,
        items: [{
            label: 'YouTube',
            icon: 'koenig/kg-card-type-youtube',
            desc: '/youtube [video url]',
            matches: ['youtube'],
            type: 'card',
            replaceArg: 'embed',
            params: ['url']
        },
        {
            label: 'Twitter',
            icon: 'koenig/kg-card-type-twitter',
            desc: '/twitter [tweet url]',
            matches: ['twitter'],
            type: 'card',
            replaceArg: 'embed',
            params: ['url']
        },
        {
            label: 'Unsplash',
            icon: 'koenig/kg-card-type-unsplash',
            desc: '/unsplash [search-term or url]',
            iconClass: 'kg-card-type-unsplash',
            matches: ['unsplash'],
            type: 'card',
            replaceArg: 'image',
            params: ['searchTerm'],
            payload: {
                imageSelector: 'unsplash'
            },
            isAvailable: 'settings.unsplash'
        },
        {
            label: 'Vimeo',
            icon: 'koenig/kg-card-type-vimeo',
            desc: '/vimeo [video url]',
            matches: ['vimeo'],
            type: 'card',
            replaceArg: 'embed',
            params: ['url']
        },
        {
            label: 'CodePen',
            icon: 'koenig/kg-card-type-codepen',
            desc: '/codepen [pen url]',
            iconClass: 'kg-card-type-codepen',
            matches: ['codepen'],
            type: 'card',
            replaceArg: 'embed',
            params: ['url']
        },
        {
            label: 'Spotify',
            icon: 'koenig/kg-card-type-spotify',
            desc: '/spotify [track or playlist url]',
            matches: ['spotify'],
            type: 'card',
            replaceArg: 'embed',
            params: ['url']
        },
        {
            label: 'SoundCloud',
            icon: 'koenig/kg-card-type-soundcloud',
            desc: '/soundcloud [track or playlist url]',
            matches: ['soundcloud'],
            type: 'card',
            replaceArg: 'embed',
            params: ['url']
        },
        {
            label: 'NFT',
            icon: 'koenig/kg-card-type-nft',
            desc: '/nft [opensea url]',
            iconClass: 'kg-card-type-native',
            matches: ['nft', 'opensea'],
            type: 'card',
            replaceArg: 'embed',
            params: ['url']
        },
        {
            label: 'Other...',
            icon: 'koenig/kg-card-type-other',
            desc: '/embed [url]',
            iconClass: 'kg-card-type-native',
            matches: ['embed'],
            type: 'card',
            replaceArg: 'embed',
            params: ['url']
        }]
    }
];
