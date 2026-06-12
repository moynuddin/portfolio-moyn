'use client';

import { motion } from 'framer-motion';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onAnimationStart' | 'onAnimationEnd' | 'onDrag' | 'onDragStart' | 'onDragEnd'> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-heading font-semibold tracking-wide rounded-full transition-all duration-300 outline-none cursor-pointer border border-transparent select-none';
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary to-secondary text-white shadow-md shadow-primary/10 hover:shadow-primary/35 hover:brightness-105 border-none',
    secondary: 'glass border-surface-border text-text-primary hover:bg-surface/50',
    outline: 'border border-text-primary/15 text-text-primary hover:bg-text-primary/5 hover:border-text-primary/30',
    ghost: 'text-text-secondary hover:text-text-primary hover:bg-surface/30 border-none',
  };

  const sizes = {
    sm: 'px-4 py-1.5 text-xs uppercase tracking-wider',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3 text-base',
  };

  return (
    <motion.button
      className={twMerge(clsx(baseStyles, variants[variant], sizes[size], className))}
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
