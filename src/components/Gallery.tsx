"use client";

import { useLang } from "@/lib/i18n";
import { site } from "@/content/site";
import { asset } from "@/lib/asset";
import { Reveal } from "./Reveal";

export function Gallery() {
  const { t } = useLang();
  return (
    <section id="gallery" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lime-dark">
            {t.nav.gallery}
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-charcoal sm:text-4xl">
            {t.gallery.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">{t.gallery.lead}</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {site.media.gallery.map((src, i, arr) => {
            const tall = i % 3 === 0;
            // Odd count would leave the last tile alone on the 2-col grid —
            // let it fill the row on small screens.
            const lastOdd = arr.length % 2 === 1 && i === arr.length - 1;
            return (
              <Reveal
                key={src}
                delay={i * 80}
                className={`${tall ? "lg:row-span-2" : ""} ${lastOdd ? "col-span-2 lg:col-span-1" : ""}`}
              >
                <div className="group h-full overflow-hidden rounded-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={asset(src)}
                    alt=""
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                      tall ? "h-full min-h-64" : "aspect-square"
                    }`}
                  />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
