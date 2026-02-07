import { ArrowRight, CheckCircle, Rocket, Clock, CreditCard, Code } from 'lucide-react';
import { Button } from '@/components/ui';

export default function Hero() {
  const stats = [
    { icon: Clock, value: '3-7 jours', label: 'Délai de livraison' },
    { icon: CreditCard, value: 'Dès 390€', label: 'Prix transparent' },
    { icon: Code, value: 'Code fourni', label: 'Vous êtes propriétaire' },
  ];

  return (
    <section id="accueil" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Glow background subtil */}
      <div className="hero-glow" />

      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="hero-badge mb-6">
            <Rocket className="w-4 h-4" />
            Sites livrés en 7 jours maximum
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6 leading-tight">
            Votre site vitrine pro,{' '}
            <span className="gradient-text">prêt en une semaine</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-secondary-600 mb-8 max-w-2xl mx-auto">
            Artisan, coach, thérapeute, indépendant ? Je crée votre site internet 
            professionnel, simple et efficace. Vous récupérez le code ou je m&apos;occupe de tout.
          </p>

          {/* Benefits */}
          <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center mb-10">
            <li className="flex items-center justify-center gap-2 text-secondary-600">
              <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
              <span>Livraison rapide</span>
            </li>
            <li className="flex items-center justify-center gap-2 text-secondary-600">
              <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
              <span>Prix fixe, sans surprise</span>
            </li>
            <li className="flex items-center justify-center gap-2 text-secondary-600">
              <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
              <span>Vous êtes propriétaire du code</span>
            </li>
          </ul>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" href="#contact">
              Demander un devis gratuit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="secondary" size="lg" href="#tarifs">
              Voir les offres
            </Button>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="stat-card">
                  <Icon className="w-5 h-5 text-primary-500 mb-2" />
                  <span className="stat-card-value">{stat.value}</span>
                  <span className="stat-card-label">{stat.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
