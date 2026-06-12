'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonialsData } from '@/data/portfolioData';
import Card from '../ui/Card';
import ScrollReveal from '../animations/ScrollReveal';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [isHovered, setIsHovered] = useState(false);

  const slideCount = testimonialsData.length;

  const handleNext = useCallback(() => {
    setDirection('right');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
  }, [slideCount]);

  const handlePrev = useCallback(() => {
    setDirection('left');
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slideCount) % slideCount);
  }, [slideCount]);

  // Autoplay loop
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(handleNext, 6000);
    return () => clearInterval(interval);
  }, [handleNext, isHovered]);

  const variants = {
    enter: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.45, ease: 'easeOut' as const },
    },
    exit: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? -80 : 80,
      opacity: 0,
      transition: { duration: 0.4, ease: 'easeIn' as const },
    }),
  };

  // Helper to render letter avatar initials if image is missing
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .slice(0, 2);
  };

  return (
    <section id="testimonials" className="relative py-24 bg-background/50 overflow-hidden">
      {/* Background neon blur */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-text-primary mb-4">
              Client <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">Feedback</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full mb-6" />
            <p className="text-text-muted text-base sm:text-lg">
              Endorsements and feedback from engineering directors, staff leaders, and product managers.
            </p>
          </div>
        </ScrollReveal>

        {/* Carousel Slider Panel */}
        <div 
          className="relative min-h-[340px] flex items-center justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full"
            >
              <Card className="p-8 sm:p-12 hover:border-surface-border bg-surface/35 shadow-2xl relative">
                {/* Large Background Quote Symbol */}
                <Quote className="absolute right-8 top-8 w-24 h-24 text-surface-border/20 rotate-180 pointer-events-none z-0" />
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  
                  {/* Rating Stars */}
                  <div className="flex items-center space-x-1 mb-6 text-yellow-500">
                    {[...Array(testimonialsData[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-500" />
                    ))}
                  </div>

                  {/* Feedback Text */}
                  <blockquote className="text-lg sm:text-xl font-heading text-text-secondary leading-relaxed mb-8 max-w-2xl italic">
                    &ldquo;{testimonialsData[currentIndex].text}&rdquo;
                  </blockquote>

                  {/* Client Info Block */}
                  <div className="flex flex-col items-center">
                    
                    {/* Avatar Initials Card */}
                    <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-primary to-secondary text-white font-heading font-extrabold text-base flex items-center justify-center border-2 border-surface shadow-md mb-3 select-none">
                      {getInitials(testimonialsData[currentIndex].name)}
                    </div>
                    
                    <cite className="not-italic font-heading font-extrabold text-text-primary text-base">
                      {testimonialsData[currentIndex].name}
                    </cite>
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider mt-0.5">
                      {testimonialsData[currentIndex].role} &bull; {testimonialsData[currentIndex].company}
                    </span>
                  </div>

                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 sm:px-6 pointer-events-none z-20">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-surface-border bg-background/80 hover:bg-background backdrop-blur-md text-text-primary flex items-center justify-center cursor-pointer pointer-events-auto transition-colors duration-200 outline-none focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-surface-border bg-background/80 hover:bg-background backdrop-blur-md text-text-primary flex items-center justify-center cursor-pointer pointer-events-auto transition-colors duration-200 outline-none focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Manual Dots Indicator bar */}
        <div className="flex justify-center space-x-2 mt-8 z-10">
          {testimonialsData.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > currentIndex ? 'right' : 'left');
                setCurrentIndex(i);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer outline-none ${
                currentIndex === i 
                  ? 'bg-accent w-6' 
                  : 'bg-surface-border/80 hover:bg-text-muted'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
