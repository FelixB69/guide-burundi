"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

/**
 * Curseur personnalisé : petit disque terracotta qui suit la souris
 * et grossit au survol des liens et boutons. Activé uniquement sur
 * pointeur fin (desktop), jamais sur tactile ni en reduced-motion.
 */
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const reducedMotion = useReducedMotion();

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    if (reducedMotion || !window.matchMedia("(pointer: fine)").matches) return;

    setEnabled(true);
    document.documentElement.classList.add("custom-cursor-active");

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement | null;
      setHovering(!!target?.closest("a, button, [data-cursor='hover']"));
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [reducedMotion, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-50 hidden md:block"
      style={{ x: springX, y: springY }}
    >
      <motion.div
        className="-translate-x-1/2 -translate-y-1/2 rounded-full bg-terracotta"
        animate={{
          width: hovering ? 40 : 12,
          height: hovering ? 40 : 12,
          opacity: hovering ? 0.35 : 0.85,
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.div>
  );
}
