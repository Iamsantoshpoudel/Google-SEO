import { ImageResponse } from "next/og";
import { posts } from "@/lib/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function BlogOpenGraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          flexDirection: "column",
          padding: 72,
          justifyContent: "center",
          background: "linear-gradient(135deg, #0b0f19 0%, #101a2a 55%, #2a1b46 100%)",
          color: "#f6f7fb",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 26, letterSpacing: 4, textTransform: "uppercase", color: "#8ab4ff" }}>Santosh Poudel</div>
        <div style={{ fontSize: 72, fontWeight: 800, marginTop: 24, lineHeight: 1.07, maxWidth: 980 }}>{post?.title ?? "Blog article"}</div>
        <div style={{ fontSize: 28, color: "#dfe8ff", marginTop: 24 }}>AI, web development, and practical product thinking from Nepal.</div>
      </div>
    ),
    size,
  );
}
