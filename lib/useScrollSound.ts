'use client';

import { useEffect, RefObject } from 'react';
import { playSound, unlockAudio } from './audio';

export const useScrollSound = (
  ref: RefObject<HTMLElement | null>,
  soundSrc: string,
  volume = 0.2
) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    unlockAudio();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            playSound(soundSrc, volume);
            element.classList.add('visible'); // fade-in
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [ref, soundSrc, volume]);
};