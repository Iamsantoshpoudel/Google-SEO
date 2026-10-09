import type { MetadataRoute } from "next";
import { posts, SITE } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const latestPostDate = posts.reduce(
    (latest, post) => post.date > latest ? post.date : latest,
    posts[0]?.date ?? new Date().toISOString().slice(0, 10),
  );
  const verifiaiDate = posts.find((post) => post.slug === "what-is-verifiai")?.date ?? latestPostDate;

  return [
    { url: `${SITE}/`, lastModified: new Date(latestPostDate), changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/verifiai`, lastModified: new Date(verifiaiDate), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/blog`, lastModified: new Date(latestPostDate), changeFrequency: "weekly", priority: 0.8 },
    ...posts.map((post) => ({
      url: `${SITE}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
