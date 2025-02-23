import type { NextConfig } from "next";

const staticExport = process.env.STATIC_EXPORT;

const nextConfig: NextConfig = {
  /* config options here */
  output: staticExport ? "export" : undefined,
  images: {
    formats: ["image/avif", "image/webp"],
    // unoptimized: staticExport ? true : false,
  },
};

export default nextConfig;
