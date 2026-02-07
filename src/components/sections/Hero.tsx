import { ArrowRight, CheckCircle, Clock, Euro, Code2 } from 'lucide-react';
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
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full text-primary-700 font-medium text-sm mb-6">
            <Clock className="w-4 h-4" />
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
            professionnel, simple et efficace. Vous récupérez le code ou je m&apos;occupe 
            de tout.
          </p>

          {/* Benefits */}
          <ul className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
            <li className="flex items-center justify-center gap-2 text-secondary-700">
              <CheckCircle className="w-5 h-5 text-green-500" />
              Livraison rapide
            </li>
            <li className="flex items-center justify-center gap-2 text-secondary-700">
              <CheckCircle className="w-5 h-5 text-green-500" />
              Prix fixe, sans surprise
            </li>
            <li className="flex items-center justify-center gap-2 text-secondary-700">
              <CheckCircle className="w-5 h-5 text-green-500" />
              Vous êtes propriétaire du code
            </li>
          </ul>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" href="#contact">
              Demander un devis gratuit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" href="#tarifs">
              Voir les offres
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto pt-8 border-t border-secondary-200">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Clock className="w-6 h-6 text-primary-600" />
              </div>
              <p className="text-sm font-medium text-secondary-900">3-7 jours</p>
              <p className="text-xs text-secondary-500">Délai de livraison</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Euro className="w-6 h-6 text-primary-600" />
              </div>
              <p className="text-sm font-medium text-secondary-900">À partir de 390€</p>
              <p className="text-xs text-secondary-500">Prix transparent</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Code2 className="w-6 h-6 text-primary-600" />
              </div>
              <p className="text-sm font-medium text-secondary-900">Code fourni</p>
              <p className="text-xs text-secondary-500">Vous êtes propriétaire</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
