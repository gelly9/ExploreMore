import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";

export const dynamic = "force-static";

const languages = {
  ro: `${SITE_URL}/`,
  hu: `${SITE_URL}/hu/`,
  en: `${SITE_URL}/en/`,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [`${SITE_URL}/`, `${SITE_URL}/hu/`, `${SITE_URL}/en/`].map((url) => ({
    url,
    lastModified,
    changeFrequency: "monthly",
    priority: url === `${SITE_URL}/` ? 1 : 0.9,
    alternates: { languages },
  }));
}
