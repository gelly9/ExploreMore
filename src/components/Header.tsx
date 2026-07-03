"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Content, Lang, LANGS } from "@/content/site";
import { LANG_PATH } from "@/lib/seo";

const SECTION_IDS = ["about", "gallery", "prices", "faq", "contact"];

export function Header({ lang, t }: { lang: Lang; t: Content }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const navRef = useRef<HTMLElement>(null);
  const [bar, setBar] = useState({ left: 0, width: 0 });

  // Measure the active link so the underline can slide beneath it.
  useEffect(() => {
    const measure = () => {
      const el = active
        ? navRef.current?.querySelector<HTMLElement>(`a[href="#${active}"]`)
        : null;
      if (el) setBar({ left: el.offsetLeft, width: el.offsetWidth });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [active]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: the section crossing a band around the viewport's middle
  // becomes the active nav link (none while the hero is in view).
  useEffect(() => {
    const visible = new Set<string>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.add(e.target.id);
          else visible.delete(e.target.id);
        }
        setActive(SECTION_IDS.find((id) => visible.has(id)) ?? "");
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    }
    return () => io.disconnect();
  }, []);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#prices", label: t.nav.prices },
    { href: "#faq", label: t.nav.faq },
    { href: "#contact", label: t.nav.contact },
  ];

  const solid = scrolled || open;
  const activeIdx = LANGS.indexOf(lang);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-cream/90 shadow-sm backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a
          href="#top"
          className={`flex items-center gap-2 font-display text-lg font-extrabold tracking-tight transition-colors ${
            solid ? "text-charcoal" : "text-white"
          }`}
        >
          <img src="/logo.svg" alt="" className="h-9 w-auto" />
          <span>
            Explore<span className="text-lime">More</span>
          </span>
        </a>

        <nav ref={navRef} className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              aria-current={active === l.href.slice(1) ? "true" : undefined}
              className={`text-base font-medium transition-colors hover:text-lime-dark ${
                solid ? "text-charcoal" : "text-white/90"
              }`}
            >
              {l.label}
            </a>
          ))}
          {/* Single underline that glides to the active link */}
          <span
            aria-hidden
            className={`absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-lime transition-all duration-300 ease-out ${
              active ? "opacity-100" : "opacity-0"
            }`}
            style={{ transform: `translateX(${bar.left}px)`, width: bar.width }}
          />
        </nav>

        <div className="flex items-center gap-3">
          {/* Language switch — real links to the per-language URLs */}
          <div
            className={`relative flex rounded-full p-0.5 text-sm font-semibold ${
              solid ? "bg-paper" : "bg-white/15"
            }`}
          >
            <span
              aria-hidden
              className="absolute bottom-0.5 top-0.5 rounded-full bg-lime transition-transform duration-300 ease-out"
              style={{
                left: 2,
                width: "calc((100% - 4px) / 3)",
                transform: `translateX(${activeIdx * 100}%)`,
              }}
            />
            {LANGS.map((l) => (
              <Link
                key={l}
                href={LANG_PATH[l]}
                hrefLang={l}
                scroll={false}
                className={`relative z-10 flex-1 rounded-full px-3 py-1.5 text-center uppercase transition-colors md:px-2.5 md:py-1 ${
                  lang === l
                    ? "text-charcoal"
                    : solid
                      ? "text-muted hover:text-charcoal"
                      : "text-white/80 hover:text-white"
                }`}
                aria-current={lang === l ? "true" : undefined}
              >
                {l}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className={`-m-2 p-2 md:hidden ${solid ? "text-charcoal" : "text-white"}`}
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

      {open && (
        <nav className="border-t border-black/5 bg-cream px-5 pb-5 pt-2 md:hidden">
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
        </nav>
      )}
    </header>
  );
}
