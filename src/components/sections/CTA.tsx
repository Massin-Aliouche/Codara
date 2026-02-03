import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Prêt à lancer votre projet ?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Demandez votre devis gratuit dès maintenant et donnez vie à votre 
            projet web en quelques semaines.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-primary-600 hover:bg-primary-50"
              href="#contact"
            >
              Demander un devis gratuit
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-white border-2 border-white/30 hover:bg-white/10"
              href="#portfolio"
            >
              Voir mes réalisations
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
