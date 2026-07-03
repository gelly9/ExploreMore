import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { site, SITE_URL } from "@/content/site";
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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Explore More — E-bike Rental in Sovata",
  description:
    "Premium electric mountain bike rentals in Sovata. Explore Bear Lake, the salt hills and forest trails — by the hour.",
};

export const viewport: Viewport = {
  themeColor: "#2a2a24",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <head>
        {/* The hero image is the LCP element on every route — fetch it first. */}
        <link rel="preload" as="image" href={asset(site.media.hero)} fetchPriority="high" />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
