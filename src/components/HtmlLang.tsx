"use client";

import { useEffect } from "react";
import { Lang } from "@/content/site";

// The root <html lang> is statically "en"; correct it for /ro and /hu so
// JS-aware crawlers and assistive tech see the right language. hreflang +
// localized content/metadata remain the primary language signals.
export function HtmlLang({ lang }: { lang: Lang }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}
