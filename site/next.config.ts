import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Output a static export suitable for GitHub Pages
  output: "export",
  // Static export requires unoptimized images
  images: {
    unoptimized: true,
  },
  // Helpful for GitHub Pages (serves directories as index.html)
  trailingSlash: true,
};

export default nextConfig;
