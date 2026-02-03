import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Header, Footer } from '@/components/layout';
import { siteConfig } from '@/lib/config';

export const metadata = {
  title: 'Politique de Confidentialité',
};

export default function PolitiqueConfidentialite() {
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
              Politique de Confidentialité
            </h1>

            <div className="prose prose-secondary max-w-none">
              <p className="text-secondary-600 mb-8">
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary-900 mb-4">
                  1. Collecte des données
                </h2>
                <p className="text-secondary-600 mb-4">
                  Nous collectons les informations que vous nous fournissez 
                  directement via le formulaire de contact :
                </p>
                <ul className="list-disc list-inside text-secondary-600 space-y-2">
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone (optionnel)</li>
                  <li>Message et détails du projet</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary-900 mb-4">
                  2. Utilisation des données
                </h2>
                <p className="text-secondary-600 mb-4">
                  Les données collectées sont utilisées uniquement pour :
                </p>
                <ul className="list-disc list-inside text-secondary-600 space-y-2">
                  <li>Répondre à vos demandes de contact</li>
                  <li>Vous envoyer un devis personnalisé</li>
                  <li>Assurer le suivi de votre projet</li>
                </ul>
                <p className="text-secondary-600 mt-4">
                  Vos données ne sont jamais vendues ni partagées avec des tiers 
                  à des fins commerciales.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary-900 mb-4">
                  3. Conservation des données
                </h2>
                <p className="text-secondary-600">
                  Vos données personnelles sont conservées pendant une durée 
                  maximale de 3 ans à compter de votre dernier contact avec nous, 
                  sauf obligation légale de conservation plus longue.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary-900 mb-4">
                  4. Vos droits
                </h2>
                <p className="text-secondary-600 mb-4">
                  Conformément au RGPD, vous disposez des droits suivants :
                </p>
                <ul className="list-disc list-inside text-secondary-600 space-y-2">
                  <li>Droit d&apos;accès à vos données</li>
                  <li>Droit de rectification</li>
                  <li>Droit à l&apos;effacement</li>
                  <li>Droit à la portabilité</li>
                  <li>Droit d&apos;opposition</li>
                </ul>
                <p className="text-secondary-600 mt-4">
                  Pour exercer ces droits, contactez-nous à : {siteConfig.contact.email}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary-900 mb-4">
                  5. Cookies
                </h2>
                <p className="text-secondary-600">
                  Ce site utilise uniquement des cookies techniques nécessaires 
                  à son bon fonctionnement. Aucun cookie de tracking ou publicitaire 
                  n&apos;est utilisé.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary-900 mb-4">
                  6. Sécurité
                </h2>
                <p className="text-secondary-600">
                  Nous mettons en œuvre des mesures de sécurité appropriées pour 
                  protéger vos données contre tout accès, modification, divulgation 
                  ou destruction non autorisés.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary-900 mb-4">
                  7. Contact
                </h2>
                <p className="text-secondary-600">
                  Pour toute question concernant cette politique de confidentialité, 
                  vous pouvez nous contacter à : {siteConfig.contact.email}
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
