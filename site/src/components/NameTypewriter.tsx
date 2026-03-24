'use client';

import { useState, useEffect } from 'react';

interface NameTypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

export default function NameTypewriter({
  text,
  speed = 120,
  delay = 100,
  className = '',
  onComplete,
}: NameTypewriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!isTyping || currentIndex >= text.length) {
      if (currentIndex >= text.length && onComplete) {
        onComplete();
      }
      return;
    }

    const typeTimer = setTimeout(() => {
      setDisplayText(prev => prev + text[currentIndex]);
      setCurrentIndex(prev => prev + 1);
    }, speed);

    return () => clearTimeout(typeTimer);
  }, [isTyping, currentIndex, text, speed, onComplete]);

  return (
    <span className={className}>
      {displayText}
      {isTyping && currentIndex < text.length && (
        <span className="inline-block w-0.5 h-1.2em bg-green-500 ml-1 animate-pulse" />
      )}
    </span>
  );
}
