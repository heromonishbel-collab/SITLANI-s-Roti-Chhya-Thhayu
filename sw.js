const C="roti-v3",F=["./","index.html","manifest.webmanifest","icon-192.png","icon-512.png","logo.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{const r=e.request,u=new URL(r.url);if(r.method!="GET"||u.origin!=location.origin||u.pathname.endsWith("content.json"))return;
e.respondWith(caches.open(C).then(async c=>{const m=await c.match(r,{ignoreSearch:true});const n=fetch(r).then(x=>{if(x.ok)c.put(r,x.clone());return x}).catch(()=>m||c.match("index.html"));return m||n}))});
