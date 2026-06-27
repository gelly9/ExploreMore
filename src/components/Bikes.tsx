"use client";

import { useLang } from "@/lib/i18n";
import { site } from "@/content/site";
import { asset } from "@/lib/asset";
import { Reveal } from "./Reveal";

export function Bikes() {
  const { t } = useLang();
  return (
    <section id="bikes" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lime-dark">
            {t.nav.bikes}
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-charcoal sm:text-4xl">
            {t.bikes.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">{t.bikes.lead}</p>
        </Reveal>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {site.bikes.map((bike, i) => {
            const item = t.bikes.items[i];
            return (
              <Reveal key={i} delay={i * 100}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm transition-shadow hover:shadow-xl">
                  <div className="relative overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={asset(bike.img)}
                      alt={item.name}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute right-4 top-4 rounded-full bg-lime px-3.5 py-1.5 font-display text-sm font-extrabold text-charcoal shadow">
                      {bike.priceDay} {site.currency}
                      <span className="font-medium opacity-70"> {t.bikes.perDay}</span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl font-bold text-charcoal">{item.name}</h3>
                    <p className="mt-2 flex-1 text-muted">{item.note}</p>
                    <div className="mt-5 flex items-center justify-between border-t border-black/5 pt-4 text-sm">
                      <span className="text-muted">{t.bikes.perHalf}</span>
                      <span className="font-display font-bold text-charcoal">
                        {bike.priceHalf} {site.currency}
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block rounded-full bg-charcoal px-8 py-4 font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            {t.bikes.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
