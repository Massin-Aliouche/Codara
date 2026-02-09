# Codara - Site Vitrine Freelance

Site web professionnel pour présenter mes services de création de sites vitrines pour indépendants et petites entreprises.

🔗 **Site en ligne** : [https://massin-aliouche.github.io/Codara/](https://massin-aliouche.github.io/Codara/)

## 🎯 Positionnement

- **Cible** : Artisans, coachs, thérapeutes, indépendants
- **Offre** : Sites vitrines livrés en 3-7 jours
- **Tarifs** : 390€ (Landing page) / 790€ (Site complet) / 990€ (Clé en main)

## 🚀 Technologies

- **Next.js 16** - Framework React avec App Router
- **TypeScript** - Typage statique
- **TailwindCSS** - Styles utilitaires
- **EmailJS** - Envoi d'emails côté client
- **Lucide Icons** - Icônes
- **React Hot Toast** - Notifications
- **GitHub Actions** - CI/CD automatisé

## 📦 Installation

```bash
# Cloner le projet
git clone https://github.com/Massin-Aliouche/Codara.git
cd Codara

# Installer les dépendances
npm install --legacy-peer-deps

# Lancer en développement
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000) dans ton navigateur.

> **Note** : Le flag `--legacy-peer-deps` est nécessaire pour résoudre un conflit de version ESLint avec Next.js 16.

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

Le formulaire utilise **EmailJS** pour l'envoi d'emails directement depuis le navigateur.

### Configuration EmailJS

Les clés EmailJS sont intégrées directement dans le code (`Contact.tsx`) car le site est exporté en HTML statique pour GitHub Pages. Ces clés sont publiques par conception.

Pour utiliser votre propre compte EmailJS :
1. Créez un compte sur [EmailJS](https://www.emailjs.com/)
2. Créez un service email et un template
3. Modifiez les constantes dans `src/components/sections/Contact.tsx` :
   ```typescript
   const serviceId = 'votre_service_id';
   const templateId = 'votre_template_id';
   const userId = 'votre_cle_publique';
   ```

### Sécurité du formulaire

- ✅ Champ honeypot anti-spam (invisible aux utilisateurs)
- ✅ Rate limiting (10s entre soumissions)
- ✅ Validation email côté client
- ✅ Sanitisation des entrées (max 1000 caractères)
- ✅ Messages d'erreur explicites

## 🚀 Déploiement

Le site est déployé automatiquement sur **GitHub Pages** via GitHub Actions à chaque push sur `main`.

### Configuration GitHub Pages

Le workflow `.github/workflows/deploy.yml` gère :
- Installation des dépendances avec `--legacy-peer-deps`
- Build Next.js en mode export statique
- Déploiement sur GitHub Pages

### Autres hébergements possibles

- Netlify (import direct du repo)
- Vercel (idéal pour Next.js dynamique)
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
- [x] Intégrer le formulaire de contact avec EmailJS
- [x] Configurer le déploiement GitHub Actions
- [ ] Compléter les mentions légales (SIRET quand disponible)
- [ ] Ajouter ta photo dans la section "À propos"
- [ ] Ajouter Google Analytics (optionnel)

## 🔧 Scripts disponibles

```bash
npm run dev      # Serveur de développement (localhost:3000)
npm run build    # Build de production
npm run start    # Serveur de production local
npm run lint     # Vérification ESLint
```

## 📝 License

MIT - Libre d'utilisation commerciale.

---

Créé par Massin • [massin.aliouche.pro@gmail.com](mailto:massin.aliouche.pro@gmail.com)
