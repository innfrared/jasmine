import { ReactSVG } from 'react-svg';
import styled, { css, keyframes } from 'styled-components';

export const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  background: url('/assets/bg.jpg');
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(17, 17, 17, 0.4);
    z-index: 1;
    pointer-events: none;
  }

  > * {
    position: relative;
    z-index: 2;
  }

  @media (max-width: 768px) {
    height: 100vh;
    padding-left: 2rem;
  }
`;

const liftShrinkFade = keyframes`
  0% {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -45vh, 0) scale(0.06);
    opacity: 1;
  }
`;

const appearBack = keyframes`
  0% {
    transform: translate3d(0, -45vh, 0) scale(0.06);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 1;
  }
  `;

export const CentralImage = styled(ReactSVG)<{
  $phase: 'idle' | 'animating-out' | 'done' | 'animating-in';
}>`
  max-width: 50vw;
  width: 600px;
  pointer-events: none;
  will-change: transform;
  transform-origin: top center;

  color: ${({ $phase }) =>
    $phase === 'done' || $phase === 'animating-out' ? '#9A8300' : '#ffffff'};
  transition: color 0.5s ease;
  & svg {
    width: 100%;
    height: auto;
  }
  ${({ $phase }) => {
    switch ($phase) {
      case 'idle':
        return css`
          transform: translate3d(0, 0, 0) scale(1);
          opacity: 1;
        `;
      case 'animating-out':
        return css`
          animation: ${liftShrinkFade} 0.5s ease forwards;
        `;
      case 'animating-in':
        return css`
          animation: ${appearBack} 0.5s ease forwards;
        `;
      case 'done':
        return css`
          transform: translate3d(0, -50vh, 0) scale(0.1);
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition: opacity 0.2s ease;
        `;
    }
  }}

  @media (prefers-reduced-motion: reduce) {
    animation: none !important;
    transform: none !important;
    opacity: 1 !important;
  }
`;
