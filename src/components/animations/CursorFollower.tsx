'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorFollower() {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 250 };
  const glowX = useSpring(cursorX, springConfig);
  const glowY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.classList.contains('cursor-pointer')
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!mounted) return null;

  return (
    <>
      <motion.div
        className="custom-cursor hidden md:block"
        style={{
          left: cursorX,
          top: cursorY,
        }}
        animate={{
          scale: hovered ? 2 : 1,
          backgroundColor: hovered ? 'rgb(var(--primary))' : 'rgb(var(--accent))',
        }}
        transition={{ type: 'tween', duration: 0.15 }}
      />
      <motion.div
        className="custom-cursor-glow hidden md:block"
        style={{
          left: glowX,
          top: glowY,
        }}
        animate={{
          scale: hovered ? 1.5 : 1,
          borderColor: hovered ? 'rgb(var(--accent))' : 'rgba(var(--primary), 0.5)',
          backgroundColor: hovered ? 'rgba(var(--accent), 0.15)' : 'rgba(var(--primary), 0)',
        }}
        transition={{ type: 'tween', duration: 0.15 }}
      />
    </>
  );
}
