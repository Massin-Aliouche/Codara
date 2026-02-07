'use client';

import { Zap, Shield, Key, MessageCircle } from 'lucide-react';
import { benefits } from '@/lib/config';

const iconMap: Record<string, React.ElementType> = {
  Zap,
  Shield,
  Key,
  MessageCircle,
};

export default function Benefits() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
            Pourquoi travailler avec moi ?
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Pas d&apos;agence, pas de process compliqué. Juste un freelance 
            réactif qui fait le job.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => {
            const Icon = iconMap[benefit.icon] || Zap;
            return (
              <div
                key={benefit.id}
                className="bg-secondary-50 rounded-2xl p-6 text-center hover:bg-primary-50 transition-colors"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
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
