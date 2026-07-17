import { Reveal } from "@/components/ui/Reveal";

type SectionHeadingProps = {
  kicker: string;
  title: string;
  /** Numéro façon page de guide, affiché dans le badge carré terracotta */
  number: string;
  /** Chapeau optionnel sous le titre */
  lead?: string;
  onDark?: boolean;
};

/**
 * En-tête de section reprenant la signature du guide papier :
 * kicker espacé, filet horizontal fin terracotta et badge carré numéroté,
 * puis titre display en Jost.
 */
export function SectionHeading({ kicker, title, number, lead, onDark }: SectionHeadingProps) {
  const accent = onDark ? "text-cream" : "text-terracotta";

  return (
    <Reveal>
      <div className="flex items-center gap-4">
        <p className={`kicker ${onDark ? "text-cream/90" : "text-olive"}`}>{kicker}</p>
        <span
          aria-hidden="true"
          className={`h-px flex-1 ${onDark ? "bg-cream/40" : "bg-terracotta/50"}`}
        />
        <span
          aria-hidden="true"
          className={`flex h-8 w-8 items-center justify-center font-display text-sm font-semibold ${
            onDark ? "bg-cream text-terracotta" : "bg-terracotta text-cream"
          }`}
        >
          {number}
        </span>
      </div>

      <h2
        className={`mt-6 max-w-3xl font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] font-semibold tracking-tight uppercase ${accent}`}
      >
        {title}
      </h2>

      {lead ? (
        <p
          className={`mt-5 max-w-2xl text-lg leading-relaxed ${
            onDark ? "text-cream/85" : "text-ink-muted"
          }`}
        >
          {lead}
        </p>
      ) : null}
    </Reveal>
  );
}
