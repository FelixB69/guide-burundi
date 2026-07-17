"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ChevronDown, Download } from "lucide-react";
import { SmartImage } from "@/components/ui/SmartImage";
import { site } from "@/data/guide";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Hero plein écran : photo parallaxe, titre lettre par lettre, double CTA. */
export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", reducedMotion ? "0%" : "18%"]);

  const letters = site.title.split("");

  return (
    <section ref={sectionRef} id="top" className="relative h-svh min-h-[600px] overflow-hidden">
      <motion.div className="absolute inset-0 will-change-transform" style={{ y: imageY }}>
        <SmartImage
          src="/images/hero.jpg"
          alt="Collines cultivées du Burundi au lever du soleil"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/20 to-ink/70"
        />
      </motion.div>

      <div className="relative flex h-full flex-col items-center justify-center px-5 text-center">
        <motion.p
          initial={{ opacity: 0, y: reducedMotion ? 0 : -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          className="band px-6 py-2 text-xs font-semibold md:text-sm"
        >
          Guide de voyage
        </motion.p>

        <h1
          aria-label={site.title}
          className="mt-6 font-display text-[clamp(3.5rem,17vw,14rem)] leading-none font-bold tracking-[0.05em] text-cream"
        >
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              aria-hidden="true"
              className="inline-block"
              initial={{ opacity: 0, y: reducedMotion ? 0 : 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 + i * 0.07, ease: EASE }}
            >
              {letter}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: reducedMotion ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1, ease: EASE }}
          className="mt-4 max-w-xl font-display text-lg tracking-[0.12em] text-cream/90 uppercase md:text-xl"
        >
          {site.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: reducedMotion ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3, ease: EASE }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href={site.pdfPath}
            download={site.pdfFileName}
            className="flex items-center gap-2 bg-terracotta px-7 py-4 font-display text-sm font-semibold tracking-[0.2em] text-cream uppercase transition-colors duration-300 hover:bg-terracotta-dark"
          >
            <Download size={16} aria-hidden="true" />
            Télécharger le guide (PDF)
          </a>
          <a
            href="#decouvrir"
            className="border border-cream/70 px-7 py-4 font-display text-sm font-semibold tracking-[0.2em] text-cream uppercase transition-colors duration-300 hover:bg-cream hover:text-ink"
          >
            Découvrir le pays
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#decouvrir"
        aria-label="Faire défiler vers la section Découvrir"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.7 }}
      >
        <motion.span
          className="block"
          animate={reducedMotion ? undefined : { y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={28} aria-hidden="true" />
        </motion.span>
      </motion.a>
    </section>
  );
}
