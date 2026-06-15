'use client';

import type { FocusEvent, ReactNode, RefObject } from 'react';
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { breakpoints } from '@/shared/styles/breakpoints';
import {
  RailIndicatorButton,
  RailIndicators,
  RailSlide,
  RailTrack,
} from './ResponsiveSnapRail.styles';

const mobileMaxPx = breakpoints.tablet - 1;
const autoAdvanceIntervalMs = 5500;
const resumeAfterInteractionMs = 4000;

function useSnapRailActiveIndex(
  scrollRef: RefObject<HTMLDivElement | null>,
  itemCount: number
) {
  const [activeIndex, setActiveIndex] = useState(0);
  const ticking = useRef(false);

  const updateActive = useCallback(() => {
    const el = scrollRef.current;
    if (!el || typeof window === 'undefined') return;

    const isMobile = window.matchMedia(`(max-width: ${mobileMaxPx}px)`).matches;
    if (!isMobile) return;

    const { children } = el;
    if (children.length === 0) return;

    const viewportCenter = el.scrollLeft + el.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;

    for (let i = 0; i < children.length; i++) {
      const card = children[i] as HTMLElement;
      const center = card.offsetLeft + card.offsetWidth / 2;
      const dist = Math.abs(center - viewportCenter);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    }

    setActiveIndex(best);
    ticking.current = false;
  }, [scrollRef]);

  const onScroll = useCallback(() => {
    if (!ticking.current) {
      ticking.current = true;
      requestAnimationFrame(updateActive);
    }
  }, [updateActive]);

  useLayoutEffect(() => {
    updateActive();
  }, [updateActive, itemCount]);

  useEffect(() => {
    window.addEventListener('resize', updateActive);
    return () => window.removeEventListener('resize', updateActive);
  }, [updateActive]);

  return { activeIndex, onScroll };
}

export type ResponsiveSnapRailProps<T> = {
  items: readonly T[];
  getItemKey: (item: T) => string;
  renderItem: (item: T, index: number) => ReactNode;
  getIndicatorLabel: (item: T) => string;
  indicatorsGroupAriaLabel: string;
  desktopColumnCount?: number;
};

export default function ResponsiveSnapRail<T>({
  items,
  getItemKey,
  renderItem,
  getIndicatorLabel,
  indicatorsGroupAriaLabel,
  desktopColumnCount = 3,
}: ResponsiveSnapRailProps<T>) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { activeIndex, onScroll } = useSnapRailActiveIndex(
    scrollRef,
    items.length
  );

  const scrollRailToIndex = useCallback((index: number) => {
    const row = scrollRef.current;
    if (!row || typeof window === 'undefined') return;
    const card = row.children[index] as HTMLElement | undefined;
    if (!card) return;

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    row.scrollTo({
      left: card.offsetLeft,
      behavior: reduceMotion ? 'auto' : 'smooth',
    });
  }, []);

  const activeIndexRef = useRef(activeIndex);
  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  const autoScrollPausedRef = useRef(false);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearResumeTimeout = useCallback(() => {
    if (resumeTimeoutRef.current !== null) {
      clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = null;
    }
  }, []);

  const pauseAutoScroll = useCallback(() => {
    autoScrollPausedRef.current = true;
    clearResumeTimeout();
  }, [clearResumeTimeout]);

  const scheduleResumeAutoScroll = useCallback(() => {
    clearResumeTimeout();
    resumeTimeoutRef.current = setTimeout(() => {
      autoScrollPausedRef.current = false;
      resumeTimeoutRef.current = null;
    }, resumeAfterInteractionMs);
  }, [clearResumeTimeout]);

  useEffect(() => {
    return () => clearResumeTimeout();
  }, [clearResumeTimeout]);

  useEffect(() => {
    if (items.length <= 1) return;

    const tick = () => {
      if (typeof window === 'undefined') return;
      if (autoScrollPausedRef.current) return;

      const isMobile = window.matchMedia(
        `(max-width: ${mobileMaxPx}px)`
      ).matches;
      if (!isMobile) return;

      if (
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ) {
        return;
      }

      const next = (activeIndexRef.current + 1) % items.length;
      scrollRailToIndex(next);
    };

    const id = window.setInterval(tick, autoAdvanceIntervalMs);
    return () => clearInterval(id);
  }, [items.length, scrollRailToIndex]);

  const handleRailPointerDown = useCallback(() => {
    pauseAutoScroll();
  }, [pauseAutoScroll]);

  const handleRailPointerUp = useCallback(() => {
    scheduleResumeAutoScroll();
  }, [scheduleResumeAutoScroll]);

  const handleRailFocusCapture = useCallback(() => {
    pauseAutoScroll();
  }, [pauseAutoScroll]);

  const handleRailBlurCapture = useCallback(
    (e: FocusEvent<HTMLDivElement>) => {
      const next = e.relatedTarget as Node | null;
      if (!next || !e.currentTarget.contains(next)) {
        scheduleResumeAutoScroll();
      }
    },
    [scheduleResumeAutoScroll]
  );

  return (
    <>
      <RailTrack
        ref={scrollRef}
        onScroll={onScroll}
        onPointerDown={handleRailPointerDown}
        onPointerUp={handleRailPointerUp}
        onPointerCancel={handleRailPointerUp}
        onLostPointerCapture={handleRailPointerUp}
        onFocusCapture={handleRailFocusCapture}
        onBlurCapture={handleRailBlurCapture}
        $desktopColumnCount={desktopColumnCount}
      >
        {items.map((item, index) => (
          <RailSlide key={getItemKey(item)}>
            {renderItem(item, index)}
          </RailSlide>
        ))}
      </RailTrack>
      <RailIndicators role="group" aria-label={indicatorsGroupAriaLabel}>
        {items.map((item, index) => (
          <RailIndicatorButton
            key={getItemKey(item)}
            type="button"
            $active={index === activeIndex}
            aria-label={getIndicatorLabel(item)}
            aria-current={index === activeIndex ? 'true' : undefined}
            onClick={() => {
              pauseAutoScroll();
              scheduleResumeAutoScroll();
              scrollRailToIndex(index);
            }}
          />
        ))}
      </RailIndicators>
    </>
  );
}
