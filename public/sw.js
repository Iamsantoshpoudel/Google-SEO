const V = "v2";
const PAGES = `pages-${V}`;
const ASSETS = `assets-${V}`;

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(PAGES).then((c) => c.add("/offline")).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((ks) => Promise.all(ks.filter((k) => k !== PAGES && k !== ASSETS).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return; // never touch Firebase / country lookups

  if (/^\/(?:robots\.txt|sitemap\.xml|favicon\.ico|favicon\.svg|apple-touch-icon\.png|apple-icon\.png|icon(?:-\d+)?\.png)$/.test(url.pathname)) return;

  // Pages: network first; only the offline fallback is cached.
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req)
        .catch(() => caches.match("/offline")),
    );
    return;
  }

  // Static files and images: serve from cache, refresh in the background
  if (/^\/(_next\/(static|image)|img\/|icon-)/.test(url.pathname)) {
    e.respondWith(
      caches.open(ASSETS).then((c) =>
        c.match(req).then((hit) => {
          const net = fetch(req).then((res) => { if (res.ok) c.put(req, res.clone()); return res; }).catch(() => hit);
          return hit || net;
        }),
      ),
    );
  }
});
