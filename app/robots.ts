import type { MetadataRoute } from "next";
import { SITE } from "@/lib/data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      other: { "Content-Signal": "ai-train=yes, search=yes, ai-input=yes" },
    },
    sitemap: `${SITE}/sitemap.xml`,
  };
}
