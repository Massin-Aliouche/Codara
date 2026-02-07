import { ArrowRight, CheckCircle, Rocket } from 'lucide-react';
import { Button } from '@/components/ui';

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background decorations - subtiles pour ne pas concurrencer le logo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-200/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-secondary-100/30 to-transparent" />
      </div>

      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-secondary-700 font-medium text-sm mb-6 border border-secondary-200 shadow-sm">
            <Rocket className="w-4 h-4 text-primary-600" />
            Livré en 3 à 5 jours
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6 leading-tight">
            Un site pro pour votre activité,{' '}
            <span className="gradient-text">prêt cette semaine</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-secondary-600 mb-8 max-w-2xl mx-auto">
            Vous êtes artisan, coach ou indépendant ? Je crée votre site vitrine 
            clé en main. Vous vous occupez de votre métier, je m&apos;occupe du reste.
          </p>

          {/* Benefits */}
          <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center mb-10">
            <li className="flex items-center justify-center gap-2 text-secondary-600">
              <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
              <span>Prêt en quelques jours</span>
            </li>
            <li className="flex items-center justify-center gap-2 text-secondary-600">
              <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
              <span>Prix fixe dès 390€</span>
            </li>
            <li className="flex items-center justify-center gap-2 text-secondary-600">
              <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
              <span>Code fourni ou hébergement géré</span>
            </li>
          </ul>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" href="#contact">
              Recevoir un devis gratuit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" href="#tarifs">
              Voir les offres
            </Button>
          </div>

          {/* Reassurance line */}
          <p className="text-sm text-secondary-500">
            Réponse sous 24h · Satisfait ou retouché · Paiement en 2 fois possible
          </p>
        </div>
      </div>
    </section>
  );
}
