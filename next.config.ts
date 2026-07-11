import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/FREAKSTYLE",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/FREAKSTYLE",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
