# Guide Burundi — site vitrine

Déclinaison web du guide de voyage papier : one-page éditoriale pour promouvoir le tourisme
au Burundi et télécharger le guide en PDF.

## Démarrer

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # vérification production
```

Déployable tel quel sur Vercel, sans backend.

## Où modifier quoi

| Quoi | Où |
| --- | --- |
| Textes des destinations | `src/data/destinations.ts` |
| Cartes du carrousel expériences | `src/data/experiences.ts` |
| Infos pratiques (visa, monnaie…) | `src/data/practical.ts` |
| Chiffres clés du bandeau | `src/data/stats.ts` (extraits du guide édition 2026) |
| Titre, tagline, nav, pitch et chapitres du guide, textes « Pourquoi » | `src/data/guide.ts` |
| Couleurs et typo (design tokens) | `src/app/globals.css`, bloc `@theme` |
| Métadonnées SEO et domaine | `src/app/layout.tsx` (`siteUrl` à remplacer) |
| Image de partage réseaux sociaux | `src/app/opengraph-image.tsx` |

## Le PDF

Le vrai guide (édition 2026, 60 pages) est en place dans `public/guide-burundi.pdf` ;
pour une nouvelle édition, remplacez-le en gardant le même nom de fichier, puis régénérez
la couverture du mockup :

```bash
sips -s format jpeg -s formatOptions 85 --resampleWidth 1200 \
  public/guide-burundi.pdf --out public/images/couverture-guide.jpg
```

Le champ email de la section téléchargement est purement client-side : un `TODO` dans
`src/components/sections/DownloadGuide.tsx` indique où brancher un service d'emailing
plus tard. Le téléchargement fonctionne sans email.

## Images à fournir (`public/images/`) — 10 photos

Tant qu'une image manque, un placeholder crème affiche le nom du fichier attendu.
JPEG qualité 80 recommandé, largeur ~2000 px (hero : 2560 px). La colonne « Page du PDF »
indique la photo du guide qui convient (mêmes auteurs, réutilisable).

| Fichier | Ratio | Sujet | Page du PDF |
| --- | --- | --- | --- |
| `hero.jpg` | 16:9 (paysage large) | Collines cultivées | 1 (photo du bas de la couverture) |
| `pourquoi-collines.jpg` | 3:4 (portrait) | Collines et rizières | 5 |
| `bujumbura.jpg` | ~1:1 | Ville entre lac et montagnes | 8 |
| `tanganyika.jpg` | ~2:1 (panoramique) | Village de pêcheurs, barques | 38 |
| `kibira.jpg` | ~1:2 (portrait haut) | Mer de thé de Teza | 24 |
| `karera.jpg` | ~1:2 (portrait haut) | Cascade ou pont suspendu | 41 (ou 39) |
| `rusizi.jpg` | ~1:1 | Hippopotame du delta | 19 (ou crocodile p. 18) |
| `gishora.jpg` | ~2:1 (panoramique) | Tambourinaires de Gishora | 59 (haut gauche) ou 28 |
| `bururi.jpg` | ~1:1 | Chimpanzé en forêt | 42 |
| `lac-aux-oiseaux.jpg` | ~2:1 (panoramique) | Palmiers et nénuphars | 45 |
| `couverture-guide.jpg` | 3:4 (portrait) | Déjà générée depuis la page 1 du PDF | — |

Les autres emplacements n'utilisent volontairement pas de photo : les cartes du carrousel
Expériences sont des fiches typographiques, et Gitega, la source du Nil et le parc de la
Ruvubu sont des tuiles éditoriales dans la grille des destinations (modifiable : il suffit
d'ajouter `image` et `alt` dans `src/data/destinations.ts` pour repasser une tuile en photo).

## Structure

- `src/components/sections/` — les 9 sections de la page, dans l'ordre d'affichage.
- `src/components/ui/` — briques réutilisables : `Reveal` (apparition au scroll),
  `SmartImage` (placeholder si image manquante), `SectionHeading` (kicker + filet +
  badge numéroté), `CountUp`, `Cursor` (curseur personnalisé desktop), `GrainOverlay`.
- `src/hooks/useReveal.ts` — hook d'apparition au scroll, respecte
  `prefers-reduced-motion`.
