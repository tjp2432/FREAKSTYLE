import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/FREAKSTYLE",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
