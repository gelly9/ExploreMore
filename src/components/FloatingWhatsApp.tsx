"use client";

import { useEffect, useState } from "react";
import { Content, site } from "@/content/site";
import { waHref } from "@/lib/contact";

// Persistent contact FAB, bottom-right on every page.
// Tap the main button to morph it open and reveal Call + WhatsApp actions.
export function FloatingWhatsApp({ t }: { t: Content }) {
  const [open, setOpen] = useState(false);
  const tel = site.phone.replace(/\s/g, "");

  // Close on Escape for keyboard users.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {/* Click-away backdrop while open */}
      {open && (
        <button
          aria-hidden="true"
          tabIndex={-1}
          onClick={() => setOpen(false)}
          className="fixed inset-0 -z-10 cursor-default"
        />
      )}

      <div className="flex flex-col items-end gap-3">
        {/* Call action */}
        <a
          href={`tel:${tel}`}
          aria-label={t.contact.callLabel}
          className={`flex items-center gap-3 rounded-full bg-lime py-2.5 pl-4 pr-2.5 text-charcoal shadow-lg ring-1 ring-black/10 transition-all duration-300 ease-out ${
            open
              ? "translate-y-0 scale-100 opacity-100"
              : "pointer-events-none translate-y-3 scale-90 opacity-0"
          }`}
          style={{ transitionDelay: open ? "60ms" : "0ms" }}
        >
          <span className="text-sm font-semibold">{t.contact.callLabel}</span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-charcoal text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </span>
        </a>

        {/* WhatsApp action */}
        <a
          href={waHref(t.contact.whatsappMsg)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.contact.whatsappLabel}
          className={`flex items-center gap-3 rounded-full bg-white py-2.5 pl-4 pr-2.5 text-charcoal shadow-lg ring-1 ring-black/10 transition-all duration-300 ease-out ${
            open
              ? "translate-y-0 scale-100 opacity-100"
              : "pointer-events-none translate-y-3 scale-90 opacity-0"
          }`}
        >
          <span className="text-sm font-semibold">{t.contact.whatsappLabel}</span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm0 18.15c-1.52 0-3.01-.41-4.3-1.18l-.31-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.36c0-4.54 3.7-8.23 8.25-8.23 4.54 0 8.23 3.69 8.23 8.23 0 4.54-3.69 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43-.14-.01-.31-.01-.48-.01-.16 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.16 1.75 2.67 4.25 3.74.59.26 1.06.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z" />
            </svg>
          </span>
        </a>

        {/* Main toggle — morphs between contact and close icons */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? t.contact.closeLabel : t.contact.contactLabel}
          title={open ? t.contact.closeLabel : t.contact.contactLabel}
          className={`flex h-14 w-14 items-center justify-center rounded-full shadow-lg ring-1 ring-black/10 transition-all duration-300 ease-out hover:scale-105 active:scale-95 ${
            open ? "rotate-90 bg-charcoal text-white" : "bg-lime text-white"
          }`}
        >
          {open ? (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="34" height="34" viewBox="-0.5 0 32 32" fill="currentColor" aria-hidden="true">
              {/* bicycle */}
              <path d="M25.8 14.32c-0.64 0-1.24 0.12-1.84 0.32l-1.52-3 2.6-3.88c0.28-0.4 0.12-1.32-0.72-1.32h-3.32c-0.48 0-0.84 0.36-0.84 0.84s0.36 0.84 0.84 0.84h1.76l-1.76 2.64h-9.68c-0.4 0-0.68 0.36-0.68 0.36v0 0 0 0l-2.56 3.76c-0.72-0.36-1.56-0.56-2.44-0.56-3.12 0-5.64 2.52-5.64 5.64s2.52 5.64 5.68 5.64c2.8 0 5.16-2.080 5.56-4.8h4.6c0.48 0 0.68-0.4 0.68-0.4v0l4.8-7.2 1.16 2.2c-1.4 1.040-2.32 2.68-2.32 4.56 0 3.12 2.52 5.64 5.64 5.64s5.64-2.52 5.64-5.64-2.56-5.64-5.64-5.64zM15.92 18.32l-3.2-5.92h7.12l-3.92 5.92zM11.24 13.2l3.16 5.92h-3.2c-0.2-1.28-0.84-2.44-1.76-3.28l1.8-2.64zM8.52 17.24c0.48 0.52 0.84 1.16 1 1.88h-2.28l1.28-1.88zM5.68 23.88c-2.16 0-3.96-1.76-3.96-3.96s1.76-3.92 3.96-3.92c0.52 0 1 0.12 1.48 0.28l-2.16 3.2c-0.36 0.44-0.040 1.28 0.68 1.28v0 0h3.84c-0.4 1.8-2 3.12-3.84 3.12zM25.8 23.88c-2.16 0-3.96-1.76-3.96-3.96 0-1.2 0.56-2.32 1.44-3.040l1.8 3.44c0.2 0.32 0.68 0.56 1.16 0.36 0.4-0.16 0.56-0.72 0.36-1.12l-1.8-3.4c0.32-0.080 0.68-0.16 1.040-0.16 2.16 0 3.96 1.76 3.96 3.96s-1.8 3.92-4 3.92zM9.8 9.4h3.080c0.48 0 0.84-0.36 0.84-0.84s-0.36-0.84-0.84-0.84h-3.080c-0.48 0-0.84 0.36-0.84 0.84-0.040 0.44 0.36 0.84 0.84 0.84z" />
              {/* front wheel becomes a call button: solid disc with phone cut out */}
              <circle cx="25.8" cy="19.9" r="5.64" fill="currentColor" />
              <g transform="translate(21.6,15.7) scale(0.355)" fill="#8dc63f">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </g>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
