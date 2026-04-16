import styled from 'styled-components';
import { typography } from '@/shared/styles/typography';

export const CheckoutPageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #fafafa;
`;

export const CheckoutContent = styled.div`
  flex: 1;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 10rem 1.5rem 6rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem 3rem;
  }
`;

export const CheckoutTitle = styled.h1`
  ${typography.pageHeading};
  font-size: clamp(2.35rem, 2vw + 1.6rem, 3.1rem);
  color: #1a1a1a;
  margin: 3rem 0 2rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin: 2rem 0 1.5rem;
  }
`;

export const CheckoutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 2rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const CustomerDetailsSection = styled.div`
  background: white;
  border-radius: 18px;
  padding: 2rem;
  box-shadow: 0 10px 28px rgba(24, 16, 12, 0.05);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const SectionTitle = styled.h2`
  ${typography.sectionHeading};
  color: #1a1a1a;
  margin: 0 0 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #001f3f;
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const FormLabel = styled.label`
  display: block;
  ${typography.label};
  color: #333;
  margin-bottom: 0.5rem;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 0.875rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  ${typography.body};
  color: #1a1a1a;
  background: white;
  transition: all 0.2s ease;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #001f3f;
    box-shadow: 0 0 0 3px rgba(0, 31, 63, 0.1);
  }

  &::placeholder {
    color: #999;
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.875rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  ${typography.body};
  color: #1a1a1a;
  background: white;
  transition: all 0.2s ease;
  resize: vertical;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #001f3f;
    box-shadow: 0 0 0 3px rgba(0, 31, 63, 0.1);
  }

  &::placeholder {
    color: #999;
  }
`;

export const OrderSummarySection = styled.div`
  background: white;
  border-radius: 18px;
  padding: 0;
  box-shadow: 0 10px 28px rgba(24, 16, 12, 0.05);
  margin-bottom: 1.5rem;
  overflow: hidden;
`;

export const OrderSummaryHeader = styled.div`
  padding: 1.5rem 1.5rem 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
`;

export const OrderSummaryTitle = styled.h2`
  ${typography.sectionHeading};
  color: #1a1a1a;
  margin: 0;
  padding-bottom: 1rem;
  border-bottom: 2px solid #001f3f;
`;

export const OrderItemsList = styled.div`
  max-height: 400px;
  overflow-y: auto;
  padding: 0.5rem 0;
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.15) transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.15);
    border-radius: 6px;
  }
`;

export const OrderItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
  position: relative;
  cursor: pointer;
  transition: background 0.2s ease;

  &:last-of-type {
    border-bottom: none;
  }

  &:hover {
    background: rgba(0, 31, 63, 0.02);
  }
`;

export const OrderItemImage = styled.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 8px;
  background: #f5f5f5;
  flex-shrink: 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
`;

export const OrderItemDetails = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const OrderItemName = styled.div`
  ${typography.bodySmall};
  color: #1a1a1a;
  font-weight: 500;
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const OrderItemPrice = styled.div`
  ${typography.bodySmall};
  color: #666;
  font-weight: 500;
`;

export const OrderItemQuantity = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  ${typography.bodySmall};

  button {
    background: none;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #666;
    font-size: 1.2rem;
    font-weight: 400;
    transition: all 0.2s ease;
    line-height: 1;

    &:hover {
      background: rgba(0, 31, 63, 0.05);
      border-color: #001f3f;
      color: #001f3f;
    }

    &:active {
      transform: scale(0.95);
    }
  }

  span {
    min-width: 24px;
    text-align: center;
    font-weight: 500;
    color: #1a1a1a;
  }
`;

export const OrderItemRemove = styled.button`
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
  flex-shrink: 0;
  opacity: 0.6;
  position: absolute;
  top: 1rem;
  right: 1.5rem;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
    color: #cc0c5c;
    opacity: 1;
  }

  svg {
    display: block;
  }
`;

export const OrderSummaryFooter = styled.div`
  padding: 1.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  background: #fafafa;
`;

export const OrderSummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${typography.body};
  color: #666;
  margin-bottom: 0.75rem;
`;

export const OrderSummaryTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.15rem;
  font-weight: 600;
  color: #1a1a1a;
  padding-top: 0.75rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  font-family: var(--font-ui);
  letter-spacing: 0.02em;
`;

export const PaymentSection = styled.div`
  background: white;
  border-radius: 18px;
  padding: 1.5rem;
  box-shadow: 0 10px 28px rgba(24, 16, 12, 0.05);
  margin-bottom: 1.5rem;
`;

export const PlaceOrderButton = styled.button`
  width: 100%;
  padding: 1rem 1.5rem;
  background: #001f3f;
  color: white;
  border: none;
  border-radius: 10px;
  ${typography.button};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: #003366;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 31, 63, 0.25);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

export const EmptyCartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
`;

export const EmptyCartMessage = styled.div`
  ${typography.body};
  color: #999;
`;

export const OrderErrorMessage = styled.p`
  ${typography.bodySmall};
  color: #cc0c5c;
  margin-top: 0.75rem;
`;
