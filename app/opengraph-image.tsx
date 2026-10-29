import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          padding: 64,
          background: "linear-gradient(135deg, #0b0f19 0%, #101a2a 50%, #2a1b46 100%)",
          color: "#f6f7fb",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: "100%", maxWidth: 900 }}>
          <div style={{ fontSize: 30, letterSpacing: 4, textTransform: "uppercase", color: "#8ab4ff" }}>Santosh Poudel</div>
          <div style={{ fontSize: 86, fontWeight: 800, marginTop: 18, lineHeight: 1.05 }}>AI Developer & Full Stack Developer from Nepal</div>
          <div style={{ fontSize: 32, color: "#dfe8ff", marginTop: 28 }}>Practical AI tools, developer projects, and digital products.</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
