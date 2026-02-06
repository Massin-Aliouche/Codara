'use client';

import { useState } from 'react';
import { Send, Mail, MapPin, Loader2 } from 'lucide-react';
import { siteConfig } from '@/lib/config';
import { Button, Input, Textarea } from '@/components/ui';
import toast from 'react-hot-toast';

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);

    // Simulate form submission
    // TODO: Intégrer avec un service email (EmailJS, Resend, etc.)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success('Message envoyé ! Je vous réponds sous 24h.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      budget: '',
    });
    setIsLoading(false);
  };

  return (
    <section id="contact" className="section-padding bg-secondary-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary-100 rounded-full text-primary-700 font-medium text-sm mb-4">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
            Parlons de votre{' '}
            <span className="gradient-text">projet</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Prêt à lancer votre projet ? Contactez-moi pour un devis gratuit 
            et sans engagement. Je réponds sous 24h.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-secondary-100">
              <h3 className="text-xl font-semibold text-secondary-900 mb-6">
                Informations de contact
              </h3>
              
              <div className="space-y-4">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary-50 hover:bg-primary-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                    <Mail className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-secondary-500">Email</p>
                    <p className="font-medium text-secondary-900">
                      {siteConfig.contact.email}
                    </p>
                  </div>
                </a>

<div className="flex items-center gap-4 p-4 rounded-xl bg-secondary-50">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-secondary-500">Localisation</p>
                    <p className="font-medium text-secondary-900">
                      {siteConfig.contact.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response time */}
            <div className="bg-primary-600 p-6 rounded-2xl text-white">
              <h4 className="font-semibold mb-2">⚡ Réponse rapide</h4>
              <p className="text-primary-100 text-sm">
                Je réponds à tous les messages sous 24h. 
                Pour les urgences, appelez-moi directement.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-2xl shadow-lg border border-secondary-100"
            >
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <Input
                  label="Nom complet *"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Jean Dupont"
                />
                <Input
                  label="Email *"
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="jean@exemple.fr"
                />
              </div>

              <div className="mb-6">
                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-medium text-secondary-700 mb-2"
                  >
                    Budget estimé
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="">Sélectionnez...</option>
                    <option value="< 1000€">&lt; 1 000€</option>
                    <option value="1000-2000€">1 000€ - 2 000€</option>
                    <option value="2000-5000€">2 000€ - 5 000€</option>
                    <option value="> 5000€">&gt; 5 000€</option>
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

              <p className="text-sm text-secondary-500 text-center mt-4">
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
