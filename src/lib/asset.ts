// In production the site is served from https://gelly9.github.io/ExploreMore/,
// so static assets (images in /public) need the base path prefixed.
// In dev it serves from the root. Use asset("/media/hero.jpg") everywhere
// (works for <img src> and CSS background-image alike).
export const BASE_PATH =
  process.env.NODE_ENV === "production" ? "/ExploreMore" : "";

export const asset = (path: string) => `${BASE_PATH}${path}`;
