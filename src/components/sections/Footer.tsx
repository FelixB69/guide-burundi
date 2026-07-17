import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/guide";

/** Footer : rappel du titre en très grand façon couverture, liens et crédits. */
export function Footer() {
  return (
    <footer className="overflow-hidden bg-cream">
      <div className="mx-auto max-w-7xl px-5 pt-20 pb-10 md:px-8">
        <Reveal>
          <p
            aria-hidden="true"
            className="text-center font-display text-[clamp(4rem,16vw,14rem)] leading-none font-bold tracking-[0.05em] text-terracotta select-none"
          >
            {site.title}
          </p>
        </Reveal>

        <hr className="dotted-rule mt-10" />

        <div className="mt-10 flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <p className="max-w-xs text-center text-sm text-ink-muted md:text-left">
            {site.tagline}. Déclinaison web du guide papier, à emporter partout avec vous.
          </p>

          <nav aria-label="Liens du pied de page">
            <ul className="flex flex-wrap items-center justify-center gap-6">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="kicker text-ink transition-colors duration-300 hover:text-terracotta"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={site.pdfPath}
                  download={site.pdfFileName}
                  className="kicker text-terracotta"
                >
                  Le guide PDF
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <hr className="dotted-rule mt-10" />

        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs text-ink-muted md:flex-row">
          <p>
            © {new Date().getFullYear()} Guide de voyage Burundi, édition 2026, ISBN
            979-10-983862-0-6.
          </p>
          <p>
            Réalisé bénévolement par {site.author}. Diffusion gratuite, reproduction et usage
            commercial interdits sans accord écrit.
          </p>
        </div>
      </div>
    </footer>
  );
}
