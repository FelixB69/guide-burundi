import { CountUp } from "@/components/ui/CountUp";
import { Reveal } from "@/components/ui/Reveal";
import { stats } from "@/data/stats";

/** Bandeau terracotta de chiffres clés, compteurs animés au scroll. */
export function StatsBar() {
  return (
    <section aria-label="Le Burundi en chiffres" className="bg-terracotta">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-10 px-5 py-14 md:grid-cols-5 md:px-8 md:py-16">
        {stats.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 0.08}
            className="text-center last:odd:col-span-2 md:last:odd:col-span-1"
          >
            <p className="font-display text-4xl font-bold text-cream md:text-5xl">
              <CountUp value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mx-auto mt-3 max-w-[16ch] font-display text-[0.7rem] tracking-[0.18em] text-cream/85 uppercase">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
