import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  z-index: 4000;
`;

export const ModalCard = styled.div`
  width: min(920px, 100%);
  max-height: 80vh;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem 0.75rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`;

export const ModalTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: #0f0f0f;
`;

export const CloseButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  color: #0f0f0f;
  font-size: 1.1rem;
  padding: 0.25rem;
  line-height: 1;
`;

export const ModalBody = styled.div`
  padding: 1.25rem 1.5rem 1.5rem;
  overflow: auto;
`;

export const StatusText = styled.p`
  margin: 0;
  color: #6b6b6b;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
`;

export const ProductCard = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  cursor: pointer;
  transition: transform 180ms ease, border-color 180ms ease;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(0, 0, 0, 0.16);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  border-radius: 8px;
  background: #f6f6f6;
`;

export const ProductName = styled.p`
  margin: 0;
  font-size: 0.9rem;
  font-weight: 600;
  color: #1a1a1a;
`;

export const ProductPrice = styled.p`
  margin: 0;
  font-size: 0.85rem;
  color: #6b6b6b;
`;
