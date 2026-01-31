import styled, { css } from 'styled-components';

const INK = 'rgba(9, 28, 85, 0.89)';
const INK_MUTED = 'rgba(75, 34, 0, 0.89)';
const INK_SOFT = 'rgba(63, 58, 54, 0.58)';
const PORCELAIN = '#F7EFE9';
const CARD_SURFACE = 'rgba(255, 255, 255, 0.85)';
const ACCENT = '#B79A6A';

export type LayoutVariant =
  | 'staggered'
  | 'split_focus'
  | 'asymmetric_row'
  | 'overlap'
  | 'editorial_grid';

const variantStyles: Record<LayoutVariant, ReturnType<typeof css>> = {
  staggered: css`
    grid-template-columns: repeat(3, minmax(0, 1fr));
    row-gap: 3.5rem;
    column-gap: 2.75rem;
    align-items: start;
    justify-items: center;

    > div:nth-child(1) {
      transform: translateY(18px);
    }

    > div:nth-child(2) {
      transform: translateY(-6px);
    }

    > div:nth-child(3) {
      transform: translateY(30px);
    }

    @media (max-width: 900px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));

      > div {
        transform: none;
      }
    }

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  `,
  split_focus: css`
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 2.75rem;
    align-items: center;
    justify-items: center;

    > div:nth-child(2) {
      transform: translateY(-18px) scale(1.08);
      max-width: 320px;
    }

    > div:nth-child(1),
    > div:nth-child(3) {
      opacity: 0.9;
    }

    @media (max-width: 900px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));

      > div:nth-child(2) {
        transform: none;
        max-width: 260px;
      }
    }

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  `,
  asymmetric_row: css`
    grid-template-columns: minmax(220px, 320px) minmax(180px, 240px)
      minmax(180px, 240px);
    gap: 3rem;
    align-items: start;
    justify-items: center;

    > div:nth-child(1) {
      max-width: 320px;
      justify-self: end;
    }

    > div:nth-child(2) {
      margin-top: 1.5rem;
    }

    > div:nth-child(3) {
      margin-top: 2.75rem;
      justify-self: start;
    }

    @media (max-width: 900px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));

      > div {
        margin-top: 0;
        justify-self: center;
      }
    }

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  `,
  overlap: css`
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0;
    align-items: center;
    justify-items: center;

    > div {
      position: relative;
    }

    > div:nth-child(2) {
      margin: 0 -28px;
      z-index: 2;
    }

    > div:nth-child(1),
    > div:nth-child(3) {
      z-index: 1;
    }

    > div:nth-child(1) {
      transform: translateX(8px);
    }

    > div:nth-child(3) {
      transform: translateX(-8px);
    }

    @media (max-width: 900px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 2rem;

      > div:nth-child(2) {
        margin: 0;
      }

      > div:nth-child(1),
      > div:nth-child(3) {
        transform: none;
      }
    }

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  `,
  editorial_grid: css`
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 3.25rem 3rem;
    align-items: start;
    justify-items: center;

    > div {
      max-width: 230px;
    }

    > div:nth-child(2) {
      padding-top: 1.2rem;
    }

    @media (max-width: 900px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  `,
};

export const Section = styled.section`
  width: 100%;
  padding: 5rem 0.3rem 2.5rem;
  box-sizing: border-box;
  text-align: center;

  background:
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.38),
      rgba(255, 255, 255, 0)
    ),
    ${PORCELAIN};
`;

export const HeaderRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

export const TitleBlock = styled.div`
  max-width: 680px;
  margin: 0 auto;
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const TitleLine = styled.span`
  flex: 1;
  max-width: 120px;
  height: 1px;
  background-color: ${ACCENT};
  opacity: 0.5;

  @media (max-width: 640px) {
    max-width: 60px;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 500;
  font-family: 'Canela', 'Cormorant Garamond', 'EB Garamond', serif;
  letter-spacing: -0.03em;
  color: ${INK};
`;

export const Description = styled.p`
  margin: 0 auto;
  max-width: 56ch;
  font-size: 1rem;
  font-family: 'Canela', 'Cormorant Garamond', 'EB Garamond', serif;
  line-height: 1.2;
  color: ${INK_MUTED};
`;

export const CardsGrid = styled.div<{ $variant?: LayoutVariant }>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 200px));
  gap: 1.1rem;
  justify-content: center;
  max-width: 680px;
  margin: 0 auto 3rem;
  margin-bottom: 3rem;

  ${({ $variant }) => ($variant ? variantStyles[$variant] : null)}
`;

export const Card = styled.div`
  max-width: 260px;
  margin: 0 auto;
  padding: 1.25rem 0.4rem 1rem;
  text-align: center;

  font-size: 0.95rem;
  line-height: 1.6;
  color: ${INK_SOFT};

  img {
    width: 100%;
    max-width: 220px;
    height: 200px;
    margin: 0 auto 0.9rem;
    display: block;
    object-fit: cover;
    border-radius: 12px;
  }

  h3 {
    margin: 0 0 0.5rem;
    font-size: 1.2rem;
    font-weight: 500;
    font-family: 'Canela', 'Cormorant Garamond', 'EB Garamond', serif;
    letter-spacing: -0.01em;
    color: ${INK};
  }

  h3::after {
    content: '';
    display: block;
    width: 26px;
    height: 1px;
    margin: 0.45rem auto 0;
    background-color: ${ACCENT};
    opacity: 0.65;
  }

  p {
    margin: 0;
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    padding: 0 0.9rem;
    font-size: 1rem;
    font-family: 'Canela', 'Cormorant Garamond', 'EB Garamond', serif;
    line-height: 1.2;
    color: ${INK_MUTED};
    background: ${CARD_SURFACE};

    transform: translateY(-6px);
    transition:
      max-height 220ms ease,
      opacity 220ms ease,
      transform 220ms ease,
      padding 220ms ease;
  }

  &:hover p,
  &:focus-within p,
  h3:hover + p {
    max-height: 120px;
    opacity: 1;
    transform: translateY(0);
    padding: 0.35rem 0.6rem 0.4rem;
  }

  @media (prefers-reduced-motion: reduce) {
    p {
      transition: none;
    }
  }
`;

export const SubcategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 4px;
  width: 100%;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
