/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.santosh2.com.np" }],
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
    ];
  },
};
export default nextConfig;
