import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
import { media } from '@/shared/styles/breakpoints';
import { typography } from '@/shared/styles/typography';
import { uiColors, uiFocusRing } from '@/shared/ui/tokens';

const backdropIn = keyframes`
  to {
    opacity: 1;
  }
`;

const panelIn = keyframes`
  to {
    transform: translateX(0);
  }
`;

export const MobileNavBackdrop = styled.button`
  position: fixed;
  inset: 0;
  z-index: 999;
  margin: 0;
  padding: 0;
  border: none;
  cursor: pointer;
  background: rgba(21, 15, 12, 0.32);
  backdrop-filter: blur(8px);
  opacity: 0;
  animation: ${backdropIn} 0.22s ease forwards;

  ${media.motionReduce} {
    animation-duration: 0.01ms;
    opacity: 1;
  }

  &:focus-visible {
    outline: none;
    box-shadow: ${uiFocusRing};
  }
`;

export const MobileNavPanel = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  width: min(82vw, 340px);
  height: var(--viewport-height, 100vh);
  display: flex;
  flex-direction: column;
  padding: 16px 20px 24px;
  overflow-y: auto;
  box-sizing: border-box;
  background:
    linear-gradient(
      180deg,
      rgba(248, 249, 251, 0.96),
      rgba(248, 249, 251, 0.88)
    ),
    ${uiColors.ivory};
  box-shadow: 8px 0 28px rgba(21, 15, 12, 0.12);
  transform: translateX(-100%);
  animation: ${panelIn} 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards;

  ${media.motionReduce} {
    animation-duration: 0.01ms;
    transform: translateX(0);
  }
`;

export const MobileNavPanelHeader = styled.div`
  display: flex;
  flex-shrink: 0;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 8px;
`;

export const MobileNavCloseButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  margin: 0;
  padding: 0;
  border: none;
  cursor: pointer;
  background: transparent;
  color: ${uiColors.inkStrong};

  &:focus-visible {
    outline: none;
    box-shadow: ${uiFocusRing};
  }

  svg {
    width: 22px;
    height: 22px;
    display: block;
  }
`;

export const MobileNavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const MobileNavItem = styled.li`
  margin: 0;
`;

export const MobileNavLink = styled(Link)<{
  $isScrolled: boolean;
  $isActive: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  min-height: 44px;
  padding-block: 6px;
  box-sizing: border-box;
  ${typography.nav};
  font-size: 0.9375rem;
  letter-spacing: 0.08em;
  font-weight: 600;
  text-decoration: none;
  color: ${({ $isScrolled, $isActive }) => {
    if ($isActive) {
      return uiColors.gold;
    }

    return $isScrolled ? 'var(--shell-nav-dark)' : uiColors.inkStrong;
  }};
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0.88)};
  transition:
    color 0.2s ease,
    opacity 0.2s ease;

  &:hover,
  &:focus-visible {
    color: ${uiColors.gold};
    opacity: 1;
    outline: none;
  }
`;

export const MobileNavLinkLabel = styled.span`
  flex: 1;
  min-width: 0;
  text-align: left;
`;

export const MobileNavLinkArrow = styled.span`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  margin-right: 2px;
  color: currentColor;
  opacity: 0.42;

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  ${MobileNavLink}:hover &,
  ${MobileNavLink}:focus-visible & {
    opacity: 0.72;
  }
`;
