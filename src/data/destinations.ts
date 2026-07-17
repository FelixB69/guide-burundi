/* Contenu aligné sur le sommaire du guide de voyage Burundi — édition 2026 */

export type Destination = {
  /** Numéro façon page de guide, affiché dans le badge carré */
  number: string;
  name: string;
  region: string;
  description: string;
  /** Sans image, la carte devient une tuile éditoriale typographique */
  image?: string;
  alt?: string;
  /** Taille de la carte dans la grille bento */
  size: "large" | "wide" | "tall" | "normal";
};

export const destinations: Destination[] = [
  {
    number: "01",
    name: "Bujumbura",
    region: "Capitale économique",
    description:
      "Entre lac et montagnes, la ville cultive une âme singulière : marchés animés, patrimoine moderniste tropical et couchers de soleil féeriques sur le Tanganyika.",
    image: "/images/bujumbura.jpg",
    alt: "Vue de Bujumbura entre le lac Tanganyika et les montagnes",
    size: "large",
  },
  {
    number: "02",
    name: "Lac Tanganyika",
    region: "Nord de Rumonge",
    description:
      "Le plus long lac d'eau douce d'Afrique et le deuxième plus profond du monde. Au nord de Rumonge, plages de sable doré, baignade et sorties en bateau.",
    image: "/images/tanganyika.jpg",
    alt: "Plage bordée de palmiers au bord du lac Tanganyika",
    size: "wide",
  },
  {
    number: "03",
    name: "Gitega",
    region: "Capitale politique",
    description:
      "À 1 700 m d'altitude, l'ancien cœur royal du pays abrite le Musée national fondé en 1955 et une atmosphère provinciale calme et traditionnelle.",
    size: "normal",
  },
  {
    number: "04",
    name: "Parc national de la Kibira",
    region: "Teza et la crête Congo-Nil",
    description:
      "40 000 hectares de forêts de montagne, refuge des chimpanzés et des colobes, bordés par la mer de verdure des plantations de thé de Teza.",
    image: "/images/kibira.jpg",
    alt: "Plantations de thé de Teza en lisière de la forêt de la Kibira",
    size: "tall",
  },
  {
    number: "05",
    name: "Source du Nil",
    region: "Mont Kikizi, près de Rutovu",
    description:
      "La source la plus méridionale du Nil blanc, identifiée en 1934 par Burckhardt Waldecker et marquée d'une pyramide portant l'inscription Caput Nili.",
    size: "normal",
  },
  {
    number: "06",
    name: "Chutes de la Karera",
    region: "Hauts-lieux de Rutana",
    description:
      "Cinq cascades étagées — la plus grande tombe de 46 mètres — reliées par un labyrinthe de sentiers forestiers et un pont suspendu au-dessus de la chute principale.",
    image: "/images/karera.jpg",
    alt: "Cascades de la Karera dans la végétation tropicale",
    size: "tall",
  },
  {
    number: "07",
    name: "Parc national de la Rusizi",
    region: "À 15 km de Bujumbura",
    description:
      "Hippopotames, crocodiles du Nil et plus de 200 espèces d'oiseaux dans le delta et la palmeraie de la Rusizi — l'échappée nature la plus accessible depuis la capitale.",
    image: "/images/rusizi.jpg",
    alt: "Hippopotame dans la rivière Rusizi",
    size: "normal",
  },
  {
    number: "08",
    name: "Tambourinaires de Gishora",
    region: "Patrimoine UNESCO",
    description:
      "Sur le champ royal fondé par le mwami Ntare Rugamba, la danse rituelle du tambour royal — inscrite à l'UNESCO en 2014 — fait vibrer la terre entière.",
    image: "/images/gishora.jpg",
    alt: "Tambourinaires de Gishora en pleine performance",
    size: "wide",
  },
  {
    number: "09",
    name: "Bururi",
    region: "Trek des chimpanzés",
    description:
      "L'un des rares lieux d'Afrique de l'Est où tenter un trek à la recherche des chimpanzés : une aventure brute, sans garantie, au cœur d'une forêt préservée.",
    image: "/images/bururi.jpg",
    alt: "Chimpanzé dans la forêt de Bururi",
    size: "normal",
  },
  {
    number: "10",
    name: "Lac aux oiseaux",
    region: "Kirundo, au nord du pays",
    description:
      "425 hectares de sanctuaire pour une vingtaine d'espèces migratrices — pélicans, aigrettes, martins-pêcheurs — et un miroir cuivré au crépuscule.",
    image: "/images/lac-aux-oiseaux.jpg",
    alt: "Palmiers et nénuphars au bord du lac aux oiseaux",
    size: "wide",
  },
  {
    number: "11",
    name: "Parc national de la Ruvubu",
    region: "Le plus grand parc du pays",
    description:
      "50 800 hectares de savanes et de galeries forestières le long de la rivière Ruvubu : buffles, hippopotames, antilopes et plus de 400 espèces d'oiseaux.",
    size: "wide",
  },
];
