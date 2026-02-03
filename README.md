# WebCraft - Site Vitrine Freelance

Site web professionnel pour présenter tes services de création de sites web.

## 🚀 Technologies

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique
- **TailwindCSS** - Styles utilitaires
- **Lucide Icons** - Icônes
- **Framer Motion** - Animations
- **React Hot Toast** - Notifications

## 📦 Installation

```bash
# Cloner le projet
git clone <ton-repo>
cd webcraft-agency

# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000) dans ton navigateur.

## 🎨 Personnalisation

### 1. Informations de contact

Modifie le fichier `src/lib/config.ts` :

```typescript
export const siteConfig = {
  name: "TonNom",
  contact: {
    email: "ton@email.fr",
    phone: "+33 6 XX XX XX XX",
    location: "Ta Ville, France",
  },
  socials: {
    twitter: "https://twitter.com/tonpseudo",
    linkedin: "https://linkedin.com/in/tonprofil",
    // ...
  },
};
```

### 2. Services et Tarifs

Toujours dans `src/lib/config.ts`, modifie :
- `services` - Tes services proposés
- `pricing` - Tes tarifs
- `portfolio` - Tes réalisations
- `testimonials` - Témoignages clients

### 3. Images

Ajoute tes images dans le dossier `public/images/` :
- `portfolio/` - Screenshots de tes projets
- `testimonials/` - Photos de tes clients (optionnel)

### 4. Couleurs

Modifie les couleurs dans `tailwind.config.ts` :

```typescript
colors: {
  primary: {
    // Change ces valeurs pour ta couleur principale
    500: '#3b82f6',
    600: '#2563eb',
    // ...
  },
}
```

## 📧 Formulaire de Contact

Le formulaire est prêt mais nécessite une intégration backend. Options :

1. **EmailJS** - Simple, gratuit jusqu'à 200 emails/mois
2. **Resend** - API moderne, gratuit jusqu'à 3000 emails/mois
3. **Formspree** - Pas de code backend nécessaire

## 🚀 Déploiement

### Vercel (Recommandé)

```bash
npm install -g vercel
vercel
```

### Autres options
- Netlify
- Railway
- DigitalOcean

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
│   └── ui/                 # Composants réutilisables
└── lib/
    ├── config.ts           # Configuration du site
    └── utils.ts            # Utilitaires
```

## ✅ Checklist avant mise en ligne

- [ ] Modifier les informations de contact dans `config.ts`
- [ ] Ajouter tes projets dans le portfolio
- [ ] Personnaliser les tarifs
- [ ] Ajouter tes témoignages clients
- [ ] Compléter les mentions légales (SIRET, etc.)
- [ ] Intégrer le formulaire de contact
- [ ] Ajouter Google Analytics (optionnel)
- [ ] Vérifier le SEO (meta tags, sitemap)

## 📝 License

MIT - Libre d'utilisation commerciale.

---

Créé avec ❤️ pour les freelances ambitieux
