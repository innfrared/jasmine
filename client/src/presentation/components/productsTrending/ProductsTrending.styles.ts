import styled, { css } from 'styled-components';

export const BestsellerCarousel = styled.div`
  margin: 5rem 0;
  padding: 0 8rem;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  align-items: flex-end;
`;

export const ScrollableSwiper = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: visible;
  scroll-behavior: smooth;
  gap: 16px;
  margin: 0 50px;
  padding: 30px 10px 30px 20px;

  &::-webkit-scrollbar {
    display: none;
  }

  > * {
    flex: 0 0 auto;
  }
`;

export const ArrowButton = styled.button<{
  direction: 'left' | 'right';
  primaryColor: string;
}>`
  position: absolute;
  top: 50%;
  border: none;
  background: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;
  transform: translateY(-50%);
  transition:
    background-color 0.3s,
    transform 0.3s;

  ${({ direction }) =>
    direction === 'left' &&
    css`
      left: 8px;
    `}
  ${({ direction }) =>
    direction === 'right' &&
    css`
      right: 8px;
    `}
  &:hover {
    background-color: ${({ primaryColor }) => primaryColor};

    svg {
      stroke: #001f3f;
    }
  }
`;

export const ArrowSvg = styled.svg`
  width: 24px;
  height: 24px;
  color: #b7b7b7;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
`;

export const BestsellerTitle = styled.p<{ secondaryColor: string }>`
  font-size: 24px;
  font-weight: bold;
  color: ${({ secondaryColor }) => secondaryColor};
  text-align: center;
  margin: 0;
`;

export const ProductType = styled.p<{ secondaryColor: string }>`
  font-size: 18px;
  font-style: italic;
  color: ${({ secondaryColor }) => secondaryColor};
  text-align: center;
  vertical-align: bottom;
  margin: 0;
`;
