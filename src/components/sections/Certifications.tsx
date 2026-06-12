'use client';

import { Award, ShieldCheck, Cpu, ExternalLink } from 'lucide-react';
import { certificationsData } from '@/data/portfolioData';
import Card from '../ui/Card';
import ScrollReveal from '../animations/ScrollReveal';

export default function Certifications() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI':
        return <Cpu className="w-5 h-5 text-accent" />;
      case 'Frontend':
        return <Award className="w-5 h-5 text-primary" />;
      case 'Cloud':
        return <ShieldCheck className="w-5 h-5 text-secondary" />;
      default:
        return <Award className="w-5 h-5 text-text-muted" />;
    }
  };

  return (
    <section id="certifications" className="relative py-24 bg-background overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-text-primary mb-4">
              Certifications & <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Badges</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
            <p className="text-text-muted text-base sm:text-lg">
              Official verification of my expertise in AI engineering, prompt design, cloud infrastructure, and frontend software engineering.
            </p>
          </div>
        </ScrollReveal>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificationsData.map((cert, index) => (
            <ScrollReveal 
              key={cert.id} 
              direction="up" 
              delay={index * 0.05}
              className="h-full"
            >
              <Card 
                className="h-full flex flex-col justify-between hover:border-primary/40 group border-surface-border bg-surface/30"
                hoverEffect={true}
              >
                <div>
                  {/* Icon and Issuer Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-surface-border/20 group-hover:bg-primary/10 transition-colors duration-300">
                      {getCategoryIcon(cert.category)}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted">
                      {cert.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-extrabold text-base sm:text-lg text-text-primary group-hover:text-primary transition-colors duration-200 mb-1 leading-snug">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <span className="text-xs font-semibold text-text-muted block mb-4">
                    {cert.issuer}
                  </span>
                </div>

                {/* Verification link */}
                {cert.credentialUrl && (
                  <div className="pt-4 border-t border-surface-border/40">
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-xs font-bold uppercase tracking-wider text-accent hover:text-accent/80 transition-colors duration-200 cursor-pointer"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}

              </Card>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
