import { execSync } from "node:child_process";
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";

export const dynamic = "force-static";

const languages = {
  en: `${SITE_URL}/`,
  ro: `${SITE_URL}/ro/`,
  hu: `${SITE_URL}/hu/`,
};

// All three pages render from the same content source, so their real "last
// modified" is the last commit that touched it — a truthful signal, unlike
// stamping every build with the current time. Falls back to now if git history
// isn't available (e.g. a shallow checkout without full history).
function contentLastModified(): Date {
  try {
    const iso = execSync("git log -1 --format=%cI -- src/content/site.ts", {
      encoding: "utf8",
    }).trim();
    if (iso) return new Date(iso);
  } catch {
    // no git / no history — fall through
  }
  return new Date();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = contentLastModified();
  return [`${SITE_URL}/`, `${SITE_URL}/ro/`, `${SITE_URL}/hu/`].map((url) => ({
    url,
    lastModified,
    changeFrequency: "monthly",
    priority: url === `${SITE_URL}/` ? 1 : 0.9,
    alternates: { languages },
  }));
}
