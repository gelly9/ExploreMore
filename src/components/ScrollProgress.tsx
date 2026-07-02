"use client";

import { useEffect, useRef } from "react";

// A thin lime line that traces across the top as you scroll — a "trail" being
// drawn. Doubles as orientation on the one-pager. Replaces the bouncing arrow.
// The transform is written straight to the DOM inside the rAF: no React
// re-render per scroll frame.
export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        const p = max > 0 ? h.scrollTop / max : 0;
        if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent" aria-hidden>
      <div
        ref={barRef}
        className="h-full origin-left bg-lime"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
