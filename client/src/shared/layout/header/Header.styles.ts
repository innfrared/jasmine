import { keyframes } from 'styled-components';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import { uiColors } from '@/shared/ui/tokens';
import { typography } from '@/shared/styles/typography';

export type HeaderStateProps = {
  $isScrolled: boolean;
};

const HEADER_CENTER_DESKTOP = '40px';
const HEADER_CENTER_MOBILE = '40px';
const HEADER_LOGO_WIDTH_DESKTOP = '120px';
const HEADER_LOGO_WIDTH_MOBILE = 'clamp(72px, 20vw, 96px)';

const toHeaderDesktop = keyframes`
  0% {
    top: 30vh;
    width: 40vw;
    transform: translateX(-50%);
    opacity: 1;
  }
  100% {
    top: ${HEADER_CENTER_DESKTOP};
    width: ${HEADER_LOGO_WIDTH_DESKTOP};
    transform: translate(-50%, -50%);
    opacity: 1;
  }
`;

const fromHeaderDesktop = keyframes`
  0% {
    top: ${HEADER_CENTER_DESKTOP};
    width: ${HEADER_LOGO_WIDTH_DESKTOP};
    transform: translate(-50%, -50%);
    opacity: 1;
  }
  100% {
    top: 30vh;
    width: 40vw;
    transform: translateX(-50%);
    opacity: 1;
  }
`;

const toHeaderMobile = keyframes`
  0% {
    top: 30vh;
    width: 70vw;
    transform: translateX(-50%);
    opacity: 1;
  }
  100% {
    top: ${HEADER_CENTER_MOBILE};
    width: ${HEADER_LOGO_WIDTH_MOBILE};
    transform: translate(-50%, -50%);
    opacity: 1;
  }
`;

const fromHeaderMobile = keyframes`
  0% {
    top: ${HEADER_CENTER_MOBILE};
    width: ${HEADER_LOGO_WIDTH_MOBILE};
    transform: translate(-50%, -50%);
    opacity: 1;
  }
  100% {
    top: 30vh;
    width: 70vw;
    transform: translateX(-50%);
    opacity: 1;
  }
`;

export const HeaderContainer = styled.header<HeaderStateProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease,
    backdrop-filter 0.3s ease;
  background: ${({ $isScrolled }) =>
    $isScrolled ? 'rgba(248, 249, 251, 0.9)' : 'transparent'};
  box-shadow: none;
  backdrop-filter: ${({ $isScrolled }) =>
    $isScrolled ? 'blur(16px)' : 'blur(0px)'};
`;

export const HeaderShell = styled.div<HeaderStateProps>`
  width: min(1380px, calc(100vw - 56px));
  display: flex;
  flex-direction: column;
  transition: padding 0.3s ease;
  padding: ${({ $isScrolled }) =>
    $isScrolled ? '0.75rem 0 0.55rem' : '1.2rem 0 0.9rem'};

  @media (max-width: 900px) {
    width: calc(100vw - 32px);
    padding: ${({ $isScrolled }) =>
      $isScrolled ? '0.7rem 0 0.5rem' : '0.95rem 0 0.75rem'};
  }
`;

export const HeaderMainContainer = styled.div<HeaderStateProps>`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  align-items: center;
  min-height: ${({ $isScrolled }) => ($isScrolled ? '60px' : '82px')};
  transition: min-height 0.3s ease;

  @media (max-width: 900px) {
    min-height: ${({ $isScrolled }) => ($isScrolled ? '54px' : '68px')};
  }
`;

export const HeaderBalance = styled.div`
  min-width: 0;
`;

export const HeaderLogo = styled.button`
  width: 170px;
  height: 70px;
  justify-self: center;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  @media (max-width: 900px) {
    width: 116px;
    height: 56px;
  }
`;

export const AnimatedLogo = styled.div<{
  $phase: 'idle' | 'animating-out' | 'done' | 'animating-in';
}>`
  left: 50%;
  pointer-events: none;
  z-index: 1002;
  color: ${({ $phase }) =>
    $phase === 'done' || $phase === 'animating-out'
      ? uiColors.gold
      : 'rgba(255, 255, 255, 0.95)'};
  transition: color 0.5s ease;
  transform-origin: top center;

  & svg {
    width: 100%;
    height: auto;
    display: block;
  }

  ${({ $phase }) => {
    switch ($phase) {
      case 'idle':
        return css`
          position: fixed;
          top: 30vh;
          width: 40vw;
          transform: translateX(-50%);
          opacity: 1;

          @media (max-width: 768px) {
            width: 70vw;
          }
        `;
      case 'animating-out':
        return css`
          position: fixed;
          animation: ${toHeaderDesktop} 0.5s ease forwards;

          @media (max-width: 768px) {
            animation: ${toHeaderMobile} 0.5s ease forwards;
          }
        `;
      case 'animating-in':
        return css`
          position: fixed;
          animation: ${fromHeaderDesktop} 0.5s ease forwards;

          @media (max-width: 768px) {
            animation: ${fromHeaderMobile} 0.5s ease forwards;
          }
        `;
      case 'done':
        return css`
          position: fixed;
          top: ${HEADER_CENTER_DESKTOP};
          transform: translate(-50%, -50%);
          width: ${HEADER_LOGO_WIDTH_DESKTOP};

          @media (max-width: 768px) {
            top: ${HEADER_CENTER_MOBILE};
            width: ${HEADER_LOGO_WIDTH_MOBILE};
          }
        `;
    }
  }}
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.55rem;
  min-width: 0;

  @media (max-width: 900px) {
    gap: 0.35rem;
  }
`;

export const ActionWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const UserIconButton = styled.button<HeaderStateProps>`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 999px;
  background: ${({ $isScrolled }) =>
    $isScrolled ? 'rgba(26, 20, 17, 0.04)' : 'transparent'};
  color: ${({ $isScrolled }) =>
    $isScrolled ? 'var(--shell-nav-dark)' : 'var(--shell-nav-light)'};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition:
    color 0.24s ease,
    background-color 0.24s ease,
    transform 0.24s ease;

  &:hover {
    color: ${uiColors.gold};
    background: ${({ $isScrolled }) =>
      $isScrolled ? 'rgba(178, 141, 54, 0.1)' : 'rgba(255, 255, 255, 0.12)'};
    transform: scale(1.06);
  }

  &:focus-visible {
    outline: 2px solid rgba(178, 141, 54, 0.28);
    outline-offset: 2px;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const NavigationBar = styled.nav<HeaderStateProps>`
  width: 100%;
  margin-top: ${({ $isScrolled }) => ($isScrolled ? '0.25rem' : '0.45rem')};
  transition: margin-top 0.3s ease;
`;

export const NavigationScroller = styled.div`
  width: 100%;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const NavigationList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(1.05rem, 1.7vw, 2rem);

  @media (max-width: 900px) {
    justify-content: flex-start;
    width: max-content;
    min-width: 100%;
    padding-bottom: 0.2rem;
    gap: 1.15rem;
  }
`;

export const NavigationItem = styled.li`
  display: inline-flex;
  align-items: center;
`;

export const NavigationLink = styled(Link)<{
  $isScrolled: boolean;
  $isActive: boolean;
}>`
  ${typography.nav};
  position: relative;
  color: ${({ $isScrolled, $isActive }) => {
    if ($isActive) {
      return uiColors.gold;
    }

    return $isScrolled ? 'var(--shell-nav-dark)' : 'var(--shell-nav-light)';
  }};
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0.82)};
  padding: 0.4rem 0;
  white-space: nowrap;
  font-weight: 600;
  transition:
    color 0.24s ease,
    opacity 0.24s ease;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -0.2rem;
    height: 1px;
    background: currentColor;
    transform: scaleX(${({ $isActive }) => ($isActive ? 1 : 0)});
    transform-origin: center;
    transition: transform 0.24s ease;
  }

  &:hover,
  &:focus-visible {
    color: ${uiColors.gold};
    opacity: 1;
    outline: none;
  }

  &:hover::after,
  &:focus-visible::after {
    transform: scaleX(1);
  }

  @media (max-width: 900px) {
    padding: 0.35rem 0;
  }
`;

export const UtilityCaption = styled.span<HeaderStateProps>`
  ${typography.utility};
  color: ${({ $isScrolled }) =>
    $isScrolled ? uiColors.inkSubtle : 'rgba(255, 255, 255, 0.66)'};
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 1rem;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const UtilityRail = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const LogoAssist = styled.div`
  width: 100%;
`;
