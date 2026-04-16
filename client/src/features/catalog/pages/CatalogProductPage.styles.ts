import styled from 'styled-components';
import { typography } from '@/shared/styles/typography';

export const ProductPageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #f8f8f8;
`;

export const ProductContent = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  padding: 132px 0.5rem 4.25rem;
  width: 100%;

  @media (max-width: 768px) {
    padding: 116px 0.45rem 3.5rem;
  }
`;

export const ProductSectionsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const ProductGrid = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
  gap: 2.6rem;
  margin-top: 1.75rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2.25rem;
  }
`;

export const MediaColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`;

export const MainImageFrame = styled.div`
  background: #ffffff;
  padding: 0.55rem;
  border-radius: 14px;
  overflow: hidden;
`;

export const MainImage = styled.img`
  width: 100%;
  aspect-ratio: 7 / 8;
  object-fit: cover;
  background: #f5f5f5;
  border-radius: 10px;
`;

export const ThumbnailRail = styled.div`
  display: flex;
  gap: 0.65rem;
  overflow-x: auto;
  padding: 0.1rem 0;

  &::-webkit-scrollbar {
    height: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(26, 26, 26, 0.22);
  }
`;

export const ThumbnailButton = styled.button<{ $isActive: boolean }>`
  width: 86px;
  height: 98px;
  padding: 0;
  border: ${({ $isActive }) =>
    $isActive ? '1px solid #111111' : '1px solid rgba(0, 0, 0, 0.12)'};
  background: #fff;
  cursor: pointer;
  flex-shrink: 0;
  border-radius: 12px;
  overflow: hidden;

  &:hover {
    border-color: #1a1a1a;
  }
`;

export const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const DetailsColumn = styled.div`
  background: #ffffff;
  padding: 1.4rem 1.45rem;
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
  border-radius: 14px;
`;

export const BrandLabel = styled.p`
  margin: 0;
  ${typography.label};
  letter-spacing: 0.12em;
  color: #646464;
  text-transform: uppercase;
`;

export const ProductTitle = styled.h1`
  margin: 0;
  ${typography.pageHeading};
  font-size: clamp(2rem, 1.4vw + 1.3rem, 2.7rem);
  line-height: 1.05;
  color: #101010;
`;

export const ProductDescription = styled.p`
  margin: 0;
  ${typography.body};
  color: #363636;
  line-height: 1.6;
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const CurrentPrice = styled.span`
  ${typography.sectionHeading};
  color: #101010;
`;

export const PreviousPrice = styled.span`
  ${typography.body};
  color: #8c8c8c;
  text-decoration: line-through;
`;

export const AvailabilityPill = styled.span<{ $available: boolean }>`
  margin-left: auto;
  ${typography.bodySmall};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${({ $available }) => ($available ? '#225c34' : '#782222')};
  background: ${({ $available }) => ($available ? '#e8f3eb' : '#f8ecec')};
  border: 1px solid ${({ $available }) => ($available ? '#c9dfcf' : '#e8cdcd')};
  padding: 0.4rem 0.65rem;
  border-radius: 999px;
`;

export const SectionBlock = styled.section`
  border-top: 1px solid #ededed;
  padding-top: 1rem;
  margin-top: 2rem;
  padding: 1rem 0 0.8rem;
`;

export const SectionTitle = styled.h2`
  margin: 0;
  ${typography.label};
  color: #272727;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const SwatchGrid = styled.div`
  margin-top: 0.85rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 0.65rem;
`;

export const SwatchButton = styled.button<{ $isActive: boolean }>`
  border: 1px solid ${({ $isActive }) => ($isActive ? '#101010' : '#cbcbcb')};
  background: #fff;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.55rem 0.65rem;
  cursor: pointer;
  border-radius: 12px;

  &:hover {
    border-color: #101010;
  }
`;

export const SwatchDot = styled.span<{ $colorValue: string }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${({ $colorValue }) => $colorValue};
  border: 1px solid rgba(0, 0, 0, 0.2);
  flex-shrink: 0;
`;

export const SwatchText = styled.span`
  ${typography.bodySmall};
  color: #101010;
  text-align: left;
`;

export const VariantMetaGrid = styled.div`
  margin-top: 0.8rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.7rem 1rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const VariantMetaItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const VariantMetaLabel = styled.span`
  ${typography.bodySmall};
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

export const VariantMetaValue = styled.span`
  ${typography.body};
  color: #101010;
  line-height: 1.4;
`;

export const QuantityRow = styled.div`
  border-top: 1px solid #ebebeb;
  padding-top: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
`;

export const QuantityButton = styled.button`
  min-width: 34px;
  height: 34px;
  border: 1px solid rgba(0, 0, 0, 0.18);
  background: #fff;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    border-color: #101010;
  }
`;

export const QuantityValue = styled.span`
  min-width: 24px;
  text-align: center;
  ${typography.body};
  color: #101010;
`;

export const QuantityLimit = styled.span`
  margin-left: 0.45rem;
`;

export const QuantityMax = styled.span`
  ${typography.bodySmall};
  color: #767676;
`;

export const ActionsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const ActionButton = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  min-height: 48px;
  border: 1px solid #111;
  background: ${({ $variant }) => ($variant === 'primary' ? '#101010' : '#fff')};
  color: ${({ $variant }) => ($variant === 'primary' ? '#fff' : '#101010')};
  ${typography.button};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  border-radius: 14px;

  &:hover {
    border-color: #000;
    background: ${({ $variant }) => ($variant === 'primary' ? '#000' : '#f4f4f4')};
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const SpecificationsSection = styled.div`
  margin-top: 2.2rem;
  border-top: 1px solid #e6e6e6;
  padding-top: 1.35rem;
  padding: 1.1rem 0.15rem 1.2rem;
`;

export const SpecsList = styled.div`
  margin-top: 0.9rem;
  display: grid;
  gap: 0.65rem;
`;

export const SpecRow = styled.div`
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
  gap: 1rem;
  border-bottom: 1px solid #f1f1f1;
  padding: 0.55rem 0;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    gap: 0.35rem;
  }
`;

export const SpecLabel = styled.span`
  ${typography.bodySmall};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #6c6c6c;
`;

export const SpecValue = styled.span`
  ${typography.body};
  color: #121212;
  white-space: pre-line;
`;

export const LoadingMessage = styled.p`
  ${typography.body};
  margin: 0;
  text-align: center;
  padding: 4rem 2rem;
  color: #666;
`;

export const ErrorMessage = styled.p`
  ${typography.body};
  text-align: center;
  padding: 4rem 2rem;
  color: #f44336;
`;
