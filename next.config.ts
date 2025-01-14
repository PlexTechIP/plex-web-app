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
  assetPrefix: "./",
  basePath: "/home",
  reactStrictMode: true,
};

export default nextConfig;
