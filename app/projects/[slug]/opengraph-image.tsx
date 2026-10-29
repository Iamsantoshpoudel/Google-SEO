import { ImageResponse } from "next/og";
import { featuredProjects } from "@/lib/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function ProjectOpenGraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = featuredProjects.find((item) => item.slug === slug);

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
          background: "linear-gradient(135deg, #0b0f19 0%, #101a2a 45%, #1b2f52 100%)",
          color: "#f6f7fb",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 26, letterSpacing: 4, textTransform: "uppercase", color: "#9fe7ff" }}>Project</div>
        <div style={{ fontSize: 72, fontWeight: 800, marginTop: 24, lineHeight: 1.07, maxWidth: 980 }}>{project?.title ?? "Featured project"}</div>
        <div style={{ fontSize: 28, color: "#dfe8ff", marginTop: 24 }}>{project?.description ?? "Built by Santosh Poudel."}</div>
      </div>
    ),
    size,
  );
}
