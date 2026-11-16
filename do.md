You are a senior technical SEO engineer and full-stack developer. this is  my personal portfolio website: https://santosh2.com.np

ABOUT ME (use only these facts, plus whatever is already in the source code):
- Name: Santosh Poudel (Nepali, from Nepal)
- Full-stack web developer and AI developer
- I build complete SaaS (software as a service) products
- I build Discord applications/bots, e.g. DexBotX (https://dexbotx.vercel.app), a Discord moderation bot that manages a server on its own (moderation, welcome flows, role automation, AI chat, creator notifications)
- I am learning on-chain / blockchain development: Ethereum, Sui and Solana
- I also build AI tools (e.g. VerifiAI, an AI content detector) and share work on YouTube and GitHub
- My GitHub, YouTube and other social links are already somewhere in the code. Find them and reuse them exactly as written. Do not invent any URL, social account, employer, award or claim.

THE SITE IS ALREADY submitted to Google Search Console, Bing Webmaster Tools and other search engines.

CURRENT PROBLEMS (seen in Google search results):
1. My favicon does NOT show next to my site in Google results (a generic globe icon shows instead).
2. The site name shown above the result title is "santosh2.com.np". It should be "Santosh Poudel".
3. No image/thumbnail shows for my site.
4. My site does not rank #1 for my own name.

MAIN GOAL: rank #1 on Google for "santosh poudel", and for related queries such as:
santosh poudel nepal developer, santosh ai developer from nepal, santosh poudel developer, santosh poudel from nepal, who is santosh poudel, what does santosh poudel do, where does santosh poudel work, santosh poudel github, santosh poudel social links, santosh poudel website, santosh poudel portfolio, nepal website developer, nepal AI developer, nepal full stack developer, nepali developer, SaaS developer Nepal, Discord bot developer Nepal, DexBotX, Solana / Sui / Ethereum developer Nepal.

STRICT RULES:
- Do NOT delete or rewrite my existing content, data, design or layout. Only update, extend and add. Where you change existing text (for example a title or meta description), show before and after.
- No keyword stuffing, no hidden text, no fake reviews, no fake schema, no doorway pages. Everything must be accurate and visible to real users. Natural wording only.
- Keep the existing framework and stack. Detect it first (Next.js, React/Vite, Astro, plain HTML, etc.) and use that framework's native SEO features (for example the Next.js Metadata API, app/sitemap.ts, app/robots.ts, app/manifest.ts).
- Do not break the build. Keep performance and accessibility intact.

STEP 1: AUDIT FIRST. Do not change anything yet. Report:
a) Why the favicon doesn't show in Google. Check these specifically:
   - Is there a favicon file at the site root (/favicon.ico) and/or a PNG/SVG icon?
   - Are the sizes valid? Google needs a square icon whose size is a multiple of 48px (48x48, 96x96, 144x144...). 48x48 is the safest.
   - Is there a correct <link rel="icon"> in the <head> of the HOMEPAGE (not only inner pages)?
   - Does robots.txt, a redirect, a middleware rule, auth or a 404 block Googlebot or Googlebot-Image from the favicon URL?
   - Is the favicon URL stable (no random hash/query that changes per deploy)?
   - Is a www / non-www or http / https mismatch causing the icon to be fetched from a different host?
b) How the homepage is rendered. If it is a client-side-only SPA (empty HTML until JavaScript runs), tell me, and fix it with SSR/SSG/prerendering so Google sees full content.
c) Current <title>, meta description, canonical, Open Graph, Twitter, JSON-LD, sitemap.xml, robots.txt, heading structure (h1-h6), image alt text, internal links, and Lighthouse-style performance problems, for EVERY page and route.
d) Which images exist in the /public folder (list them with sizes) and which one should be the main social/OG image and the Person image.

STEP 2: FIX THE FAVICON. Generate or prepare and wire up all of these, using my existing logo or avatar from /public if one exists:
- /favicon.ico (contains 48x48, optionally 32 and 16)
- icon.png at 192x192 and 512x512
- apple-touch-icon.png at 180x180
- optionally icon.svg
- site.webmanifest / manifest with name "Santosh Poudel", short_name "Santosh", icons, theme_color
- <link rel="icon" href="/favicon.ico" sizes="48x48"> plus the PNG/SVG links, apple-touch-icon and manifest, in the homepage head
- Make sure robots.txt does not block them. Give me the exact files and the exact code.

STEP 3: FIX THE SITE NAME AND TITLE (shown in Google results)
- Add WebSite JSON-LD on the homepage with "name": "Santosh Poudel", "alternateName": ["Santosh Poudel Portfolio", "santosh2.com.np"], "url": "https://santosh2.com.np".
- Homepage <title>: "Santosh Poudel | Full Stack & AI Developer from Nepal" (under about 60 characters). Keep the brand name first.
- Homepage meta description, about 150-160 characters, natural, and it must mention: Santosh Poudel, full-stack and AI developer from Nepal, SaaS products, Discord bots (DexBotX), blockchain learning, GitHub/YouTube.
- Every other page gets a unique title formatted "Page Topic | Santosh Poudel" and a unique description.

STEP 4: STRUCTURED DATA (JSON-LD, valid, using only real data from the code)
- Person: name "Santosh Poudel", alternateName, url, image (absolute URL of a real image from /public), jobTitle, description, nationality "Nepali", address/addressCountry "NP", knowsAbout [Web development, Full-stack development, SaaS, Artificial Intelligence, Discord bots, Blockchain, Ethereum, Sui, Solana, Next.js, etc. only what is true from the code], and sameAs containing ALL my real social/profile URLs (GitHub, YouTube, LinkedIn, X, etc., found in the code).
- ProfilePage wrapping the Person (mainEntity).
- WebSite (with the site name from Step 3). Use SearchAction only if the site really has search.
- SoftwareApplication / WebApplication for DexBotX and any other real project listed on the site, with name, url, description, applicationCategory, operatingSystem and author = Santosh Poudel.
- BreadcrumbList on inner pages.
- BlogPosting on every blog post (headline, datePublished, dateModified, author, image, mainEntityOfPage), keeping the dates already on the posts.
- Validate all JSON-LD and tell me how to test it in Google's Rich Results Test and the Schema Markup Validator.

STEP 5: IMAGES (so a thumbnail and social previews appear)
- Create or set a 1200x630 Open Graph / Twitter image from the images already in /public (do not delete the originals). Add og:image, og:image:width, og:image:height, og:image:alt and twitter:card = summary_large_image with absolute URLs, for every page. Use a per-page image when a relevant one exists (blog post cover, project screenshot).
- Add descriptive, honest alt text to every <img>/<Image> (for example "Santosh Poudel, full-stack developer from Nepal", "DexBotX Discord moderation bot dashboard"). Do not use generic alt text or leave it empty unless the image is purely decorative.
- Use descriptive file names where possible (rename only if you also update every reference), modern formats (WebP/AVIF) with proper width/height, lazy loading below the fold, and priority/preload for the main hero image.
- Add an image sitemap or include <image:image> entries in sitemap.xml.

STEP 6: TECHNICAL SEO
- Canonical tag on every page, with a single preferred host https://santosh2.com.np. Add 301 redirects from www and http to it.
- Complete Open Graph tags: og:title, og:description, og:type ("profile" for the homepage/about with first_name Santosh and last_name Poudel, "article" for blog posts), og:url, og:site_name "Santosh Poudel", og:locale "en_US".
- Correct <html lang="en">. Add meta robots "index, follow, max-image-preview:large".
- Generate a complete sitemap.xml with every public page (home, about, projects, each blog post, contact, verifiai, etc.) with accurate lastmod. Add robots.txt that allows everything public and points to the sitemap. Add a 404 page that returns a real 404 status and links back home.
- Exactly one <h1> per page, containing my name and role in natural language on the homepage. Keep logical h2/h3 hierarchy.
- Core Web Vitals: remove render-blocking resources, optimize fonts (preload, font-display: swap), compress and size images, defer non-critical JS, avoid layout shift. Give a before/after Lighthouse estimate.
- Make sure all pages are server-rendered or prerendered and crawlable, with real <a href> links (not JS-only navigation).
- Add security and performance headers if the host supports it (Vercel headers config), and enable HTTPS-only and HSTS.

STEP 7: CONTENT FOR "WHO IS SANTOSH POUDEL" QUERIES (add only, never remove)
- Add a visible, well-written "About Santosh Poudel" section on the homepage and on /about that clearly answers, in plain sentences: who Santosh Poudel is, where he is from (Nepal), what he does (full-stack web development, SaaS, AI tools, Discord bots), what he is building (DexBotX, VerifiAI, etc.), what he is learning (blockchain: Ethereum, Sui, Solana), where to find him (GitHub, YouTube, social links, contact), and where he works or what he is working on, using only facts found in the source or in the list above.
- Add a short visible FAQ block ("Who is Santosh Poudel?", "What does Santosh Poudel do?", "What is Santosh Poudel's GitHub?", "How can I contact Santosh Poudel?"). Answers must be factual and use my real links.
- Add visible links to all social profiles, and make sure the footer and header link to every main page.
- Add dedicated pages ONLY if they would be genuinely useful and non-duplicate, for example /projects/dexbotx, /about, /blog. Do not create thin or duplicate pages.
- Suggest 8 blog post titles (do not write fake news or fake claims) that would rank for my target queries, for example "How I built DexBotX, a Discord moderation bot", "Building a SaaS as a developer in Nepal", "Getting started with Solana, Sui and Ethereum as a Nepali developer". Write the first two in full if the blog system already exists, matching my existing style.
- Internal linking: link related pages to each other with descriptive anchor text.

STEP 8: OFF-SITE CHECKLIST (things I must do myself, because they strongly affect ranking for a person's name)
Give me a prioritized checklist, for example:
- Use exactly "Santosh Poudel" and the same bio, photo and website link on GitHub (profile README and website field), YouTube (channel About links), LinkedIn, X, Dev.to/Hashnode/Medium, Discord developer profile, top.gg or other bot lists, Product Hunt, Vercel/DexBotX site footer, etc.
- Link from DexBotX (dexbotx.vercel.app) and from every project I build back to https://santosh2.com.np with the anchor text "Santosh Poudel".
- Google Search Console: after deploy, run URL Inspection on the homepage and click "Request indexing"; resubmit sitemap.xml; request indexing for key pages. Check the favicon again after a few days (favicon updates can take from several days to a few weeks). Bing Webmaster Tools: resubmit the sitemap and use IndexNow if supported.
- Ask for legitimate mentions/backlinks (community posts, hackathons, open-source READMEs, Nepali developer communities).

OUTPUT FORMAT:
1. First the audit findings from Step 1 (short, specific, with file names and line references).
2. Then every file you create or modify as full code blocks, each with the file path, and a before/after note for any existing text you changed.
3. A final verification checklist (view-source checks, Rich Results Test, Lighthouse, favicon URL test, sitemap/robots test, Search Console steps).
4. A short list of anything you could not do or had to assume, so I can confirm it.
Work through the steps in order and do not skip any.

## Implementation status (2026-11-16)

- [x] Step 1: repository and live-site audit completed.
- [x] Step 2: valid 48x48 favicon and 192x192, 512x512, and 180x180 icons are wired through the Next.js metadata and manifest.
- [x] Step 3: homepage brand title, 160-character description, and WebSite name are updated.
- [x] Step 4: Person, ProfilePage, WebSite, project application, BlogPosting, and breadcrumb structured data are present.
- [x] Step 5: a 1200x630 social preview image was created from the existing portrait; page-specific preview routes, descriptive image alt text, and image sitemap entries are configured.
- [x] Step 6: canonical metadata, sitemap, robots, redirects, prerendering, 404 handling, and security headers are configured.
- [x] Step 7: visible biography and FAQ content, internal links, and two full relevant blog articles are available.
- [x] Step 8: prioritized off-site actions are listed below; the external account and Search Console actions remain for the site owner.
- [ ] Cloudflare: verify that verified Googlebot and Googlebot-Image can fetch `/favicon.ico` and other public icon URLs without a challenge. A curl request spoofing `Googlebot-Image` received HTTP 403; confirm the real crawler's status in Cloudflare Security Events.
- [ ] Deploy these local changes. The live homepage checked on 2026-11-16 still serves its previous title, description, and `og:site_name`; local changes do not affect production until deployed.

### Suggested blog titles

1. How I built DexBotX, a Discord moderation and automation bot (covered by the existing full article, “Building DexBotX: a Discord bot for server automation”).
2. Building a SaaS as a developer in Nepal (full article added).
3. What I am learning about Ethereum, Sui, and Solana as a developer in Nepal.
4. How I approach full-stack development for SaaS products.
5. Building an AI content tool: lessons from VerifiAI.
6. Designing useful automation for Discord communities.
7. Starting a web development project with Next.js and React.
8. Building a developer portfolio with clear, useful project write-ups.

### Off-site checklist (owner actions)

- [ ] Use the same “Santosh Poudel” name, accurate biography, photo, and `https://santosh2.com.np` website link on profiles you own. Existing profile URLs in the site are GitHub (`https://github.com/iamsantoshpoudel`), YouTube (`https://www.youtube.com/@dexgamex1`), and Facebook (`https://www.facebook.com/sant0shpoudel`). Add other networks only after verifying the exact profile URLs.
- [ ] Add a visible link from DexBotX (`https://dexbotx.vercel.app`) and other projects back to `https://santosh2.com.np`, with “Santosh Poudel” as the anchor text.
- [ ] After deploying these changes, use Google Search Console URL Inspection to request indexing for the homepage and key pages, resubmit `/sitemap.xml`, and check the favicon again after Google has recrawled it.
- [ ] Resubmit `/sitemap.xml` in Bing Webmaster Tools and use IndexNow if available.
- [ ] Seek accurate, legitimate mentions in open-source project pages, community posts, hackathons, and Nepali developer communities. Do not buy links or make unsupported claims.