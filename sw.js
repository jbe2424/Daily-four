self.addEventListener('install', (e)=>{
  e.waitUntil(caches.open('daily-four-v1').then(cache=>cache.addAll(['./','./index.html','./manifest.webmanifest','./icon-192.png'])));
});
self.addEventListener('fetch', (e)=>{
  e.respondWith(caches.match(e.request).then(resp=>resp || fetch(e.request)));
});
