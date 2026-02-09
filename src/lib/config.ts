// Site configuration - Personnalise ces informations
export const siteConfig = {
  // Informations de base
  name: "Codara",
  title: "Codara - Votre site vitrine pro, livré en 3 à 7 jours",
  description: "Vous êtes artisan, coach, thérapeute ou indépendant ? Je crée votre site vitrine professionnel, clé en main, en moins d'une semaine. Simple, efficace, sans jargon.",
  
  // Tes coordonnées
  contact: {
    email: "massin.aliouche.pro@gmail.com",
    location: "France",
  },
  
  // Réseaux sociaux
  socials: {
    linkedin: "https://www.linkedin.com/in/aliouche-massin/",
    github: "https://github.com/Massin-Aliouche",
  },
  
  // Navigation
  navigation: [
    { name: "Accueil", href: "#accueil" },
    { name: "Offres", href: "#tarifs" },
    { name: "Comment ça marche", href: "#processus" },
    { name: "À propos", href: "#a-propos" },
    { name: "Contact", href: "#contact" },
  ],
};

// Avantages pour le client
export const benefits = [
  {
    id: 1,
    title: "Livraison rapide",
    description: "Votre site est prêt en 3 à 7 jours. Pas de délais interminables.",
    icon: "Zap",
  },
  {
    id: 2,
    title: "Prix fixe, sans surprise",
    description: "Vous savez exactement ce que vous payez. Pas de frais cachés.",
    icon: "Shield",
  },
  {
    id: 3,
    title: "Vous êtes propriétaire",
    description: "Le code vous appartient. Vous pouvez le récupérer et l'héberger où vous voulez.",
    icon: "Key",
  },
  {
    id: 4,
    title: "Un seul interlocuteur",
    description: "Pas d'agence, pas de réunions inutiles. On échange directement, simplement.",
    icon: "MessageCircle",
  },
];

// Tarifs - Offres claires et simples
export const pricing = [
  {
    id: 1,
    name: "Site 1 page",
    description: "Parfait pour présenter votre activité simplement",
    price: "390",
    priceNote: "",
    popular: false,
    features: [
      "1 page complète et moderne",
      "Adapté mobile et tablette",
      "Formulaire de contact",
      "Référencement de base (SEO)",
      "Livraison en 3-5 jours",
      "Code source fourni",
    ],
  },
  {
    id: 2,
    name: "Site vitrine",
    description: "Le choix idéal pour la plupart des pros",
    price: "790",
    priceNote: "",
    popular: true,
    features: [
      "4-5 pages (Accueil, Services, À propos...)",
      "Design personnalisé à votre image",
      "Adapté mobile et tablette",
      "Formulaire de contact",
      "Référencement optimisé (SEO)",
      "Livraison en 5-7 jours",
      "Code source fourni",
      "1 modification offerte après livraison",
    ],
  },
  {
    id: 3,
    name: "Clé en main",
    description: "Je m'occupe de tout, vous n'avez rien à faire",
    price: "990",
    priceNote: "à partir de",
    popular: false,
    features: [
      "Site vitrine complet (4-5 pages)",
      "Nom de domaine inclus (1 an)",
      "Hébergement inclus (1 an)",
      "Mise en ligne par mes soins",
      "Certificat sécurité HTTPS",
      "Formation utilisation (30 min)",
      "Support email pendant 1 mois",
    ],
  },
];

// Options supplémentaires
export const options = [
  {
    name: "Mise en ligne",
    price: "150",
    description: "Je mets votre site en ligne sur votre propre hébergement",
  },
  {
    name: "Page supplémentaire",
    price: "80",
    description: "Ajout d'une page à votre site",
  },
];

// Portfolio - À remplir avec tes vrais projets plus tard
export const portfolio: {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}[] = [];

// Témoignages clients - À remplir plus tard avec de vrais avis
export const testimonials: {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}[] = [];

// FAQ
export const faq = [
  {
    question: "C'est vraiment livré en 3-7 jours ?",
    answer: "Oui, pour un site vitrine standard. Site 1 page : 3-5 jours. Site complet : 5-7 jours. La seule condition : que vous me fournissiez vos contenus (textes, photos) rapidement. Si vous n'avez pas tout, je peux vous aider.",
  },
  {
    question: "Je récupère quoi exactement ?",
    answer: "Vous recevez le code source complet de votre site. C'est à vous. Vous pouvez l'héberger où vous voulez, le modifier, le faire évoluer. Aucune dépendance à un outil ou à moi.",
  },
  {
    question: "Et si je ne sais pas héberger un site ?",
    answer: "Pas de souci ! Avec l'offre Clé en main, je m'occupe de tout : achat du nom de domaine, hébergement, mise en ligne. Vous n'avez rien à faire.",
  },
  {
    question: "Je peux demander des modifications après ?",
    answer: "Oui. Une modification est incluse après livraison (offre Site vitrine). Ensuite, les modifications sont facturées à l'heure ou via un forfait maintenance mensuel.",
  },
  {
    question: "Mon site sera visible sur Google ?",
    answer: "Oui, tous mes sites sont construits pour être bien référencés : structure propre, temps de chargement rapide, adapté mobile. Le référencement prend ensuite quelques semaines à se mettre en place.",
  },
  {
    question: "Comment on procède ?",
    answer: "C'est simple : 1) Vous me contactez 2) On échange par email ou téléphone 3) Je vous envoie un devis 4) Vous validez et payez 50% 5) Je crée votre site 6) Vous validez 7) Livraison et solde.",
  },
];

// Process / Étapes
export const process = [
  {
    step: 1,
    title: "On échange",
    description: "Vous me décrivez votre activité et ce que vous attendez. Par email ou téléphone, comme vous préférez.",
  },
  {
    step: 2,
    title: "Je vous fais un devis",
    description: "Un prix clair, sans surprise. Vous savez exactement ce que vous aurez et quand.",
  },
  {
    step: 3,
    title: "Je crée votre site",
    description: "Vous me transmettez vos contenus, je m'occupe du reste. Je vous tiens au courant de l'avancement.",
  },
  {
    step: 4,
    title: "Vous validez",
    description: "Je vous montre le résultat. 1-2 retouches incluses selon l'offre choisie.",
  },
  {
    step: 5,
    title: "C'est en ligne",
    description: "Votre site est prêt. Vous recevez le code ou je le mets en ligne pour vous.",
  },
];
