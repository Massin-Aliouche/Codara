import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Header, Footer } from '@/components/layout';
import { siteConfig } from '@/lib/config';

export const metadata = {
  title: 'Mentions Légales',
};

export default function MentionsLegales() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à l&apos;accueil
            </Link>

            <h1 className="text-4xl font-bold text-secondary-900 mb-8">
              Mentions Légales
            </h1>

            <div className="prose prose-secondary max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary-900 mb-4">
                  1. Éditeur du site
                </h2>
                <p className="text-secondary-600 mb-4">
                  Le site {siteConfig.name} est édité par :
                </p>
                <ul className="list-disc list-inside text-secondary-600 space-y-2">
                  <li>Nom : [Votre nom complet]</li>
                  <li>Statut : [Auto-entrepreneur / SARL / etc.]</li>
                  <li>SIRET : [Votre numéro SIRET]</li>
                  <li>Adresse : [Votre adresse]</li>
                  <li>Email : {siteConfig.contact.email}</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary-900 mb-4">
                  2. Hébergement
                </h2>
                <p className="text-secondary-600 mb-4">
                  Ce site est hébergé par :
                </p>
                <ul className="list-disc list-inside text-secondary-600 space-y-2">
                  <li>Hébergeur : Vercel Inc.</li>
                  <li>Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, USA</li>
                  <li>Site web : https://vercel.com</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary-900 mb-4">
                  3. Propriété intellectuelle
                </h2>
                <p className="text-secondary-600 mb-4">
                  L&apos;ensemble du contenu de ce site (textes, images, vidéos, logos, 
                  etc.) est protégé par le droit d&apos;auteur. Toute reproduction, 
                  représentation, modification ou adaptation, totale ou partielle, 
                  est strictement interdite sans autorisation préalable écrite.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary-900 mb-4">
                  4. Responsabilité
                </h2>
                <p className="text-secondary-600 mb-4">
                  L&apos;éditeur s&apos;efforce de fournir des informations aussi précises 
                  que possible. Toutefois, il ne pourra être tenu responsable des 
                  omissions, des inexactitudes ou des carences dans la mise à jour.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary-900 mb-4">
                  5. Contact
                </h2>
                <p className="text-secondary-600">
                  Pour toute question concernant ces mentions légales, vous pouvez 
                  nous contacter à l&apos;adresse suivante : {siteConfig.contact.email}
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
