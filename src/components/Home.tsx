import { dict, Lang } from "@/content/site";
import { localBusinessJsonLd } from "@/lib/seo";
import { HtmlLang } from "./HtmlLang";
import { ScrollProgress } from "./ScrollProgress";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { About } from "./About";
import { Prices } from "./Prices";
import { Gallery } from "./Gallery";
import { Faq } from "./Faq";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { FloatingWhatsApp } from "./FloatingWhatsApp";

// Shared page composition rendered by each language route (/, /hu/, /en/).
// Content for the language is selected here and passed down as props.
export function Home({ lang }: { lang: Lang }) {
  const t = dict[lang];
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd(lang)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HtmlLang lang={lang} />
      <ScrollProgress />
      <Header lang={lang} t={t} />
      <main>
        <Hero t={t} />
        <About t={t} />
        <Prices t={t} />
        <Gallery t={t} />
        <Faq t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
      <FloatingWhatsApp t={t} />
    </>
  );
}
