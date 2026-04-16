import styled from 'styled-components';

export const ProductListingGridRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);
  margin-bottom: 4rem;
`;

export const ProductListingRowRoot = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 3px;
  width: 100%;
  align-items: start;

  > * {
    min-width: 0;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const EditorialImageBlock = styled.div<{
  $desktopSpan: number;
  $objectPosition: string;
}>`
  grid-column: span ${({ $desktopSpan }) => $desktopSpan};
  min-width: 0;
  aspect-ratio: ${({ $desktopSpan }) => ($desktopSpan > 1 ? '5 / 3' : '5 / 6')};
  overflow: hidden;
  background: #f1ede6;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    object-position: ${({ $objectPosition }) => $objectPosition};
  }

  @media (max-width: 1024px) {
    grid-column: 1 / -1;
    aspect-ratio: 5 / 3;
  }
`;
