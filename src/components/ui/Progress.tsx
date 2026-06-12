'use client';

import { motion } from 'framer-motion';

interface ProgressProps {
  value: number;
  className?: string;
}

export default function Progress({ value, className = '' }: ProgressProps) {
  return (
    <div className={`w-full h-2 bg-surface-border/40 rounded-full overflow-hidden ${className}`}>
      <motion.div
        className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}
