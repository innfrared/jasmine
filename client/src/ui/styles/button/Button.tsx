import React from 'react';
import {
  ButtonBase,
  CountBadge,
  IconWrapper,
  TextWrapper,
} from './Button.styles';

type ButtonProps = {
  variant: 'primary' | 'secondary' | 'tertiary' | 'link';
  children: React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactNode;
  badgeContent?: string | number;
  iconColor?: string;
};

const getColorsFromStorage = () => {
  if (typeof window !== 'undefined') {
    const primaryColor =
      localStorage.getItem('theme_primary') ||
      'linear-gradient(135deg, #a67c00 0%, #bf9b30 25%, #ffd700 50%, #d4af37 75%, #b8860b 100%)';
    const primaryColorFlat =
      localStorage.getItem('theme_primary_flat') || '#d4af37';
    const secondaryColor = localStorage.getItem('theme_secondary') || '#001f3f';
    return { primaryColor, primaryColorFlat, secondaryColor };
  }
  return {
    primaryColor: '#d4af37',
    primaryColorFlat: '#d4af37',
    secondaryColor: '#001f3f',
  };
};

const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  onClick,
  icon,
  badgeContent,
  iconColor,
}) => {
  const { primaryColor, primaryColorFlat, secondaryColor } =
    getColorsFromStorage();

  const defaultLinkIcon = (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
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

  const displayIcon = icon || (variant === 'link' ? defaultLinkIcon : null);
  const hasIcon = !!displayIcon;

  return (
    <ButtonBase
      $variant={variant}
      $primaryColor={primaryColor}
      $primaryColorFlat={primaryColorFlat}
      $secondaryColor={secondaryColor}
      $hasIcon={hasIcon}
      onClick={onClick}
    >
      {badgeContent !== undefined && (
        <CountBadge $primaryColor={primaryColor}>{badgeContent}</CountBadge>
      )}
      {variant === 'link' ? (
        <>
          <TextWrapper $hasIcon={hasIcon} $variant={variant}>
            {children}
          </TextWrapper>
          {displayIcon && (
            <IconWrapper
              $variant={variant}
              $secondaryColor={secondaryColor}
              iconColor={iconColor}
            >
              {displayIcon}
            </IconWrapper>
          )}
        </>
      ) : (
        <>
          {displayIcon && (
            <IconWrapper
              $variant={variant}
              $secondaryColor={secondaryColor}
              iconColor={iconColor}
            >
              {displayIcon}
            </IconWrapper>
          )}
          <TextWrapper $hasIcon={hasIcon} $variant={variant}>
            {children}
          </TextWrapper>
        </>
      )}
    </ButtonBase>
  );
};

export default Button;
