"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function TypingAnimation({ 
  text, 
  duration = 2000, 
  className 
}: { 
  text: string; 
  duration?: number; 
  className?: string 
}) {
  const [displayedText, setDisplayedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isTypingFinished, setIsTypingFinished] = useState(false);

  useEffect(() => {
    let i = 0;
    const intervalTime = duration / text.length;
    
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(prev => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsTypingFinished(true);
      }
    }, intervalTime);

    return () => clearInterval(typingInterval);
  }, [text, duration]);

  useEffect(() => {
    if (isTypingFinished) {
      const cursorInterval = setInterval(() => {
        setCursorVisible(v => !v);
      }, 500);
      return () => clearInterval(cursorInterval);
    }
  }, [isTypingFinished]);
  
  return (
    <span className={cn(className)}>
      {text.substring(0, displayedText.length)}
      <span className={cn(
        'transition-opacity duration-150',
        cursorVisible ? 'opacity-100' : 'opacity-0'
      )}>|</span>
    </span>
  );
}
