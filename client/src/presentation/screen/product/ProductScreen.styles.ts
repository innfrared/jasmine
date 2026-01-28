import styled from 'styled-components';

export const ProductPageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
`;

export const ProductContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 140px 3rem 4rem;
  width: 100%;
`;

export const ProductMain = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 2rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 8px;
  background: #f9f9f9;
  aspect-ratio: 1;
`;

export const ThumbnailContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  overflow-x: clip;
  padding: 0.5rem 0;
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }
`;

export const Thumbnail = styled.img<{ $isActive: boolean }>`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 6px;
  cursor: pointer;
  border: ${({ $isActive }) => ($isActive ? '2px solid #1a1a1a' : 'none')};
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0.7)};
  transition: all 0.2s ease;
  flex-shrink: 0;

  &:hover {
    opacity: 1;
    ${({ $isActive }) => !$isActive && 'border: 1px solid rgba(0, 0, 0, 0.2);'}
  }
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ProductTitle = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  color: #1a1a1a;
  margin: 0;
  font-family: 'Questrial', sans-serif;
  line-height: 1.3;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const Price = styled.div`
  font-size: 1.75rem;
  font-weight: 600;
  color: #1a1a1a;
  font-family: 'Questrial', sans-serif;
`;

export const OldPrice = styled.div`
  font-size: 1.25rem;
  font-weight: 400;
  color: #999;
  text-decoration: line-through;
  font-family: 'Questrial', sans-serif;
`;

export const VariationsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: 1rem;
`;

export const VariationGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const VariationLabel = styled.label`
  font-size: 0.95rem;
  font-weight: 500;
  color: #1a1a1a;
  font-family: 'Questrial', sans-serif;
`;

export const ColorOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

export const ColorOption = styled.button<{ $isSelected: boolean; $colorValue: string }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  border: 1.5px solid ${({ $isSelected }) => ($isSelected ? '#1a1a1a' : '#e0e0e0')};
  border-radius: 8px;
  background: white;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: 'Questrial', sans-serif;
  font-size: 0.875rem;
  color: #1a1a1a;

  &:hover {
    border-color: #1a1a1a;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const ColorBox = styled.div<{ $colorValue: string }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({ $colorValue }) => $colorValue};
  border: 1px solid rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
`;

export const ColorName = styled.span`
  font-weight: 400;
`;

export const SizeOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

export const SizeOption = styled.button<{ $isSelected: boolean }>`
  padding: 0.625rem 1.25rem;
  border: 1.5px solid ${({ $isSelected }) => ($isSelected ? '#1a1a1a' : '#e0e0e0')};
  border-radius: 8px;
  background: white;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: 'Questrial', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: #1a1a1a;
  min-width: 50px;
  text-align: center;

  &:hover {
    border-color: #1a1a1a;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const Button = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  flex: 1;
  min-width: 160px;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: 'Questrial', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  ${({ $variant }) =>
    $variant === 'primary'
      ? `
    background: #1a1a1a;
    color: white;
    
    &:hover {
      background: #2a2a2a;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
  `
      : `
    background: transparent;
    color: #1a1a1a;
    border: 1.5px solid #1a1a1a;
    
    &:hover {
      background: #1a1a1a;
      color: white;
      transform: translateY(-1px);
    }
  `}

  &:active {
    transform: translateY(0);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.95rem;
  font-family: 'Questrial', sans-serif;

  span:first-child {
    color: #666;
    font-weight: 400;
  }

  span:last-child {
    color: #1a1a1a;
    font-weight: 500;
  }
`;

export const AvailabilityBadge = styled.span<{ $available: boolean }>`
  padding: 0.375rem 0.75rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  font-family: 'Questrial', sans-serif;
  background: ${({ $available }) => ($available ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)')};
  color: ${({ $available }) => ($available ? '#4caf50' : '#f44336')};
`;

export const SpecificationsSection = styled.div`
  margin-top: 4rem;
  padding-top: 3rem;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  color: #1a1a1a;
  margin: 0 0 1.5rem;
  font-family: 'Questrial', sans-serif;
`;

export const SpecificationsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SpecificationItem = styled.li`
  display: flex;
  gap: 1rem;
  font-size: 0.95rem;
  font-family: 'Questrial', sans-serif;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);

  strong {
    color: #666;
    font-weight: 500;
    min-width: 200px;
  }

  span {
    color: #1a1a1a;
    flex: 1;
  }
`;

export const LoadingMessage = styled.p`
  text-align: center;
  padding: 4rem 2rem;
  color: #666;
  font-family: 'Questrial', sans-serif;
`;

export const ErrorMessage = styled.p`
  text-align: center;
  padding: 4rem 2rem;
  color: #f44336;
  font-family: 'Questrial', sans-serif;
`;

