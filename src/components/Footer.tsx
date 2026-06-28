"use client";

import { useLang } from "@/lib/i18n";
import { site } from "@/content/site";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="bg-forest py-10 text-white/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center sm:flex-row sm:justify-between sm:px-8 sm:text-left">
        <div>
          <p className="font-display text-lg font-extrabold text-white">
            Explore<span className="text-lime">More</span>
          </p>
          <p className="text-sm">{t.footer.tagline}</p>
        </div>
        <div className="flex items-center gap-5 text-sm">
          <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-lime">
            {site.phone}
          </a>
          <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-lime">
            Facebook
          </a>
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Explore More — {t.footer.rights}
      </p>
    </footer>
  );
}
