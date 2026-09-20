const CACHE_PREFIX='kansai-trip-pwa-';
const CACHE=CACHE_PREFIX+'v5';
const ASSETS=['./','./index.html','./styles.css','./app.js','./manifest.json','./icon.svg','./icon-192.png','./icon-512.png'];

self.addEventListener('install',function(e){
  e.waitUntil(
    caches.open(CACHE)
      .then(function(c){return c.addAll(ASSETS);})
      .then(function(){return self.skipWaiting();})
  );
});

self.addEventListener('activate',function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(
        keys
          .filter(function(k){return k.startsWith(CACHE_PREFIX)&&k!==CACHE;})
          .map(function(k){return caches.delete(k);})
      );
    }).then(function(){return self.clients.claim();})
  );
});

self.addEventListener('fetch',function(e){
  if(e.request.method!=='GET')return;

  const u=new URL(e.request.url);
  const scopePath=new URL(self.registration.scope).pathname;
  if(u.origin!==self.location.origin||!u.pathname.startsWith(scopePath))return;

  if(e.request.mode==='navigate'){
    e.respondWith(
      fetch(e.request).then(function(res){
        const copy=res.clone();
        caches.open(CACHE).then(function(c){c.put('./index.html',copy);});
        return res;
      }).catch(function(){return caches.match('./index.html');})
    );
    return;
  }

  e.respondWith(
    caches.match(e.request).then(function(hit){
      if(hit)return hit;
      return fetch(e.request).then(function(res){
        const copy=res.clone();
        caches.open(CACHE).then(function(c){c.put(e.request,copy);});
        return res;
      });
    })
  );
});
