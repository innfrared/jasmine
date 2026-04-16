import type { ButtonHTMLAttributes, ReactNode } from 'react';
import {
  NavActionBadge,
  NavActionButtonBase,
  NavActionIcon,
  NavActionLabel,
  type NavActionTone,
} from './NavActionButton.styles';

type NavActionButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'children'
> & {
  icon: ReactNode;
  label?: string;
  count?: number;
  active?: boolean;
  isScrolled?: boolean;
  tone?: NavActionTone;
};

export default function NavActionButton({
  icon,
  label,
  count,
  active = false,
  isScrolled = false,
  tone = 'default',
  type = 'button',
  ...rest
}: NavActionButtonProps) {
  const hasLabel = Boolean(label);
  const showCount = typeof count === 'number' && count > 0;

  return (
    <NavActionButtonBase
      type={type}
      $tone={tone}
      $isScrolled={isScrolled}
      $active={active}
      $hasLabel={hasLabel}
      {...rest}
    >
      <NavActionIcon>{icon}</NavActionIcon>
      {label ? <NavActionLabel>{label}</NavActionLabel> : null}
      {showCount ? <NavActionBadge>{count}</NavActionBadge> : null}
    </NavActionButtonBase>
  );
}

export type { NavActionButtonProps };
