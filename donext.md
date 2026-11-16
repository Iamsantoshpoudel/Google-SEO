You are a senior technical SEO, AEO and GEO auditor and full-stack engineer. Act as a strict, skeptical reviewer, not as the person who did the original work.

CONTEXT
- Site: https://santosh2.com.np (personal portfolio of Santosh Poudel, full-stack and AI developer from Nepal, builder of SaaS products, Discord bots such as DexBotX at https://dexbotx.vercel.app, and learning Ethereum, Sui and Solana).
- Attached: do.md (the instructions that were used to implement SEO changes), the UPDATED source code zip, and, if provided, the ORIGINAL source code zip from before the changes.
- Goal of the whole project: rank #1 on Google for "santosh poudel" and related queries (santosh poudel nepal developer, santosh ai developer from nepal, who is santosh poudel, what does santosh poudel do, santosh poudel github, santosh poudel portfolio, nepal full stack developer, etc.), AND be correctly named and cited by AI answer engines (Google AI Overviews, Gemini, ChatGPT, Perplexity, Claude, Copilot) when someone asks about Santosh Poudel.

YOUR JOB: verify, step by step, that everything in do.md was actually implemented correctly in the updated code, then audit SEO, AEO and GEO beyond it. Report first. Do NOT change any file until I say "apply fixes".

HONESTY RULES
- Only report what you can verify in the code or by actually fetching the live site. If you cannot browse or fetch the live site, say so plainly and mark those items "NOT VERIFIABLE", never guess or invent results.
- Never claim a ranking, indexing status, or AI-citation result you did not observe. Rankings can't be verified from code; say so.
- Quote exact file paths and line numbers for every finding.

PART 1: COMPLIANCE CHECK AGAINST do.md
Go through every step and every bullet in do.md. For each one output: PASS / PARTIAL / FAIL / NOT VERIFIABLE, with evidence (file + line) and, for anything not PASS, the exact fix. Then, if the original zip is attached, diff original vs updated and confirm that NO existing content, data, text, routes, links or design was deleted or broken. List every changed existing line with before/after.

PART 2: TECHNICAL SEO AUDIT (check every page and route)
1. Favicon: /favicon.ico exists at the root and returns 200 (not a redirect chain), valid ICO containing 48x48; PNG icons (192, 512); apple-touch-icon 180x180; manifest valid; <link rel="icon"> present in the HOMEPAGE head with correct paths; not blocked by robots.txt; same host as the canonical host; stable URL.
2. Site name: WebSite JSON-LD on the homepage with name "Santosh Poudel" and alternateName; og:site_name matches; homepage <title> starts with the brand name and is under about 60 characters.
3. Per page: unique <title> and meta description (lengths OK), exactly one canonical (absolute URL on https://santosh2.com.np, no trailing-slash or www inconsistencies), meta robots correct (no accidental noindex, no nofollow), <html lang>, exactly one <h1>, logical heading order, no duplicate or empty headings.
4. Open Graph and Twitter: og:title, og:description, og:type, og:url, og:image (absolute URL, returns 200, 1200x630, under about 5 MB), og:image:alt, twitter:card = summary_large_image. Confirm each image file really exists in /public and is referenced with the right path.
5. Images: every <img>/<Image> has meaningful alt text, width/height set, lazy loading except the hero, modern formats where possible; image sitemap entries valid.
6. sitemap.xml: lists every public indexable page, uses absolute https URLs on the canonical host, valid lastmod, no noindex/redirected/404 URLs in it. robots.txt: allows public pages, doesn't block CSS/JS/images/favicons, references the sitemap, no stray "Disallow: /".
7. Redirects: http to https, www to non-www (or the chosen canonical host) with 301, no redirect chains or loops. Real 404 status on a missing page.
8. Rendering: view the raw HTML (before JavaScript runs) of the homepage and key pages. Confirm the main content, h1, title, meta tags and JSON-LD are present in the initial HTML. If content only appears after client-side JavaScript, flag it as CRITICAL.
9. Internal linking: all main pages reachable via real <a href> links from the homepage and footer; no orphan pages; descriptive anchor text; no broken internal or external links.
10. Performance and Core Web Vitals risks: render-blocking resources, large images, unoptimized fonts, layout shift, heavy JS. Give an estimated Lighthouse score (mark it as an estimate) and the top 5 fixes.
11. Structured data: extract EVERY JSON-LD block and validate syntax and required/recommended properties for Person, ProfilePage, WebSite, SoftwareApplication/WebApplication (DexBotX and other projects), BreadcrumbList, BlogPosting. Check: no fabricated facts, URLs absolute, image URLs real, sameAs only contains real profile URLs (GitHub, YouTube, LinkedIn, X, etc.), @id values consistent so entities link together (the same Person @id referenced from WebSite, ProfilePage, BlogPosting author and SoftwareApplication author), no markup describing content that isn't visible on the page.
12. Keyword quality: confirm there is NO keyword stuffing, hidden text, or repeated boilerplate. Natural use of "Santosh Poudel", "developer from Nepal", "full-stack", "AI", "SaaS", "Discord bot", "blockchain" on the homepage and About page. Flag anything that looks spammy.
13. Security and headers: HTTPS-only, HSTS, no mixed content, no accidental noindex header (X-Robots-Tag) on Vercel config.

PART 3: AEO AUDIT (Answer Engine Optimization: featured snippets, People Also Ask, voice assistants, direct answers)
Check and score each:
1. Is there a short, direct, quotable answer (about 40-60 words) near the top of the homepage/About page to "Who is Santosh Poudel?" starting with the name as the subject, for example "Santosh Poudel is a full-stack and AI developer from Nepal who builds SaaS products and Discord bots such as DexBotX..." (only with true facts)?
2. Are the questions people actually ask answered under clear question-style headings, each followed immediately by a concise answer: who is Santosh Poudel, what does he do, where is he from, where does he work, what is Santosh Poudel's GitHub, how to contact him, what is DexBotX, what is VerifiAI, what is he learning (Ethereum, Sui, Solana)?
3. Are answers factual, self-contained, and consistent with the JSON-LD and the rest of the site? Any contradictions between pages (name spelling, role, links) are FAIL.
4. Are lists, steps and definitions marked up with proper semantic HTML (ul/ol, dl, tables) so they can be lifted into snippets?
5. Is FAQ content visible on the page? Note: Google shows FAQ rich results only for a few types of sites, so FAQPage markup is optional. Only keep it if it matches visible content exactly, and tell me honestly the expected benefit.
6. Do project and blog pages open with a clear one- or two-sentence summary answering what the page is about?
7. Conversational and long-tail coverage: list the exact queries from my target list that have NO page or section answering them, and propose where to add the answer.

PART 4: GEO AUDIT (Generative Engine Optimization: being understood, trusted and cited by AI assistants and AI search)
1. Crawl access: check robots.txt and any Vercel/middleware rules. Report whether these crawlers are allowed or blocked: Googlebot, Bingbot, OAI-SearchBot, GPTBot, ChatGPT-User, PerplexityBot, ClaudeBot, Claude-SearchBot, Google-Extended, Applebot-Extended, CCBot. Explain what each controls (search/citation access vs model training; for example blocking Google-Extended does not affect Google Search ranking). Recommend allowing the AI SEARCH/citation crawlers, and tell me the trade-off for training crawlers so I can choose.
2. Server-side content: most AI crawlers do not execute JavaScript. Confirm all important facts about me (name, role, location, projects, links) exist in the initial HTML. Flag any that don't.
3. Entity clarity and consistency: the same name "Santosh Poudel", same short bio, same role and same links must appear in the visible text, the Person JSON-LD, meta tags, and sameAs profiles. List all inconsistencies. Check that the Person entity has a strong, unambiguous description (to distinguish me from other people named Poudel).
4. Citable, extractable facts: are there plain-text statements an AI could quote (a short bio, project descriptions with what/for whom/how, tech stack, dates)? Add "last updated" dates where relevant and clear authorship on blog posts.
5. Provide an /llms.txt (and optionally /llms-full.txt) file in the site root summarizing who I am, my main pages, projects and links in clean Markdown. Be honest in your report: major search engines have not confirmed they use llms.txt, so it is low-cost and optional, not a ranking factor.
6. Third-party corroboration (AI systems trust information confirmed by independent sources). Using only the code and what you can fetch, check whether my GitHub profile, YouTube channel, DexBotX site and other profiles link back to santosh2.com.np and use the same name and bio. List what is missing. Do NOT suggest creating fake Wikipedia/Wikidata entries or fake reviews. Only suggest legitimate profiles, listings (for example bot directories), community posts and open-source README mentions.
7. Content depth: do the project pages (DexBotX, VerifiAI, SaaS projects) have enough real, specific detail (problem, features, tech stack, screenshots with alt text, links) for an AI to describe them accurately?
8. Give me a manual test plan: the exact questions to ask Google (AI Overviews / AI Mode), Gemini, ChatGPT, Perplexity, Claude and Copilot, for example "Who is Santosh Poudel?", "Santosh Poudel developer Nepal", "What is DexBotX?", "What is Santosh Poudel's GitHub?", plus what a correct answer should contain, so I can record before/after results.

PART 5: OUTPUT FORMAT
1. Executive summary: an overall score out of 100 each for SEO, AEO and GEO with a one-line reason, plus the top 10 highest-impact problems ranked by severity (CRITICAL / HIGH / MEDIUM / LOW).
2. Full checklist table: item | status | evidence (file:line) | fix.
3. "Cannot verify" list: everything that needs Search Console, a live fetch, or real search results, with the exact step I should do myself.
4. Search Console and Bing action list for after deployment: URL Inspection of the homepage and Request Indexing, sitemap resubmission, Rich Results Test and Schema Validator URLs to test, favicon recheck timing (can take days to weeks), what to monitor in the Performance report (queries "santosh poudel", clicks, impressions, average position), and what to check in Page Indexing.
5. Stop after the report and wait. When I reply "apply fixes", output corrected code as full files with paths, changing existing content only where needed and showing before/after for each existing line, never deleting my existing data.