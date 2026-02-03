import { Check } from 'lucide-react';
import { pricing } from '@/lib/config';
import { Button, Badge } from '@/components/ui';

export default function Pricing() {
  return (
    <section id="tarifs" className="section-padding bg-secondary-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary-100 rounded-full text-primary-700 font-medium text-sm mb-4">
            Tarifs
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
            Des tarifs{' '}
            <span className="gradient-text">transparents</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Chaque projet est unique. Ces tarifs sont des points de départ, 
            je m&apos;adapte à vos besoins et votre budget.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricing.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                plan.popular
                  ? 'border-primary-500 scale-105'
                  : 'border-secondary-100'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge variant="primary" className="shadow-lg">
                    Le plus populaire
                  </Badge>
                </div>
              )}

              {/* Plan header */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-secondary-500 text-sm mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-sm text-secondary-500">{plan.priceNote}</span>
                  <span className="text-4xl font-bold text-secondary-900">
                    {plan.price}€
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-secondary-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.popular ? 'primary' : 'outline'}
                className="w-full"
                href="#contact"
              >
                Demander un devis
              </Button>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-secondary-500 mt-12 max-w-2xl mx-auto">
          * Ces tarifs sont indicatifs et peuvent varier selon la complexité de votre projet.
          Contactez-moi pour un devis personnalisé gratuit.
        </p>
      </div>
    </section>
  );
}
