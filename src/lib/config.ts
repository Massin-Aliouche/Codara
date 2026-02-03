// Site configuration - Personnalise ces informations
export const siteConfig = {
  // Informations de base
  name: "WebCraft",
  title: "WebCraft - Création de Sites Web Professionnels",
  description: "Je crée des sites web modernes, rapides et sur-mesure pour les entrepreneurs et PME. Transformez votre présence en ligne avec un site qui convertit.",
  
  // Tes coordonnées (à modifier)
  contact: {
    email: "contact@webcraft.fr",
    phone: "+33 6 12 34 56 78",
    location: "Paris, France",
  },
  
  // Réseaux sociaux (ajoute tes liens)
  socials: {
    twitter: "https://twitter.com/tonpseudo",
    linkedin: "https://linkedin.com/in/tonprofil",
    instagram: "https://instagram.com/tonpseudo",
    github: "https://github.com/tonpseudo",
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

// Tarifs
export const pricing = [
  {
    id: 1,
    name: "Site Vitrine",
    description: "Parfait pour présenter votre activité",
    price: "990",
    priceNote: "à partir de",
    popular: false,
    features: [
      "1 à 5 pages",
      "Design responsive",
      "Optimisation SEO de base",
      "Formulaire de contact",
      "Hébergement 1 an offert",
      "Livraison sous 2 semaines",
    ],
  },
  {
    id: 2,
    name: "Site Pro",
    description: "Pour une présence en ligne complète",
    price: "1990",
    priceNote: "à partir de",
    popular: true,
    features: [
      "5 à 10 pages",
      "Design premium sur-mesure",
      "Blog intégré",
      "Optimisation SEO avancée",
      "Intégration réseaux sociaux",
      "Analytics et statistiques",
      "Formation à la gestion",
      "Support 3 mois inclus",
    ],
  },
  {
    id: 3,
    name: "E-commerce",
    description: "Lancez votre boutique en ligne",
    price: "2990",
    priceNote: "à partir de",
    popular: false,
    features: [
      "Boutique complète",
      "Jusqu'à 100 produits",
      "Paiement sécurisé Stripe",
      "Gestion des commandes",
      "Emails automatiques",
      "Dashboard admin",
      "Formation complète",
      "Support 6 mois inclus",
    ],
  },
];

// Portfolio - Exemples de projets (à remplacer par tes vrais projets)
export const portfolio = [
  {
    id: 1,
    title: "Restaurant Le Gourmet",
    category: "Site Vitrine",
    description: "Site vitrine élégant pour un restaurant gastronomique parisien avec réservation en ligne.",
    image: "/images/portfolio/restaurant.jpg",
    tags: ["Next.js", "TailwindCSS", "Réservation"],
    link: "#",
  },
  {
    id: 2,
    title: "Boutique Mode Éthique",
    category: "E-commerce",
    description: "Boutique en ligne pour une marque de vêtements éco-responsables.",
    image: "/images/portfolio/boutique.jpg",
    tags: ["Shopify", "Design", "Paiement"],
    link: "#",
  },
  {
    id: 3,
    title: "Cabinet d'Avocats",
    category: "Site Vitrine",
    description: "Site professionnel pour un cabinet d'avocats avec prise de rendez-vous.",
    image: "/images/portfolio/avocat.jpg",
    tags: ["WordPress", "SEO", "Contact"],
    link: "#",
  },
  {
    id: 4,
    title: "Application SaaS",
    category: "Application Web",
    description: "Plateforme de gestion de projets pour une startup tech.",
    image: "/images/portfolio/saas.jpg",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    id: 5,
    title: "Coach Sportif",
    category: "Site Vitrine",
    description: "Site personnel pour un coach sportif avec blog et réservation de séances.",
    image: "/images/portfolio/coach.jpg",
    tags: ["Next.js", "Blog", "Calendly"],
    link: "#",
  },
  {
    id: 6,
    title: "Agence Immobilière",
    category: "Application Web",
    description: "Plateforme de gestion immobilière avec recherche avancée et favoris.",
    image: "/images/portfolio/immo.jpg",
    tags: ["React", "API", "Maps"],
    link: "#",
  },
];

// Témoignages clients
export const testimonials = [
  {
    id: 1,
    name: "Marie Dupont",
    role: "Fondatrice, Boutique Bio",
    content: "Un travail exceptionnel ! Mon site e-commerce est exactement ce que j'imaginais. Les ventes ont augmenté de 40% depuis le lancement.",
    avatar: "/images/testimonials/avatar1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Pierre Martin",
    role: "Gérant, Restaurant Le Gourmet",
    content: "Très professionnel et à l'écoute. Le site reflète parfaitement l'ambiance de notre restaurant. Je recommande vivement !",
    avatar: "/images/testimonials/avatar2.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Sophie Bernard",
    role: "Coach Fitness",
    content: "Grâce à mon nouveau site, je reçois beaucoup plus de demandes. L'investissement en valait vraiment la peine.",
    avatar: "/images/testimonials/avatar3.jpg",
    rating: 5,
  },
];

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
