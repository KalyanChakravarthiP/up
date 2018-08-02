self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('static').then(function(cache) {
     return cache.addAll([
       'index.html',
       'selection.html',
       'js/index.js',
       'js/main.js',
       'js/styles.js',
       'images/Blue Jeans.jpeg',
       'images/Casual Black Shirt.jpeg',
       'css/selection.css',
       'css/styles.css'

     ]);
   })
 );
});

self.addEventListener('activate', function () {
 console.log('serviceWorker Activated');
});



self.addEventListener('fetch', function(event) {

console.log(event.request.url);

event.respondWith(

caches.match(event.request).then(function(response) {

return response || fetch(event.request);

})

);

});
