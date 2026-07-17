/* Contenu aligné sur le guide de voyage Burundi — édition 2026 */

export type Experience = {
  number: string;
  title: string;
  tag: string;
  description: string;
};

export const experiences: Experience[] = [
  {
    number: "01",
    title: "Des collines à la tasse",
    tag: "Terroir",
    description:
      "« Le Burundi a le meilleur café ! » Arabica d'altitude cultivé en petites parcelles familiales autour de Kayanza, Ngozi ou Kirundo : marchez dans les collines où il pousse, de la cerise rouge à la tasse.",
  },
  {
    number: "02",
    title: "Les plages du Tanganyika",
    tag: "Détente",
    description:
      "Au nord de Rumonge, sable doré et eaux turquoise du plus long lac d'eau douce d'Afrique : baignade, sorties en bateau et couchers de soleil sur les montagnes du Congo.",
  },
  {
    number: "03",
    title: "Randonnées sur la crête",
    tag: "Aventure",
    description:
      "Des boucles familiales du campus Kiriri à la grande traversée Bujumbura-Ijenda (34 km), en passant par les sentiers de Teza entre théiers et forêt de la Kibira.",
  },
  {
    number: "04",
    title: "Le Burundi à vélo",
    tag: "Sport",
    description:
      "Rizières de la Rusizi, boucle de Muyira, col de Rushubi : le VTT est roi autour de Bujumbura, et la communauté cycliste Zinduka vous ouvre ses routes au lever du soleil.",
  },
  {
    number: "05",
    title: "Les marchés colorés",
    tag: "Rencontres",
    description:
      "Du grand marché Sioni de Bujumbura aux halles artisanales : vanneries, céramiques de Mutoyi, bijoux en corne de vache et scènes de vie quotidienne.",
  },
  {
    number: "06",
    title: "Les tambours sacrés",
    tag: "Culture",
    description:
      "À Gishora, la danse rituelle du tambour royal (inscrite à l'UNESCO) se vit plus qu'elle ne se décrit : vibrations profondes, acrobaties et des siècles d'histoire royale.",
  },
  {
    number: "07",
    title: "Observer les oiseaux",
    tag: "Nature",
    description:
      "Du lac aux oiseaux de Kirundo aux lagunes de la Rusizi : pélicans, martins-chasseurs, pygargues… un studio photo à ciel ouvert pour les amoureux de faune.",
  },
  {
    number: "08",
    title: "La gastronomie locale",
    tag: "Saveurs",
    description:
      "Mukeke grillé du lac, brochettes au feu de bois, buffets traditionnels et jus d'ananas maison, sans oublier la fameuse question locale : votre bière, « chaude ou froide » ?",
  },
];
