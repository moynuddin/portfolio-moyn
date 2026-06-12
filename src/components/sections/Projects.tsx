'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { projectsData } from '@/data/portfolioData';
import Card from '../ui/Card';
import ScrollReveal from '../animations/ScrollReveal';

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'ai' | 'frontend'>('all');

  const filteredProjects = projectsData.filter(
    (project) => filter === 'all' || project.category === filter
  );

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI & Intelligent Systems' },
    { id: 'frontend', label: 'Frontend & UI Core' }
  ];

  return (
    <section id="projects" className="relative py-24 bg-background overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-text-primary mb-4">
              Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">Projects</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full mb-6" />
            <p className="text-text-muted text-base sm:text-lg">
              A curated collection of systems I have designed, spanning developer productivity auditors, AI RAG interfaces, and highly performant web applications.
            </p>
          </div>
        </ScrollReveal>

        {/* Filters Panel */}
        <ScrollReveal className="flex justify-center gap-2 sm:gap-4 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as 'all' | 'ai' | 'frontend')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer outline-none ${
                filter === tab.id
                  ? 'bg-gradient-to-r from-accent to-primary text-white shadow-md shadow-accent/20 scale-[1.02]'
                  : 'glass border-surface-border text-text-secondary hover:text-text-primary hover:bg-surface/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </ScrollReveal>

        {/* Project Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="h-full"
              >
                <Card 
                  className="p-0 hover:border-accent/40 flex flex-col h-full overflow-hidden group/pcard border border-surface-border bg-surface/30"
                  hoverEffect={true}
                >
                  
                  {/* Image Container with Hover zoom */}
                  <div className="h-48 relative overflow-hidden bg-gradient-to-br from-surface to-background flex items-center justify-center border-b border-surface-border/40">
                    {project.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover/pcard:scale-105 transition-transform duration-500 ease-out"
                        onError={(e) => {
                          // Fallback: If image fails to load, replace with gradient
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLDivElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                    ) : null}

                    {/* Gradient fallback overlay (used when image is missing/broken) */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-secondary/15 to-accent/10 flex flex-col justify-center items-center p-4 text-center"
                      style={{ display: project.image ? 'none' : 'flex' }}
                    >
                      <Code className="w-12 h-12 text-accent/40 mb-2 animate-[pulse_2s_infinite]" />
                      <span className="font-heading font-bold text-sm text-text-secondary">{project.title}</span>
                    </div>

                    <div className="absolute top-3 left-3 bg-background/85 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] uppercase font-bold tracking-widest text-accent border border-surface-border">
                      {project.category === 'ai' ? 'AI System' : 'Frontend'}
                    </div>
                  </div>

                  {/* Body details */}
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="font-heading font-extrabold text-xl text-text-primary group-hover/pcard:text-accent transition-colors duration-200 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Tech stack badges */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.tech.map((t) => (
                          <span 
                            key={t}
                            className="text-[10px] font-semibold bg-surface-border/40 px-2.5 py-0.5 rounded-full text-text-secondary border border-surface-border/10"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project links buttons */}
                    <div className="flex items-center space-x-3 pt-4 border-t border-surface-border/30">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1.5 text-xs font-semibold text-text-secondary hover:text-text-primary hover:underline transition-colors duration-200 cursor-pointer"
                        >
                          <GithubIcon className="w-4 h-4" />
                          <span>Repository</span>
                        </a>
                      )}
                      
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1.5 text-xs font-semibold text-accent hover:text-accent/80 hover:underline transition-colors duration-200 cursor-pointer"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>

                  </div>

                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
