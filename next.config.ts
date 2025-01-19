import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "plextech.studentorg.berkeley.edu",
      },
      {
        protocol: "https",
        hostname: "www.ocf.berkeley.edu",
      },
    ],
  },
  trailingSlash: true,
};

export default nextConfig;
