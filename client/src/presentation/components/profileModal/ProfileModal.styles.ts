import styled, { keyframes } from 'styled-components';

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

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  animation: ${fadeIn} 0.2s ease-out;
  padding: 1rem;
  overflow: auto;
`;

export const Modal = styled.div`
  background: white;
  border-radius: 12px;
  width: 100%;
  max-width: 480px;
  padding: 2.5rem;
  position: relative;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.1);
  animation: ${slideUp} 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  font-family: 'Questrial', sans-serif;
  border: 1px solid rgba(0, 0, 0, 0.04);

  @media (max-width: 480px) {
    padding: 2rem 1.5rem;
    max-width: 100%;
    border-radius: 10px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
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

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin: 0 0 2rem;
  color: #1a1a1a;
  text-align: center;
  font-family: 'Questrial', sans-serif;
`;

export const UserInfo = styled.div`
  text-align: center;
  padding: 1.5rem 0;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 2rem;
`;

export const UserName = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
  font-family: 'Questrial', sans-serif;
`;

export const UserEmail = styled.div`
  font-size: 1rem;
  color: #666;
  font-family: 'Questrial', sans-serif;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
  color: #333;
`;

export const Input = styled.input`
  padding: 0.875rem 1rem;
  border: 1.5px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1rem;
  font-family: 'Questrial', sans-serif;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  background: #fafafa;

  &:focus {
    border-color: #001f3f;
    box-shadow: 0 0 0 4px rgba(0, 31, 63, 0.08);
    background: white;
    transform: translateY(-1px);
  }

  &::placeholder {
    color: #999;
  }
`;

export const ErrorMessage = styled.div`
  color: #e74c3c;
  font-size: 0.875rem;
  padding: 0.75rem;
  background: #fee;
  border-radius: 8px;
  border: 1px solid #fcc;
`;

export const SuccessMessage = styled.div`
  color: #27ae60;
  font-size: 0.875rem;
  padding: 0.75rem;
  background: #efe;
  border-radius: 8px;
  border: 1px solid #cfc;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export const SubmitButton = styled.button`
  flex: 1;
  padding: 0.875rem 1.5rem;
  background: #001f3f;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  font-family: 'Questrial', sans-serif;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover:not(:disabled) {
    background: #003366;
    transform: translateY(-1px);
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

export const LogoutButton = styled.button`
  flex: 1;
  padding: 0.875rem 1.5rem;
  background: white;
  color: #cc0c5c;
  border: 1.5px solid #cc0c5c;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  font-family: 'Questrial', sans-serif;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: #cc0c5c;
    color: white;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(204, 12, 92, 0.25);
  }

  &:active {
    transform: translateY(0);
  }
`;

