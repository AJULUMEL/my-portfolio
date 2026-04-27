'use client';

import { useEffect, useState } from 'react';

interface TypingEffectProps {
  words: string[];
  speed?: number;
  delayBetweenWords?: number;
}

export default function TypingEffect({
  words,
  speed = 50,
  delayBetweenWords = 2000,
}: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: NodeJS.Timeout;

    if (isWaiting) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
        setIsWaiting(false);
      }, delayBetweenWords);
    } else if (isDeleting) {
      if (displayedText.length === 0) {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }, 0);
      } else {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, speed / 2);
      }
    } else {
      if (displayedText === currentWord) {
        timeout = setTimeout(() => {
          setIsWaiting(true);
        }, 0);
      } else {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, speed);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, wordIndex, isDeleting, isWaiting, words, speed, delayBetweenWords]);

  return (
    <span>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
}