import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: "build",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ca.slack-edge.com",
      },
      {
        protocol: "https",
        hostname: "www.ocf.berkeley.edu",
      },
    ],
  },
  output: "export"
};

export default nextConfig;
