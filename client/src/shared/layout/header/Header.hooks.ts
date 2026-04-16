import {
  useEffect,
  useRef,
  useState,
  type MutableRefObject,
  type RefObject,
} from 'react';
import {
  HEADER_ANIMATION_DURATION_MS,
  getStoredCartCount,
  getStoredLikedCount,
} from './Header.helpers';

export type HeaderPhase = 'idle' | 'animating-out' | 'done' | 'animating-in';

const clearScheduledAnimation = (
  timeoutRef: MutableRefObject<number | null>
) => {
  if (timeoutRef.current === null) {
    return;
  }

  window.clearTimeout(timeoutRef.current);
  timeoutRef.current = null;
};

export const useDismissibleLayer = (
  isOpen: boolean,
  containerRef: RefObject<HTMLDivElement | null>,
  onDismiss: () => void
) => {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        onDismiss();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onDismiss();
      }
    };

    window.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [containerRef, isOpen, onDismiss]);
};

export const useHeaderCounts = () => {
  const [cartCount, setCartCount] = useState(0);
  const [likedCount, setLikedCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      setCartCount(getStoredCartCount());
    };

    const updateLikedCount = () => {
      setLikedCount(getStoredLikedCount());
    };

    updateCartCount();
    updateLikedCount();

    window.addEventListener('storage', updateCartCount);
    window.addEventListener('cartUpdated', updateCartCount);
    window.addEventListener('storage', updateLikedCount);
    window.addEventListener('likedUpdated', updateLikedCount);

    return () => {
      window.removeEventListener('storage', updateCartCount);
      window.removeEventListener('cartUpdated', updateCartCount);
      window.removeEventListener('storage', updateLikedCount);
      window.removeEventListener('likedUpdated', updateLikedCount);
    };
  }, []);

  return { cartCount, likedCount };
};

export const useHeaderScrollState = (forceScrolled: boolean) => {
  const [isScrolled, setIsScrolled] = useState(forceScrolled);
  const [phase, setPhase] = useState<HeaderPhase>(
    forceScrolled ? 'done' : 'idle'
  );
  const animationTimeoutRef = useRef<number | null>(null);
  const phaseRef = useRef<HeaderPhase>(forceScrolled ? 'done' : 'idle');

  useEffect(() => {
    return () => {
      clearScheduledAnimation(animationTimeoutRef);
    };
  }, []);

  useEffect(() => {
    phaseRef.current = phase;
  }, [phase]);

  useEffect(() => {
    if (forceScrolled) {
      clearScheduledAnimation(animationTimeoutRef);
      setIsScrolled(true);
      setPhase('done');
      phaseRef.current = 'done';
      return;
    }

    let ticking = false;
    let latestScrollY = window.scrollY;

    const schedulePhase = (
      animationPhase: HeaderPhase,
      settledPhase: HeaderPhase
    ) => {
      phaseRef.current = animationPhase;
      setPhase(animationPhase);
      clearScheduledAnimation(animationTimeoutRef);
      animationTimeoutRef.current = window.setTimeout(() => {
        phaseRef.current = settledPhase;
        setPhase(settledPhase);
        animationTimeoutRef.current = null;
      }, HEADER_ANIMATION_DURATION_MS);
    };

    const updateScrollState = () => {
      const isAtTop = latestScrollY <= 2;
      setIsScrolled(!isAtTop);

      if (animationTimeoutRef.current !== null) {
        return;
      }

      if (!isAtTop && phaseRef.current === 'idle') {
        schedulePhase('animating-out', 'done');
        return;
      }

      if (isAtTop && phaseRef.current === 'done') {
        schedulePhase('animating-in', 'idle');
      }
    };

    const handleScroll = () => {
      latestScrollY = window.scrollY;
      if (ticking) {
        return;
      }

      ticking = true;
      requestAnimationFrame(() => {
        updateScrollState();
        ticking = false;
      });
    };

    updateScrollState();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [forceScrolled]);

  return { isScrolled, phase };
};
