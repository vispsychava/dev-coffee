const CACHE_NAME = 'devcoffee-v5';

const ARCHIVOS = [
    './',
    './index.html',
    './manifest.json',
    './css/style.css',
    './js/app.js',

    './imagenes/icons/icon-72x72.png',
    './imagenes/icons/icon-96x96.png',
    './imagenes/icons/icon-128x128.png',
    './imagenes/icons/icon-144x144.png',
    './imagenes/icons/icon-152x152.png',
    './imagenes/icons/icon-192x192.png',
    './imagenes/icons/icon-384x384.png',
    './imagenes/icons/icon-512x512.png',

    './imagenes/coffe1.jpg',
    './imagenes/coffe2.jpg',
    './imagenes/coffe3.jpg',
    './imagenes/coffe4.jpg',
    './imagenes/coffe5.jpg',
    './imagenes/coffe6.jpg',
    './imagenes/coffe7.jpg',
    './imagenes/coffe8.jpg',
    './imagenes/coffe9.jpg',
    './imagenes/coffe10.jpg'
];

// INSTALACIÓN: precarga de recursos estáticos
self.addEventListener('install', event => {
    console.log('[SW] Instalando Service Worker...');

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ARCHIVOS))
            .then(() => self.skipWaiting())
            .catch(error => {
                console.error('[SW] Error al guardar en caché:', error);
                throw error;
            })
    );
});

// ACTIVACIÓN: elimina las cachés antiguas
self.addEventListener('activate', event => {
    console.log('[SW] Activando Service Worker...');

    event.waitUntil(
        caches.keys()
            .then(nombresCaches => {
                return Promise.all(
                    nombresCaches.map(nombre => {
                        if (nombre !== CACHE_NAME) {
                            console.log('[SW] Eliminando caché antiguo:', nombre);
                            return caches.delete(nombre);
                        }
                    })
                );
            })
            .then(() => self.clients.claim())
    );
});

// FETCH: estrategias Cache First y Network First
self.addEventListener('fetch', event => {
    const solicitud = event.request;

    // Solo interceptamos peticiones GET del mismo origen
    if (solicitud.method !== 'GET') return;

    const url = new URL(solicitud.url);

    if (url.origin !== self.location.origin) return;

    // NETWORK FIRST: páginas HTML
    if (
        solicitud.mode === 'navigate' ||
        solicitud.destination === 'document'
    ) {
        event.respondWith(
            fetch(solicitud)
                .then(respuestaRed => {
                    if (respuestaRed.ok) {
                        const copia = respuestaRed.clone();

                        caches.open(CACHE_NAME)
                            .then(cache => cache.put(solicitud, copia));
                    }

                    return respuestaRed;
                })
                .catch(async () => {
                    const respuestaCache = await caches.match(solicitud);

                    if (respuestaCache) {
                        return respuestaCache;
                    }

                    return caches.match('./index.html');
                })
        );

        return;
    }

    // CACHE FIRST: CSS, JavaScript, imágenes y otros recursos
    event.respondWith(
        caches.match(solicitud)
            .then(respuestaCache => {
                if (respuestaCache) {
                    return respuestaCache;
                }

                return fetch(solicitud)
                    .then(respuestaRed => {
                        if (respuestaRed.ok) {
                            const copia = respuestaRed.clone();

                            caches.open(CACHE_NAME)
                                .then(cache => cache.put(solicitud, copia));
                        }

                        return respuestaRed;
                    });
            })
    );
});