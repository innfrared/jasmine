import styled, { keyframes } from 'styled-components';

const modalSlideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-12px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const modalSlideOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(-12px) scale(0.96);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const LikedModalContainer = styled.div<{
  $isScrolled: boolean;
  $isClosing?: boolean;
}>`
  position: absolute;
  top: calc(100% + 0.75rem);
  right: 0;
  background: white;
  border-radius: 10px;
  width: 420px;
  max-width: calc(100vw - 2rem);
  max-height: 500px;
  display: flex;
  flex-direction: column;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.08),
    0 2px 8px rgba(0, 0, 0, 0.04);
  z-index: 10001;
  animation: ${({ $isClosing }) => ($isClosing ? modalSlideOut : modalSlideIn)}
    0.3s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
  will-change: transform, opacity;

  @media (max-width: 768px) {
    right: 1rem;
    width: calc(100vw - 2rem);
    max-width: 420px;
    max-height: 70vh;
    border-radius: 8px;
  }
`;

export const LikedModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
  animation: ${fadeIn} 0.3s ease-out 0.1s both;
`;

export const LikedModalTitle = styled.h2`
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  color: #1a1a1a;
  font-family: 'Questrial', sans-serif;
  letter-spacing: -0.1px;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  &:hover {
    background: rgba(0, 0, 0, 0.06);
    color: #1a1a1a;
    transform: rotate(90deg);
  }

  &:active {
    transform: rotate(90deg) scale(0.95);
  }

  svg {
    display: block;
    transition: transform 0.2s ease;
  }
`;

export const LikedItemsList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0.25rem 0;
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.15) transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }
`;

export const LikedItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  padding: 0.875rem 1.25rem;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);

  &:last-of-type {
    border-bottom: none;
  }

  &:hover {
    background: rgba(204, 12, 92, 0.02);
  }
`;

export const LikedItemImage = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 8px;
  background: #f5f5f5;
  flex-shrink: 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s ease;
  position: relative;
  overflow: hidden;

  img {
    object-fit: cover;
  }

  ${LikedItem}:hover & {
    transform: scale(1.03);
  }
`;

export const LikedItemDetails = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const LikedItemName = styled.div`
  font-size: 0.9rem;
  color: #1a1a1a;
  font-weight: 400;
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-family: 'Questrial', sans-serif;
`;

export const LikedItemPrice = styled.div`
  font-size: 0.875rem;
  color: #666;
  font-weight: 500;
  font-family: 'Questrial', sans-serif;
`;

export const LikedItemActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
  margin-left: auto;
`;

export const LikedItemCartButton = styled.button<{ $inCart: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: ${({ $inCart }) => ($inCart ? '#cc0c5c' : '#999')};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: all 0.2s ease;
  opacity: ${({ $inCart }) => ($inCart ? 1 : 0.6)};

  &:hover {
    background: rgba(0, 0, 0, 0.05);
    color: ${({ $inCart }) => ($inCart ? '#cc0c5c' : '#d4af37')};
    opacity: 1;
  }

  svg {
    display: block;
  }
`;

export const LikedItemRemove = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: #999;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: all 0.2s ease;
  opacity: 0.6;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
    color: #cc0c5c;
    opacity: 1;
  }

  svg {
    display: block;
  }
`;

export const EmptyLikedMessage = styled.div`
  padding: 3rem 1.5rem;
  text-align: center;
  color: #999;
  font-size: 0.95rem;
  font-family: 'Questrial', sans-serif;
`;
