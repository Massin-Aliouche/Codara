# Codara - Site Vitrine Freelance

Site web pour présenter mes services de création de sites vitrines pour indépendants et petites entreprises.

🔗 **Site en ligne** : [https://massin-aliouche.github.io/Codara/](https://massin-aliouche.github.io/Codara/)

## 🎯 Positionnement

- **Cible** : Artisans, coachs, thérapeutes, indépendants
- **Offre** : Sites vitrines livrés en 3-7 jours
- **Tarifs** : 390€ (1 page) / 790€ (site complet) / 990€ (clé en main)

## 🚀 Technologies

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique
- **TailwindCSS** - Styles utilitaires
- **Lucide Icons** - Icônes
- **React Hot Toast** - Notifications

## 📦 Installation

```bash
# Cloner le projet
git clone https://github.com/Massin-Aliouche/Codara.git
cd Codara

# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000) dans ton navigateur.

## 🎨 Personnalisation

### Configuration principale

Tout se modifie dans `src/lib/config.ts` :

```typescript
export const siteConfig = {
  name: "Codara",
  contact: {
    email: "ton@email.fr",
    location: "France",
  },
  socials: {
    linkedin: "https://linkedin.com/in/tonprofil",
    github: "https://github.com/tonpseudo",
  },
};
```

### Éléments personnalisables

| Élément | Fichier |
|---------|---------|
| Infos de contact | `config.ts` → `siteConfig` |
| Avantages | `config.ts` → `benefits` |
| Tarifs & offres | `config.ts` → `pricing` |
| Options supplémentaires | `config.ts` → `options` |
| FAQ | `config.ts` → `faq` |
| Processus | `config.ts` → `process` |

### Couleurs

Modifie les couleurs dans `tailwind.config.ts` :

```typescript
colors: {
  primary: {
    500: '#3b82f6',
    600: '#2563eb',
  },
}
```

## 📧 Formulaire de Contact

Le formulaire est prêt mais nécessite une intégration backend. Options :

- **EmailJS** - Simple, gratuit jusqu'à 200 emails/mois
- **Resend** - API moderne, gratuit jusqu'à 3000 emails/mois
- **Formspree** - Pas de code backend nécessaire

## 🚀 Déploiement

Le site est actuellement déployé sur **GitHub Pages** via GitHub Actions.

### Autres options
- Vercel (recommandé pour Next.js)
- Netlify
- Railway

## 📁 Structure du projet

```
src/
├── app/                    # Pages (App Router)
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Page d'accueil
│   ├── mentions-legales/
│   └── politique-confidentialite/
├── components/
│   ├── layout/             # Header, Footer
│   ├── sections/           # Sections de la page
│   │   ├── Hero.tsx        # Accroche principale
│   │   ├── Benefits.tsx    # Avantages
│   │   ├── Pricing.tsx     # Offres et tarifs
│   │   ├── Process.tsx     # Comment ça marche
│   │   ├── About.tsx       # À propos
│   │   ├── FAQ.tsx         # Questions fréquentes
│   │   ├── Contact.tsx     # Formulaire de contact
│   │   └── CTA.tsx         # Appel à l'action final
│   └── ui/                 # Composants réutilisables
└── lib/
    ├── config.ts           # Configuration du site
    └── utils.ts            # Utilitaires
```

## ✅ Checklist avant mise en ligne

- [x] Modifier les informations de contact
- [x] Personnaliser les tarifs
- [x] Adapter la FAQ
- [ ] Compléter les mentions légales (SIRET, etc.)
- [ ] Intégrer le formulaire de contact avec un service email
- [ ] Ajouter ta photo dans la section "À propos"
- [ ] Ajouter Google Analytics (optionnel)

## 📝 License

MIT - Libre d'utilisation commerciale.

---

Créé par Massin • [massin.aliouche.pro@gmail.com](mailto:massin.aliouche.pro@gmail.com)
