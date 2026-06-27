import type { NextConfig } from "next";

// Deployed to GitHub Pages at https://gelly9.github.io/ExploreMore/
// A project repo serves from a subpath, so we set basePath in production.
// `next dev` (development) runs at the root for convenient local work.
const repo = "ExploreMore";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export", // emit a fully static site into ./out
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  images: { unoptimized: true }, // no image optimization server on Pages
  trailingSlash: true, // emit /about/index.html so routes resolve as static files
};

export default nextConfig;
