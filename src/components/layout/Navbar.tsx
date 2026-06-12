'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useScrollDirection } from '@/hooks/useScrollDirection';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'AI & Innovation', href: '#ai' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = (target as HTMLElement).offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'h-16 border-b border-surface-border glass' 
          : 'h-20 bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: scrollDirection === 'down' && isScrolled && !isOpen ? -80 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Branding Logo */}
        <a 
          href="#hero" 
          onClick={(e) => handleClick(e, '#hero')}
          className="group flex items-center space-x-2 font-heading font-bold text-xl sm:text-2xl tracking-wider text-text-primary hover:text-accent transition-colors duration-200"
        >
          <span className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary text-white shadow-lg shadow-primary/20">
            M
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-accent rounded-full border border-surface" />
          </span>
          <span className="hidden sm:inline-block font-medium">
            oyn<span className="text-accent">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="px-4 py-2 rounded-full text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-surface/40 transition-all duration-200 relative group"
            >
              {item.name}
              <span className="absolute bottom-1.5 left-4 right-4 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
            </a>
          ))}
        </nav>

        {/* Right Actions (Theme and Menu toggle) */}
        <div className="flex items-center space-x-3">
          <ThemeToggle />
          
          <a
            href="#contact"
            onClick={(e) => handleClick(e, '#contact')}
            className="hidden sm:inline-flex items-center space-x-1 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all duration-300 shadow-md shadow-primary/10 hover:shadow-primary/30 hover:scale-[1.02]"
          >
            <span>Let&apos;s Chat</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Toggle */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full border border-surface-border glass text-text-primary outline-none focus:outline-none"
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-y-0 right-0 w-full max-w-sm z-40 bg-background/95 backdrop-blur-2xl border-l border-surface-border shadow-2xl flex flex-col justify-between"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: 'easeOut' }}
          >
            <div className="pt-24 px-6 flex flex-col space-y-4">
              <div className="border-b border-surface-border pb-4 mb-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-text-muted">Navigation Menu</span>
              </div>
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="text-xl font-heading font-medium text-text-primary hover:text-accent transition-colors duration-200 py-2 flex items-center justify-between group"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <span>{item.name}</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </motion.a>
              ))}
            </div>

            <div className="p-6 border-t border-surface-border bg-surface/20 flex flex-col space-y-4">
              <div className="flex items-center justify-between text-sm text-text-muted">
                <span>Location:</span>
                <span>Kuala Lumpur, Malaysia</span>
              </div>
              <a
                href="#contact"
                onClick={(e) => handleClick(e, '#contact')}
                className="w-full text-center py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity duration-200 shadow-lg shadow-primary/20"
              >
                Hire Moyn Uddin
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
