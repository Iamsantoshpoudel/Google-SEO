import type { Metadata } from "next";
import Image from "next/image";
import PageShell from "@/components/PageShell";
import SessionRecommendations from "@/components/SessionRecommendations";
import { posts, SITE } from "@/lib/data";
import { fitMetaDescription, serializeJsonLd } from "@/lib/seo";

const pageTitle = "Articles on AI, Web Development and VerifiAI";
const title = `${pageTitle} | Santosh Poudel`;
const description = fitMetaDescription("Read articles by Santosh Poudel, AI and web developer in Nepal, about artificial intelligence, VerifiAI, blockchain, content authenticity and web development.");

export const metadata: Metadata = {
  title: pageTitle,
  description,
  alternates: {
    canonical: "/blog",
    types: { "application/rss+xml": `${SITE}/rss.xml` },
  },
  openGraph: {
    type: "website",
    siteName: "Santosh Poudel Portfolio",
    url: `${SITE}/blog`,
    title,
    description,
    images: [{ url: "/opengraph-image", alt: "Santosh Poudel, author of the blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
};

export default function Blog() {
  const blogLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Santosh Poudel's Blog",
    url: `${SITE}/blog`,
    author: { "@id": `${SITE}/#person` },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${SITE}/blog/${post.slug}`,
      image: `${SITE}${post.image}`,
      datePublished: post.date,
    })),
  };
  return (
    <PageShell title="Blog" crumbs={[{ name: "Blog", path: "/blog" }]}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(blogLd) }} />
      <SessionRecommendations posts={posts} />
      <ul className="grid gap-6">
        {posts.map((p, index) => (
          <li key={p.slug} className="grid gap-5 border-b border-line pb-6 sm:grid-cols-[180px_1fr]">
            <a href={`/blog/${p.slug}`} className="block aspect-[4/3] overflow-hidden" aria-label={`Read ${p.title}`}>
              <Image src={p.image} alt={p.imageAlt} width={600} height={450} sizes="(max-width: 640px) 100vw, 180px" priority={index === 0} className="size-full object-cover transition-transform duration-500 hover:scale-105" />
            </a>
            <div>
              <time dateTime={p.date} className="text-[.9rem]">{p.label} {p.date.slice(0, 4)}</time>
              <h2 className="!mt-1 text-[clamp(1.4rem,3vw,2.1rem)]"><a href={`/blog/${p.slug}`} className="no-underline hover:text-hot">{p.title}</a></h2>
              <p className="mt-2">{p.body[0]}</p>
            </div>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
