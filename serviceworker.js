const CACHE_NAME = 'devcoffee-v6'; // ⬅️ Subimos a v6

// ⬅️ LISTA MODIFICADA: Quitamos las imágenes de café y las de los iconos grandes
// Solo dejamos lo esencial para que la app arranque offline.
const ARCHIVOS = [
    './',
    './index.html',
    './manifest.json',
    './css/style.css',
    './js/app.js',
    // Dejamos solo los iconos pequeños, los grandes se cargarán bajo demanda
    './imagenes/icons/icon-72x72.png',
    './imagenes/icons/icon-96x96.png',
    './imagenes/icons/icon-128x128.png',
    './imagenes/icons/icon-144x144.png'
    // ❌ Eliminamos coffe1.jpg ... coffe10.jpg de aquí
];

// INSTALACIÓN: precarga de recursos estáticos (Solo lo esencial)
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

// FETCH: estrategias
self.addEventListener('fetch', event => {
    const solicitud = event.request;

    // Solo interceptamos peticiones GET del mismo origen
    if (solicitud.method !== 'GET') return;
    const url = new URL(solicitud.url);
    if (url.origin !== self.location.origin) return;

    // NETWORK FIRST: páginas HTML (igual que antes)
    if (solicitud.mode === 'navigate' || solicitud.destination === 'document') {
        event.respondWith(
            fetch(solicitud)
                .then(respuestaRed => {
                    if (respuestaRed.ok) {
                        const copia = respuestaRed.clone();
                        caches.open(CACHE_NAME).then(cache => cache.put(solicitud, copia));
                    }
                    return respuestaRed;
                })
                .catch(async () => {
                    const respuestaCache = await caches.match(solicitud);
                    if (respuestaCache) return respuestaCache;
                    return caches.match('./index.html');
                })
        );
        return;
    }

    // CACHE FIRST: CSS, JS, imágenes, etc. (¡AQUÍ ESTÁ LA MAGIA!)
    event.respondWith(
        caches.match(solicitud)
            .then(respuestaCache => {
                // Si ya está en caché, la devuelve (y ya no se descarga de nuevo)
                if (respuestaCache) return respuestaCache;

                // Si NO está en caché, va a la red a buscarla
                return fetch(solicitud)
                    .then(respuestaRed => {
                        // Si la red responde bien, guardamos una copia en caché AHORA MISMO
                        if (respuestaRed.ok) {
                            const copia = respuestaRed.clone();
                            caches.open(CACHE_NAME).then(cache => {
                                // Aquí se guarda la imagen que el usuario acaba de ver
                                cache.put(solicitud, copia);
                            });
                        }
                        return respuestaRed;
                    });
            })
    );
});