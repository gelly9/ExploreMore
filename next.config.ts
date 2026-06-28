import type { NextConfig } from "next";

// Deployed to GitHub Pages on the custom domain https://exploremore.ro/,
// which serves from the root — so no basePath/assetPrefix is needed.
const nextConfig: NextConfig = {
  output: "export", // emit a fully static site into ./out
  images: { unoptimized: true }, // no image optimization server on Pages
  trailingSlash: true, // emit /about/index.html so routes resolve as static files
};

export default nextConfig;
