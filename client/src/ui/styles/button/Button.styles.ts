import styled, { css, keyframes } from 'styled-components';

const moveGradient = keyframes`
  0% {
    background-position: 0% center;
  }
  50% {
    background-position: 100% center;
  }
  100% {
    background-position: 0% center;
  }
`;

type VariantProps = {
  variant: 'primary' | 'secondary' | 'tertiary' | 'link';
  primaryColor: string;
  primaryColorFlat: string;
  secondaryColor: string;
  hasIcon?: boolean;
};

export const ButtonBase = styled.button<VariantProps>`
  font-family: inherit;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 10px;
  font-size: 17px;
  font-weight: 500;
  padding-inline: 0.8rem;
  padding-block: 0.8rem;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: all 0.4s ease;
  border: none;

  ${({ variant, primaryColor }) =>
    variant === 'primary' &&
    css`
      background-size: 300% 300% !important;
      background: ${primaryColor} 0 center;
      color: white;
      border: none;

      &:hover {
        animation: ${moveGradient} 6s ease-in-out infinite;
      }
    `}

  ${({ variant, primaryColorFlat, secondaryColor }) =>
    variant === 'secondary' &&
    css`
      background-color: white;
      color: ${secondaryColor};
      border: 1px solid ${secondaryColor};

      &:hover {
        background-color: #f8f8f8;
        color: ${primaryColorFlat};
      }
    `}

  ${({ variant, primaryColorFlat, secondaryColor }) =>
    variant === 'tertiary' &&
    css`
      background: none;
      color: ${secondaryColor};
      border: none;
      transition: color 0.3s ease;

      &:hover {
        color: ${primaryColorFlat};
      }
    `}

  ${({ variant }) =>
    variant === 'link' &&
    css`
      background: none;
      color: #001f3f;
      border: none;
      text-decoration: none;
      padding: 0.5rem 0;
      font-size: 1rem;
      font-weight: 500;
      transition: all 0.3s ease;
      border-radius: 0;
      flex-direction: row;
      align-items: center;
      gap: 0.5rem;
      position: relative;

      &:hover {
        color: #001f3f;

        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background-color: #001f3f;
          transform: scaleX(1);
          transition: transform 0.3s ease;
        }
      }

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 2px;
        background-color: #001f3f;
        transform: scaleX(0);
        transition: transform 0.3s ease;
      }
    `}
`;

export const IconWrapper = styled.div<{
  variant: 'primary' | 'secondary' | 'tertiary' | 'link';
  secondaryColor: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;

  svg,
  img {
    width: 1.5rem;
    height: 1.5rem;
    object-fit: contain;
  }

  ${({ variant }) =>
    variant === 'primary' &&
    css`
      svg,
      img {
        color: white;
        fill: white;
      }
    `}
  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      svg,
      img {
        color: white;
        fill: white;
      }
    `}
  ${({ variant, secondaryColor }) =>
    variant === 'tertiary' &&
    css`
      svg,
      img {
        color: ${secondaryColor};
        fill: ${secondaryColor};
      }
    `}
  ${({ variant }) =>
    variant === 'link' &&
    css`
      svg,
      img {
        color: #001f3f;
        fill: #001f3f;
        width: 1rem;
        height: 1rem;
      }
    `}
`;

export const TextWrapper = styled.span<{
  hasIcon?: boolean;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link';
}>`
  font-size: ${({ hasIcon, variant }) =>
    variant === 'link' ? '1rem' : hasIcon ? '0.7rem' : '1rem'};
  margin: 0;
  padding-top: ${({ variant }) => (variant === 'link' ? '0' : '0.1rem')};
  text-align: center;
  line-height: 1.2;
  width: max-content;
`;

export const CountBadge = styled.span<{ primaryColor: string }>`
  position: absolute;
  top: 0.1rem;
  right: 0.1rem;
  background: ${({ primaryColor }) => primaryColor};
  color: black;
  font-size: 10px;
  font-weight: bold;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;
