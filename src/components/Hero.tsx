"use client";

import { useEffect, useRef } from "react";
import { Content, site } from "@/content/site";
import { asset } from "@/lib/asset";

export function Hero({ t }: { t: Content }) {
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
          bgRef.current.style.transform = `translate3d(0, ${window.scrollY * 0.28}px, 0)`;
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
      {/* Background media (parallax wrapper) + Ken Burns drift on the image */}
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        {site.media.heroVideo ? (
          <video
            className="kenburns h-full w-full object-cover"
            src={asset(site.media.heroVideo)}
            poster={asset(site.media.hero)}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={asset(site.media.hero)} alt={t.images.heroAlt} className="kenburns h-full w-full object-cover" />
        )}
      </div>
      {/* Cinematic gradient — warmer, forest-dusk tone */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/25 to-ink/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full min-w-0 max-w-6xl px-5 pt-24 sm:px-8">
        <p
          className="enter mb-6 flex items-center gap-3"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="h-px w-7 bg-lime" />
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-white/85">
            {t.hero.kicker}
          </span>
        </p>

        <h1 className="font-display text-[clamp(2.5rem,11vw,7rem)] leading-[0.95] tracking-tight">
          <span className="line-mask">
            <span
              className="line-rise font-semibold text-white"
              style={{ animationDelay: "0.24s" }}
            >
              {t.hero.titleTop}
            </span>
          </span>
          <span className="line-mask">
            <span
              className="line-rise font-extrabold text-lime"
              style={{ animationDelay: "0.36s" }}
            >
              {t.hero.titleBottom}
            </span>
          </span>
        </h1>

        <p
          className="enter mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
          style={{ animationDelay: "0.6s" }}
        >
          {t.hero.subtitle}
        </p>

        <div
          className="enter mt-9 flex flex-wrap gap-4"
          style={{ animationDelay: "0.75s" }}
        >
          <a
            href="#prices"
            className="rounded-full bg-lime px-7 py-3.5 text-sm font-semibold text-charcoal transition-transform hover:-translate-y-0.5 sm:text-base"
          >
            {t.hero.ctaPrimary}
          </a>
        </div>
      </div>
    </section>
  );
}
