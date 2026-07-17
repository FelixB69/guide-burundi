"use client";

import { motion } from "motion/react";
import { useReveal } from "@/hooks/useReveal";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Délai en secondes, utile pour les staggers manuels (0.06–0.08 entre items) */
  delay?: number;
  /** Translation verticale initiale en px */
  y?: number;
};

/**
 * Révélation au scroll : opacité + translateY, une seule fois,
 * avec respect de prefers-reduced-motion (aucune translation dans ce cas).
 */
export function Reveal({ children, className, delay = 0, y = 24 }: RevealProps) {
  const { ref, shown, reducedMotion } = useReveal();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: reducedMotion ? 0 : y }}
      animate={shown ? { opacity: 1, y: 0 } : undefined}
      transition={{
        duration: reducedMotion ? 0 : 0.7,
        delay: reducedMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
