'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowRight, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { personalInfo } from '@/data/portfolioData';
import Button from '../ui/Button';
import TypingEffect from '../animations/TypingEffect';
import FloatingParticles from '../animations/FloatingParticles';
import Magnetic from '../animations/Magnetic';

export default function Hero() {
  const titles = [
    "Senior Frontend Engineer",
    "React & Next.js Expert",
    "AI & RAG Developer",
    "Fintech Systems Architect"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 }
    }
  };

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#projects');
    if (target) {
      const offsetTop = (target as HTMLElement).offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden grid-bg"
    >
      {/* Floating Canvas Particles */}
      <FloatingParticles />

      {/* Floating neon background blur blobs */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] rounded-full bg-primary/25 filter blur-[80px] sm:blur-[120px] animate-float-slow pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] rounded-full bg-secondary/20 filter blur-[80px] sm:blur-[120px] animate-float-medium pointer-events-none z-0" />
      <div className="absolute top-1/2 right-1/3 w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] rounded-full bg-accent/15 filter blur-[80px] sm:blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Text Column */}
          <motion.div
            className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left items-center lg:items-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Greeting badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-primary/30 glass-premium text-xs font-semibold text-accent uppercase tracking-widest"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
              <span>Available for Leadership & Contracts</span>
            </motion.div>

            {/* Main Name Heading */}
            <motion.h1
              variants={itemVariants}
              className="font-heading font-extrabold text-4xl sm:text-6xl xl:text-7xl leading-tight tracking-tight text-text-primary"
            >
              Hi, I&apos;m <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent text-glow-indigo">{personalInfo.name}</span>
            </motion.h1>

            {/* Looping Title Typing Effect */}
            <motion.div
              variants={itemVariants}
              className="h-10 sm:h-12 flex items-center"
            >
              <h2 className="font-heading font-medium text-lg sm:text-2xl text-text-secondary">
                <TypingEffect texts={titles} className="text-accent font-semibold" />
              </h2>
            </motion.div>

            {/* Summary Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-text-muted max-w-xl leading-relaxed"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto"
            >
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto flex items-center space-x-2 shadow-lg shadow-primary/20"
                onClick={handleScrollToProjects}
              >
                <span>Explore Work</span>
                <ArrowRight className="w-4 h-4" />
              </Button>

              <a
                href="/Moin_resume.pdf"
                download="Moin_Uddin_Resume.pdf"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 border-surface-border"
                >
                  <Download className="w-4 h-4 text-accent" />
                  <span>Get Resume</span>
                </Button>
              </a>
            </motion.div>

            {/* Social profiles linking */}
            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-4 pt-6"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-text-muted">Connect:</span>
              <div className="flex space-x-3">
                {[
                  { icon: <GithubIcon className="w-5 h-5" />, href: personalInfo.github, name: 'GitHub' },
                  { icon: <LinkedinIcon className="w-5 h-5" />, href: personalInfo.linkedin, name: 'LinkedIn' },
                  { icon: <Mail className="w-5 h-5" />, href: `mailto:${personalInfo.email}`, name: 'Email' }
                ].map((social) => (
                  <Magnetic key={social.name}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-full border border-surface-border glass text-text-secondary hover:text-accent hover:border-accent/40 transition-colors duration-200"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  </Magnetic>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image/Graphic Column */}
          <motion.div
            className="lg:col-span-5 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 50, damping: 15, delay: 0.4 }}
          >
            <div className="relative group w-72 h-72 sm:w-96 sm:h-96">
              {/* Outer spinning borders & shadows */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-secondary to-accent opacity-50 blur-xl group-hover:scale-105 transition-transform duration-500 pointer-events-none" />

              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-accent opacity-30 animate-pulse duration-[3s] pointer-events-none" />

              {/* Glass container wrapping the generated profile photo */}
              <div className="relative w-full h-full rounded-full border-2 border-surface-border glass-premium overflow-hidden p-3 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/Profile_2.jpeg"
                    alt="Moyn Uddin Profile Picture"
                    className="w-full h-full object-cover rounded-full scale-105 group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Subtle orbital stats label decoration */}
              <motion.div
                className="absolute -top-3 -right-3 px-4 py-2 rounded-xl border border-surface-border glass-premium shadow-xl pointer-events-none hidden sm:block"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-xs font-bold text-accent">AI Enthusiast 🤖</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-3 -left-3 px-4 py-2 rounded-xl border border-surface-border glass-premium shadow-xl pointer-events-none hidden sm:block"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <span className="text-xs font-bold text-primary">React Architect ⚛️</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator banner */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        <a
          href="#about"
          className="flex flex-col items-center text-xs text-text-muted hover:text-accent transition-colors duration-200"
          onClick={(e) => {
            e.preventDefault();
            const target = document.querySelector('#about');
            if (target) {
              window.scrollTo({
                top: (target as HTMLElement).offsetTop - 80,
                behavior: 'smooth'
              });
            }
          }}
        >
          <span className="uppercase tracking-widest mb-1.5 font-semibold text-[10px]">Scroll Down</span>
          <div className="w-6 h-10 border border-surface-border rounded-full flex justify-center p-1.5">
            <motion.div
              className="w-1.5 h-1.5 bg-accent rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </a>
      </div>
    </section>
  );
}
