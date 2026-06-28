import { site } from "@/content/site";

// Build a wa.me click-to-chat link with an optional prefilled message.
// wa.me needs the international number as digits only (no +, spaces).
export const waHref = (message?: string) => {
  const num = site.phone.replace(/\D/g, "");
  return message
    ? `https://wa.me/${num}?text=${encodeURIComponent(message)}`
    : `https://wa.me/${num}`;
};
