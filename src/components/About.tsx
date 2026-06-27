"use client";

import { useLang } from "@/lib/i18n";
import { site } from "@/content/site";
import { asset } from "@/lib/asset";
import { Reveal } from "./Reveal";

const icons = [
  // bolt — effortless
  <path key="b" d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />,
  // compass — explore further
  <>
    <circle key="c1" cx="12" cy="12" r="9" />
    <polygon key="c2" points="16 8 10.5 10.5 8 16 13.5 13.5 16 8" />
  </>,
  // heart — for everyone
  <path key="h" d="M19 5a4.5 4.5 0 0 0-7 1 4.5 4.5 0 0 0-7-1 4.6 4.6 0 0 0 0 6.5l7 7 7-7A4.6 4.6 0 0 0 19 5z" />,
];

export function About() {
  const { t } = useLang();
  return (
    <section id="about" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lime-dark">
              Explore More
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-charcoal sm:text-4xl">
              {t.about.title}
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
              {t.about.lead}
            </p>

            <div className="mt-10 space-y-7">
              {t.about.features.map((f, i) => (
                <div key={f.title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-lime/15 text-lime-dark">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      {icons[i]}
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-charcoal">{f.title}</h3>
                    <p className="mt-1 text-muted">{f.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-3xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset(site.media.about)}
                alt=""
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute bottom-5 left-5 rounded-2xl bg-white/90 px-5 py-3 backdrop-blur">
                <p className="font-display text-2xl font-extrabold text-charcoal">
                  Sovata
                </p>
                <p className="text-sm text-muted">Transilvania, România</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
