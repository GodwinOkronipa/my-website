'use client';

import { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  showCursor?: boolean;
  onComplete?: () => void;
  start?: boolean;
}

export default function Typewriter({
  text,
  speed = 80,
  delay = 0,
  className = '',
  showCursor = true,
  onComplete,
  start = true,
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showCursorState, setShowCursorState] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);

  // Reset and start when start becomes true
  useEffect(() => {
    if (start && !hasStarted) {
      setHasStarted(true);
      setDisplayText('');
      setIsTyping(false);
      setShowCursorState(true);
      
      const startTimeout = setTimeout(() => {
        setIsTyping(true);
      }, delay);

      return () => clearTimeout(startTimeout);
    }
  }, [start, hasStarted, delay]);

  // Reset hasStarted when start becomes false
  useEffect(() => {
    if (!start) {
      setHasStarted(false);
      setDisplayText('');
      setIsTyping(false);
    }
  }, [start]);

  useEffect(() => {
    if (!isTyping) return;

    if (displayText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      // Typing complete
      if (onComplete) {
        const completeTimeout = setTimeout(() => {
          onComplete();
        }, 500); // Small pause before calling onComplete
        return () => clearTimeout(completeTimeout);
      }
      // Stop cursor blinking after a moment
      const cursorTimeout = setTimeout(() => {
        setShowCursorState(false);
      }, 2000);
      return () => clearTimeout(cursorTimeout);
    }
  }, [displayText, isTyping, text, speed, onComplete]);

  // Helper function to render text with HTML-like links
  const renderContent = (content: string) => {
    const parts = content.split(/(<a[\s\S]*?<\/a>)/g);
    
    return parts.map((part, index) => {
      if (part.startsWith('<a')) {
        const hrefMatch = part.match(/href="([^"]*)"/);
        const textMatch = part.match(/>([^<]*)</);
        const href = hrefMatch ? hrefMatch[1] : '';
        const linkText = textMatch ? textMatch[1] : '';
        
        return (
          <a 
            key={index}
            href={href} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[var(--accent)] underline hover:opacity-80 transition-opacity"
            style={{ textDecoration: 'underline' }}
          >
            {linkText}
          </a>
        );
      }
      
      return part.split('\n').map((line, lineIndex, array) => (
        <span key={`${index}-${lineIndex}`}>
          {line}
          {lineIndex < array.length - 1 && <br />}
        </span>
      ));
    });
  };

  return (
    <span className={className}>
      {renderContent(displayText)}
      {showCursor && showCursorState && (
        <span className="typewriter-cursor" />
      )}
    </span>
  );
}
