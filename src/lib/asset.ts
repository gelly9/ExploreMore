// The site is served from the root of the custom domain (https://exploremore.ro/),
// so assets need no path prefix. This helper stays so paths are centralised —
// if the site ever moves back to a subpath, set BASE_PATH here.
export const BASE_PATH = "";

export const asset = (path: string) => `${BASE_PATH}${path}`;
