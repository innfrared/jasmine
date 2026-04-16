import styled, { keyframes } from 'styled-components';
import CloseButton from '@/shared/ui/close-button';
import { typography } from '@/shared/styles/typography';
import { uiColors, uiShadows } from '@/shared/ui/tokens';

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
    transform: translateX(-32px);
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
    transform: translateX(-32px);
  }
`;

export const FilterToolbarRoot = styled.div<{ $isStickyActive: boolean }>`
  position: sticky;
  top: 112px;
  z-index: 900;
  width: 100%;
  background: ${({ $isStickyActive }) =>
    $isStickyActive ? 'rgba(255, 255, 255, 0.9)' : '#ffffff'};
  backdrop-filter: ${({ $isStickyActive }) =>
    $isStickyActive ? 'blur(14px)' : 'none'};
  border-bottom: 1px solid rgba(38, 32, 27, 0.1);
  transition:
    background-color 0.24s ease,
    backdrop-filter 0.24s ease;

  @media (max-width: 900px) {
    top: 96px;
  }
`;

export const FilterToolbarInner = styled.div`
  width: min(1400px, calc(100% - 6rem));
  min-height: 3.35rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 768px) {
    width: calc(100% - 3rem);
  }
`;

export const FilterToolbarButton = styled.button`
  ${typography.label};
  min-height: 2.8rem;
  padding: 0;
  display: inline-flex;
  align-items: center;
  gap: 0.62rem;
  border: none;
  background: transparent;
  color: rgba(29, 29, 28, 0.82);
  cursor: pointer;
  transition:
    color 0.2s ease,
    opacity 0.2s ease;

  &:hover,
  &:focus-visible {
    color: ${uiColors.navyElevated};
    opacity: 0.78;
    outline: none;
  }

  svg {
    flex-shrink: 0;
  }
`;

export const ActiveFilterCount = styled.span`
  min-width: 1.35rem;
  height: 1.35rem;
  padding: 0 0.35rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(36, 49, 64, 0.18);
  color: ${uiColors.navyElevated};
  font-size: 0.66rem;
  line-height: 1;
  letter-spacing: 0.04em;
`;

export const FilterToolbarCurrentTitle = styled.span`
  ${typography.label};
  max-width: min(42vw, 24rem);
  overflow: hidden;
  color: rgba(29, 29, 28, 0.54);
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const DrawerOverlay = styled.div<{ $isClosing?: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 10000;
  display: flex;
  justify-content: flex-start;
  background: rgba(21, 15, 12, 0.32);
  backdrop-filter: blur(10px);
  animation: ${({ $isClosing }) =>
      $isClosing ? overlayFadeOut : overlayFadeIn}
    0.22s ease forwards;
`;

export const DrawerPanel = styled.aside<{ $isClosing?: boolean }>`
  width: min(424px, 100vw);
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background:
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.86),
      rgba(255, 255, 255, 0.68)
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
  font-family: var(--font-ui);
  font-size: 1.05rem;
  font-weight: 520;
  line-height: 1.2;
  letter-spacing: 0.02em;
  text-transform: none;
`;

export const DrawerCloseButton = styled(CloseButton)`
  flex-shrink: 0;
`;

export const DrawerContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.65rem;
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
  }
`;

export const DrawerFilterGroup = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    ${typography.label};
    margin: 0;
    color: ${uiColors.inkStrong};
  }
`;

export const DrawerFilterOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.72rem;
`;

export const DrawerFilterOption = styled.label`
  ${typography.bodySmall};
  display: flex;
  align-items: center;
  gap: 0.72rem;
  color: rgba(34, 31, 28, 0.68);
  cursor: pointer;

  input {
    width: 0.92rem;
    height: 0.92rem;
    margin: 0;
    accent-color: ${uiColors.navyElevated};
    cursor: pointer;
  }
`;

export const DrawerFilterSwatch = styled.span<{ $colorValue: string }>`
  width: 0.82rem;
  height: 0.82rem;
  flex-shrink: 0;
  border: 1px solid rgba(36, 49, 64, 0.16);
  border-radius: 50%;
  background: ${({ $colorValue }) => $colorValue};
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.82) inset;
`;

export const DrawerEmptyState = styled.p`
  ${typography.bodySmall};
  margin: 0;
  color: ${uiColors.inkMuted};
`;

export const DrawerActions = styled.div`
  padding: 1.2rem 1.5rem 1.45rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  border-top: 1px solid ${uiColors.borderSoft};
  background:
    linear-gradient(
      180deg,
      rgba(248, 242, 234, 0.28),
      rgba(248, 242, 234, 0.96)
    ),
    rgba(255, 255, 255, 0.78);
`;

export const DrawerApplyButton = styled.button`
  ${typography.button};
  min-height: 2.9rem;
  border: none;
  background: ${uiColors.navyElevated};
  color: ${uiColors.inkInverse};
  cursor: pointer;
`;

export const DrawerClearButton = styled.button`
  ${typography.button};
  min-height: 2.9rem;
  border: 1px solid rgba(36, 49, 64, 0.18);
  background: transparent;
  color: ${uiColors.navyElevated};
  cursor: pointer;
`;
