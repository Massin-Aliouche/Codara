'use client';

import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { portfolio } from '@/lib/config';
import { Badge } from '@/components/ui';

const categories = ['Tous', 'Site Vitrine'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Tous');

  const filteredProjects = activeCategory === 'Tous'
    ? portfolio
    : portfolio.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-[var(--surface)] backdrop-blur-sm rounded-full text-[var(--text-muted)] font-medium text-sm mb-4 border border-[var(--border)] shadow-sm">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text)] mb-4">
            Mes dernières{' '}
            <span className="gradient-text">réalisations</span>
          </h2>
          <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
            Découvrez quelques-uns des projets que j&apos;ai réalisés pour mes clients.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-accent-500/25'
                  : 'bg-[var(--surface)] text-[var(--text-muted)] hover:bg-[var(--surface-hover)]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-[var(--surface)] rounded-2xl overflow-hidden shadow-lg border border-[var(--border)] card-hover"
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-secondary-100 to-primary-50 overflow-hidden">
                {/* Placeholder - remplace par tes vraies images */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-primary-400 text-6xl font-bold opacity-40">
                    {project.title.charAt(0)}
                  </div>
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-secondary-900/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium bg-secondary-100 text-secondary-900 rounded-lg hover:bg-secondary-200 transition-colors"
                  >
                    Voir le projet
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <Badge variant="primary" className="mb-3">
                  {project.category}
                </Badge>
                <h3 className="text-xl font-semibold text-[var(--text)] mb-2">
                  {project.title}
                </h3>
                <p className="text-[var(--text-muted)] mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-[var(--bg)] text-[var(--text-muted)] text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
