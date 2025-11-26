import React, { useEffect, useState } from 'react';
import { HeroContainer, CentralImage } from './HeroSlide.styles';

const HeroSlide: React.FC = () => {
  const [phase, setPhase] = useState<
    'idle' | 'animating-out' | 'done' | 'animating-in'
  >('idle');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      const scrollingDown = current > lastScrollY;
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
      setLastScrollY(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [phase]);

  return (
    <HeroContainer>
      {/*<CentralImage*/}
      {/*  src={'assets/logobig.svg'}*/}
      {/*  $phase={phase}*/}
      {/*  beforeInjection={svg => {*/}
      {/*    svg.querySelectorAll('[stroke]').forEach(el => {*/}
      {/*      el.setAttribute('stroke', 'currentColor');*/}
      {/*    });*/}
      {/*  }}*/}
      {/*/>*/}
    </HeroContainer>
  );
};

export default HeroSlide;
