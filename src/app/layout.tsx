import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";

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
  title: "Explore More — E-bike Adventures in Sovata",
  description:
    "Premium electric mountain bike rentals in Sovata. See how far you can ride — Bear Lake, the salt hills and forest trails, by the hour.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ro"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
