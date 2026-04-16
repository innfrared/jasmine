import styled from 'styled-components';
import { typography } from '@/shared/styles/typography';

export const ProductsPageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #ffffff;
`;

export const ProductsContent = styled.div`
  max-width: none;
  margin: 0;
  padding: 140px 0 4rem;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 120px 0 3rem;
  }
`;

export const ProductsHeader = styled.div`
  width: min(1400px, calc(100% - 6rem));
  margin: clamp(2.4rem, 4vw, 4.75rem) auto clamp(2.35rem, 3.8vw, 4.25rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    width: calc(100% - 3rem);
    margin: 2rem auto 2.4rem;
  }
`;

export const ProductsTitle = styled.h1`
  ${typography.pageHeading};
  font-size: clamp(2.35rem, 2vw + 1.7rem, 3.4rem);
  color: #1a1a1a;
  margin: 0;
  max-width: 46rem;
  text-transform: capitalize;

  @media (max-width: 768px) {
    font-size: 2.1rem;
  }
`;

export const ProductsSubtitle = styled.p`
  ${typography.bodySmall};
  margin: 1.35rem auto 0;
  max-width: 50rem;
  color: rgba(34, 31, 28, 0.58);
  font-size: clamp(0.92rem, 0.28vw + 0.86rem, 1.08rem);
  letter-spacing: 0.075em;
  line-height: 1.68;
  text-transform: none;
`;

export const ProductsToolbarSentinel = styled.div`
  width: 100%;
  height: 1px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 3rem;
  flex-wrap: wrap;
`;

export const PaginationButton = styled.button`
  background: none;
  border: none;
  color: #1a1a1a;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;
  font-family: var(--font-ui);

  &:hover:not(:disabled) {
    background: rgba(0, 0, 0, 0.05);
    color: #9a8300;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    min-width: 36px;
    height: 36px;
    font-size: 0.9rem;
  }
`;

export const PageButton = styled.button<{ $isActive?: boolean }>`
  background: ${({ $isActive }) => ($isActive ? '#1a1a1a' : 'transparent')};
  border: 1px solid
    ${({ $isActive }) => ($isActive ? '#1a1a1a' : 'rgba(0, 0, 0, 0.1)')};
  color: ${({ $isActive }) => ($isActive ? '#ffffff' : '#1a1a1a')};
  padding: 0.5rem 0.75rem;
  font-size: 0.95rem;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.2s ease;
  min-width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-ui);
  font-weight: ${({ $isActive }) => ($isActive ? '500' : '400')};

  &:hover:not(:disabled) {
    background: ${({ $isActive }) =>
      $isActive ? '#1a1a1a' : 'rgba(0, 0, 0, 0.05)'};
    border-color: ${({ $isActive }) => ($isActive ? '#1a1a1a' : '#9a8300')};
    color: ${({ $isActive }) => ($isActive ? '#ffffff' : '#9a8300')};
  }

  &:disabled {
    cursor: default;
    border: none;
    background: transparent;
    color: #999;
  }

  @media (max-width: 768px) {
    min-width: 36px;
    height: 36px;
    font-size: 0.85rem;
    padding: 0.4rem 0.6rem;
  }
`;

export const LoadingMessage = styled.div`
  ${typography.body};
  text-align: center;
  padding: 4rem 2rem;
  color: #666;
`;

export const ErrorMessage = styled.div`
  ${typography.body};
  text-align: center;
  padding: 4rem 2rem;
  color: #cc0c5c;
`;

export const EmptyMessage = styled.div`
  ${typography.body};
  text-align: center;
  padding: 4rem 2rem;
  color: #999;
`;

export const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  margin: clamp(1.8rem, 3vw, 3rem) 0 2rem;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 968px) {
    flex-direction: column;
  }
`;

export const MainContent = styled.div`
  flex: 1;
  min-width: 0;
`;

export const SubcategoriesContainer = styled.div`
  margin-bottom: 3rem;
  padding: 2rem;
  background: #faf6ef;
  border-radius: 18px;
`;

export const SubcategoriesTitle = styled.h2`
  ${typography.sectionHeading};
  color: #1a1a1a;
  margin: 0 0 1.5rem 0;
`;

export const SubcategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 140px));
  gap: 0.75rem;
  justify-content: start;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(90px, 120px));
    gap: 0.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const SubcategoryCard = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.4rem;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  text-decoration: none;
  color: #1a1a1a;
  ${typography.bodySmall};
  transition: all 0.2s ease;
  text-align: center;
  text-transform: capitalize;
  aspect-ratio: 1.3;
  min-height: 60px;

  @media (max-width: 768px) {
    min-height: 50px;
    padding: 0.4rem 0.3rem;
    font-size: 0.85rem;
    aspect-ratio: 1.2;
  }

  &:hover {
    border-color: #9a8300;
    color: #9a8300;
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;
