"use client";

import { useEffect, useRef, useState } from "react";
import { Content, site } from "@/content/site";
import { asset } from "@/lib/asset";
import { Reveal } from "./Reveal";

function RangeRow({
  label,
  km,
  pct,
  tone,
}: {
  label: string;
  km: number;
  pct: number;
  tone: "muted" | "lime";
}) {
  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between">
        <span className="text-base font-semibold text-charcoal">{label}</span>
        <span className="nums font-display text-base font-bold text-charcoal">{km} km</span>
      </div>
      <div className="h-3 w-full overflow-hidden rounded-full bg-black/5">
        <div
          className={`h-full rounded-full transition-[width] duration-1000 ease-out ${
            tone === "lime" ? "bg-lime" : "bg-teal/40"
          }`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export function About({ t }: { t: Content }) {
  const r = t.about.range;
  const max = Math.max(site.range.pedalKm, site.range.ebikeKm);
  const pedalPct = (site.range.pedalKm / max) * 100;
  const ebikePct = (site.range.ebikeKm / max) * 100;

  const chartRef = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = chartRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (e) => {
        if (e[0].isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="about" className="overflow-hidden bg-cream py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-charcoal">
              <span className="h-px w-6 bg-lime" /> Explore More
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-charcoal sm:text-4xl">
              {t.about.title}
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">{t.about.lead}</p>

            <div ref={chartRef} className="mt-10 max-w-md space-y-5">
              <RangeRow label={r.pedalLabel} km={site.range.pedalKm} pct={shown ? pedalPct : 0} tone="muted" />
              <RangeRow label={r.ebikeLabel} km={site.range.ebikeKm} pct={shown ? ebikePct : 0} tone="lime" />
              <p className="text-sm text-muted">{r.caption}</p>
            </div>
          </Reveal>

          <Reveal dir="right" delay={120} className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-3xl lg:-mr-16 xl:-mr-24">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset(site.media.about)}
                alt={t.images.aboutAlt}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute bottom-5 left-5 rounded-2xl bg-cream/90 px-5 py-3 backdrop-blur">
                <p className="font-display text-2xl font-extrabold text-charcoal">Sovata</p>
                <p className="text-base text-muted">Transilvania, România</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
