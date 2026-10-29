import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Santosh Poudel | AI Developer & Full Stack Developer from Nepal",
    short_name: "Santosh Poudel",
    description: "AI developer and full stack developer from Nepal building practical software, products, and blog content.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0f19",
    theme_color: "#0b0f19",
    lang: "en",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    related_applications: [],
  };
}
