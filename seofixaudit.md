This is a report-only audit. I made no source or checklist changes. The current worktree already contains the earlier implementation changes; I left them untouched, as donext.md says to wait for “apply fixes.”

The local production build passed. Local testing found 17 sitemap routes returning 200, each with one H1, a canonical URL, robots metadata, parseable JSON-LD, and images with alt text and dimensions. git diff --check reported no whitespace errors.

Scores — manual estimates, not measured rankings
Scope	SEO	AEO	GEO
Current live site	62/100	56/100	48/100
Local source, if deployed	85/100	73/100	68/100
The live scores are lower because production is behind the local source. These estimates are not Lighthouse scores, indexing results, or predictions of search ranking.

Highest-impact findings
#	Severity	Finding and evidence
1	HIGH	The updated source is not deployed. The local sitemap has 17 URLs, but live has 16; the local SaaS article returns 200 while the live URL is 404. Live still references the DexBotX SVG, while the updated PNG returns 404. Live also has the old og:site_name. The deployment checkbox remains pending in do.md.
2	HIGH	Review the separate VerifiAI product site’s claims and testimonials. The fetched page at santoshpoudel06.com.np included spelling-variant keyword text, a “best” claim, and generic-looking testimonials. I could not verify the testimonials’ authenticity; if they are genuine, keep evidence, and if not, remove them.
3	MEDIUM	AI discovery files need updating. Local llms.txt and llms-full.txt link to /feed.xml, which returns 404 live; /rss.xml returns 200. The files omit the newer SaaS and DexBotX articles listed in lib/data.ts and lib/data.ts.
4	MEDIUM	Some blog titles are long enough to be truncated in results. Several exceed roughly 60 characters; the longest is about 91. Titles are passed through in app/blog/[slug]/page.tsx, with source titles in lib/data.ts.
5	MEDIUM	The sitemap’s post dates are not independently maintained per article. All posts use the mtime of lib/data.ts for lastModified in app/sitemap.ts. BlogPosting dateModified is always set to datePublished in app/blog/[slug]/page.tsx.
6	MEDIUM	AEO answers do not cover every intended question directly. The FAQ has four questions—who, what, GitHub, and contact—in lib/data.ts; it lacks explicit questions about location, DexBotX, and VerifiAI. The direct bio sentence is about 27 words, not a single 40–60-word answer, in app/page.tsx. Do not add an employer unless verified.
7	MEDIUM	Initial JavaScript is a performance risk. The local production homepage references about 619 KB of uncompressed JavaScript across 12 scripts, plus about 38 KB CSS. Client effects and tracking are mounted globally in app/layout.tsx; Firebase tracking is dynamically imported in components/VisitTracker.tsx. This is a source-size measurement, not a Lighthouse or field Core Web Vitals result.
8	MEDIUM	Actual verified-bot access through Cloudflare is unconfirmed. The wildcard robots policy allows crawlers, but a spoofed user-agent test cannot establish what verified Googlebot or other bots experience. The Cloudflare item remains pending in do.md.
9	MEDIUM	Third-party corroboration is mixed. The GitHub profile points to santoshpoudel06.com.np, not the portfolio domain; the fetched DexBotX About content did not show a portfolio link. YouTube’s profile links and bio could not be verified.
10	LOW	Project detail pages could provide stronger evidence. They include text, features, and a tech stack, but do not visibly render project screenshots; see app/projects/[slug]/page.tsx. VerifiAI also has less detail than DexBotX.
Checklist by area
Area	Status	Evidence
Crawling and rendering	PASS locally	Local routes render content in HTML; npm run build passed. Live /robots.txt allows / and links the sitemap.
Canonicals and metadata	PARTIAL	Local routes have absolute canonicals and unique metadata. Several blog titles are long; live metadata is from the older deployment. Root metadata is defined in app/layout.tsx.
Structured data	PARTIAL	Local Person, WebSite, ProfilePage, FAQ, project, blog, and breadcrumb JSON-LD parsed successfully. A Google Rich Results/Schema validator run was not performed; dateModified needs accurate per-post maintenance.
Sitemap and feeds	PARTIAL	Local sitemap has 17 URLs and image entries; live has 16 and misses the new SaaS post. Live /rss.xml works; /feed.xml does not. Sitemap generation is in app/sitemap.ts.
Redirects and 404	PASS	Live HTTP and www redirect once to the HTTPS canonical host; a missing page returns 404. Local redirects are in next.config.mjs.
Security/transport headers	PASS for checked headers	Live HTTPS response includes HSTS, Referrer-Policy, Permissions-Policy, and frame protection. This does not verify Cloudflare’s treatment of real crawlers.
Images and social previews	PASS locally; deployment stale	Local hero uses eager loading and high fetch priority in components/Hero.tsx. Images include alt text and dimensions. Live OG image returned PNG at 1200×630; local static OG image is 1200×630.
Mobile/visual performance	NOT MEASURED	No Lighthouse, CrUX, or field Core Web Vitals report was run. The hero image prioritization is good; global client scripts, the particle canvas, film-grain animation, and preloader are areas to measure.
Site identity and favicon	TECHNICALLY PASS; search result unknown	Live favicon.ico returns 200 and contains 16×16, 32×32, and 48×48 images. Tested PNG endpoints were 192×192, 512×512, and 180×180. The homepage links to a stable /favicon.ico as well as a generated icon URL. Whether Google currently displays it cannot be verified without Search Console/live results.
Original-source comparison	NOT VERIFIABLE	No original source ZIP was found, so I could not prove an original-vs-updated diff or that no prior content/layout was removed.
Local image inventory
The local public/img inventory includes four SVG illustrations—ai-future.svg (2,097 B), blockchain-future.svg (2,208 B), content-provenance.svg (2,538 B), and web-development.svg (2,476 B)—plus:

dexbotx-discord-automation.png — 336,108 B
santosh-poudel-ai-developer-verifiai-founder.jpg — 844,241 B
santosh-poudel-close-up.jpg — 965,188 B
santosh-poudel-close-up.png — 2,399,851 B
santosh-poudel-developer.jpg — 949,197 B
santosh-poudel-natural-light.jpg — 115,203 B
santosh-poudel-og.jpg — 108,598 B, 1200×630
santosh-poudel-portrait.jpg — 181,276 B
santosh-poudel-web-developer-nepal.jpg — 99,086 B, 720×960
Local favicon and manifest sources are app/favicon.ico, icon-192.png, icon-512.png, apple-touch-icon.png, and site.webmanifest. Live favicon endpoints were reachable, but Google’s displayed search-result favicon remains unverified.

AEO and GEO findings
The local site has a clear entity profile and direct project/article content. However, the FAQ does not explicitly address all likely questions, and the product/portfolio domain distinction is not consistently corroborated off-site. The local llms.txt and llms-full.txt are present but need the feed URL corrected and newer content added.

The live robots.txt and local app/robots.ts use a wildcard allow policy. Under that policy:

Crawler group	Robots policy
Googlebot, Googlebot-Image, Bingbot	Allowed
OAI-SearchBot, PerplexityBot, Claude-SearchBot	Allowed
GPTBot, ClaudeBot, Google-Extended, CCBot	Allowed
Applebot-Extended	Not explicitly blocked by *; its role was not independently verified in this audit
User-initiated fetch agents	No separate rule; wildcard is the site’s only robots policy
This policy does not make a training/search distinction: the listed training crawlers are also allowed. A robots allow rule also does not prove that Cloudflare permits the actual verified bot request.

Cannot verify from this audit
Rankings, indexed-page counts, impressions, clicks, or Search Console/Bing data.
The favicon currently shown in Google results.
Cloudflare Security Events or access by verified search/answer-engine crawlers.
Whether the third-party testimonials are authentic.
YouTube profile links and bio details.
A full original-vs-updated code diff; no source archive was present.
Actual mobile Lighthouse scores or field Core Web Vitals.
Whether answer engines currently cite the site.
After deployment
Deploy the intended revision, then verify the live SaaS article, DexBotX PNG, metadata, sitemap, and AI discovery files. Purge cache if needed.
Check Cloudflare Security Events for verified crawler requests and challenges; do not treat a spoofed user-agent request as proof.
In Google Search Console, submit /sitemap.xml, inspect the homepage and new article URLs, request indexing where appropriate, and monitor Page Indexing, Crawl Stats, HTTPS, Core Web Vitals, and Search Performance.
In Bing Webmaster Tools, verify/import the property, submit the sitemap, inspect the same URLs, and monitor crawl/index status.
Re-run a mobile Lighthouse/PageSpeed test and a structured-data validator against the deployed pages.
For a consistent manual answer-engine check, ask: “Who is Santosh Poudel, where is he based, and what are DexBotX and VerifiAI? Explain the difference between santosh2.com.np and santoshpoudel06.com.np, cite first-party sources, and don’t infer an employer.” Run it in Google Search/AI Overviews, Gemini, ChatGPT, Perplexity, Claude, and Copilot. Check that answers use current first-party pages, distinguish the portfolio from the product site, and do not invent employment or other unsupported claims