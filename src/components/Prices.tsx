"use client";

import { Content, site } from "@/content/site";
import { asset } from "@/lib/asset";
import { Reveal } from "./Reveal";

export function Prices({ t }: { t: Content }) {
  const duration = (h: number) =>
    `${h} ${h === 1 ? t.prices.hourUnit.one : t.prices.hourUnit.many}`;

  return (
    <section id="prices" className="bg-paper py-12 sm:py-16">
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
            <div className="flex h-full min-h-72 flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-black/5">
              {/* The bike fills all the space the text doesn't need */}
              <div className="relative min-h-52 flex-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset(site.bike)}
                  alt={t.prices.bikeName}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-contain p-4 sm:p-6"
                />
              </div>
              <div className="p-6 pt-2">
                <h3 className="font-display text-2xl font-extrabold text-charcoal">
                  {t.prices.bikeName}
                </h3>
                <p className="mt-1 max-w-sm text-base leading-relaxed text-muted">
                  {t.prices.bikeDesc}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-lime px-3 py-1.5 text-sm font-bold text-charcoal">
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
                    className={`flex items-center justify-between rounded-2xl border px-6 py-5 ${
                      popular ? "border-lime bg-lime-soft" : "border-black/10 bg-cream"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="nums font-display text-2xl font-extrabold text-charcoal">
                        {duration(p.hours)}
                      </span>
                      {popular && (
                        <span className="rounded-full bg-lime px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-charcoal">
                          {t.prices.popular}
                        </span>
                      )}
                    </div>
                    <div className="nums whitespace-nowrap text-right">
                      <span className="font-display text-2xl font-extrabold text-charcoal">
                        {p.price}
                      </span>
                      <span className="ml-1 text-base font-medium text-muted">
                        {site.currency}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Optional add-on — set apart from the hourly rental tiers */}
            <div className="mt-8">
              <div className="mb-3 flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  {t.prices.extrasLabel}
                </span>
                <span className="h-px flex-1 bg-black/10" />
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-dashed border-black/15 bg-cream px-6 py-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lime-soft text-lime-dark">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="7" r="3.2" />
                      <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-display text-2xl font-extrabold text-charcoal">
                      {t.prices.guideLabel}
                    </span>
                    <span className="block text-sm text-muted">{t.prices.guideNote}</span>
                  </div>
                </div>
                <div className="nums whitespace-nowrap text-right">
                  <span className="font-display text-2xl font-extrabold text-charcoal">
                    {site.guide.price}
                  </span>
                  <span className="ml-1 text-base font-medium text-muted">
                    {site.currency}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
