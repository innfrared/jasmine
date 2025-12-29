import styled from 'styled-components';

export const ProductsPageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #ffffff;
`;

export const ProductsContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 140px 3rem 4rem;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 120px 1.5rem 3rem;
  }
`;

export const ProductsHeader = styled.div`
  margin-bottom: 3rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`;

export const ProductsTitle = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  color: #1a1a1a;
  margin: 0;
  font-family: 'Questrial', sans-serif;
  text-transform: capitalize;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 2rem;
  width: 100%;
  margin-bottom: 4rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
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
  font-family: 'Questrial', sans-serif;

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
  border: 1px solid ${({ $isActive }) => ($isActive ? '#1a1a1a' : 'rgba(0, 0, 0, 0.1)')};
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
  font-family: 'Questrial', sans-serif;
  font-weight: ${({ $isActive }) => ($isActive ? '500' : '400')};

  &:hover:not(:disabled) {
    background: ${({ $isActive }) => ($isActive ? '#1a1a1a' : 'rgba(0, 0, 0, 0.05)')};
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
  text-align: center;
  padding: 4rem 2rem;
  color: #666;
  font-size: 1.1rem;
  font-family: 'Questrial', sans-serif;
`;

export const ErrorMessage = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: #cc0c5c;
  font-size: 1.1rem;
  font-family: 'Questrial', sans-serif;
`;

export const EmptyMessage = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: #999;
  font-size: 1.1rem;
  font-family: 'Questrial', sans-serif;
`;

export const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;

  @media (max-width: 968px) {
    flex-direction: column;
  }
`;

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-width: 200px;

  @media (max-width: 968px) {
    width: 100%;
  }
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const FilterLabel = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
  color: #1a1a1a;
  font-family: 'Questrial', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const FilterOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FilterCheckbox = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 0.9rem;
  color: #666;
  font-family: 'Questrial', sans-serif;
  transition: color 0.2s ease;

  &:hover {
    color: #1a1a1a;
  }

  input[type='checkbox'] {
    width: 16px;
    height: 16px;
    cursor: pointer;
    accent-color: #1a1a1a;
  }
`;

export const ColorOption = styled.div<{ $colorValue?: string }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 0.9rem;
  color: #666;
  font-family: 'Questrial', sans-serif;
  transition: color 0.2s ease;

  &:hover {
    color: #1a1a1a;
  }

  input[type='checkbox'] {
    width: 16px;
    height: 16px;
    cursor: pointer;
    accent-color: #1a1a1a;
  }
`;

export const ColorSwatch = styled.div<{ $colorValue: string }>`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  background-color: ${({ $colorValue }) => $colorValue};
  border: 1px solid rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
`;

export const SortContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 968px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const SortLabel = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
  color: #1a1a1a;
  font-family: 'Questrial', sans-serif;
  white-space: nowrap;
`;

export const SortSelect = styled.select`
  padding: 0.5rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  background: white;
  color: #1a1a1a;
  font-size: 0.9rem;
  font-family: 'Questrial', sans-serif;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 180px;

  &:hover {
    border-color: rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
    border-color: #9a8300;
  }
`;

export const SubcategoriesContainer = styled.div`
  margin-bottom: 3rem;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 8px;
`;

export const SubcategoriesTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;
  color: #1a1a1a;
  margin: 0 0 1.5rem 0;
  font-family: 'Questrial', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.5px;
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
  border-radius: 4px;
  text-decoration: none;
  color: #1a1a1a;
  font-size: 0.9rem;
  font-family: 'Questrial', sans-serif;
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

export const MainContent = styled.div`
  flex: 1;
  min-width: 0;
`;

