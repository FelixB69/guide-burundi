"use client";

import { useRef } from "react";
import { useInView, useReducedMotion } from "motion/react";

/**
 * Hook de révélation au scroll : renvoie une ref à poser sur l'élément
 * et `shown`, vrai quand l'élément entre dans le viewport (une seule fois).
 * Si l'utilisateur préfère réduire les animations, l'élément est montré
 * immédiatement, sans translation.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });
  const reducedMotion = useReducedMotion();

  return { ref, shown: inView || !!reducedMotion, reducedMotion: !!reducedMotion };
}
