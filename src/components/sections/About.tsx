import { Award, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui';

export default function About() {
  const highlights = [
    {
      icon: Award,
      title: '5+ ans d\'expérience',
      description: 'En développement web et design',
    },
    {
      icon: Users,
      title: '50+ clients',
      description: 'Accompagnés dans leur projet',
    },
    {
      icon: Clock,
      title: 'Réactif',
      description: 'Réponse sous 24h garantie',
    },
  ];

  const skills = [
    'Next.js & React',
    'WordPress',
    'Shopify',
    'TailwindCSS',
    'TypeScript',
    'SEO',
    'UI/UX Design',
    'Performance',
  ];

  return (
    <section id="a-propos" className="section-padding bg-secondary-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            {/* Main image placeholder */}
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl shadow-xl">
                {/* Placeholder - remplace par ta photo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-32 h-32 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-6xl">👨‍💻</span>
                    </div>
                    <p className="text-sm opacity-70">Ajoute ta photo ici</p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-200 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-100 rounded-2xl -z-10" />
            </div>

            {/* Highlights cards */}
            <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-4">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="bg-white p-4 rounded-xl shadow-lg border border-secondary-100 text-center"
                  >
                    <Icon className="w-6 h-6 text-primary-600 mx-auto mb-2" />
                    <p className="font-semibold text-secondary-900 text-sm">
                      {item.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Content side */}
          <div className="lg:pl-8 mt-16 lg:mt-0">
            <span className="inline-block px-4 py-2 bg-primary-100 rounded-full text-primary-700 font-medium text-sm mb-4">
              À propos
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-6">
              Salut, je suis{' '}
              <span className="gradient-text">[Ton Prénom]</span> 👋
            </h2>
            <div className="space-y-4 text-secondary-600 mb-8">
              <p>
                Développeur web passionné, j&apos;aide les entrepreneurs et PME à créer 
                une présence en ligne qui fait la différence.
              </p>
              <p>
                Mon objectif ? Créer des sites web qui ne sont pas seulement beaux, 
                mais qui convertissent vos visiteurs en clients. Je combine design 
                moderne, performance technique et optimisation SEO.
              </p>
              <p>
                Chaque projet est unique et mérite une attention particulière. 
                C&apos;est pourquoi je travaille en étroite collaboration avec vous 
                pour comprendre vos objectifs et créer la solution parfaite.
              </p>
            </div>

            {/* Skills */}
            <div className="mb-8">
              <h3 className="font-semibold text-secondary-900 mb-4">
                Mes compétences
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white border border-secondary-200 rounded-full text-sm text-secondary-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="#contact">
                Discutons de votre projet
              </Button>
              <Button variant="ghost" href="#portfolio">
                Voir mon portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
