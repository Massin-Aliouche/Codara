'use client';

import { Search, Heart, Zap, MapPin } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: Search,
      title: 'Trouvable sur Google',
      description: 'Vos futurs clients vous trouvent facilement quand ils cherchent un pro comme vous.',
    },
    {
      icon: Heart,
      title: 'Inspire confiance',
      description: 'Un site soigné, c\'est une première impression qui donne envie de vous appeler.',
    },
    {
      icon: Zap,
      title: 'Livré rapidement',
      description: 'Pas besoin d\'attendre des mois. Votre site est prêt en 3 à 5 jours.',
    },
    {
      icon: MapPin,
      title: 'Basé en France',
      description: 'Un vrai interlocuteur, joignable, qui parle votre langue et comprend vos besoins.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-4">
            Un site qui travaille pour vous
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Plus d&apos;appels, plus de demandes, plus de crédibilité. 
            Votre site devient votre meilleur commercial.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-secondary-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-secondary-600 text-sm">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
