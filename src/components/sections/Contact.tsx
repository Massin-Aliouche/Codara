'use client';

import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { Send, Mail, Loader2 } from 'lucide-react';
import { siteConfig } from '@/lib/config';
import { Button, Input, Textarea } from '@/components/ui';
import toast from 'react-hot-toast';

// Validation helpers
const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const sanitizeInput = (input: string) => input.trim().slice(0, 1000);

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [honeypot, setHoneypot] = useState(''); // Anti-spam honeypot
  const lastSubmitTime = useRef<number>(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Anti-spam: honeypot check
    if (honeypot) {
      toast.success('Message envoyé ! Je vous réponds sous 48h.');
      return;
    }

    // Rate limiting: 30 seconds between submissions
    const now = Date.now();
    if (now - lastSubmitTime.current < 30000) {
      toast.error('Veuillez patienter avant de renvoyer un message.');
      return;
    }

    // Input validation
    if (!isValidEmail(formData.email)) {
      toast.error('Veuillez entrer une adresse email valide.');
      return;
    }

    if (formData.name.length < 2 || formData.message.length < 10) {
      toast.error('Veuillez remplir tous les champs correctement.');
      return;
    }

    setIsLoading(true);
    lastSubmitTime.current = now;

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      subject: sanitizeInput(formData.subject),
      message: sanitizeInput(formData.message),
      plan: sanitizeInput(formData.budget),
    };

    // EmailJS integration - clés publiques (exposées côté client)
    const serviceId = 'service_gr20wya';
    const templateId = 'template_c73ee0w';
    const userId = '02yMCF8Ze8dbGy_Lm';

    emailjs
      .send(serviceId, templateId, sanitizedData, userId)
      .then(
        () => {
          toast.success('Message envoyé ! Je vous réponds sous 48h.');
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
            budget: '',
          });
        },
        (error) => {
          console.error('EmailJS Error:', error);
          toast.error(`Erreur: ${error?.text || 'Réessayez ou contactez-moi directement.'}`);
        }
      )
      .finally(() => setIsLoading(false));
  };

  return (
    <section id="contact" className="section-padding bg-[var(--bg)]">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[var(--surface)] backdrop-blur-sm rounded-full text-[var(--text-muted)] font-medium text-sm mb-4 border border-[var(--border)] shadow-sm">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text)] mb-4">
            Décrivez-moi votre{' '}
            <span className="gradient-text">projet</span>
          </h2>
          <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
            En quelques lignes, dites-moi ce dont vous avez besoin. 
            Je vous réponds sous 48h avec un devis clair.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-[var(--surface)] p-6 rounded-2xl shadow-lg border border-[var(--border)]">
              <h3 className="text-xl font-semibold text-[var(--text)] mb-6">
                Comment ça se passe ?
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-[var(--bg)]">
                  <div className="w-8 h-8 bg-[var(--primary)]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[var(--primary)] font-semibold text-sm">1</span>
                  </div>
                  <p className="text-[var(--text-muted)] text-sm">
                    Vous me décrivez votre projet via le formulaire
                  </p>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-[var(--bg)]">
                  <div className="w-8 h-8 bg-[var(--primary)]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[var(--primary)] font-semibold text-sm">2</span>
                  </div>
                  <p className="text-[var(--text-muted)] text-sm">
                    Je vous réponds sous 48h avec un devis détaillé
                  </p>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-[var(--bg)]">
                  <div className="w-8 h-8 bg-[var(--primary)]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[var(--primary)] font-semibold text-sm">3</span>
                  </div>
                  <p className="text-[var(--text-muted)] text-sm">
                    On échange si besoin, puis on démarre !
                  </p>
                </div>
              </div>
            </div>

            {/* Direct contact */}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="block bg-gradient-to-r from-primary-500 to-accent-500 p-6 rounded-2xl text-white hover:from-primary-600 hover:to-accent-600 transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-5 h-5" />
                <span className="font-semibold">Ou écrivez-moi directement</span>
              </div>
              <p className="text-primary-100 text-sm">
                {siteConfig.contact.email}
              </p>
            </a>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-[var(--surface)] p-8 rounded-2xl shadow-lg border border-[var(--border)]"
            >
              {/* Honeypot anti-spam field - invisible to users */}
              <input
                type="text"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="absolute -left-[9999px] opacity-0 pointer-events-none"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <Input
                  label="Nom complet *"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Nom Prénom"
                />
                <Input
                  label="Email *"
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="mail@exemple.com"
                />
              </div>

              <div className="mb-6">
                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-medium text-[var(--text-muted)] mb-2"
                  >
                    Plan souhaité
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="">Sélectionnez...</option>
                    <option value="Site 1 page">Site 1 page</option>
                    <option value="Site vitrine">Site vitrine</option>
                    <option value="Clé en main">Clé en main</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <Input
                  label="Sujet *"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Ex: Création site vitrine pour mon restaurant"
                />
              </div>

              <div className="mb-6">
                <Textarea
                  label="Message *"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Décrivez votre projet, vos objectifs, vos délais..."
                  className="min-h-[150px]"
                />
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer le message
                    <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>

              <p className="text-sm text-[var(--text-subtle)] text-center mt-4">
                En soumettant ce formulaire, vous acceptez d&apos;être contacté 
                concernant votre projet.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
