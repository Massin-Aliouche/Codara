import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui';

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full blur-3xl opacity-30 animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-300 rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary-50 to-transparent opacity-50" />
      </div>

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full text-primary-700 font-medium text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              Création de sites web professionnels
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6 leading-tight">
              Votre site web{' '}
              <span className="gradient-text">sur-mesure</span>{' '}
              qui convertit
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-secondary-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Je crée des sites web modernes, rapides et optimisés pour transformer 
              vos visiteurs en clients. Design professionnel, SEO intégré.
            </p>

            {/* Benefits */}
            <ul className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <li className="flex items-center gap-2 text-secondary-700">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Design moderne
              </li>
              <li className="flex items-center gap-2 text-secondary-700">
                <CheckCircle className="w-5 h-5 text-green-500" />
                100% responsive
              </li>
              <li className="flex items-center gap-2 text-secondary-700">
                <CheckCircle className="w-5 h-5 text-green-500" />
                SEO optimisé
              </li>
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" href="#contact">
                Demander un devis gratuit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" href="#portfolio">
                Voir mes réalisations
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 pt-8 border-t border-secondary-200">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
                <div className="text-center sm:text-left">
                  <p className="text-3xl font-bold text-secondary-900">50+</p>
                  <p className="text-secondary-500 text-sm">Projets réalisés</p>
                </div>
                <div className="hidden sm:block w-px h-12 bg-secondary-200" />
                <div className="text-center sm:text-left">
                  <p className="text-3xl font-bold text-secondary-900">100%</p>
                  <p className="text-secondary-500 text-sm">Clients satisfaits</p>
                </div>
                <div className="hidden sm:block w-px h-12 bg-secondary-200" />
                <div className="text-center sm:text-left">
                  <p className="text-3xl font-bold text-secondary-900">5★</p>
                  <p className="text-secondary-500 text-sm">Note moyenne</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="hidden lg:block relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Browser mockup */}
              <div className="absolute inset-0 bg-white rounded-2xl shadow-2xl overflow-hidden border border-secondary-200">
                {/* Browser header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-secondary-100 border-b border-secondary-200">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white rounded px-3 py-1 text-sm text-secondary-400 text-center">
                      votresite.fr
                    </div>
                  </div>
                </div>
                {/* Browser content */}
                <div className="p-6 bg-gradient-to-br from-primary-50 to-white h-full">
                  <div className="space-y-4">
                    <div className="h-8 bg-primary-200 rounded w-3/4" />
                    <div className="h-4 bg-secondary-200 rounded w-full" />
                    <div className="h-4 bg-secondary-200 rounded w-5/6" />
                    <div className="h-4 bg-secondary-200 rounded w-4/6" />
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div className="h-24 bg-primary-100 rounded-lg" />
                      <div className="h-24 bg-primary-100 rounded-lg" />
                    </div>
                    <div className="h-10 bg-primary-500 rounded-lg w-1/3" />
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-secondary-100 animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-secondary-900 text-sm">Performance</p>
                    <p className="text-green-600 text-sm font-bold">98/100</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg border border-secondary-100 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-secondary-900 text-sm">SEO Score</p>
                    <p className="text-primary-600 text-sm font-bold">Excellent</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
