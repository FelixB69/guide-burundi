import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { Why } from "@/components/sections/Why";
import { Destinations } from "@/components/sections/Destinations";
import { Experiences } from "@/components/sections/Experiences";
import { Practical } from "@/components/sections/Practical";
import { DownloadGuide } from "@/components/sections/DownloadGuide";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-terracotta focus:px-4 focus:py-2 focus:text-cream"
      >
        Aller au contenu
      </a>

      <Header />

      <main id="contenu">
        <Hero />
        <StatsBar />
        <Why />
        <Destinations />
        <Experiences />
        <Practical />
        <DownloadGuide />
      </main>

      <Footer />
    </>
  );
}
