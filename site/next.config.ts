import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Output a static export suitable for GitHub Pages
  output: "export",
  // Project Pages path (repo name)
  basePath: "/my-website",
  assetPrefix: "/my-website/",
  // Static export requires unoptimized images
  images: {
    unoptimized: true,
  },
  // Helpful for GitHub Pages (serves directories as index.html)
  trailingSlash: true,
};

export default nextConfig;
