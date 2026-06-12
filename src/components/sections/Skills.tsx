'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsData } from '@/data/portfolioData';
import { SkillCategory } from '@/types';
import Progress from '../ui/Progress';
import Card from '../ui/Card';
import ScrollReveal from '../animations/ScrollReveal';

export default function Skills() {
  const categories: ('All' | SkillCategory)[] = ['All', 'Frontend', 'Backend', 'AI & LLM', 'Cloud & DevOps'];
  const [activeCategory, setActiveCategory] = useState<'All' | SkillCategory>('All');

  const filteredSkills = skillsData.filter(
    (skill) => activeCategory === 'All' || skill.category === activeCategory
  );

  return (
    <section id="skills" className="relative py-24 bg-background overflow-hidden">
      {/* Background glow overlay */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-text-primary mb-4">
              My <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">Skills</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full mb-6" />
            <p className="text-text-muted text-base sm:text-lg">
              A comprehensive view of my technical competencies, tools, and platforms, mapped by expertise levels.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Filters */}
        <ScrollReveal className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer outline-none ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md shadow-primary/25 scale-[1.02]'
                  : 'glass border-surface-border text-text-secondary hover:text-text-primary hover:bg-surface/50'
              }`}
            >
              {category}
            </button>
          ))}
        </ScrollReveal>

        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25, delay: Math.min(index * 0.03, 0.3) }}
              >
                <Card 
                  className="hover:border-accent/40 flex flex-col justify-between h-full group"
                  hoverEffect={true}
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-heading font-bold text-base text-text-primary group-hover:text-accent transition-colors duration-200">
                      {skill.name}
                    </span>
                    <span className="text-xs font-semibold text-accent bg-accent/10 px-2.5 py-0.5 rounded-full">
                      {skill.level}%
                    </span>
                  </div>
                  
                  {/* Reuse Progress Primitive */}
                  <Progress value={skill.level} className="mt-1" />
                  
                  <span className="text-[10px] uppercase tracking-widest text-text-muted mt-3 block font-semibold">
                    {skill.category}
                  </span>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
