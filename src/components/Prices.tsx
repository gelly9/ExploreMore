"use client";

import { Content, site } from "@/content/site";
import { asset } from "@/lib/asset";
import { Reveal } from "./Reveal";

export function Prices({ t }: { t: Content }) {
  const duration = (h: number) =>
    `${h} ${h === 1 ? t.prices.hourUnit.one : t.prices.hourUnit.many}`;

  return (
    <section id="prices" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-charcoal">
            <span className="h-px w-6 bg-lime" /> {t.nav.prices}
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-charcoal sm:text-4xl">
            {t.prices.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">{t.prices.lead}</p>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
          {/* The bike */}
          <Reveal>
            <div className="relative h-full min-h-72 overflow-hidden rounded-3xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset(site.bike)}
                alt={t.prices.bikeName}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent p-6 pt-20">
                <h3 className="font-display text-2xl font-extrabold text-white">
                  {t.prices.bikeName}
                </h3>
                <p className="mt-1 max-w-sm text-sm leading-relaxed text-white/80">
                  {t.prices.bikeDesc}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-lime px-3 py-1.5 text-xs font-bold text-charcoal">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {t.prices.includes}
                </span>
              </div>
            </div>
          </Reveal>

          {/* Pricing by duration */}
          <Reveal delay={120} className="flex flex-col justify-center">
            <div className="space-y-3">
              {site.pricing.map((p) => {
                const popular = "popular" in p && p.popular;
                return (
                  <div
                    key={p.hours}
                    className={`flex items-center justify-between rounded-2xl border px-6 py-5 transition-colors ${
                      popular
                        ? "border-lime bg-lime-soft"
                        : "border-black/10 bg-cream hover:border-black/20"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="nums font-display text-2xl font-extrabold text-charcoal">
                        {duration(p.hours)}
                      </span>
                      {popular && (
                        <span className="rounded-full bg-lime px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-charcoal">
                          {t.prices.popular}
                        </span>
                      )}
                    </div>
                    <div className="nums whitespace-nowrap text-right">
                      <span className="font-display text-2xl font-extrabold text-charcoal">
                        {p.price}
                      </span>
                      <span className="ml-1 text-sm font-medium text-muted">
                        {site.currency}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href="#contact"
              className="mt-7 inline-block self-start rounded-full bg-charcoal px-8 py-4 font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              {t.prices.cta}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
