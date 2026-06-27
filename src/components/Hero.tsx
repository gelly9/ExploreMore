"use client";

import { useEffect, useRef } from "react";
import { useLang } from "@/lib/i18n";
import { site } from "@/content/site";
import { asset } from "@/lib/asset";

export function Hero() {
  const { t } = useLang();
  const bgRef = useRef<HTMLDivElement>(null);

  // Subtle parallax on the hero image (desktop + motion-OK only).
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || window.innerWidth < 768) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (bgRef.current) {
          bgRef.current.style.transform = `translate3d(0, ${window.scrollY * 0.28}px, 0) scale(1.08)`;
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink">
      {/* Background media */}
      <div ref={bgRef} className="absolute inset-0 scale-105 will-change-transform">
        {site.media.heroVideo ? (
          <video
            className="h-full w-full object-cover"
            src={asset(site.media.heroVideo)}
            poster={asset(site.media.hero)}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={asset(site.media.hero)} alt="" className="h-full w-full object-cover" />
        )}
      </div>
      {/* Cinematic gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/30 to-ink/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pt-24 sm:px-8">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-lime sm:text-sm">
          {t.hero.kicker}
        </p>
        <h1 className="font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
          {t.hero.titleTop}
          <br />
          <span className="text-lime">{t.hero.titleBottom}</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
          {t.hero.subtitle}
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="#bikes"
            className="rounded-full bg-lime px-7 py-3.5 text-sm font-semibold text-charcoal transition-transform hover:-translate-y-0.5 sm:text-base"
          >
            {t.hero.ctaPrimary}
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10 sm:text-base"
          >
            {t.hero.ctaCall}
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/70">
        <svg className="animate-nudge" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
