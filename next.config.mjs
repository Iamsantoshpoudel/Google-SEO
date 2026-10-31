/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.santosh2.com.np" }],
        destination: "https://santosh2.com.np/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "header", key: "x-forwarded-proto", value: "http" }],
        destination: "https://santosh2.com.np/:path*",
        permanent: true,
      },
      { source: "/img/santosh-poudel.jpg", destination: "/img/santosh-poudel-web-developer-nepal.jpg", statusCode: 301 },
      { source: "/img/Santosh-poudelai.JPG", destination: "/img/santosh-poudel-ai-developer-verifiai-founder.jpg", statusCode: 301 },
      { source: "/img/Santoshpoudel.jpg", destination: "/img/santosh-poudel-portrait.jpg", statusCode: 301 },
      { source: "/img/Santosh.JPG", destination: "/img/santosh-poudel-natural-light.jpg", statusCode: 301 },
      { source: "/img/santoshp.JPG", destination: "/img/santosh-poudel-close-up.jpg", statusCode: 301 },
      { source: "/blog/who-is-santosh-poudel", destination: "/about", statusCode: 301 },
      { source: "/blog/what-does-santosh-poudel-do", destination: "/about", statusCode: 301 },
      { source: "/blog/santosh-poudel-and-verifiai", destination: "/about", statusCode: 301 },
      { source: "/blog/web-development-work-of-santosh-poudel", destination: "/about", statusCode: 301 },
      { source: "/blog/why-work-with-santosh-poudel-web-development", destination: "/about", statusCode: 301 },
      { source: "/verifiai", destination: "/projects/verifai", permanent: true },
      { source: "/verifyai", destination: "/projects/verifai", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
        ],
      },
    ];
  },
};
export default nextConfig;
