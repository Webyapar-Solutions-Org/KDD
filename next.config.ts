import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/contact-us",
        destination: "/about-us",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
