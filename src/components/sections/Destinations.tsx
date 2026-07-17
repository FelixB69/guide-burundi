import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SmartImage } from "@/components/ui/SmartImage";
import { destinations, type Destination } from "@/data/destinations";

const sizeClasses: Record<Destination["size"], string> = {
  large: "md:col-span-2 md:row-span-2",
  wide: "md:col-span-2",
  tall: "md:row-span-2",
  normal: "",
};

/** Tuile éditoriale typographique pour les lieux sans photo, façon encadré du guide. */
function TextTile({ destination }: { destination: Destination }) {
  return (
    <article className="relative flex h-full min-h-[240px] flex-col justify-between border-2 border-dotted border-terracotta/60 bg-sand p-5">
      <span
        aria-hidden="true"
        className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center bg-terracotta font-display text-sm font-semibold text-cream"
      >
        {destination.number}
      </span>
      <p
        aria-hidden="true"
        className="font-display text-6xl leading-none font-bold text-terracotta/15"
      >
        {destination.number}
      </p>
      <div>
        <p className="kicker text-[0.6rem] text-olive">{destination.region}</p>
        <h3 className="mt-1 font-display text-xl font-semibold tracking-wide text-terracotta uppercase">
          {destination.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">{destination.description}</p>
      </div>
    </article>
  );
}

function DestinationCard({ destination, index }: { destination: Destination; index: number }) {
  if (!destination.image) {
    return (
      <Reveal delay={(index % 4) * 0.07} className={`h-full ${sizeClasses[destination.size]}`}>
        <TextTile destination={destination} />
      </Reveal>
    );
  }

  return (
    <Reveal delay={(index % 4) * 0.07} className={`h-full ${sizeClasses[destination.size]}`}>
      <article className="group relative h-full min-h-[240px] overflow-hidden bg-sand">
        <SmartImage
          src={destination.image}
          alt={destination.alt ?? destination.name}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
        />

        {/* Numéro façon page de guide */}
        <span
          aria-hidden="true"
          className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center bg-terracotta font-display text-sm font-semibold text-cream"
        >
          {destination.number}
        </span>

        {/* Liseré terracotta révélé au survol */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-2 z-10 border border-terracotta opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-ink/85 via-ink/40 to-transparent p-5 pt-16">
          <p className="kicker text-[0.6rem] text-cream/75">{destination.region}</p>
          <h3 className="mt-1 font-display text-xl font-semibold tracking-wide text-cream uppercase">
            {destination.name}
          </h3>
          <p className="mt-2 max-h-24 text-sm leading-relaxed text-cream/90 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:max-h-0 md:opacity-0 md:group-hover:max-h-24 md:group-hover:opacity-100">
            {destination.description}
          </p>
        </div>
      </article>
    </Reveal>
  );
}

/** Grille bento asymétrique des lieux emblématiques du guide. */
export function Destinations() {
  return (
    <section id="destinations" className="scroll-mt-20 bg-cream">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          kicker="Les incontournables"
          title="Destinations"
          number="02"
          lead="Onze lieux qui racontent le pays : du bouillonnement de Bujumbura aux savanes de la Ruvubu, chaque étape porte un numéro — comme un chapitre du guide."
        />

        <div className="mt-14 grid auto-rows-[240px] grid-cols-1 gap-4 grid-flow-dense md:grid-cols-4 md:auto-rows-[220px]">
          {destinations.map((destination, i) => (
            <DestinationCard key={destination.number} destination={destination} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
