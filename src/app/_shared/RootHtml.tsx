import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import "../globals.css";
import { Lang, site } from "@/content/site";
import { asset } from "@/lib/asset";

const display = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
});

const body = Hanken_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
});

// Shared document shell. Each language route group has its own root layout so
// <html lang> is emitted server-side (correct for /ro and /hu without JS); they
// all delegate the actual markup here to avoid duplicating the font/head setup.
export function RootHtml({
  lang,
  children,
}: {
  lang: Lang;
  children: React.ReactNode;
}) {
  return (
    <html lang={lang} className={`${display.variable} ${body.variable} h-full antialiased`}>
      <head>
        {/* The hero image (video poster when a video hero is set) is the LCP
            element on every route — fetch it first. */}
        <link
          rel="preload"
          as="image"
          href={asset((site.media.heroVideo && site.media.heroPoster) || site.media.hero)}
          fetchPriority="high"
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
