'use client';

import { ReactNode, useRef } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glass?: boolean;
}

export default function Card({
  children,
  className = '',
  hoverEffect = true,
  glass = true,
}: CardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const glowStyle = useMotionTemplate`
    radial-gradient(
      300px circle at ${mouseX}px ${mouseY}px,
      rgba(99, 102, 241, 0.12),
      transparent 80%
    )
  `;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={twMerge(
        clsx(
          'group relative rounded-2xl border border-surface-border p-6 overflow-hidden transition-all duration-300',
          glass ? 'glass' : 'bg-surface',
          className
        )
      )}
      whileHover={hoverEffect ? { y: -5 } : undefined}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Spot Glow Overlay (fades in when hovering over Card) */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: glowStyle }}
      />
      
      {/* Content wrapper */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </motion.div>
  );
}
