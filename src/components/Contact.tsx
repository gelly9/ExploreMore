"use client";

import { Content, site } from "@/content/site";
import { waHref } from "@/lib/contact";
import { Reveal } from "./Reveal";

export function Contact({ t }: { t: Content }) {
  const tel = site.phone.replace(/\s/g, "");
  return (
    <section id="contact" className="bg-ink py-12 text-white sm:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: details */}
          <Reveal>
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
              <span className="h-px w-6 bg-lime" /> {t.nav.contact}
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
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
                <span className="nums font-display text-xl font-extrabold">{site.phone}</span>
              </span>
            </a>

            {/* WhatsApp */}
            <a
              href={waHref(t.contact.whatsappMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] px-6 py-4 font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm0 18.15c-1.52 0-3.01-.41-4.3-1.18l-.31-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.36c0-4.54 3.7-8.23 8.25-8.23 4.54 0 8.23 3.69 8.23 8.23 0 4.54-3.69 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43-.14-.01-.31-.01-.48-.01-.16 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.16 1.75 2.67 4.25 3.74.59.26 1.06.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z" />
              </svg>
              {t.contact.whatsappLabel}
            </a>

            {/* Trust signals */}
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
              {t.contact.trust.map((item) => (
                <li key={item} className="flex items-center gap-1.5 text-sm text-white/70">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#8dc63f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
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
