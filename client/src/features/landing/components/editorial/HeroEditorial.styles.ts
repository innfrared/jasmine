import styled from 'styled-components';
import { typography } from '@/shared/styles/typography';

type HeroMediaProps = {
  $desktopPosition: string;
  $mobilePosition: string;
};

export const HeroEditorialSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100svh;
  overflow: hidden;
  background: #120e0b;
  color: rgba(247, 241, 232, 0.96);
`;

export const HeroEditorialMedia = styled.img<HeroMediaProps>`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: ${({ $desktopPosition }) => $desktopPosition};
  transform: scale(1.015);

  @media (max-width: 768px) {
    object-position: ${({ $mobilePosition }) => $mobilePosition};
  }
`;

export const HeroEditorialOverlay = styled.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      90deg,
      rgba(17, 12, 9, 0.58) 0%,
      rgba(17, 12, 9, 0.34) 34%,
      rgba(17, 12, 9, 0.12) 60%,
      rgba(17, 12, 9, 0.04) 100%
    ),
    linear-gradient(
      180deg,
      rgba(17, 12, 9, 0.18) 0%,
      rgba(17, 12, 9, 0) 30%,
      rgba(17, 12, 9, 0.08) 100%
    );
`;

export const HeroEditorialInner = styled.div`
  position: relative;
  z-index: 1;
  width: min(1440px, calc(100vw - 72px));
  min-height: 100svh;
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
  padding: clamp(9rem, 18vh, 12rem) 0 clamp(5rem, 12vh, 7rem);

  @media (max-width: 900px) {
    width: calc(100vw - 32px);
    padding: 8.5rem 0 3.5rem;
  }
`;

export const HeroEditorialContent = styled.div`
  width: min(34rem, 100%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
`;

export const HeroEditorialHeadline = styled.h1`
  ${typography.editorialScriptHeading};
  font-size: clamp(5.4rem, 7vw + 1.6rem, 9.75rem);
  line-height: 0.82;
  margin: 0;
  max-width: 8ch;

  @media (max-width: 900px) {
    font-size: clamp(4.4rem, 12vw, 6.4rem);
    line-height: 0.84;
    max-width: 7.5ch;
  }
`;

export const HeroEditorialBody = styled.p`
  ${typography.body};
  margin: 0;
  max-width: 26rem;
  color: rgba(247, 241, 232, 0.82);
`;
