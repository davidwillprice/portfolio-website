import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: { indentedSyntax: false },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
