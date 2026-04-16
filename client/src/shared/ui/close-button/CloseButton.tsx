import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { uiColors, uiFocusRing } from '../tokens';

type CloseButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'children'
> & {
  icon?: ReactNode;
};

function DefaultCloseIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default function CloseButton({
  icon,
  'aria-label': ariaLabel = 'Close',
  type = 'button',
  ...rest
}: CloseButtonProps) {
  return (
    <CloseButtonBase aria-label={ariaLabel} type={type} {...rest}>
      {icon ?? <DefaultCloseIcon />}
    </CloseButtonBase>
  );
}

export type { CloseButtonProps };

const CloseButtonBase = styled.button`
  width: 42px;
  height: 42px;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
  color: ${uiColors.inkStrong};
  cursor: pointer;
  opacity: 0.82;
  transition:
    color 0.18s ease,
    opacity 0.18s ease;

  &:hover:not(:disabled) {
    background: transparent;
    box-shadow: none;
    color: ${uiColors.ink};
    opacity: 1;
  }

  &:active:not(:disabled) {
    opacity: 0.72;
  }

  &:focus-visible {
    outline: none;
    box-shadow: ${uiFocusRing};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.42;
  }

  svg {
    width: 20px;
    height: 20px;
    display: block;
  }
`;
