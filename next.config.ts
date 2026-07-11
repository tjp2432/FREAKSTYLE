import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/FREAKSTYLE",
  assetPrefix: "/FREAKSTYLE/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
