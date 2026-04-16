import Link from 'next/link';
import styled, { keyframes } from 'styled-components';
import { typography } from '@/shared/styles/typography';

const riseIn = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 10px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const BannerLayer = styled.div`
  position: fixed;
  z-index: 9500;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  padding: 0 1.25rem 1.5rem;
  pointer-events: none;

  @media (max-width: 768px) {
    padding: 0 1rem 1.25rem;
  }
`;

export const BannerPanel = styled.div`
  pointer-events: auto;
  width: min(32rem, 100%);
  padding: 1.35rem 1.35rem 1.25rem;
  background: var(--shell-surface);
  border: 1px solid var(--shell-border);
  box-shadow: 0 10px 40px rgba(26, 20, 17, 0.06);
  animation: ${riseIn} 0.45s ease-out both;

  @media (max-width: 768px) {
    padding: 1.15rem 1.1rem 1.05rem;
  }
`;

export const BannerTitle = styled.h2`
  ${typography.pageHeading};
  font-size: clamp(1.35rem, 1.2vw + 1rem, 1.65rem);
  margin: 0 0 0.65rem;
  color: var(--shell-ink);
`;

export const BannerBody = styled.p`
  ${typography.bodySmall};
  margin: 0 0 1rem;
  color: var(--shell-ink-soft);
  max-width: 28rem;
`;

export const CookiePolicyLink = styled(Link)`
  ${typography.bodySmall};
  color: var(--shell-ink);
  text-decoration: underline;
  text-underline-offset: 0.2em;
  text-decoration-color: rgba(43, 31, 20, 0.35);

  &:hover {
    text-decoration-color: var(--shell-accent);
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 0.65rem;
  align-items: center;
`;

export const PrimaryButton = styled.button`
  ${typography.button};
  cursor: pointer;
  border: 1px solid var(--shell-ink);
  background: var(--shell-ink);
  color: var(--shell-ivory);
  padding: 0.65rem 1rem;
  letter-spacing: 0.1em;
  transition:
    background 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    background: #2a211c;
    border-color: #2a211c;
  }

  &:focus-visible {
    outline: 2px solid var(--shell-accent);
    outline-offset: 2px;
  }
`;

export const GhostButton = styled.button`
  ${typography.button};
  cursor: pointer;
  border: 1px solid rgba(43, 31, 20, 0.22);
  background: transparent;
  color: var(--shell-ink);
  padding: 0.65rem 1rem;
  letter-spacing: 0.1em;
  transition:
    border-color 0.2s ease,
    background 0.2s ease;

  &:hover {
    border-color: rgba(43, 31, 20, 0.45);
    background: rgba(43, 31, 20, 0.04);
  }

  &:focus-visible {
    outline: 2px solid var(--shell-accent);
    outline-offset: 2px;
  }
`;

export const TextButton = styled.button`
  ${typography.label};
  cursor: pointer;
  border: none;
  background: none;
  padding: 0.35rem 0;
  color: rgba(34, 24, 19, 0.55);
  letter-spacing: 0.12em;
  text-decoration: underline;
  text-underline-offset: 0.25em;
  text-decoration-color: rgba(43, 31, 20, 0.25);

  &:hover {
    color: var(--shell-ink);
    text-decoration-color: var(--shell-accent);
  }

  &:focus-visible {
    outline: 2px solid var(--shell-accent);
    outline-offset: 2px;
  }
`;

export const PreferencesBlock = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(43, 31, 20, 0.1);
`;

export const PreferenceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.5rem 0;

  & + & {
    border-top: 1px solid rgba(43, 31, 20, 0.06);
  }
`;

export const PreferenceLabel = styled.span`
  ${typography.bodySmall};
  color: var(--shell-ink);
`;

export const PreferenceHint = styled.span`
  ${typography.utility};
  display: block;
  margin-top: 0.2rem;
  color: rgba(34, 24, 19, 0.45);
  letter-spacing: 0.06em;
`;

export const ToggleButton = styled.button<{ $pressed: boolean }>`
  ${typography.label};
  flex-shrink: 0;
  min-width: 3.25rem;
  padding: 0.4rem 0.65rem;
  cursor: pointer;
  border-radius: 999px;
  border: 1px solid
    ${({ $pressed }) =>
      $pressed ? 'var(--shell-ink)' : 'rgba(43, 31, 20, 0.2)'};
  background: ${({ $pressed }) =>
    $pressed ? 'var(--shell-ink)' : 'transparent'};
  color: ${({ $pressed }) =>
    $pressed ? 'var(--shell-ivory)' : 'rgba(34, 24, 19, 0.65)'};
  letter-spacing: 0.12em;
  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;

  &:focus-visible {
    outline: 2px solid var(--shell-accent);
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.88;
    cursor: default;
  }
`;

export const PreferenceActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;
