import styled from 'styled-components';
import { down } from '@/shared/styles/breakpoints';
import { typography } from '@/shared/styles/typography';

export const OrdersContainer = styled.div`
  min-height: calc(100vh - 200px);
  padding: 10rem 2rem;
  background: #fafafa;

  ${down.tablet} {
    padding: 2rem 1rem;
  }
`;

export const OrdersContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

export const OrdersHeader = styled.div`
  margin-bottom: 2rem;
`;

export const OrdersTitle = styled.h1`
  ${typography.pageHeading}
  color: #1a1a1a;
  margin: 0;
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
`;

export const EmptyStateIcon = styled.div`
  color: #ccc;
  margin-bottom: 1.5rem;
`;

export const EmptyStateText = styled.div`
  ${typography.bodyStrong}
  color: #666;
`;

export const EmptyStateSubtext = styled.div`
  ${typography.bodySmall}
  color: #666;
  margin-top: 0.5rem;
`;

export const OrderList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const OrderCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
    transform: translateY(-2px);
  }
`;

export const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e0e0e0;
`;

export const OrderId = styled.div`
  ${typography.bodyStrong}
  color: #1a1a1a;
  margin-bottom: 0.25rem;
`;

export const OrderDate = styled.div`
  ${typography.bodySmall}
  color: #666;
`;

export const OrderStatus = styled.div<{ $status: string }>`
  ${typography.bodySmallCapitalized}
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background: ${({ $status }) => {
    switch ($status?.toLowerCase()) {
      case 'completed':
        return '#e8f5e9';
      case 'pending':
        return '#fff3e0';
      case 'cancelled':
        return '#ffebee';
      default:
        return '#f5f5f5';
    }
  }};
  color: ${({ $status }) => {
    switch ($status?.toLowerCase()) {
      case 'completed':
        return '#2e7d32';
      case 'pending':
        return '#f57c00';
      case 'cancelled':
        return '#c62828';
      default:
        return '#666';
    }
  }};
`;

export const OrderItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const OrderItem = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const OrderItemImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
  background: #f5f5f5;
`;

export const OrderItemDetails = styled.div`
  flex: 1;
`;

export const OrderItemName = styled.div`
  ${typography.bodySmallStrong}
  color: #1a1a1a;
  margin-bottom: 0.25rem;
`;

export const OrderItemPrice = styled.div`
  ${typography.bodySmall}
  color: #666;
`;

export const OrderTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #e0e0e0;
`;

export const OrderTotalLabel = styled.div`
  ${typography.bodyStrong}
  color: #1a1a1a;
`;

export const OrderTotalValue = styled.div`
  ${typography.sectionHeading}
  color: #001f3f;
`;
