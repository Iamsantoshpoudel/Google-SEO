import type { MetadataRoute } from "next";
import { SITE } from "@/lib/data";

export default function robots(): MetadataRoute.Robots {
  const shared = { allow: "/", disallow: ["/dashboard", "/offline"] };
  return {
    rules: [
      { userAgent: "*", ...shared },
      { userAgent: ["Googlebot", "Google-Extended"], ...shared },
      { userAgent: ["GPTBot", "OAI-SearchBot", "ChatGPT-User"], ...shared },
      { userAgent: ["ClaudeBot", "Claude-SearchBot", "Claude-User"], ...shared },
      { userAgent: ["PerplexityBot", "Perplexity-User"], ...shared },
    ],
    sitemap: `${SITE}/sitemap.xml`,
  };
}
