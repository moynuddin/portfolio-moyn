'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { Award, Briefcase, Users, Heart } from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';
import Card from '../ui/Card';
import ScrollReveal from '../animations/ScrollReveal';

// Custom Count-Up Counter Component
function Counter({ value, duration = 1.5, suffix = '' }: { value: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [value, duration, isInView]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
  const statsConfig = [
    { label: "Years Experience", value: 6, suffix: "+", icon: <Briefcase className="w-5 h-5 text-primary" /> },
    { label: "Projects Delivered", value: 50, suffix: "+", icon: <Award className="w-5 h-5 text-secondary" /> },
    { label: "Happy Clients", value: 20, suffix: "+", icon: <Users className="w-5 h-5 text-accent" /> },
    { label: "Users Impacted", value: 100, suffix: "K+", icon: <Heart className="w-5 h-5 text-red-400" /> }
  ];

  return (
    <section id="about" className="relative py-24 bg-background/50 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-secondary/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-text-primary mb-4">
              About <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Me</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
            <p className="text-text-muted text-base sm:text-lg">
              A brief insight into my professional DNA, core statistics, and engineering philosophy.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Biography & Story */}
          <ScrollReveal direction="right" className="lg:col-span-7 flex flex-col space-y-6">
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-text-primary">
              Engineering high-performance applications with UI precision and AI features.
            </h3>
            
            <p className="text-text-secondary leading-relaxed">
              {personalInfo.aboutSummary}
            </p>
            
            <p className="text-text-secondary leading-relaxed">
              Throughout my journey, I have had the privilege of working with leading fintech agencies and e-commerce companies like UOB Singapore, Maybank, Chewy, and Qatar Digital Bank. My core passion lies in engineering beautiful, secure, and robust frontend platforms while pushing the boundaries of AI integration in the browser.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-surface-border glass">
                <span className="text-xs font-semibold text-accent uppercase tracking-widest block mb-1">Architecture</span>
                <span className="text-sm text-text-secondary">Reusable components, component-driven design systems, secure authorization schemes (MFA).</span>
              </div>
              <div className="p-4 rounded-xl border border-surface-border glass">
                <span className="text-xs font-semibold text-primary uppercase tracking-widest block mb-1">AI Stack</span>
                <span className="text-sm text-text-secondary">Retrieval-Augmented Generation (RAG), conversational LLM interfaces, vector DB search (Pinecone).</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Statistics Grid */}
          <ScrollReveal direction="left" className="lg:col-span-5 w-full">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {statsConfig.map((stat) => (
                <Card 
                  key={stat.label} 
                  className="flex flex-col justify-between items-center text-center p-6 sm:p-8 hover:border-primary/30 group/stat"
                  hoverEffect={true}
                >
                  {/* Floating Icon Wrapper */}
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-surface-border/20 mb-4 group-hover/stat:bg-gradient-to-br group-hover/stat:from-primary/10 group-hover/stat:to-secondary/10 transition-colors duration-300">
                    {stat.icon}
                  </div>
                  
                  {/* Big Number */}
                  <span className="font-heading font-extrabold text-3xl sm:text-5xl text-text-primary tracking-tight mb-2">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </span>
                  
                  {/* Text Label */}
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-text-muted">
                    {stat.label}
                  </span>
                </Card>
              ))}
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
