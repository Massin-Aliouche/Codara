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
    <section id="a-propos" className="section-padding bg-[var(--bg)]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            {/* Main image placeholder */}
            <div className="relative aspect-square max-w-sm mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 via-primary-500 to-accent-500 rounded-3xl shadow-xl">
                {/* Logo centré */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <img
                      src="/Codara/C%20logo.png"
                      alt="Logo Codara"
                      className="w-36 h-36 object-contain"
                      draggable="false"
                    />
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-100 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-100 rounded-2xl -z-10" />
            </div>

            {/* Highlights cards */}
            <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-4">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="bg-[var(--surface)] p-4 rounded-xl shadow-lg border border-[var(--border)] text-center"
                  >
                    <Icon className="w-6 h-6 text-[var(--primary)] mx-auto mb-2" />
                    <p className="font-semibold text-[var(--text)] text-sm">
                      {item.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Content side */}
          <div className="lg:pl-8 mt-16 lg:mt-0">
            <span className="inline-block px-4 py-2 bg-[var(--surface)] backdrop-blur-sm rounded-full text-[var(--text-muted)] font-medium text-sm mb-4 border border-[var(--border)] shadow-sm">
              À propos
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text)] mb-6">
              Salut, moi c&apos;est{' '}
              <span className="gradient-text">Massin</span> 👋
            </h2>
            <div className="space-y-4 text-[var(--text-muted)] mb-8">
              <p>
                Passionné et étudiant en informatique, j&apos;aime diversifier mes activités en créant des sites vitrines pour les indépendants et petites entreprises qui veulent une présence en ligne simple et efficace.
              </p>
              <p>
                Mon truc ? Aller à l&apos;essentiel. Pas de process compliqué, pas de réunions interminables. On échange, je comprends votre besoin, et je vous livre un site qui vous ressemble.
              </p>
              <p>
                Vous récupérez le code source, vous en faites ce que vous voulez. Ou bien je m&apos;occupe de tout (hébergement, mise en ligne) si vous préférez ne pas vous en soucier.
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
