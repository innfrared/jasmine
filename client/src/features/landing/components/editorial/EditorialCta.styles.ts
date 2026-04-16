import Link from 'next/link';
import styled, { css } from 'styled-components';
import { typography } from '@/shared/styles/typography';

type EditorialCtaLinkProps = {
  $tone: 'light' | 'dark';
};

const toneStyles = {
  light: css`
    color: rgba(247, 241, 232, 0.96);
    border-color: rgba(247, 241, 232, 0.32);
    background: rgba(247, 241, 232, 0.06);

    &::after {
      background: rgba(247, 241, 232, 0.9);
    }

    &:hover,
    &:focus-visible {
      color: #ffffff;
      border-color: rgba(247, 241, 232, 0.54);
      background: rgba(247, 241, 232, 0.12);
    }
  `,
  dark: css`
    color: rgba(26, 20, 17, 0.9);
    border-color: rgba(26, 20, 17, 0.16);
    background: rgba(26, 20, 17, 0.03);

    &::after {
      background: rgba(26, 20, 17, 0.72);
    }

    &:hover,
    &:focus-visible {
      color: #1a1411;
      border-color: rgba(26, 20, 17, 0.3);
      background: rgba(26, 20, 17, 0.06);
    }
  `,
};

export const EditorialCtaLink = styled(Link)<EditorialCtaLinkProps>`
  ${typography.button};
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  min-height: 2.9rem;
  padding: 0.95rem 1.2rem;
  border: 1px solid transparent;
  border-radius: 999px;
  width: fit-content;
  transition:
    color 0.22s ease,
    border-color 0.22s ease,
    background-color 0.22s ease,
    transform 0.22s ease;

  ${({ $tone }) => toneStyles[$tone]}

  &:hover,
  &:focus-visible {
    transform: translateY(-1px);
    outline: none;
  }
`;

export const EditorialCtaArrow = styled.span`
  width: 0.9rem;
  height: 0.9rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    mask: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 12H19M12 5L19 12L12 19' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")
      center / contain no-repeat;
    background: currentColor;
  }
`;
