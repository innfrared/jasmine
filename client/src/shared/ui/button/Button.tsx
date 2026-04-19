import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  CSSProperties,
  ReactNode,
} from 'react';
import Link from 'next/link';
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

type ButtonSharedProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  iconPlacement?: ButtonIconPlacement;
  loading?: boolean;
  fullWidth?: boolean;
};

type ButtonAsButtonProps = ButtonSharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & {
    href?: undefined;
    type?: 'button' | 'submit' | 'reset';
  };

type LinkPassthrough = Pick<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  | 'className'
  | 'id'
  | 'style'
  | 'title'
  | 'target'
  | 'rel'
  | 'download'
  | 'onClick'
  | 'onFocus'
  | 'onBlur'
  | 'onMouseEnter'
  | 'onMouseLeave'
  | 'onKeyDown'
  | 'aria-label'
  | 'aria-describedby'
  | 'aria-current'
  | 'tabIndex'
> & {
  style?: CSSProperties;
};

type ButtonAsLinkProps = ButtonSharedProps &
  LinkPassthrough & {
    href: string;
    type?: never;
    prefetch?: boolean;
    replace?: boolean;
    scroll?: boolean;
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

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

function isHrefButton(props: ButtonProps): props is ButtonAsLinkProps {
  return typeof props.href === 'string' && props.href.length > 0;
}

export default function Button(props: ButtonProps) {
  const {
    children,
    variant = 'primary',
    size = 'md',
    iconLeft,
    iconRight,
    iconPlacement = 'left',
    loading = false,
    fullWidth = false,
  } = props;

  const isDisabled =
    loading ||
    ('disabled' in props && props.disabled) ||
    ('aria-disabled' in props && props['aria-disabled'] === true);

  const trailingIcon =
    iconRight ??
    (variant === 'link' && !iconLeft && !iconRight ? <LinkArrowIcon /> : null);

  const inner = (
    <>
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
    </>
  );

  if (isHrefButton(props)) {
    const p = props;
    return (
      <ButtonBase
        as={Link}
        href={p.href}
        prefetch={p.prefetch}
        replace={p.replace}
        scroll={p.scroll}
        className={p.className}
        id={p.id}
        style={p.style}
        title={p.title}
        target={p.target}
        rel={p.rel}
        download={p.download}
        onClick={p.onClick}
        onFocus={p.onFocus}
        onBlur={p.onBlur}
        onMouseEnter={p.onMouseEnter}
        onMouseLeave={p.onMouseLeave}
        onKeyDown={p.onKeyDown}
        aria-label={p['aria-label']}
        aria-describedby={p['aria-describedby']}
        aria-current={p['aria-current']}
        tabIndex={p.tabIndex}
        aria-busy={loading || undefined}
        aria-disabled={isDisabled || undefined}
        $variant={variant}
        $size={size}
        $fullWidth={fullWidth}
        $iconPlacement={iconPlacement}
        $isLoading={loading}
      >
        {inner}
      </ButtonBase>
    );
  }

  const { disabled = false, type = 'button', ...rest } = props;

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
      {inner}
    </ButtonBase>
  );
}

export type {
  ButtonIconPlacement,
  ButtonSize,
  ButtonVariant,
} from './button.types';
