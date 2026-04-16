import styled from 'styled-components';
import { typography } from '@/shared/styles/typography';

export const Card = styled.div`
  width: 100%;
  min-width: 0;
  height: 100%;
  background: #fff;
  position: relative;
  box-sizing: border-box;
  cursor: pointer;
  outline: none;

  &:focus-visible {
    outline: 1px solid rgba(36, 49, 64, 0.48);
    outline-offset: -1px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const CardImage = styled.div`
  width: 100%;
  aspect-ratio: 5 / 6;
  position: relative;
  overflow: hidden;
  background: #f5f1ea;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  min-height: 5.65rem;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  grid-template-areas:
    'title title'
    'price actions'
    'swatches actions';
  gap: 0.2rem 0.55rem;
  align-items: end;
  padding: 0.48rem 0.52rem 0.56rem;
`;

export const Title = styled.p`
  ${typography.bodySmall};
  grid-area: title;
  margin: 0;
  color: rgba(29, 29, 28, 0.82);
  letter-spacing: 0.075em;
  line-height: 1.34;
  text-transform: uppercase;
`;

export const PriceContainer = styled.div`
  grid-area: price;
  min-width: 0;
  display: flex;
  align-items: center;
`;

export const Price = styled.p`
  margin: 0;
  font-family: var(--font-ui);
  font-size: 0.94rem;
  font-weight: 520;
  color: #1b1b1a;
  letter-spacing: 0.015em;
`;

export const Swatches = styled.div`
  grid-area: swatches;
  display: flex;
  align-items: center;
  gap: 0.32rem;
  min-height: 0.82rem;
`;

export const ColorSwatch = styled.button<{
  $colorValue: string;
  $isActive?: boolean;
}>`
  width: 0.78rem;
  height: 0.78rem;
  padding: 0;
  border-radius: 50%;
  border: 1px solid
    ${({ $isActive }) =>
      $isActive ? 'rgba(28, 37, 48, 0.68)' : 'rgba(28, 37, 48, 0.18)'};
  background: ${({ $colorValue }) => $colorValue};
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.92) inset,
    ${({ $isActive }) =>
      $isActive ? '0 0 0 2px rgba(28, 37, 48, 0.12)' : 'none'};
  cursor: pointer;
`;

export const Actions = styled.div`
  grid-area: actions;
  align-self: end;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.24rem;
`;

export const ActionIcon = styled.button<{ $isActive?: boolean }>`
  width: 1.74rem;
  height: 1.74rem;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 0;
  background: transparent;
  color: ${({ $isActive }) =>
    $isActive ? '#172638' : 'rgba(27, 27, 26, 0.62)'};
  cursor: pointer;

  &:focus-visible {
    outline: 1px solid rgba(36, 49, 64, 0.42);
    outline-offset: 2px;
  }
`;
