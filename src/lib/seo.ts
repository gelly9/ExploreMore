import type { Metadata } from "next";
import { dict, Lang, site, SITE_URL } from "@/content/site";

// URL path per language. EN sits at the root (the default language).
export const LANG_PATH: Record<Lang, string> = { ro: "/ro/", hu: "/hu/", en: "/" };
const OG_LOCALE: Record<Lang, string> = { ro: "ro_RO", hu: "hu_HU", en: "en_US" };
const HREFLANG: Record<Lang, string> = { ro: "ro-RO", hu: "hu-HU", en: "en-US" };

// Per-route metadata: localized title/description, canonical, hreflang
// alternates, Open Graph and Twitter. Resolved against metadataBase (layout).
export function buildMetadata(lang: Lang): Metadata {
  const t = dict[lang];
  const languages: Record<string, string> = { "x-default": LANG_PATH.en };
  (Object.keys(LANG_PATH) as Lang[]).forEach((l) => {
    languages[HREFLANG[l]] = LANG_PATH[l];
  });

  return {
    title: t.seo.title,
    description: t.seo.description,
    alternates: { canonical: LANG_PATH[lang], languages },
    openGraph: {
      type: "website",
      siteName: "Explore More",
      title: t.seo.title,
      description: t.seo.description,
      url: LANG_PATH[lang],
      locale: OG_LOCALE[lang],
      images: [{ url: "/og.jpg", width: 1200, height: 630, alt: t.images.heroAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: t.seo.title,
      description: t.seo.description,
      images: ["/og.jpg"],
    },
  };
}

// LocalBusiness JSON-LD — the key local-SEO signal. streetAddress is omitted
// until a real one is set in `site.address.street`.
export function localBusinessJsonLd(lang: Lang) {
  const t = dict[lang];
  const a = site.address;
  const prices = site.pricing.map((p) => p.price);
  return {
    "@context": "https://schema.org",
    "@type": "BicycleStore",
    name: site.brand,
    description: t.seo.description,
    image: `${SITE_URL}/og.jpg`,
    url: SITE_URL + LANG_PATH[lang],
    telephone: site.phone,
    priceRange: `${Math.min(...prices)}–${Math.max(...prices)} RON`,
    address: {
      "@type": "PostalAddress",
      ...(a.street ? { streetAddress: a.street } : {}),
      addressLocality: a.locality,
      addressRegion: a.region,
      postalCode: a.postalCode,
      addressCountry: a.countryCode,
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: site.hours.opens,
        closes: site.hours.closes,
      },
    ],
    sameAs: [site.facebook],
    areaServed: { "@type": "City", name: "Sovata" },
  };
}
