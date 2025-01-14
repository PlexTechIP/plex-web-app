import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "www.ocf.berkeley.edu",
      },
    ],
    unoptimized: true,
  },
  output: "export",
  reactStrictMode: true,
};

export default nextConfig;
