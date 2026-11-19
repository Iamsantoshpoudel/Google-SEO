import type { MetadataRoute } from "next";
import { featuredProjects, gallery, posts, SITE, SEO_CONTENT_LAST_MODIFIED } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE,
      lastModified: SEO_CONTENT_LAST_MODIFIED,
      images: [
        `${SITE}/img/santosh-poudel-web-developer-nepal.jpg`,
        `${SITE}/img/santosh-poudel-og.jpg`,
        ...gallery.map((image) => `${SITE}${image.src}`),
      ],
    },
    { url: `${SITE}/me`, images: [`${SITE}/img/santosh-poudel-web-developer-nepal.jpg`] },
    { url: `${SITE}/privacy-policy` },
    { url: `${SITE}/projects` },
    ...featuredProjects.map((project) => ({
      url: `${SITE}/projects/${project.slug}`,
      images: [`${SITE}${project.image}`],
    })),
    { url: `${SITE}/blog` },
    ...posts.map((post) => ({
      url: `${SITE}/blog/${post.slug}`,
      ...(post.modified ? { lastModified: post.modified } : {}),
      images: [`${SITE}${post.image}`],
    })),
  ];
}
