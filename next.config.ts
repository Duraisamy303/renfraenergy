import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.renfraenergy.com",
      },
    ],
  },
};

export default nextConfig;
