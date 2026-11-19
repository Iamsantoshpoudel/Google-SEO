const site = "https://santosh2.com.np";
const key = "f49e47c15cb2db9b12c7bb8f8d7f5164a20efe79f2406a10483015aae581bbd8";

const sitemapResponse = await fetch(`${site}/sitemap.xml`);
if (!sitemapResponse.ok) {
  throw new Error(`Could not fetch sitemap: HTTP ${sitemapResponse.status}`);
}

const sitemap = await sitemapResponse.text();
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map((match) => match[1].trim())
  .filter((url) => new URL(url).origin === site);

if (urls.length === 0) {
  throw new Error("The sitemap did not contain any URLs for the site.");
}

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: "santosh2.com.np",
    key,
    keyLocation: `${site}/${key}.txt`,
    urlList: urls,
  }),
});

if (response.status !== 200 && response.status !== 202) {
  const details = await response.text();
  throw new Error(`IndexNow submission failed: HTTP ${response.status} ${details}`);
}

console.log(`Submitted ${urls.length} sitemap URLs to IndexNow.`);
