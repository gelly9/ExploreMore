"use client";

import { useState } from "react";
import { Content } from "@/content/site";
import { Reveal } from "./Reveal";

export function Faq({ t }: { t: Content }) {
  // One panel open at a time; start with everything collapsed.
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-cream py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-charcoal">
            <span className="h-px w-6 bg-lime" /> {t.nav.faq}
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-charcoal sm:text-4xl">
            {t.faq.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">{t.faq.lead}</p>
        </Reveal>

        <div className="mt-10 space-y-3">
          {t.faq.items.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <Reveal key={item.q} delay={i * 70}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
                    isOpen
                      ? "border-lime bg-lime-soft shadow-md"
                      : "border-black/5 bg-white shadow-sm"
                  }`}
                >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-lg font-bold text-charcoal">{item.q}</span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-[400ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen ? "rotate-180 scale-110 bg-lime text-charcoal" : "bg-black/5 text-charcoal"
                    }`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </button>
                {/* grid-rows 0fr→1fr animates the height with a smooth expo curve */}
                <div
                  className={`grid transition-[grid-template-rows] duration-[450ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    {/* answer fades + slides in, synced with the expansion */}
                    <p
                      className={`px-6 pb-5 text-base leading-relaxed text-muted transition-all duration-300 ease-out ${
                        isOpen ? "translate-y-0 opacity-100" : "-translate-y-1.5 opacity-0"
                      }`}
                      style={{ transitionDelay: isOpen ? "120ms" : "0ms" }}
                    >
                      {item.a}
                    </p>
                  </div>
                </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
