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
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShown(true);
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
      className={`reveal ${shown ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
