'use client';

import React, { useEffect, useRef, useState } from 'react';
import { CentralImage, HeroContainer } from './HeroSlide.styles';

const HeroSlide: React.FC = () => {
  const [phase, setPhase] = useState<
    'idle' | 'animating-out' | 'done' | 'animating-in'
  >('idle');
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      const scrollingDown = current > lastScrollY.current;
      if (scrollingDown && phase !== 'animating-out' && phase !== 'done') {
        setPhase('animating-out');
        setTimeout(() => setPhase('done'), 500);
      } else if (
        !scrollingDown &&
        phase !== 'animating-in' &&
        phase !== 'idle'
      ) {
        setPhase('animating-in');
        setTimeout(() => setPhase('idle'), 500);
      }
      lastScrollY.current = current;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [phase]);

  return <HeroContainer>
    <CentralImage src="/assets/hero.jpg" alt="Hero" $phase={phase} />
  </HeroContainer>;
};

export default HeroSlide;
