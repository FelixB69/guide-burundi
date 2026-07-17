/* Chiffres extraits du guide de voyage Burundi — édition 2026 */

export type Stat = {
  value: number;
  suffix?: string;
  label: string;
};

export const stats: Stat[] = [
  {
    value: 673,
    suffix: " km",
    label: "de long : le plus long lac d'eau douce d'Afrique",
  },
  {
    value: 1470,
    suffix: " m",
    label: "de profondeur, le 2e lac le plus profond du monde",
  },
  {
    value: 2600,
    suffix: " m",
    label: "d'altitude, des rives du lac à la crête Congo-Nil",
  },
  {
    value: 400,
    suffix: "+",
    label: "espèces d'oiseaux au parc national de la Ruvubu",
  },
  {
    value: 12,
    label: "régions explorées, testées et racontées dans le guide",
  },
];
