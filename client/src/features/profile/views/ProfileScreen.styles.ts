import styled from 'styled-components';
import { down } from '@/shared/styles/breakpoints';
import { typography } from '@/shared/styles/typography';

export const ProfileContainer = styled.div`
  min-height: calc(100vh - 200px);
  padding: 4rem 2rem;
  background: #fafafa;

  ${down.tablet} {
    padding: 2rem 1rem;
  }
`;

export const ProfileContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.04);

  ${down.tablet} {
    padding: 2rem 1.5rem;
    border-radius: 12px;
  }
`;

export const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e0e0e0;
`;

export const ProfileIcon = styled.div`
  ${typography.pageHeading}
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, #001f3f 0%, #003366 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  box-shadow: 0 8px 24px rgba(0, 31, 63, 0.2);
`;

export const ProfileTitle = styled.h1`
  ${typography.pageHeading}
  color: #1a1a1a;
  margin: 0;
`;

export const ProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const SectionTitle = styled.h2`
  ${typography.sectionHeading}
  color: #1a1a1a;
  margin: 0 0 0.5rem;
`;

export const InputGroup = styled.div`
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
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  background: #fafafa;

  &:focus {
    border-color: #001f3f;
    box-shadow: 0 0 0 4px rgba(0, 31, 63, 0.08);
    background: white;
    transform: translateY(-1px);
  }

  &:disabled {
    background: #f5f5f5;
    cursor: not-allowed;
    color: #666;
  }

  &::placeholder {
    color: #999;
  }
`;

export const ReadOnlyInput = styled(Input)`
  background: #f5f5f5;
  cursor: not-allowed;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  ${down.tablet} {
    flex-direction: column;
  }
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
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover:not(:disabled) {
    background: #003366;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 31, 63, 0.25);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
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
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: #f5f5f5;
    border-color: #ccc;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const ErrorMessage = styled.div`
  ${typography.bodySmall}
  color: #e74c3c;
  padding: 0.75rem 1rem;
  background: #fee;
  border-radius: 8px;
  border: 1px solid #fcc;
`;

export const SuccessMessage = styled.div`
  ${typography.bodySmall}
  color: #27ae60;
  padding: 0.75rem 1rem;
  background: #efe;
  border-radius: 8px;
  border: 1px solid #cfc;
`;
