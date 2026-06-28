import { ScrollProgress } from "@/components/ScrollProgress";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Prices } from "@/components/Prices";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <About />
        <Prices />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
