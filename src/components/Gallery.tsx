"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Content, site } from "@/content/site";
import { asset } from "@/lib/asset";
import { Reveal } from "./Reveal";

export function Gallery({ t }: { t: Content }) {
  const images = site.media.gallery;
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);

  const close = useCallback(() => setOpenIdx(null), []);
  const step = useCallback(
    (d: number) =>
      setOpenIdx((i) => (i === null ? i : (i + d + images.length) % images.length)),
    [images.length]
  );

  // While the lightbox is open: arrow/Escape keys + body scroll lock.
  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [openIdx, close, step]);

  const alt = (i: number) => `${t.images.galleryAlt} ${i + 1}`;

  return (
    <section id="gallery" className="bg-cream py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-charcoal">
            <span className="h-px w-6 bg-lime" /> {t.nav.gallery}
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-charcoal sm:text-4xl">
            {t.gallery.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">{t.gallery.lead}</p>
        </Reveal>
      </div>

      {/* Full-bleed mosaic — breaks out of the page container */}
      <Reveal className="mt-12">
        <div className="mx-[calc(50%-50vw)] grid grid-cols-2 gap-1.5 md:grid-cols-3">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setOpenIdx(i)}
              className="group cursor-zoom-in overflow-hidden"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset(src)}
                alt={alt(i)}
                width={1200}
                height={900}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </Reveal>

      {/* Lightbox */}
      {openIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt(openIdx)}
          className="fixed inset-0 z-[60] flex touch-pinch-zoom items-center justify-center overscroll-contain bg-ink/95 p-4"
          onClick={close}
          onTouchStart={(e) => {
            // Only a single finger counts as a swipe — pinch-zoom is not navigation.
            touchX.current = e.touches.length === 1 ? e.touches[0].clientX : null;
          }}
          onTouchMove={(e) => {
            if (e.touches.length > 1) touchX.current = null;
          }}
          onTouchEnd={(e) => {
            if (touchX.current === null || e.touches.length > 0) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            touchX.current = null;
            if (Math.abs(dx) > 48) step(dx < 0 ? 1 : -1);
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset(images[openIdx])}
            alt={alt(openIdx)}
            className="max-h-[85svh] max-w-full rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            onClick={close}
            aria-label={t.contact.closeLabel}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label={t.gallery.prevLabel}
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-5"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label={t.gallery.nextLabel}
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-5"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m9 6 6 6-6 6" />
            </svg>
          </button>

          <p className="nums absolute bottom-4 left-1/2 -translate-x-1/2 text-sm font-medium text-white/70">
            {openIdx + 1} / {images.length}
          </p>
        </div>
      )}
    </section>
  );
}
