import type { MetadataRoute } from "next";
import { SITE } from "@/lib/data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        other: { "Content-Signal": "ai-train=yes, search=yes, ai-input=yes" },
      },
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-SearchBot",
          "PerplexityBot",
          "Google-Extended",
          "Applebot-Extended",
          "CCBot",
          "Googlebot-Image",
        ],
        allow: "/",
        other: { "Content-Signal": "ai-train=yes, search=yes, ai-input=yes" },
      },
    ],
    sitemap: `${SITE}/sitemap.xml`,
  };
}
