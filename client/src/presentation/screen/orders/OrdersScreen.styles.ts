import styled from 'styled-components';

export const OrdersContainer = styled.div`
  min-height: calc(100vh - 200px);
  padding: 10rem 2rem;
  background: #fafafa;
  font-family: 'Questrial', sans-serif;

  @media (max-width: 768px) {
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
  font-size: 2rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
  font-family: 'Questrial', sans-serif;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
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
  font-size: 1.1rem;
  color: #666;
  font-family: 'Questrial', sans-serif;
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
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.25rem;
  font-family: 'Questrial', sans-serif;
`;

export const OrderDate = styled.div`
  font-size: 0.9rem;
  color: #666;
  font-family: 'Questrial', sans-serif;
`;

export const OrderStatus = styled.div<{ $status: string }>`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  font-family: 'Questrial', sans-serif;
  text-transform: capitalize;
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
  font-size: 0.95rem;
  font-weight: 500;
  color: #1a1a1a;
  margin-bottom: 0.25rem;
  font-family: 'Questrial', sans-serif;
`;

export const OrderItemPrice = styled.div`
  font-size: 0.85rem;
  color: #666;
  font-family: 'Questrial', sans-serif;
`;

export const OrderTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #e0e0e0;
`;

export const OrderTotalLabel = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a1a;
  font-family: 'Questrial', sans-serif;
`;

export const OrderTotalValue = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: #001f3f;
  font-family: 'Questrial', sans-serif;
`;

