import { ArrowRight, CheckCircle, Rocket } from 'lucide-react';
import { Button } from '@/components/ui';

export default function Hero() {
  return (
    <section id="accueil" className="hero-section relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Glow background subtil */}
      <div className="hero-glow" />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="hero-badge mb-6">
            <Rocket className="w-4 h-4" />
            Livré en 3 à 5 jours
          </div>

          {/* Title */}
            <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Un site pro pour votre activité,{" "}
              <span className="gradient-text">livré en quelques jours</span>
            </h1>

          {/* Subtitle */}
          <p className="hero-subtitle text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Vous êtes artisan, coach ou indépendant ? Je crée votre site vitrine 
            clé en main. Vous vous occupez de votre métier, je m&apos;occupe du reste.
          </p>

          {/* Benefits */}
          <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center mb-10">
            <li className="flex items-center justify-center gap-2 text-[var(--text-muted)]">
              <CheckCircle className="w-5 h-5 text-[var(--primary)] flex-shrink-0" />
              <span>Prêt en quelques jours</span>
            </li>
            <li className="flex items-center justify-center gap-2 text-[var(--text-muted)]">
              <CheckCircle className="w-5 h-5 text-[var(--primary)] flex-shrink-0" />
              <span>Prix fixe dès 390€</span>
            </li>
            <li className="flex items-center justify-center gap-2 text-[var(--text-muted)]">
              <CheckCircle className="w-5 h-5 text-[var(--primary)] flex-shrink-0" />
              <span>Code fourni ou hébergement géré</span>
            </li>
          </ul>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button size="lg" href="#contact">
              Recevoir un devis gratuit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="secondary" size="lg" href="#tarifs">
              Voir les offres
            </Button>
          </div>

          {/* Reassurance line */}
          <p className="hero-reassurance text-sm">
            Réponse sous 24h · Satisfait ou retouché · Paiement en 2 fois possible
          </p>
        </div>
      </div>
    </section>
  );
}
