'use client';

import { useState } from 'react';
import { ChevronDown, User, Briefcase, Stethoscope } from 'lucide-react';

export default function MicroFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "C'est vraiment livré en 3-5 jours ?",
      answer: "Oui, pour un site vitrine standard (1 à 5 pages). La seule condition : que vous me fournissiez vos contenus (textes, photos) rapidement. Si vous n'avez pas tout, on en discute.",
    },
    {
      question: "Je récupère quoi exactement ?",
      answer: "Vous recevez le code source complet de votre site. Il vous appartient. Vous pouvez l'héberger où vous voulez, le modifier, le faire évoluer. Si vous préférez ne pas vous en occuper, je peux gérer la mise en ligne pour vous (option à 150€).",
    },
    {
      question: "C'est pour moi ce service ?",
      answer: "Si vous êtes artisan, coach, consultant, thérapeute, ou que vous avez une petite entreprise et besoin d'un site simple pour présenter votre activité : oui, c'est fait pour vous. Pas besoin de connaissances techniques.",
    },
  ];

  const profiles = [
    { icon: User, label: 'Coachs' },
    { icon: Briefcase, label: 'Artisans' },
    { icon: Stethoscope, label: 'Thérapeutes' },
  ];

  return (
    <section className="py-12 bg-secondary-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Profiles */}
          <div className="flex justify-center gap-6 mb-8">
            {profiles.map((profile, index) => {
              const Icon = profile.icon;
              return (
                <div key={index} className="flex items-center gap-2 text-secondary-600">
                  <Icon className="w-5 h-5 text-primary-600" />
                  <span className="text-sm font-medium">{profile.label}</span>
                </div>
              );
            })}
            <span className="text-secondary-400 text-sm">et autres indépendants</span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-secondary-900 text-center mb-6">
            Questions fréquentes
          </h3>

          {/* FAQ Items */}
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-secondary-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-secondary-50 transition-colors"
                >
                  <span className="font-medium text-secondary-900">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-secondary-400 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-4 pb-4">
                    <p className="text-secondary-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
