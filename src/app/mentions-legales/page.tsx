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
              className="inline-flex items-center text-[var(--primary)] hover:text-[var(--accent)] mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à l&apos;accueil
            </Link>

            <h1 className="text-4xl font-bold text-[var(--text)] mb-8">
              Mentions Légales
            </h1>

            <p className="text-[var(--text-muted)] mb-8">
              Conformément aux dispositions de la loi n°2004-575 du 21 juin 2004 pour la confiance 
              dans l&apos;économie numérique (LCEN), il est précisé aux utilisateurs du site Codara 
              l&apos;identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
            </p>

            <div className="prose prose-secondary max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">
                  1. Éditeur du site
                </h2>
                <ul className="list-disc list-inside text-[var(--text-muted)] space-y-2">
                  <li>Nom du site : Codara</li>
                  <li>Statut juridique : Activité en cours de création</li>
                  <li>Responsable de la publication : Massin Aliouche</li>
                  <li>Localisation : France (activité en cours de création)</li>
                  <li>Adresse e-mail : {siteConfig.contact.email}</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">
                  2. Hébergement
                </h2>
                <p className="text-[var(--text-muted)] mb-4">
                  Le site est hébergé par :
                </p>
                <ul className="list-disc list-inside text-[var(--text-muted)] space-y-2">
                  <li>GitHub Pages</li>
                  <li>Société : GitHub, Inc.</li>
                  <li>Adresse : 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis</li>
                  <li>Site web : <a href="https://pages.github.com" className="text-[var(--primary)] hover:underline" target="_blank" rel="noopener noreferrer">https://pages.github.com</a></li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">
                  3. Propriété intellectuelle
                </h2>
                <p className="text-[var(--text-muted)] mb-4">
                  L&apos;ensemble des contenus présents sur le site Codara (textes, graphismes, logo, 
                  éléments visuels, structure du site, code source) est protégé par le droit d&apos;auteur.
                </p>
                <p className="text-[var(--text-muted)]">
                  Toute reproduction, représentation, modification ou exploitation, totale ou partielle, 
                  du contenu du site sans autorisation préalable est interdite.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">
                  4. Responsabilité
                </h2>
                <p className="text-[var(--text-muted)]">
                  L&apos;éditeur du site s&apos;efforce de fournir des informations aussi précises que possible. 
                  Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes ou des 
                  carences dans la mise à jour, qu&apos;elles soient de son fait ou du fait de tiers partenaires.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">
                  5. Données personnelles
                </h2>
                <p className="text-[var(--text-muted)] mb-4">
                  Le site Codara peut collecter des données personnelles via son formulaire de contact 
                  (nom, adresse e-mail, message).
                </p>
                <p className="text-[var(--text-muted)] mb-4">
                  Ces données sont utilisées uniquement pour répondre aux demandes envoyées via le 
                  formulaire de contact. Elles ne sont ni vendues, ni cédées, ni transmises à des tiers.
                </p>
                <p className="text-[var(--text-muted)]">
                  Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez 
                  d&apos;un droit d&apos;accès, de rectification et de suppression des données vous concernant. 
                  Pour exercer ce droit, vous pouvez contacter : {siteConfig.contact.email}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">
                  6. Cookies
                </h2>
                <p className="text-[var(--text-muted)]">
                  Le site Codara n&apos;utilise aucun cookie à des fins de suivi, de mesure d&apos;audience 
                  ou de publicité.
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
