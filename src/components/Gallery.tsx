"use client";

import { Content, site } from "@/content/site";
import { asset } from "@/lib/asset";
import { Reveal } from "./Reveal";

export function Gallery({ t }: { t: Content }) {
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
          {site.media.gallery.map((src) => (
            <div key={src} className="group overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset(src)}
                alt={t.images.galleryAlt}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
