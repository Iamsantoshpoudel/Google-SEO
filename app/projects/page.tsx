import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { featuredProjects, LINK, posts, SITE, SEO_CONTENT_LAST_MODIFIED } from "@/lib/data";
import { serializeJsonLd } from "@/lib/seo";

const pageTitle = "AI Projects";
const title = `${pageTitle} | Santosh Poudel`;
const description = "Explore Santosh Poudel's featured projects, including VerifiAI and DexBotX, built for AI workflows and web products.";

export const metadata: Metadata = {
  title: pageTitle,
  description,
  alternates: { canonical: "/projects" },
  openGraph: {
    type: "website",
    siteName: "Santosh Poudel",
    locale: "en_US",
    url: `${SITE}/projects`,
    title,
    description,
    images: [{ url: "/img/santosh-poudel-og.jpg", width: 1200, height: 630, alt: "Santosh Poudel, full-stack and AI developer from Nepal" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/img/santosh-poudel-og.jpg"],
  },
};

export default function ProjectsPage() {
  const featuredPosts = [...posts]
    .sort((first, second) => second.date.localeCompare(first.date))
    .slice(0, 3);

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE}/projects#featured-projects`,
    name: "Featured projects by Santosh Poudel",
    itemListElement: featuredProjects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        "@id": `${SITE}/#project-${project.slug}`,
        name: project.title,
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Web",
        description: project.description,
        url: `${SITE}/projects/${project.slug}`,
        image: `${SITE}${project.image}`,
        author: { "@id": `${SITE}/#person` },
        creator: { "@id": `${SITE}/#person` },
      },
    })),
  };
  const projectsPageLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE}/projects#page`,
    url: `${SITE}/projects`,
    name: title,
    dateModified: SEO_CONTENT_LAST_MODIFIED,
    mainEntity: { "@id": `${SITE}/projects#featured-projects` },
  };

  return (
    <PageShell wide title="Projects by Santosh Poudel" crumbs={[{ name: "Projects", path: "/projects" }]}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd([projectsPageLd, itemListLd]) }} />
      <p className="max-w-[60ch] text-mute">
        These are the projects I am actively building or documenting as part of my work in AI tools, automation, and practical web products.
      </p>
      <div className="grid gap-6 lg:grid-cols-2">
        {featuredProjects.map((project) => (
          <article key={project.slug} className="rounded-2xl border border-line bg-white/2 p-5 sm:p-6">
            <div className="mb-4 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-hot">{project.kicker}</span>
              <Link href={`/projects/${project.slug}`} className="inline-flex min-h-11 items-center whitespace-nowrap text-hot underline underline-offset-4">View project</Link>
            </div>
            <h2 className="mb-3 text-[clamp(1.8rem,3vw,2.6rem)] leading-tight">{project.title}</h2>
            <p className="max-w-[60ch] text-mute">{project.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <li key={tech} className="rounded-full border border-line px-2.5 py-1 text-[0.75rem] text-mute">{tech}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <section id="writing">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2>From my blog</h2>
          <Link href="/blog" className={LINK}>All articles</Link>
        </div>
        <p className="max-w-[68ch]">I write as Santosh Poudel about building software, AI, content authenticity and the lessons behind my projects. These recent articles are a starting point.</p>
        <ul className="mt-2 grid gap-6">
          {featuredPosts.map((post) => {
            const isDexBotx = post.slug === "building-dexbotx-discord-bot";
            const isPortraitImage = post.image.startsWith("/img/santosh-");

            return (
              <li key={post.slug} className="grid gap-5 border-b border-line pb-6 sm:grid-cols-[180px_1fr]">
                <Link href={`/blog/${post.slug}`} className={`block ${isDexBotx ? "aspect-[1885/1078]" : "aspect-[4/3]"} overflow-hidden rounded-lg`} aria-label={`Read ${post.title}`}>
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    title={post.title}
                    width={isDexBotx ? 1885 : 600}
                    height={isDexBotx ? 1078 : 450}
                    sizes="(max-width: 640px) 100vw, 180px"
                    className={`size-full transition-transform duration-500 hover:scale-105 ${isDexBotx ? "bg-[#1c1c1c] object-contain" : "object-cover"} ${isPortraitImage ? "object-top" : ""}`}
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
            );
          })}
        </ul>
      </section>
    </PageShell>
  );
}
