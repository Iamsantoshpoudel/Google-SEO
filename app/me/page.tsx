import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { CONTACT_EMAIL, featuredProjects, LINK, LINKS, personLd, posts, profileGallery, SITE } from "@/lib/data";
import { serializeJsonLd } from "@/lib/seo";

const pageTitle = "AI Developer and Web Developer in Nepal";
const title = `${pageTitle} | Santosh Poudel`;
const description = "Santosh Poudel is a computer engineer, AI developer and web developer from Nepal. Explore his background, AI projects, Discord automation and articles.";

export const metadata: Metadata = {
  title: pageTitle,
  description,
  alternates: { canonical: "/me" },
  openGraph: {
    type: "profile",
    siteName: "Santosh Poudel Portfolio",
    url: `${SITE}/me`,
    title,
    description,
    images: [{ url: "/opengraph-image", alt: "Santosh Poudel, computer engineer and developer from Nepal" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
};

export default function MePage() {
  const featuredPosts = [...posts]
    .sort((first, second) => second.date.localeCompare(first.date))
    .slice(0, 3);

  const profileLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE}/me#profile`,
    url: `${SITE}/me`,
    name: "Santosh Poudel's personal profile",
    mainEntity: { "@id": `${SITE}/#person` },
  };
  const projectsLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Projects by Santosh Poudel",
    itemListElement: featuredProjects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: project.title,
        description: project.description,
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Web",
        url: `${SITE}/projects/${project.slug}`,
        image: `${SITE}${project.image}`,
      },
    })),
  };
  const personArticlesLd = {
    ...personLd,
    subjectOf: featuredPosts.map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        url: `${SITE}/blog/${post.slug}`,
        datePublished: post.date,
        image: `${SITE}${post.image}`,
      })),
  };

  return (
    <PageShell title="Santosh Poudel" crumbs={[{ name: "Me", path: "/me" }]}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd([personArticlesLd, profileLd, projectsLd]) }} />

      <section className="grid items-center gap-8 sm:grid-cols-[minmax(190px,300px)_1fr]">
        <Image
          src="/img/santosh-poudel-web-developer-nepal.jpg"
          alt="Santosh Poudel, computer engineer, AI developer and web developer from Nepal"
          width={600}
          height={800}
          sizes="(max-width: 640px) 100vw, 300px"
          className="aspect-[3/4] w-full object-cover"
          priority
        />
        <div>
          <p className="mb-3 text-sm font-semibold uppercase text-hot">Computer Engineer · AI Developer · Web Developer</p>
          <p className="text-[1.15rem] leading-relaxed text-ink">I am Santosh Poudel, a computer engineer, AI developer and web developer from Nepal. I build websites, web applications and practical software products, with interests in artificial intelligence, digital content authenticity and online community tools.</p>
          <p className="mt-4">I founded VerifiAI, a project exploring tools for assessing digital content, and I build DexBotX, a Discord bot for moderation, automation and community updates. I document my projects and learning here through detailed project pages and articles.</p>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
            <a className={LINK} href={`mailto:${CONTACT_EMAIL}`}>Contact me</a>
            <a className={LINK} href={LINKS.github} target="_blank" rel="me noopener noreferrer">GitHub</a>
            <a className={LINK} href={LINKS.youtube} target="_blank" rel="me noopener noreferrer">YouTube</a>
          </div>
        </div>
      </section>

      <section>
        <h2>What I do</h2>
        <div className="grid gap-x-8 gap-y-6 sm:grid-cols-3">
          <div>
            <h3 className="text-lg text-ink">Web development</h3>
            <p className="mt-2">I create responsive websites and web applications, from clear page structure to interactive product experiences.</p>
          </div>
          <div>
            <h3 className="text-lg text-ink">AI and content tools</h3>
            <p className="mt-2">I explore practical AI workflows and tools that help people review digital content with appropriate context and care.</p>
          </div>
          <div>
            <h3 className="text-lg text-ink">Automation</h3>
            <p className="mt-2">I build software that brings recurring tasks together, including moderation, member onboarding and notifications for online communities.</p>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2>Selected projects</h2>
          <Link href="/projects" className={LINK}>All projects</Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <article key={project.slug} className="overflow-hidden border border-line">
              <Image
                src={project.image}
                alt={project.alt}
                width={900}
                height={560}
                sizes="(max-width: 768px) 100vw, 420px"
                className="aspect-[16/10] w-full object-cover"
              />
              <div className="p-5">
                <p className="text-xs font-semibold uppercase text-hot">{project.kicker}</p>
                <h3 className="mt-2 text-2xl leading-tight text-ink">{project.title}</h3>
                <p className="mt-3">{project.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${project.title} areas`}>
                  {project.tech.map((item) => (
                    <li key={item} className="border border-line px-2 py-1 text-xs">{item}</li>
                  ))}
                </ul>
                <Link href={`/projects/${project.slug}`} className={`${LINK} mt-5 inline-block`}>Project details</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2>Background</h2>
        <p className="max-w-[68ch]">I completed a diploma in computer engineering, which gave me a foundation in computing and software development. I continue to build on that foundation through hands-on projects, studying how products work and improving them through iteration. I am based in Nepal and share my work with an international online audience.</p>
        <p className="max-w-[68ch]">This portfolio is built with Next.js, React, TypeScript and Tailwind CSS. Its project pages describe my work on AI content tools and Discord automation, while the <Link href="/blog" className={LINK}>blog</Link> covers web development, artificial intelligence, digital content authenticity and related technology topics.</p>
      </section>

      <section>
        <h2>How I approach building software</h2>
        <p className="max-w-[68ch]">I start by identifying the task a product should help someone complete. From there, I work toward a clear interface and a focused feature set, then refine the implementation as I learn more about the problem. My projects are practical learning as well as product work: I document what they do, the ideas behind them and the limitations that matter.</p>
        <p className="max-w-[68ch]">For AI-related work, I care about presenting outputs with context rather than treating an automated result as certainty. For community software, I focus on bringing recurring tasks such as moderation, onboarding and notifications into manageable workflows. These interests shape the products and articles published on this site.</p>
      </section>

      <section>
        <h2>Find me online</h2>
        <ul className="flex flex-wrap gap-x-6 gap-y-3">
          <li><a className={LINK} href={LINKS.github} target="_blank" rel="me noopener noreferrer">GitHub</a></li>
          <li><a className={LINK} href={LINKS.youtube} target="_blank" rel="me noopener noreferrer">YouTube</a></li>
          <li><a className={LINK} href={LINKS.facebook} target="_blank" rel="me noopener noreferrer">Facebook</a></li>
          <li><a className={LINK} href={LINKS.verifiai} target="_blank" rel="me noopener noreferrer">VerifiAI</a></li>
          <li><a className={LINK} href={LINKS.dexbotx} target="_blank" rel="noopener noreferrer">DexBotX</a></li>
          <li><a className={LINK} href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
        </ul>
        <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4" aria-label="Photo gallery of Santosh Poudel">
          {profileGallery.map((image) => (
            <figure key={image.src} className="overflow-hidden border border-line">
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={750}
                sizes="(max-width: 639px) calc((100vw - 48px) / 2), (max-width: 900px) calc((100vw - 7vw - 24px) / 3), 260px"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <figcaption className="px-3 py-2 text-sm text-mute">{image.cap}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="writing">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2>From my blog</h2>
          <Link href="/blog" className={LINK}>All articles</Link>
        </div>
        <p className="max-w-[68ch]">I write as Santosh Poudel about building software, AI, content authenticity and the lessons behind my projects. These recent articles are a starting point.</p>
        <ul className="mt-2 grid gap-6">
          {featuredPosts.map((post) => (
            <li key={post.slug} className="grid gap-5 border-b border-line pb-6 sm:grid-cols-[180px_1fr]">
              <Link href={`/blog/${post.slug}`} className="block aspect-[4/3] overflow-hidden" aria-label={`Read ${post.title}`}>
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  width={600}
                  height={450}
                  sizes="(max-width: 640px) 100vw, 180px"
                  className="size-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </Link>
              <div>
                <time dateTime={post.date} className="text-[.9rem]">{post.label} {post.date.slice(0, 4)}</time>
                <h3 className="mt-1 text-[1.4rem] leading-tight text-ink">
                  <Link href={`/blog/${post.slug}`} className="no-underline hover:text-hot">{post.title}</Link>
                </h3>
                <p className="mt-2">{post.body[0]}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}