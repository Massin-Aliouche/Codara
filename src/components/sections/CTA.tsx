import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui';
import { siteConfig } from '@/lib/config';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-500 to-accent-600">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Besoin d&apos;un site vitrine ?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Décrivez-moi votre projet en quelques lignes. 
            Je vous réponds sous 24h avec un devis clair.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-primary-600 hover:bg-primary-50"
              href="#contact"
            >
              Me contacter
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-white border-2 border-white/30 hover:bg-white/10"
              href={`mailto:${siteConfig.contact.email}`}
            >
              <Mail className="w-5 h-5 mr-2" />
              {siteConfig.contact.email}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
