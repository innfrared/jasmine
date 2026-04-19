import styled, { keyframes } from 'styled-components';
import { down } from '@/shared/styles/breakpoints';
import { typography } from '@/shared/styles/typography';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(30px) scale(0.95);
    opacity: 0;
  }
  to {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
`;

export const ShippingContainer = styled.div`
  min-height: calc(100vh - 200px);
  padding: 10rem 2rem;
  background: #fafafa;

  ${down.tablet} {
    padding: 2rem 1rem;
  }
`;

export const ShippingContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

export const ShippingHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  ${down.tablet} {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

export const ShippingTitle = styled.h1`
  ${typography.pageHeading}
  color: #1a1a1a;
  margin: 0;
`;

export const AddButton = styled.button`
  ${typography.bodyStrong}
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: #001f3f;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #003366;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 31, 63, 0.25);
  }
`;

export const AddressList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;

  ${down.tablet} {
    grid-template-columns: 1fr;
  }
`;

export const AddressCard = styled.div`
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

export const AddressHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e0e0e0;
`;

export const AddressLabel = styled.div`
  ${typography.bodyStrong}
  color: #1a1a1a;
`;

export const AddressDefaultBadge = styled.div`
  ${typography.utility}
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  background: #e8f5e9;
  color: #2e7d32;
`;

export const AddressDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const AddressLine = styled.div`
  ${typography.bodySmall}
  color: #666;
`;

export const AddressActions = styled.div`
  display: flex;
  gap: 0.75rem;
  padding-top: 1rem;
  border-top: 1px solid #e0e0e0;
`;

export const EditButton = styled.button`
  ${typography.bodySmallStrong}
  flex: 1;
  padding: 0.5rem 1rem;
  background: #f5f5f5;
  color: #333;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #e0e0e0;
  }
`;

export const DeleteButton = styled.button`
  ${typography.bodySmallStrong}
  flex: 1;
  padding: 0.5rem 1rem;
  background: #fee;
  color: #cc0c5c;
  border: 1px solid #fcc;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #fcc;
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
  ${typography.bodyStrong}
  color: #666;
`;

export const EmptyStateSubtext = styled.div`
  ${typography.bodySmall}
  color: #666;
  margin-top: 0.5rem;
`;

export const SuccessMessage = styled(EmptyStateText)`
  margin-top: 1rem;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  animation: ${fadeIn} 0.2s ease-out;
  padding: 1rem;
`;

export const ModalContent = styled.div`
  background: white;
  border-radius: 12px;
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  animation: ${slideUp} 0.4s cubic-bezier(0.16, 1, 0.3, 1);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #e0e0e0;
`;

export const ModalTitle = styled.h2`
  ${typography.sectionHeading}
  color: #1a1a1a;
  margin: 0;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: #f5f5f5;
    color: #333;
  }
`;

export const AddressForm = styled.form`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  ${typography.bodyStrong}
  color: #333;
`;

export const Input = styled.input`
  ${typography.body}
  padding: 0.875rem 1rem;
  border: 1.5px solid #e0e0e0;
  border-radius: 10px;
  transition: all 0.3s ease;
  outline: none;
  background: #fafafa;

  &:focus {
    border-color: #001f3f;
    box-shadow: 0 0 0 4px rgba(0, 31, 63, 0.08);
    background: white;
  }
`;

export const Select = styled.select`
  ${typography.body}
  padding: 0.875rem 1rem;
  border: 1.5px solid #e0e0e0;
  border-radius: 10px;
  transition: all 0.3s ease;
  outline: none;
  background: #fafafa;

  &:focus {
    border-color: #001f3f;
    box-shadow: 0 0 0 4px rgba(0, 31, 63, 0.08);
    background: white;
  }
`;

export const FormActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export const SaveButton = styled.button`
  ${typography.buttonBold}
  flex: 1;
  padding: 0.875rem 1.5rem;
  background: #001f3f;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #003366;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 31, 63, 0.25);
  }
`;

export const CancelButton = styled.button`
  ${typography.button}
  flex: 1;
  padding: 0.875rem 1.5rem;
  background: white;
  color: #666;
  border: 1.5px solid #e0e0e0;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #f5f5f5;
    border-color: #ccc;
  }
`;
