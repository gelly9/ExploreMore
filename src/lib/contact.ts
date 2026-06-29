import { site } from "@/content/site";

// Build a wa.me click-to-chat link with an optional prefilled message.
// wa.me needs the international number as digits only (no +, spaces).
export const waHref = (message?: string) => {
  const num = site.phone.replace(/\D/g, "");
  return message
    ? `https://wa.me/${num}?text=${encodeURIComponent(message)}`
    : `https://wa.me/${num}`;
};

// Pretty-print the phone for display: "+40 753 538 524".
// Keeps the +40 country code, then groups the rest in threes.
export const phoneDisplay = () => {
  const digits = site.phone.replace(/\D/g, "");
  const cc = digits.slice(0, 2);
  const rest = digits.slice(2).match(/.{1,3}/g)?.join(" ") ?? digits.slice(2);
  return `+${cc} ${rest}`;
};
