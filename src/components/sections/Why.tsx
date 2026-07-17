"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SmartImage } from "@/components/ui/SmartImage";
import { useReveal } from "@/hooks/useReveal";
import { why } from "@/data/guide";

/** Image révélée au scroll par un balayage de clip-path, façon maquette print. */
function MaskedImage({
  src,
  alt,
  className,
  delay = 0,
}: {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
}) {
  const { ref, shown, reducedMotion } = useReveal();

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className ?? ""}`}
      initial={{ clipPath: reducedMotion ? "inset(0 0 0 0)" : "inset(0 100% 0 0)" }}
      animate={shown ? { clipPath: "inset(0 0% 0 0)" } : undefined}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <SmartImage
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 30vw, 80vw"
        className="object-cover"
      />
    </motion.div>
  );
}

/** Section éditoriale asymétrique : texte justifié à gauche, grande image révélée à droite. */
export function Why() {
  return (
    <section id="decouvrir" className="scroll-mt-20 bg-cream">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading kicker={why.kicker} title={why.title} number="01" />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div className="space-y-6">
            {why.paragraphs.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p
                  className={`prose-justify text-ink/90 ${
                    i === 0 ? "first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-6xl first-letter:leading-[0.85] first-letter:text-terracotta" : ""
                  }`}
                >
                  {paragraph}
                </p>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <hr className="dotted-rule mt-10" />
              <p className="kicker mt-6 text-olive">Amahoro — ici, on se salue par la paix</p>
            </Reveal>
          </div>

          <div className="self-start lg:mt-6">
            <MaskedImage src={why.image.src} alt={why.image.alt} className="aspect-[3/4]" />
            <p className="kicker mt-4 text-right text-[0.6rem] text-ink-muted">
              Les collines cultivées du Burundi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
