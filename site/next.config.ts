import type { NextConfig } from "next";

const repoName = "my-website"; // GitHub repository name (used for project pages path)

const nextConfig: NextConfig = {
  // Output a static export suitable for GitHub Pages
  output: "export",
  // Ensure asset URLs work when served from /my-website/
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  // Static export requires unoptimized images
  images: {
    unoptimized: true,
  },
  // Helpful for GitHub Pages (serves directories as index.html)
  trailingSlash: true,
};

export default nextConfig;
