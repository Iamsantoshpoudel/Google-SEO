/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [{
      source: "/:path*",
      has: [{ type: "host", value: "www.santosh2.com.np" }],
      destination: "https://santosh2.com.np/:path*",
      permanent: true,
    }];
  },
};
export default nextConfig;
