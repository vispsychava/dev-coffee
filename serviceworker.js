const CACHE_NAME = 'devcoffee-v3';  

const ARCHIVOS = [
    './',
    './index.html',
    './detalle.html',
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

self.addEventListener('install', event => {
    console.log('[SW] Instalando Service Worker...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ARCHIVOS))
            .then(() => self.skipWaiting())
            .catch(error => console.error('[SW] Error al guardar en caché:', error))
    );
});

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

self.addEventListener('fetch', event => {
    if (event.request.method !== 'GET') return;
    if (!event.request.url.startsWith('http')) return;

    event.respondWith(
        caches.match(event.request)
            .then(respuestaCache => {
                if (respuestaCache) return respuestaCache;

                return fetch(event.request)
                    .then(respuestaRed => {
                        if (respuestaRed && respuestaRed.status === 200) {
                            const copia = respuestaRed.clone();
                            caches.open(CACHE_NAME).then(cache => {
                                cache.put(event.request, copia);
                            });
                        }
                        return respuestaRed;
                    })
                    .catch(() => {
                        if (event.request.mode === 'navigate') {
                            return caches.match('./index.html');
                        }
                    });
            })
    );
});