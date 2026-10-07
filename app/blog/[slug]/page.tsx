import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import InfiniteBlogReader from "@/components/InfiniteBlogReader";
import { SITE, posts } from "@/lib/data";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => posts.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  const description = post.body[0].length > 160
    ? `${post.body[0].slice(0, 157).trimEnd()}...`
    : post.body[0];
  return {
    title: `${post.title} | Santosh Poudel`,
    description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: "article", title: post.title, description, publishedTime: post.date, authors: ["Santosh Poudel"], url: `/blog/${post.slug}`, images: [{ url: post.image, alt: post.imageAlt }] },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Santosh Poudel`,
      description,
      images: [{ url: post.image, alt: post.imageAlt }],
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
    description: post.body[0].length > 160 ? `${post.body[0].slice(0, 157).trimEnd()}...` : post.body[0],
    datePublished: post.date, dateModified: post.date,
    author: {
      "@type": "Person",
      "@id": `${SITE}/#person`,
      name: "Santosh Poudel",
      url: SITE,
    },
    publisher: {
      "@type": "Person",
      "@id": `${SITE}/#person`,
      name: "Santosh Poudel",
      url: SITE,
    },
    mainEntityOfPage: `${SITE}/blog/${post.slug}`,
    image: [`${SITE}${post.image}`],
    inLanguage: "en",
  };

  return (
    <PageShell title={post.title} crumbs={[{ name: "Blog", path: "/blog" }, { name: post.title, path: `/blog/${post.slug}` }]}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <InfiniteBlogReader posts={posts} initialSlug={post.slug} />
    </PageShell>
  );
}
