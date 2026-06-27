"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";
import { LANGS, site } from "@/content/site";

export function Header() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#bikes", label: t.nav.bikes },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#contact", label: t.nav.contact },
  ];

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-white/90 shadow-sm backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        {/* Wordmark */}
        <a
          href="#top"
          className={`font-display text-lg font-extrabold tracking-tight transition-colors ${
            solid ? "text-charcoal" : "text-white"
          }`}
        >
          Explore<span className="text-lime">More</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-lime ${
                solid ? "text-charcoal" : "text-white/90"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <div
            className={`flex items-center rounded-full p-0.5 text-xs font-semibold ${
              solid ? "bg-paper" : "bg-white/15"
            }`}
          >
            {LANGS.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`rounded-full px-2.5 py-1 uppercase transition-colors ${
                  lang === l
                    ? "bg-lime text-charcoal"
                    : solid
                      ? "text-muted hover:text-charcoal"
                      : "text-white/80 hover:text-white"
                }`}
                aria-pressed={lang === l}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Call button (desktop) */}
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="hidden rounded-full bg-lime px-4 py-2 text-sm font-semibold text-charcoal transition-transform hover:-translate-y-0.5 sm:inline-block"
          >
            {t.hero.ctaCall}
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className={`md:hidden ${solid ? "text-charcoal" : "text-white"}`}
            aria-label="Menu"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-black/5 bg-white px-5 pb-5 pt-2 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-black/5 py-3 font-medium text-charcoal last:border-0"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="mt-3 block rounded-full bg-lime px-4 py-3 text-center font-semibold text-charcoal"
          >
            {t.hero.ctaCall}
          </a>
        </nav>
      )}
    </header>
  );
}
