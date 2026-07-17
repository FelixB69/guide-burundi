/* Informations issues du guide de voyage Burundi — édition 2026.
   TODO: vérifier les formalités de visa et les recommandations santé avant mise en ligne. */

export type PracticalInfo = {
  /** Nom d'icône lucide-react, mappé dans le composant Practical */
  icon:
    | "stamp"
    | "banknote"
    | "languages"
    | "sun"
    | "heart-pulse"
    | "shield-check"
    | "bus"
    | "wifi";
  title: string;
  text: string;
};

export const practicalInfos: PracticalInfo[] = [
  {
    icon: "stamp",
    title: "Visa",
    text: "Visa obtenu à l'arrivée à l'aéroport de Bujumbura ou auprès des ambassades. Passeport valide 6 mois requis.",
  },
  {
    icon: "banknote",
    title: "Monnaie",
    text: "Le franc burundais (BIF). Prévoyez des espèces ; dans les parcs, les non-résidents règlent en devises (euros ou dollars).",
  },
  {
    icon: "languages",
    title: "Langues",
    text: "Kirundi, français et anglais sont langues officielles, le swahili est véhiculaire. Amahoro ! Le guide inclut un lexique kirundi.",
  },
  {
    icon: "sun",
    title: "Meilleure période",
    text: "La saison sèche, de juin à septembre. L'altitude tempère le climat équatorial : 18 à 28 °C en moyenne toute l'année.",
  },
  {
    icon: "heart-pulse",
    title: "Santé",
    text: "Anti-moustique et crème solaire indispensables. La baignade est déconseillée autour de Bujumbura : préférez les plages du nord de Rumonge.",
  },
  {
    icon: "shield-check",
    title: "Sécurité",
    text: "Faites-vous accompagner de guides locaux pour les parcs et randonnées, et partez tôt pour éviter de rouler de nuit.",
  },
  {
    icon: "bus",
    title: "Se déplacer",
    text: "4x4 recommandé pour l'intérieur, surtout en saison des pluies. Les pistes se méritent : comptez du temps et savourez les paysages.",
  },
  {
    icon: "wifi",
    title: "Connectivité",
    text: "Cartes SIM locales économiques ; le Wi-Fi reste aléatoire hors des grandes villes, un charme de plus pour déconnecter.",
  },
];
