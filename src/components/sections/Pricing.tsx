import { Check, Plus } from 'lucide-react';
import { pricing, options } from '@/lib/config';
import { Button, Badge } from '@/components/ui';

export default function Pricing() {
  return (
    <section id="tarifs" className="section-padding bg-[var(--bg)]">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[var(--surface)] backdrop-blur-sm rounded-full text-[var(--text-muted)] font-medium text-sm mb-4 border border-[var(--border)] shadow-sm">
            Offres
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text)] mb-4">
            Des tarifs{' '}
            <span className="gradient-text">clairs et fixes</span>
          </h2>
          <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
            Pas de mauvaise surprise. Vous savez exactement ce que vous payez 
            avant de commencer.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {pricing.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-[var(--surface)] rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                plan.popular
                  ? 'border-[var(--primary)] scale-105'
                  : 'border-[var(--border)]'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge variant="primary" className="shadow-lg">
                    Recommandé
                  </Badge>
                </div>
              )}

              {/* Plan header */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-[var(--text)] mb-2">
                  {plan.name}
                </h3>
                <p className="text-[var(--text-subtle)] text-sm mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  {plan.priceNote && (
                    <span className="text-sm text-[var(--text-subtle)]">{plan.priceNote}</span>
                  )}
                  <span className="text-4xl font-bold text-[var(--text)]">
                    {plan.price}€
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--text-muted)]">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.popular ? 'primary' : 'outline'}
                className="w-full"
                href="#contact"
              >
                Choisir cette offre
              </Button>
            </div>
          ))}
        </div>

        {/* Options */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-[var(--text)] mb-6 text-center">
            Options disponibles
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {options.map((option, index) => (
              <div
                key={index}
                className="bg-[var(--surface)] rounded-xl p-4 border border-[var(--border)] flex items-start gap-4"
              >
                <div className="w-10 h-10 bg-[var(--primary)]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Plus className="w-5 h-5 text-[var(--primary)]" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-[var(--text)]">{option.name}</span>
                    <span className="text-[var(--primary)] font-semibold">{option.price}€</span>
                  </div>
                  <p className="text-sm text-[var(--text-subtle)]">{option.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
