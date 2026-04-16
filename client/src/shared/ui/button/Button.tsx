import type { ButtonHTMLAttributes, ReactNode } from 'react';
import {
  ButtonBase,
  ButtonContent,
  ButtonIcon,
  ButtonLabel,
  ButtonLoader,
} from './Button.styles';
import type {
  ButtonIconPlacement,
  ButtonSize,
  ButtonVariant,
} from './button.types';

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  iconPlacement?: ButtonIconPlacement;
  loading?: boolean;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
};

function LinkArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M5 12H19M12 5L19 12L12 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  iconPlacement = 'left',
  loading = false,
  fullWidth = false,
  disabled = false,
  type = 'button',
  ...rest
}: ButtonProps) {
  const trailingIcon =
    iconRight ??
    (variant === 'link' && !iconLeft && !iconRight ? <LinkArrowIcon /> : null);

  return (
    <ButtonBase
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      $iconPlacement={iconPlacement}
      $isLoading={loading}
      {...rest}
    >
      {loading ? <ButtonLoader aria-hidden="true" /> : null}
      <ButtonContent $iconPlacement={iconPlacement} $isLoading={loading}>
        {iconLeft ? (
          <ButtonIcon $size={size} $iconPlacement={iconPlacement}>
            {iconLeft}
          </ButtonIcon>
        ) : null}
        <ButtonLabel $iconPlacement={iconPlacement}>{children}</ButtonLabel>
        {trailingIcon ? (
          <ButtonIcon $size={size} $iconPlacement={iconPlacement}>
            {trailingIcon}
          </ButtonIcon>
        ) : null}
      </ButtonContent>
    </ButtonBase>
  );
}

export type { ButtonProps };
export type {
  ButtonIconPlacement,
  ButtonSize,
  ButtonVariant,
} from './button.types';

