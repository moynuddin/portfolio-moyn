'use client';

import { useEffect, useState } from 'react';

interface TypingEffectProps {
  texts: string[];
  speed?: number;
  eraseSpeed?: number;
  delay?: number;
  className?: string;
}

export default function TypingEffect({
  texts,
  speed = 80,
  eraseSpeed = 40,
  delay = 2500,
  className = '',
}: TypingEffectProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = texts[currentTextIndex];

    if (!isDeleting) {
      if (currentText.length < fullText.length) {
        timer = setTimeout(() => {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        }, speed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delay);
      }
    } else {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(fullText.substring(0, currentText.length - 1));
        }, eraseSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }, 300); // 300ms pause after deletion before typing the next item
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTextIndex, texts, speed, eraseSpeed, delay]);

  return (
    <span className={className}>
      {currentText}
      <span className="inline-block w-[2px] h-[1em] bg-accent ml-1 align-middle animate-[pulse_0.8s_infinite]" />
    </span>
  );
}
