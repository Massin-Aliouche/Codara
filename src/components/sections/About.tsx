import { MessageCircle, Zap, Heart } from 'lucide-react';
import { Button } from '@/components/ui';

export default function About() {
  const highlights = [
    {
      icon: Zap,
      title: 'Rapide',
      description: '7 jours max',
    },
    {
      icon: MessageCircle,
      title: 'Direct',
      description: 'Un seul interlocuteur',
    },
    {
      icon: Heart,
      title: 'Simple',
      description: 'Pas de jargon',
    },
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
              Salut, moi c&apos;est{' '}
              <span className="gradient-text">Massin</span> 👋
            </h2>
            <div className="space-y-4 text-secondary-600 mb-8">
              <p>
                Je suis développeur web freelance. Je crée des sites vitrines 
                pour les indépendants et petites entreprises qui veulent une 
                présence en ligne simple et efficace.
              </p>
              <p>
                Mon truc ? Aller à l&apos;essentiel. Pas de process compliqué, 
                pas de réunions interminables. On échange, je comprends ce dont 
                vous avez besoin, et je vous livre un site qui vous ressemble.
              </p>
              <p>
                Vous récupérez le code source, vous en faites ce que vous voulez. 
                Ou alors je m&apos;occupe de tout (hébergement, mise en ligne) si 
                vous préférez ne pas vous en soucier.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="#contact">
                On discute de votre projet ?
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
