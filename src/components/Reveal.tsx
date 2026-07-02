"use client";

import { useEffect, useRef, useState, ReactNode, ElementType } from "react";

// Fades children into view on scroll. Kept deliberate (short travel) and used
// sparingly — on section intros and key media, not every block.
export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  dir,
  className = "",
}: {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  dir?: "up" | "left" | "right";
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  // Visible by default (matches the static HTML, which must work without JS).
  const [out, setOut] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Only elements still below the viewport at hydration take part in the
    // animation — anything already on screen stays put (no flash).
    if (el.getBoundingClientRect().top <= window.innerHeight) return;
    setOut(true);
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setOut(false);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-dir={dir && dir !== "up" ? dir : undefined}
      className={`reveal ${out ? "is-out" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
