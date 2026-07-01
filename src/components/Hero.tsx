"use client";

import { useEffect, useRef } from "react";
import { Content, site } from "@/content/site";
import { asset } from "@/lib/asset";
import { waHref } from "@/lib/contact";

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
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10 sm:text-base"
          >
            {t.hero.ctaCall}
          </a>
          <a
            href={waHref(t.contact.whatsappMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10 sm:text-base"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm0 18.15c-1.52 0-3.01-.41-4.3-1.18l-.31-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.36c0-4.54 3.7-8.23 8.25-8.23 4.54 0 8.23 3.69 8.23 8.23 0 4.54-3.69 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43-.14-.01-.31-.01-.48-.01-.16 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.16 1.75 2.67 4.25 3.74.59.26 1.06.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z" />
            </svg>
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
