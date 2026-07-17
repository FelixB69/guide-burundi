"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

/**
 * next/image avec repli : si le fichier est absent de /public/images,
 * affiche un placeholder crème avec le nom du fichier attendu,
 * pour que la mise en page reste lisible pendant l'intégration.
 */
export function SmartImage(props: ImageProps) {
  const [failed, setFailed] = useState(false);
  const src = typeof props.src === "string" ? props.src : "";
  const fileName = src.split("/").pop() ?? "image";

  if (failed) {
    return (
      <div
        role="img"
        aria-label={typeof props.alt === "string" ? props.alt : fileName}
        className={`flex items-center justify-center bg-sand ${
          props.fill ? "absolute inset-0" : "h-full w-full"
        }`}
      >
        <span className="border border-dashed border-terracotta/50 px-3 py-1.5 font-display text-[0.7rem] tracking-[0.15em] text-ink-muted uppercase">
          {fileName}
        </span>
      </div>
    );
  }

  // eslint-disable-next-line jsx-a11y/alt-text -- alt est transmis via props
  return <Image {...props} onError={() => setFailed(true)} />;
}
