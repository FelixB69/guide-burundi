import type { Metadata } from "next";
import { Inter, Jost } from "next/font/google";
import "./globals.css";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { Cursor } from "@/components/ui/Cursor";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://guide-burundi.vercel.app"; // TODO: remplacer par le domaine définitif

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Burundi — Guide de voyage | Expériences authentiques au cœur de l'Afrique",
  description:
    "Découvrez le Burundi : le lac Tanganyika, les forêts de la Kibira, les tambourinaires de Gishora et la source du Nil. Téléchargez gratuitement le guide de voyage complet (édition 2026, PDF), réalisé par un collectif d'expatriés et de résidents.",
  authors: [{ name: "Le collectif du Guide Burundi" }],
  keywords: [
    "Burundi",
    "guide de voyage",
    "tourisme",
    "lac Tanganyika",
    "Bujumbura",
    "Gitega",
    "Afrique de l'Est",
  ],
  openGraph: {
    title: "Burundi — Guide de voyage",
    description:
      "Expériences authentiques au cœur de l'Afrique. Téléchargez le guide de voyage complet en PDF.",
    url: siteUrl,
    siteName: "Guide Burundi",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Burundi — Guide de voyage",
    description:
      "Expériences authentiques au cœur de l'Afrique. Téléchargez le guide de voyage complet en PDF.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${jost.variable} ${inter.variable} antialiased`}>
        {children}
        <GrainOverlay />
        <Cursor />
      </body>
    </html>
  );
}
