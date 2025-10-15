import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagpedia.net', // Replace with your image host domain
        port: '',
      },
    ],
  },
};

export default nextConfig;
