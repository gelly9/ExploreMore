"use client";

import { useLang } from "@/lib/i18n";
import { site } from "@/content/site";
import { Reveal } from "./Reveal";

export function Contact() {
  const { t } = useLang();
  const tel = site.phone.replace(/\s/g, "");
  return (
    <section id="contact" className="bg-ink py-24 text-white sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: details */}
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lime">
              {t.nav.contact}
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              {t.contact.title}
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-white/70">
              {t.contact.lead}
            </p>

            {/* Phone — primary action */}
            <a
              href={`tel:${tel}`}
              className="mt-9 flex items-center gap-4 rounded-2xl bg-lime px-6 py-5 text-charcoal transition-transform hover:-translate-y-0.5"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wider opacity-70">
                  {t.contact.callLabel}
                </span>
                <span className="font-display text-xl font-extrabold">{site.phone}</span>
              </span>
            </a>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/15 px-5 py-4 transition-colors hover:bg-white/5"
              >
                <span className="block text-xs font-semibold uppercase tracking-wider text-lime">
                  Facebook
                </span>
                <span className="mt-1 block text-sm text-white/80">{t.contact.fbLabel}</span>
              </a>
              <div className="rounded-2xl border border-white/15 px-5 py-4">
                <span className="block text-xs font-semibold uppercase tracking-wider text-lime">
                  {t.contact.hoursLabel}
                </span>
                <span className="mt-1 block text-sm text-white/80">{t.contact.hours}</span>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-white/15 px-5 py-4">
              <span className="block text-xs font-semibold uppercase tracking-wider text-lime">
                {t.contact.locationLabel}
              </span>
              <span className="mt-1 block text-sm text-white/80">{site.location}</span>
            </div>
          </Reveal>

          {/* Right: map */}
          <Reveal delay={120}>
            <div className="h-full min-h-80 overflow-hidden rounded-3xl border border-white/10">
              <iframe
                title="Sovata map"
                src={site.mapEmbed}
                className="h-full min-h-80 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
