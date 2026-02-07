import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui';
import { siteConfig } from '@/lib/config';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary-800 via-secondary-900 to-secondary-950">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Besoin d&apos;un site vitrine ?
          </h2>
          <p className="text-xl text-secondary-300 mb-8 max-w-2xl mx-auto">
            Décrivez-moi votre projet en quelques lignes. 
            Je vous réponds sous 24h avec un devis clair.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              href="#contact"
            >
              Me contacter
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-secondary-300 border-2 border-secondary-600 hover:bg-secondary-800 hover:text-white"
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
