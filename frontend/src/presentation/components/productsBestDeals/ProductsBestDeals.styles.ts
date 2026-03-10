import styled from 'styled-components';

export const CarouselContainer = styled.div`
  margin-top: 30px;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ScrollableSwiper = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: visible;
  scroll-behavior: smooth;
  gap: 16px;
  margin: 0 50px 0 50px;
  padding: 30px 10px 30px 20px;

  &::-webkit-scrollbar {
    display: none;
  }

  > * {
    flex: 0 0 auto;
  }
`;

export const ArrowButton = styled.button<{ $direction: 'left' | 'right' }>`
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
  transition:
    background-color 0.3s,
    transform 0.3s;
  z-index: 1;
  transform: translateY(-50%);

  ${({ $direction }) => ($direction === 'left' ? 'left: 8px;' : 'right: 8px;')}

  &:hover {
    background-color: #cc0c5c;
  }

  &:hover svg {
    filter: brightness(0) invert(1);
    stroke: #ff3366;
  }
`;

export const ArrowSvg = styled.svg`
  width: 24px;
  height: 24px;
  color: #cc0c5c;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
`;

export const CarouselTitle = styled.p`
  font-size: 24px;
  color: #cc0c5c;
  font-weight: bold;
  text-align: center;
`;
