'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Cpu, Home } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-background relative overflow-hidden grid-bg">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-primary/10 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[250px] h-[250px] bg-accent/5 rounded-full filter blur-[80px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-md">
        
        {/* Animated AI Icon */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="w-16 h-16 rounded-full bg-accent/10 border border-accent/30 text-accent flex items-center justify-center mb-6"
        >
          <Cpu className="w-8 h-8" />
        </motion.div>

        {/* 404 Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-heading font-extrabold text-7xl sm:text-8xl text-glow-indigo bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent mb-4"
        >
          404
        </motion.h1>

        {/* AI Theme Message */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-heading font-bold text-2xl text-text-primary mb-4"
        >
          Lost in Latent Space
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-text-muted text-sm leading-relaxed mb-8"
        >
          The vector coordinates you queried do not match any active nodes in this portfolio network. Let&apos;s reroute your trajectory.
        </motion.p>

        {/* Home CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <Link href="/">
            <Button variant="primary" className="flex items-center space-x-2 px-6 py-3">
              <Home className="w-4 h-4" />
              <span>Return Home</span>
            </Button>
          </Link>
        </motion.div>

      </div>
    </main>
  );
}
