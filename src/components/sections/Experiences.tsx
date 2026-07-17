"use client";

import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { experiences } from "@/data/experiences";

/** Carrousel horizontal drag/scroll avec snap, cartes verticales façon fiches du guide. */
export function Experiences() {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ dragging: false, startX: 0, startScroll: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const onPointerDown = (e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track || e.pointerType !== "mouse") return;
    dragState.current = { dragging: true, startX: e.clientX, startScroll: track.scrollLeft };
    setIsDragging(true);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track || !dragState.current.dragging) return;
    track.scrollLeft = dragState.current.startScroll - (e.clientX - dragState.current.startX);
  };

  const endDrag = () => {
    dragState.current.dragging = false;
    setIsDragging(false);
  };

  const scrollByCard = (direction: 1 | -1) => {
    trackRef.current?.scrollBy({ left: direction * 340, behavior: "smooth" });
  };

  return (
    <section id="experiences" className="scroll-mt-20 overflow-hidden bg-cream">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="min-w-0 flex-1">
            <SectionHeading
              kicker="À vivre absolument"
              title="Expériences"
              number="03"
              lead="Le Burundi ne se visite pas depuis une vitre de minibus : il se goûte, se marche, s'écoute. Faites glisser pour explorer."
            />
          </div>
          <Reveal className="flex gap-2 pb-2">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Expériences précédentes"
              className="border border-terracotta p-3 text-terracotta transition-colors duration-300 hover:bg-terracotta hover:text-cream"
            >
              <ArrowLeft size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Expériences suivantes"
              className="border border-terracotta p-3 text-terracotta transition-colors duration-300 hover:bg-terracotta hover:text-cream"
            >
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </Reveal>
        </div>
      </div>

      <div
        ref={trackRef}
        role="region"
        aria-label="Carrousel des expériences"
        tabIndex={0}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        className={`no-scrollbar -mt-6 flex gap-5 overflow-x-auto px-5 pb-20 select-none md:px-8 ${
          isDragging ? "snap-none" : "snap-x snap-mandatory"
        }`}
        style={{ scrollPaddingInline: "1.25rem" }}
      >
        {experiences.map((experience, i) => (
          <Reveal
            key={experience.number}
            delay={i * 0.06}
            className="w-[280px] shrink-0 snap-start md:w-[320px]"
          >
            <article className="flex h-full min-h-[340px] flex-col border border-ink/10 bg-sand p-6">
              <div className="flex items-center justify-between">
                <p className="kicker text-[0.65rem] text-olive">{experience.tag}</p>
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 items-center justify-center bg-terracotta font-display text-sm font-semibold text-cream"
                >
                  {experience.number}
                </span>
              </div>
              <p
                aria-hidden="true"
                className="mt-8 font-display text-7xl leading-none font-bold text-terracotta/15"
              >
                {experience.number}
              </p>
              <h3 className="mt-4 font-display text-xl font-semibold tracking-wide text-terracotta uppercase">
                {experience.title}
              </h3>
              <hr className="dotted-rule my-3" />
              <p className="text-sm leading-relaxed text-ink-muted">{experience.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
