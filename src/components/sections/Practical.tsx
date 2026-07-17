import {
  Banknote,
  Bus,
  HeartPulse,
  Languages,
  ShieldCheck,
  Stamp,
  Sun,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { practicalInfos, type PracticalInfo } from "@/data/practical";

const icons: Record<PracticalInfo["icon"], LucideIcon> = {
  stamp: Stamp,
  banknote: Banknote,
  languages: Languages,
  sun: Sun,
  "heart-pulse": HeartPulse,
  "shield-check": ShieldCheck,
  bus: Bus,
  wifi: Wifi,
};

/** Carnet pratique : grille d'icônes sur fond sable, séparateurs pointillés. */
export function Practical() {
  return (
    <section id="infos-pratiques" className="scroll-mt-20 bg-sand">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          kicker="Carnet pratique"
          title="Avant de partir"
          number="04"
          lead="L'essentiel pour préparer votre voyage sereinement. Le guide PDF détaille chaque point avec adresses et budgets."
        />

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {practicalInfos.map((info, i) => {
            const Icon = icons[info.icon];
            return (
              <Reveal key={info.title} delay={(i % 4) * 0.07}>
                <div className="border-t-2 border-dotted border-terracotta/50 pt-6">
                  <Icon size={26} strokeWidth={1.6} className="text-terracotta" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-sm font-semibold tracking-[0.18em] text-ink uppercase">
                    {info.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{info.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
