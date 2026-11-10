// Спачатку бярэм свежую версію з сеткі, кэш — толькі калі няма інтэрнэту
const CACHE = "slouka-v6";
const FILES = ["./", "index.html", "manifest.json", "icon-192.png", "icon-512.png", "slounik.txt"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => Promise.all(FILES.map(f =>
    fetch(new Request(f, { cache: "reload" })).then(r => r.ok && c.put(f, r)).catch(() => {})))));
  self.skipWaiting();
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || !req.url.startsWith(self.location.origin)) return;
  e.respondWith((async () => {
    try {
      const fresh = await fetch(req.url, { cache: "no-cache" });
      if (fresh.ok) { const c = await caches.open(CACHE); c.put(req, fresh.clone()); }
      return fresh;
    } catch (err) {
      const hit = await caches.match(req, { ignoreSearch: true }) || (req.mode === "navigate" && await caches.match("index.html"));
      return hit || Response.error();
    }
  })());
});
