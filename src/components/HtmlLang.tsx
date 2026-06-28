"use client";

import { useEffect } from "react";
import { Lang } from "@/content/site";

// The root <html lang> is statically "ro"; correct it for /hu and /en so
// JS-aware crawlers and assistive tech see the right language. hreflang +
// localized content/metadata remain the primary language signals.
export function HtmlLang({ lang }: { lang: Lang }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}
