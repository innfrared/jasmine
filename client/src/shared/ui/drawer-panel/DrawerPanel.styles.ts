import styled, { keyframes } from 'styled-components';
import Button from '../button';
import CloseButton from '../close-button';
import { uiColors, uiShadows, uiTypography } from '../tokens';

const overlayFadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const overlayFadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const drawerSlideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(32px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const drawerSlideOut = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(32px);
  }
`;

export const DrawerOverlay = styled.div<{ $isClosing?: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 10000;
  display: flex;
  justify-content: flex-end;
  background: rgba(21, 15, 12, 0.32);
  backdrop-filter: blur(10px);
  animation: ${({ $isClosing }) =>
      $isClosing ? overlayFadeOut : overlayFadeIn}
    0.22s ease forwards;
`;

export const DrawerContainer = styled.aside<{ $isClosing?: boolean }>`
  width: min(468px, 100vw);
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background:
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.82),
      rgba(255, 255, 255, 0.62)
    ),
    ${uiColors.ivory};
  box-shadow: ${uiShadows.drawer};
  animation: ${({ $isClosing }) =>
      $isClosing ? drawerSlideOut : drawerSlideIn}
    0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  will-change: transform, opacity;
`;

export const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.35rem 1.5rem 0.85rem;
  border-bottom: none;
  background: transparent;
`;

export const DrawerTitle = styled.h2`
  margin: 0;
  color: ${uiColors.inkStrong};
  font-family: ${uiTypography.sans};
  font-size: 1.05rem;
  font-weight: 520;
  line-height: 1.2;
  letter-spacing: 0.02em;
  text-transform: none;
`;

export const DrawerCloseButton = styled(CloseButton)`
  flex-shrink: 0;
`;

export const DrawerItemsList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  scrollbar-width: thin;
  scrollbar-color: rgba(44, 31, 20, 0.16) transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(44, 31, 20, 0.18);
    border-radius: 999px;
  }

  @media (max-width: 520px) {
    padding: 1.15rem;
    gap: 0.85rem;
  }
`;

export const DrawerFooter = styled.div`
  padding: 1.35rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  border-top: 1px solid ${uiColors.borderSoft};
  background:
    linear-gradient(
      180deg,
      rgba(248, 242, 234, 0.3),
      rgba(248, 242, 234, 0.96)
    ),
    rgba(255, 255, 255, 0.78);

  @media (max-width: 520px) {
    padding-inline: 1.15rem;
  }
`;

export const DrawerSummaryRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  color: ${uiColors.inkStrong};
  font-family: ${uiTypography.sans};
  font-size: 0.92rem;
  line-height: 1.3;

  span:last-child {
    font-size: 1.02rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
`;

export const DrawerPrimaryButton = styled(Button).attrs({
  variant: 'primary',
  size: 'md',
  fullWidth: true,
})`
  min-height: 48px;
  font-size: 0.78rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
`;

export const DrawerSecondaryButton = styled(Button).attrs({
  variant: 'secondary',
  size: 'md',
  fullWidth: true,
})`
  min-height: 48px;
  font-size: 0.78rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
`;
