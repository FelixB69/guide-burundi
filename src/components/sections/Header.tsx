"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { site } from "@/data/guide";

/**
 * Header sticky : transparent sur le hero, devient crème avec blur
 * et filet pointillé une fois la page scrollée.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        solid
          ? "border-b-2 border-dotted border-terracotta/50 bg-cream/85 backdrop-blur-md"
          : "border-b-2 border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link
          href="#top"
          className={`font-display text-xl font-bold tracking-[0.3em] ${
            solid ? "text-terracotta" : "text-cream"
          }`}
          aria-label="Burundi, retour en haut de page"
        >
          BURUNDI
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-8 lg:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`kicker transition-colors duration-300 hover:text-terracotta ${
                solid ? "text-ink" : "text-cream"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.pdfPath}
            download={site.pdfFileName}
            className="hidden items-center gap-2 bg-terracotta px-5 py-2.5 font-display text-xs font-semibold tracking-[0.2em] text-cream uppercase transition-colors duration-300 hover:bg-terracotta-dark sm:flex"
          >
            <Download size={14} aria-hidden="true" />
            Télécharger le guide
          </a>

          <button
            type="button"
            className={`p-2 lg:hidden ${solid ? "text-ink" : "text-cream"}`}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav
          id="menu-mobile"
          aria-label="Navigation mobile"
          className="border-t-2 border-dotted border-terracotta/50 bg-cream px-5 py-6 lg:hidden"
        >
          <ul className="flex flex-col gap-5">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="kicker text-ink"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={site.pdfPath}
                download={site.pdfFileName}
                className="inline-flex items-center gap-2 bg-terracotta px-5 py-2.5 font-display text-xs font-semibold tracking-[0.2em] text-cream uppercase"
                onClick={() => setMenuOpen(false)}
              >
                <Download size={14} aria-hidden="true" />
                Télécharger le guide
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
