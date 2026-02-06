// Site configuration - Personnalise ces informations
export const siteConfig = {
  // Informations de base
  name: "Codara",
  title: "Codara - Création de Sites Web Professionnels",
  description: "Je crée des sites web modernes, rapides et sur-mesure pour les entrepreneurs et PME. Transformez votre présence en ligne avec un site qui convertit.",
  
  // Tes coordonnées
  contact: {
    email: "massin.aliouche@gmail.com",
    phone: "+33 6 00 00 00 00", // À mettre à jour avec ton vrai numéro
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
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Tarifs", href: "#tarifs" },
    { name: "À propos", href: "#a-propos" },
    { name: "Contact", href: "#contact" },
  ],
};

// Services proposés
export const services = [
  {
    id: 1,
    title: "Site Vitrine",
    description: "Un site élégant pour présenter votre activité et attirer de nouveaux clients. Design moderne et responsive.",
    icon: "Globe",
    features: [
      "Design sur-mesure",
      "Responsive (mobile, tablette, desktop)",
      "Optimisé SEO",
      "Formulaire de contact",
      "Hébergement inclus 1 an",
    ],
  },
  {
    id: 2,
    title: "Site E-commerce",
    description: "Vendez vos produits en ligne avec une boutique performante et facile à gérer.",
    icon: "ShoppingCart",
    features: [
      "Catalogue de produits",
      "Paiement sécurisé (Stripe)",
      "Gestion des stocks",
      "Tableau de bord admin",
      "Formation incluse",
    ],
  },
  {
    id: 3,
    title: "Application Web",
    description: "Des solutions sur-mesure pour automatiser vos processus et booster votre productivité.",
    icon: "Code",
    features: [
      "Développement sur-mesure",
      "Interface intuitive",
      "Base de données sécurisée",
      "API et intégrations",
      "Support technique",
    ],
  },
  {
    id: 4,
    title: "Refonte de Site",
    description: "Donnez un coup de neuf à votre site existant avec un design moderne et de meilleures performances.",
    icon: "RefreshCw",
    features: [
      "Audit de l'existant",
      "Nouveau design moderne",
      "Migration des contenus",
      "Amélioration des performances",
      "Formation à la gestion",
    ],
  },
];

// Tarifs - Prix compétitifs pour freelance
export const pricing = [
  {
    id: 1,
    name: "Essentiel",
    description: "Idéal pour démarrer votre présence en ligne",
    price: "490",
    priceNote: "à partir de",
    popular: false,
    features: [
      "Site one-page moderne",
      "Design responsive",
      "Optimisation SEO de base",
      "Formulaire de contact",
      "Livraison sous 1 semaine",
      "1 révision incluse",
    ],
  },
  {
    id: 2,
    name: "Professionnel",
    description: "Pour une présence en ligne complète",
    price: "990",
    priceNote: "à partir de",
    popular: true,
    features: [
      "Jusqu'à 5 pages",
      "Design premium sur-mesure",
      "Optimisation SEO avancée",
      "Intégration réseaux sociaux",
      "Analytics et statistiques",
      "Livraison sous 2 semaines",
      "3 révisions incluses",
      "Support 1 mois inclus",
    ],
  },
  {
    id: 3,
    name: "Sur-mesure",
    description: "Pour les projets ambitieux",
    price: "Sur devis",
    priceNote: "",
    popular: false,
    features: [
      "Nombre de pages illimité",
      "Fonctionnalités avancées",
      "E-commerce / Application web",
      "Intégrations personnalisées",
      "Design 100% unique",
      "Formation complète",
      "Révisions illimitées",
      "Support 3 mois inclus",
    ],
  },
];

// Portfolio - Projets de démonstration (templates et concepts)
export const portfolio = [
  {
    id: 1,
    title: "FitCoach Pro",
    category: "Site Vitrine",
    description: "Landing page moderne pour un coach sportif avec réservation de séances et présentation des programmes.",
    image: "/images/portfolio/fitcoach.jpg",
    tags: ["Next.js", "TailwindCSS", "Calendly"],
    link: "#",
  },
  {
    id: 2,
    title: "Saveurs & Terroir",
    category: "E-commerce",
    description: "Boutique en ligne de produits artisanaux locaux avec gestion des commandes et paiement sécurisé.",
    image: "/images/portfolio/terroir.jpg",
    tags: ["React", "Stripe", "E-commerce"],
    link: "#",
  },
  {
    id: 3,
    title: "Studio Créatif",
    category: "Site Vitrine",
    description: "Portfolio élégant pour une agence de design avec galerie de projets et formulaire de contact.",
    image: "/images/portfolio/studio.jpg",
    tags: ["Next.js", "Animations", "Portfolio"],
    link: "#",
  },
  {
    id: 4,
    title: "TaskFlow",
    category: "Application Web",
    description: "Application de gestion de tâches collaborative avec tableaux Kanban et suivi en temps réel.",
    image: "/images/portfolio/taskflow.jpg",
    tags: ["React", "Node.js", "WebSocket"],
    link: "#",
  },
  {
    id: 5,
    title: "Green Garden",
    category: "Site Vitrine",
    description: "Site vitrine pour un paysagiste avec galerie de réalisations et demande de devis en ligne.",
    image: "/images/portfolio/garden.jpg",
    tags: ["Next.js", "SEO", "Contact"],
    link: "#",
  },
  {
    id: 6,
    title: "BookMyDoc",
    category: "Application Web",
    description: "Plateforme de prise de rendez-vous médicaux avec gestion des disponibilités et rappels automatiques.",
    image: "/images/portfolio/medical.jpg",
    tags: ["React", "API", "Notifications"],
    link: "#",
  },
];

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
    question: "Combien de temps faut-il pour créer un site ?",
    answer: "En général, un site vitrine prend 2 à 3 semaines, un site e-commerce 4 à 6 semaines. Le délai exact dépend de la complexité du projet et de votre réactivité pour les retours.",
  },
  {
    question: "Est-ce que je pourrai modifier mon site moi-même ?",
    answer: "Oui ! Je vous forme à la gestion de votre site et vous fournis une documentation. Pour les sites WordPress ou avec CMS, vous pourrez facilement modifier textes et images.",
  },
  {
    question: "Le prix inclut-il l'hébergement ?",
    answer: "La première année d'hébergement est offerte. Ensuite, comptez environ 10-20€/mois selon vos besoins. Je peux aussi vous conseiller sur les meilleures options.",
  },
  {
    question: "Mon site sera-t-il optimisé pour Google (SEO) ?",
    answer: "Absolument. Tous mes sites sont optimisés pour le référencement : structure propre, balises meta, vitesse de chargement, responsive design, etc.",
  },
  {
    question: "Proposez-vous de la maintenance ?",
    answer: "Oui, je propose des forfaits de maintenance mensuelle incluant mises à jour, sauvegardes, sécurité et modifications mineures. Contactez-moi pour un devis.",
  },
  {
    question: "Comment se déroule un projet ?",
    answer: "1) Appel découverte gratuit 2) Devis détaillé 3) Acompte de 50% 4) Maquettes et validation 5) Développement 6) Tests et ajustements 7) Mise en ligne 8) Formation",
  },
];

// Process / Étapes
export const process = [
  {
    step: 1,
    title: "Découverte",
    description: "On discute de votre projet, vos objectifs et vos besoins lors d'un appel gratuit de 30 minutes.",
  },
  {
    step: 2,
    title: "Proposition",
    description: "Je vous envoie un devis détaillé avec le planning et les fonctionnalités prévues.",
  },
  {
    step: 3,
    title: "Design",
    description: "Je crée les maquettes de votre site. Vous validez avant le développement.",
  },
  {
    step: 4,
    title: "Développement",
    description: "Je code votre site en vous tenant informé de l'avancement régulièrement.",
  },
  {
    step: 5,
    title: "Lancement",
    description: "Tests, ajustements, mise en ligne et formation à la gestion de votre site.",
  },
];
