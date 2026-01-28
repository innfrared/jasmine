import styled from 'styled-components';

export const CellButton = styled.button<{ $imageUrl: string }>`
  position: relative;
  border: none;
  width: 100%;
  min-height: clamp(320px, 32vw, 480px);
  border-radius: 0;
  padding: 2.25rem 2rem;
  text-align: center;
  cursor: pointer;
  color: #ffffff;
  background-image: ${({ $imageUrl }) =>
    `linear-gradient(rgba(11, 27, 58, 0.62), rgba(11, 27, 58, 0.62)), url(${$imageUrl})`};
  background-size: cover;
  background-position: center;
  box-shadow: 0 18px 45px rgba(11, 27, 58, 0.22);
  transition: transform 240ms ease;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(11, 27, 58, 0.75) 0%,
      rgba(11, 27, 58, 0.2) 55%,
      rgba(11, 27, 58, 0) 100%
    );
    opacity: 0;
    transform: translateY(8px);
    transition:
      opacity 420ms ease,
      transform 420ms ease;
    pointer-events: none;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  &:hover,
  &:focus-visible {
    transform: translateY(-2px);
  }

  &:hover::after,
  &:focus-visible::after {
    opacity: 1;
    transform: translateY(0);
  }

  &:focus-visible {
    outline: none;
    box-shadow:
      0 26px 65px rgba(11, 27, 58, 0.28),
      0 0 0 2px rgba(255, 255, 255, 0.7),
      0 0 0 6px rgba(11, 27, 58, 0.5);
  }

  @media (max-width: 900px) {
    min-height: clamp(320px, 70vw, 520px);
    padding: 1.75rem 1.5rem;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &::after {
      transition: none;
    }
  }
`;

export const CellTitle = styled.h3`
  margin: 0 0 0.5rem;
  font-size: 1.8rem;
  font-family: 'Cormorant Garamond', 'EB Garamond', 'GFS Didot', serif;
  font-weight: 400;
  letter-spacing: -0.02em;
`;

export const CellDescription = styled.p`
  margin: 0;
  font-size: 0.9rem;
  font-family: 'GFS Didot', serif;
  font-weight: 400;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.78);
  line-height: 1.5;
`;
