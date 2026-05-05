import styled from 'styled-components';
import { down, media, up } from '@/shared/styles/breakpoints';
import { uiColors, uiMotion } from '@/shared/ui/tokens';

export const RailSlide = styled.div`
  flex-shrink: 0;
  min-width: 62%;
  width: 100%;
  scroll-snap-align: start;

  ${up.tablet} {
    min-width: 0;
    scroll-snap-align: unset;
  }
`;

export const RailTrack = styled.div<{ $desktopColumnCount: number }>`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 16px;
  padding-bottom: 6px;

  ${down.tablet} {
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  ${media.motionReduce} {
    scroll-snap-type: none;
  }

  ${up.tablet} {
    display: grid;
    grid-template-columns: repeat(
      ${({ $desktopColumnCount }) => $desktopColumnCount},
      minmax(0, 1fr)
    );
    gap: 24px;
    overflow: visible;
    scroll-snap-type: none;
    padding-bottom: 0;
  }
`;

export const RailIndicators = styled.div`
  display: none;

  ${down.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    margin-top: 14px;
  }
`;

export const RailIndicatorButton = styled.button<{ $active: boolean }>`
  padding: 10px 2px;
  margin: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: '';
    display: block;
    height: 2px;
    border-radius: 1px;
    transition:
      width ${uiMotion.hover},
      opacity ${uiMotion.hover},
      background-color ${uiMotion.hover};
    width: ${({ $active }) => ($active ? '28px' : '18px')};
    opacity: ${({ $active }) => ($active ? 1 : 0.35)};
    background-color: ${({ $active }) =>
      $active ? uiColors.ink : uiColors.inkMuted};
  }

  &:focus-visible {
    outline: 2px solid ${uiColors.inkSoft};
    outline-offset: 2px;
  }

  ${media.motionReduce} {
    &::after {
      transition: none;
    }
  }
`;
