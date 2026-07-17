"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

type CountUpProps = {
  value: number;
  suffix?: string;
  className?: string;
};

/** Compteur animé au scroll, formaté en français (2 670, 673…). */
export function CountUp({ value, suffix = "", className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const reducedMotion = useReducedMotion();

  const format = (n: number) => new Intl.NumberFormat("fr-FR").format(Math.round(n));

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView) return;

    if (reducedMotion) {
      el.textContent = format(value) + suffix;
      return;
    }

    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        el.textContent = format(latest) + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, value, suffix, reducedMotion]);

  return (
    <span ref={ref} className={className} aria-label={format(value) + suffix}>
      {reducedMotion ? format(value) + suffix : "0"}
    </span>
  );
}
