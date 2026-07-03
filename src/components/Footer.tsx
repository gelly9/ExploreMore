"use client";

import { Content } from "@/content/site";

export function Footer({ t }: { t: Content }) {
  return (
    <footer className="border-t border-white/10 bg-forest py-10 text-white/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-1 px-5 text-center sm:px-8">
        <p className="flex items-center gap-2 font-display text-lg font-extrabold text-white">
          <img src="/logo.svg" alt="" className="h-9 w-auto" />
          <span>
            Explore<span className="text-lime">More</span>
          </span>
        </p>
        <p className="text-base">{t.footer.tagline}</p>
      </div>
      <p className="mt-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Explore More — {t.footer.rights}
      </p>
    </footer>
  );
}
