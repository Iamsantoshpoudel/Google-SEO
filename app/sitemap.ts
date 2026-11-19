import type { MetadataRoute } from "next";
import {
  BLOG_CONTENT_LAST_MODIFIED,
  featuredProjects,
  gallery,
  posts,
  PRIVACY_POLICY_LAST_MODIFIED,
  SITE,
  SEO_CONTENT_LAST_MODIFIED,
} from "@/lib/data";

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
    {
      url: `${SITE}/me`,
      lastModified: SEO_CONTENT_LAST_MODIFIED,
      images: [`${SITE}/img/santosh-poudel-web-developer-nepal.jpg`],
    },
    { url: `${SITE}/privacy-policy`, lastModified: PRIVACY_POLICY_LAST_MODIFIED.date },
    { url: `${SITE}/projects`, lastModified: SEO_CONTENT_LAST_MODIFIED },
    ...featuredProjects.map((project) => ({
      url: `${SITE}/projects/${project.slug}`,
      lastModified: project.modified,
      images: [`${SITE}${project.image}`],
    })),
    {
      url: `${SITE}/blog`,
      ...(BLOG_CONTENT_LAST_MODIFIED ? { lastModified: BLOG_CONTENT_LAST_MODIFIED } : {}),
    },
    ...posts.map((post) => ({
      url: `${SITE}/blog/${post.slug}`,
      ...(post.modified ? { lastModified: post.modified } : {}),
      images: [`${SITE}${post.image}`],
    })),
  ];
}
