import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeroContainer } from './HeroSlide.styles';
import Button from '../../../ui/styles/button/Button';

const HeroSlide: React.FC = () => {
  const navigate = useNavigate();
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
    </HeroContainer>
  );
};

export default HeroSlide;
