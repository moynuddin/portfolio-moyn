'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Tag } from 'lucide-react';
import { experienceData } from '@/data/portfolioData';
import Card from '../ui/Card';
import ScrollReveal from '../animations/ScrollReveal';

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll tracking to draw vertical connecting line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative py-24 bg-background/50 overflow-hidden">
      {/* Background neon blur */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-text-primary mb-4">
              Work <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">History</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
            <p className="text-text-muted text-base sm:text-lg">
              A timeline of my professional experience migrating core platforms, improving performance, and integrating AI workflows.
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative pl-6 sm:pl-10 ml-2 sm:ml-6">
          
          {/* Static Background track line */}
          <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-surface-border/60 rounded-full" />
          
          {/* Animated drawing foreground line */}
          <motion.div 
            className="absolute left-0 top-2 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent rounded-full origin-top"
            style={{ height: lineHeight }}
          />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <div key={exp.id} className="relative group">
                
                {/* Timeline node node */}
                <motion.div 
                  className="absolute -left-[31px] sm:-left-[47px] top-2 flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-background border-2 border-surface-border group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300 z-20 cursor-pointer"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 text-text-muted group-hover:text-primary transition-colors duration-300" />
                </motion.div>

                {/* Staggered card reveal */}
                <ScrollReveal direction="left" delay={index * 0.05} duration={0.65}>
                  <Card 
                    className="hover:border-primary/45 group-hover:shadow-xl group-hover:shadow-background/20"
                    hoverEffect={true}
                  >
                    {/* Header Details */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-surface-border/40 pb-4 mb-4">
                      <div>
                        <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-text-primary group-hover:text-primary transition-colors duration-200">
                          {exp.role}
                        </h3>
                        <span className="text-sm font-semibold text-accent mt-0.5 block">
                          {exp.company}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-text-muted font-medium">
                        <span className="flex items-center space-x-1.5">
                          <Calendar className="w-3.5 h-3.5 text-primary" />
                          <span>{exp.duration}</span>
                        </span>
                        <span className="flex items-center space-x-1.5">
                          <MapPin className="w-3.5 h-3.5 text-secondary" />
                          <span>{exp.location}</span>
                        </span>
                      </div>
                    </div>

                    {/* Responsibilities list */}
                    <ul className="space-y-2.5 mb-6 text-sm sm:text-base text-text-secondary">
                      {exp.description.map((bullet, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack tags */}
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs font-semibold text-text-muted uppercase tracking-widest flex items-center mr-1">
                        <Tag className="w-3.5 h-3.5 mr-1 text-primary" /> Stack:
                      </span>
                      {exp.techUsed.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-2.5 py-1 text-xs font-medium bg-surface-border/30 text-text-primary rounded-md border border-surface-border/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </Card>
                </ScrollReveal>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
