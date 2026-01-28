import styled from 'styled-components';

const NAVY = '#0B1B3A'; // deep, luxe navy
const INK = '#0C0F14';
const MUTED = 'rgba(12, 15, 20, 0.64)';
const ACCENT = '#C8A46A';
const LINE = 'rgba(11, 27, 58, 0.22)';          // stronger line
const SURFACE = 'rgba(255, 255, 255, 0.86)';    // less milky, more crisp
const SURFACE_2 = 'rgba(255, 255, 255, 0.72)';  // secondary surface

export const Section = styled.section`
  width: 100%;
  padding: clamp(3.25rem, 6vw, 6.5rem) clamp(1rem, 3.5vw, 3.5rem)
    clamp(3rem, 5vw, 5.25rem);
  box-sizing: border-box;

  /* subtle “atelier paper” feel */
  background:
    radial-gradient(900px 420px at 12% 6%, rgba(11, 27, 58, 0.06), transparent 58%),
    radial-gradient(820px 420px at 86% 22%, rgba(200, 164, 106, 0.07), transparent 55%),
    linear-gradient(to bottom, rgba(255,255,255,0.0), rgba(255,255,255,0.0));
`;

export const Title = styled.h2`
  margin: 0;
  color: ${INK};
  letter-spacing: -0.04em;
  line-height: 1.05;
  font-weight: 520;
  font-size: clamp(2.2rem, 4.2vw, 3.35rem);
  position: relative;
  display: inline-block;

  /* tiny luxe underline cue */
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.55rem;
    width: 44%;
    height: 2px;
    background: linear-gradient(90deg, ${NAVY}, ${ACCENT});
    border-radius: 999px;
    opacity: 0.22;
    transform-origin: left center;
    transform: scaleX(0.85);
  }
`;

export const MicroLine = styled.p`
  margin: 1.15rem 0 2.75rem;
  color: rgba(11, 27, 58, 0.68);
  font-size: 1.05rem;
  line-height: 1.65;
  font-style: italic;
  max-width: 62ch;

  /* make it feel “written”, not UI copy */
  text-wrap: balance;
`;

export const Grid = styled.div`
  display: grid;
  gap: clamp(1.1rem, 2.4vw, 2.1rem);

  /* Don’t let columns stretch infinitely */
  grid-template-columns: repeat(auto-fit, minmax(260px, 360px));
  justify-content: start;

  /* On wide screens, center the whole block for editorial feel */
  @media (min-width: 1100px) {
    justify-content: center;
  }
`;

export const Item = styled.div`
  position: relative;
  padding: 1.35rem 1.55rem 1.2rem;
  outline: none;

  /* Sharper, more “editorial” corners (not bubbly) */
  border-radius: 12px;

  /* Firm, clean border (not thick) */
  border: 1px solid rgba(11, 27, 58, 0.22);

  /* Crisp surface — less milky */
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.92),
    rgba(255, 255, 255, 0.76)
  );

  /* Structured shadow: less soft blur, more defined */
  box-shadow:
    0 18px 50px rgba(11, 27, 58, 0.10),
    0 1px 0 rgba(255, 255, 255, 0.85) inset;

  /* Reveal (your logic) */
  opacity: 0;
  transform: translateY(16px);
  filter: blur(7px);

  transition:
    transform 900ms cubic-bezier(0.2, 0.8, 0.2, 1),
    opacity 900ms cubic-bezier(0.2, 0.8, 0.2, 1),
    filter 900ms cubic-bezier(0.2, 0.8, 0.2, 1),
    box-shadow 650ms cubic-bezier(0.2, 0.8, 0.2, 1),
    border-color 650ms cubic-bezier(0.2, 0.8, 0.2, 1);

  &[data-inview='true'] {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }

  /* Subtle “lively” sheen — refined */
  &::after {
    content: '';
    position: absolute;
    inset: -14px -14px -18px -14px;
    border-radius: 14px;
    background: linear-gradient(
      115deg,
      rgba(11, 27, 58, 0.00) 0%,
      rgba(11, 27, 58, 0.06) 32%,
      rgba(200, 164, 106, 0.10) 54%,
      rgba(11, 27, 58, 0.00) 78%
    );
    opacity: 0;
    transform: translateY(10px);
    transition:
      opacity 650ms cubic-bezier(0.2, 0.8, 0.2, 1),
      transform 650ms cubic-bezier(0.2, 0.8, 0.2, 1);
    pointer-events: none;
  }

  &:hover,
  &:focus-visible {
    transform: translateY(-7px);
    border-color: rgba(11, 27, 58, 0.38);
    box-shadow:
      0 26px 78px rgba(11, 27, 58, 0.16),
      0 1px 0 rgba(255, 255, 255, 0.9) inset;
  }

  &:hover::after,
  &:focus-visible::after {
    opacity: 1;
    transform: translateY(0);
  }

  &:focus-visible {
    box-shadow:
      0 26px 78px rgba(11, 27, 58, 0.16),
      0 0 0 2px rgba(11, 27, 58, 0.26),
      0 0 0 7px rgba(200, 164, 106, 0.12);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    opacity: 1;
    transform: none;
    filter: none;

    &::after {
      transition: none;
      opacity: 0;
      transform: none;
    }

    &:hover,
    &:focus-visible {
      transform: none;
    }
  }
`;

export const ItemTitle = styled.h3<{ $emphasis?: boolean }>`
  margin: 0 0 0.7rem;
  letter-spacing: -0.02em;
  line-height: 1.15;

  font-size: ${({ $emphasis }) => ($emphasis ? '1.55rem' : '1.22rem')};
  font-weight: ${({ $emphasis }) => ($emphasis ? 680 : 560)};

  color: ${({ $emphasis }) => ($emphasis ? NAVY : INK)};

  /* “Timeless” gets a quiet accent cue */
  ${({ $emphasis }) =>
    $emphasis
      ? `
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -0.45rem;
      width: 62%;
      height: 2px;
      background: linear-gradient(90deg, ${ACCENT}, rgba(200,164,106,0));
      border-radius: 999px;
      opacity: 0.85;
    }
  `
      : ``}
`;

export const ItemCopy = styled.p`
  margin: 0;
  color: rgba(12, 15, 20, 0.66);
  font-size: 1.02rem;
  line-height: 1.6;
  max-width: 46ch;
  text-wrap: pretty;
`;
