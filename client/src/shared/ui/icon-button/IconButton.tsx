import type { ButtonHTMLAttributes, ReactNode } from 'react';
import {
  IconButtonBase,
  IconButtonInner,
  type IconButtonSize,
  type IconButtonSurface,
  type IconButtonTone,
} from './IconButton.styles';

type IconButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'children'
> & {
  children: ReactNode;
  tone?: IconButtonTone;
  size?: IconButtonSize;
  surface?: IconButtonSurface;
  rotateOnHover?: boolean;
};

export default function IconButton({
  children,
  tone = 'default',
  size = 'md',
  surface = 'soft',
  rotateOnHover = false,
  type = 'button',
  ...rest
}: IconButtonProps) {
  return (
    <IconButtonBase
      type={type}
      $tone={tone}
      $size={size}
      $surface={surface}
      $rotateOnHover={rotateOnHover}
      {...rest}
    >
      <IconButtonInner>{children}</IconButtonInner>
    </IconButtonBase>
  );
}

export type { IconButtonProps };
export type {
  IconButtonSize,
  IconButtonSurface,
  IconButtonTone,
} from './IconButton.styles';
