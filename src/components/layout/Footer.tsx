'use client';

import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { motion } from 'framer-motion';
import { personalInfo } from '@/data/portfolioData';
import Magnetic from '../animations/Magnetic';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const socialLinks = [
    { icon: <GithubIcon className="w-5 h-5" />, href: personalInfo.github, label: 'GitHub' },
    { icon: <LinkedinIcon className="w-5 h-5" />, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: <Mail className="w-5 h-5" />, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  return (
    <footer className="relative border-t border-surface-border bg-background py-12 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-t from-primary/10 to-transparent rounded-full filter blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Branding & Info */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <div className="flex items-center space-x-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary text-white font-bold text-sm">
              M
            </span>
            <span className="font-heading font-semibold text-lg text-text-primary">
              Moyn Uddin
            </span>
          </div>
          <p className="text-sm text-text-muted text-center md:text-left">
            Senior Frontend Engineer & AI Enthusiast
          </p>
        </div>

        {/* Social Profiles */}
        <div className="flex space-x-4">
          {socialLinks.map((link) => (
            <Magnetic key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-surface-border glass text-text-secondary hover:text-accent hover:border-accent/50 transition-colors duration-200"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            </Magnetic>
          ))}
        </div>

        {/* Rights & Back to top */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <span className="text-xs text-text-muted">
            &copy; {currentYear} Moyn Uddin. All rights reserved.
          </span>
          
          <motion.button
            onClick={scrollToTop}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-surface-border glass text-text-secondary hover:text-accent cursor-pointer outline-none focus:outline-none"
            aria-label="Back to top"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
