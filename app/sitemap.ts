import { statSync } from "node:fs";
import { join } from "node:path";
import type { MetadataRoute } from "next";
import { featuredProjects, gallery, posts, SITE } from "@/lib/data";

const sourceDates = {
  home: statSync(join(process.cwd(), "app", "page.tsx")).mtime,
  about: statSync(join(process.cwd(), "app", "about", "page.tsx")).mtime,
  profile: statSync(join(process.cwd(), "app", "me", "page.tsx")).mtime,
  projects: statSync(join(process.cwd(), "app", "projects", "page.tsx")).mtime,
  blog: statSync(join(process.cwd(), "app", "blog", "page.tsx")).mtime,
};

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE,
      lastModified: sourceDates.home,
      images: [
        `${SITE}/img/santosh-poudel-web-developer-nepal.jpg`,
        `${SITE}/img/santosh-poudel-og.jpg`,
        ...gallery.map((image) => `${SITE}${image.src}`),
      ],
    },
    { url: `${SITE}/about`, lastModified: sourceDates.about, images: [`${SITE}/img/santosh-poudel-web-developer-nepal.jpg`] },
    { url: `${SITE}/me`, lastModified: sourceDates.profile, images: [`${SITE}/img/santosh-poudel-web-developer-nepal.jpg`] },
    { url: `${SITE}/projects`, lastModified: sourceDates.projects },
    ...featuredProjects.map((project) => ({
      url: `${SITE}/projects/${project.slug}`,
      images: [`${SITE}${project.image}`],
    })),
    { url: `${SITE}/blog`, lastModified: sourceDates.blog },
    ...posts.map((post) => ({
      url: `${SITE}/blog/${post.slug}`,
      ...(post.modified ? { lastModified: post.modified } : {}),
      images: [`${SITE}${post.image}`],
    })),
  ];
}
