"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { Check, Download } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SmartImage } from "@/components/ui/SmartImage";
import { guide, site } from "@/data/guide";

/** Mockup de la couverture avec tilt 3D subtil suivant la souris. */
function CoverMockup() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 150, damping: 20 });

  const onMouseMove = (e: React.MouseEvent) => {
    if (reducedMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    rotateY.set(((e.clientX - rect.left) / rect.width - 0.5) * 14);
    rotateX.set(((e.clientY - rect.top) / rect.height - 0.5) * -14);
  };

  const onMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ perspective: 1000 }}
      className="flex justify-center"
    >
      <motion.div
        style={{ rotateX: springX, rotateY: springY }}
        className="relative aspect-[3/4] w-64 rotate-[-2deg] shadow-[24px_28px_60px_rgba(31,29,27,0.35)] md:w-80"
      >
        <SmartImage
          src={guide.coverImage}
          alt={guide.coverAlt}
          fill
          sizes="320px"
          className="object-cover"
        />
        {/* Tranche du livre suggérée par un filet clair */}
        <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1 bg-cream/30" />
      </motion.div>
    </div>
  );
}

/** Section téléchargement : fond terracotta, mockup 3D, chapitres et bouton PDF. */
export function DownloadGuide() {
  const [email, setEmail] = useState("");
  const [emailSaved, setEmailSaved] = useState(false);

  const onDownloadClick = () => {
    // Le téléchargement fonctionne toujours, avec ou sans email.
    if (email.trim()) {
      // TODO: brancher un service d'emailing (Brevo, Mailchimp…) pour enregistrer l'adresse.
      setEmailSaved(true);
    }
  };

  return (
    <section id="telecharger" className="scroll-mt-20 bg-terracotta">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <Reveal>
          <CoverMockup />
        </Reveal>

        <div>
          <SectionHeading kicker={guide.kicker} title={guide.title} number="05" onDark />

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl leading-relaxed text-cream/90">{guide.pitch}</p>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="mt-8 space-y-3">
              {guide.chapters.map((chapter, i) => (
                <li key={chapter} className="flex items-baseline gap-4 text-cream/95">
                  <span
                    aria-hidden="true"
                    className="font-display text-sm font-semibold text-cream/60"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="border-b border-dotted border-cream/30 pb-2 text-sm md:text-base">
                    {chapter}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <label htmlFor="email-guide" className="sr-only">
                Votre email (facultatif) pour recevoir les mises à jour du guide
              </label>
              <input
                id="email-guide"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre email (facultatif)"
                autoComplete="email"
                className="flex-1 border border-cream/40 bg-terracotta-dark/40 px-5 py-4 text-cream placeholder:text-cream/60 focus:border-cream"
              />
              <a
                href={site.pdfPath}
                download={site.pdfFileName}
                onClick={onDownloadClick}
                className="flex items-center justify-center gap-3 bg-cream px-8 py-4 font-display text-sm font-bold tracking-[0.2em] text-terracotta uppercase transition-colors duration-300 hover:bg-sand"
              >
                <Download size={18} aria-hidden="true" />
                Télécharger le guide
              </a>
            </div>
            <p className="mt-3 flex items-center gap-2 text-xs text-cream/70" role="status">
              {emailSaved ? (
                <>
                  <Check size={14} aria-hidden="true" />
                  Merci ! Vous recevrez les prochaines éditions du guide.
                </>
              ) : (
                "PDF gratuit, sans inscription. L'email sert uniquement à vous prévenir des mises à jour."
              )}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
