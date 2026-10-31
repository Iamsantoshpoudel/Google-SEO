import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import InfiniteBlogReader from "@/components/InfiniteBlogReader";
import { SITE, posts } from "@/lib/data";
import { fitMetaDescription, serializeJsonLd } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => posts.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  const title = `${post.title} | Santosh Poudel`;
  const description = fitMetaDescription(post.body[0]);
  return {
    title: post.title,
    description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: "article", siteName: "Santosh Poudel Portfolio", title, description, publishedTime: post.date, authors: ["Santosh Poudel"], url: `/blog/${post.slug}`, images: [{ url: `/blog/${post.slug}/opengraph-image`, alt: post.imageAlt }] },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`/blog/${post.slug}/opengraph-image`],
    },
  };
}

export default async function Post({ params }: Params) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const ld = {
    "@context": "https://schema.org", "@type": "BlogPosting",
    headline: post.title,
    description: fitMetaDescription(post.body[0]),
    datePublished: post.date, dateModified: post.date,
    author: {
      "@id": `${SITE}/#person`,
    },
    publisher: {
      "@id": `${SITE}/#person`,
    },
    mainEntityOfPage: `${SITE}/blog/${post.slug}`,
    image: [`${SITE}${post.image}`],
    inLanguage: "en",
  };

  return (
    <PageShell title={post.title} crumbs={[{ name: "Blog", path: "/blog" }, { name: post.title, path: `/blog/${post.slug}` }]}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(ld) }} />
      <InfiniteBlogReader posts={posts} initialSlug={post.slug} />
    </PageShell>
  );
}
