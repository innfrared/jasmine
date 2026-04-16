import styled, { keyframes } from 'styled-components';
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
  max-width: 440px;
  padding: 2.5rem;
  position: relative;
  box-shadow:
    0 24px 64px rgba(0, 0, 0, 0.2),
    0 8px 16px rgba(0, 0, 0, 0.1);
  animation: ${slideUp} 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  font-family: var(--font-ui);
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
  ${typography.pageHeading};
  font-size: 2.3rem;
  margin: 0 0 2rem;
  color: #1a1a1a;
  text-align: center;
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
  ${typography.label};
  color: #333;
`;

export const Input = styled.input`
  padding: 0.875rem 1rem;
  border: 1.5px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1rem;
  font-family: var(--font-ui);
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

export const SubmitButton = styled.button`
  padding: 1rem 1.5rem;
  background: #001f3f;
  color: white;
  border: none;
  border-radius: 10px;
  ${typography.button};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: 0.5rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover:not(:disabled) {
    background: #003366;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 31, 63, 0.3);
  }

  &:hover:not(:disabled)::before {
    left: 100%;
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 2rem 0;
  color: #999;
  ${typography.bodySmall};

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #e0e0e0;
  }

  span {
    padding: 0 1rem;
  }
`;

export const SocialButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const SocialButton = styled.button<{ variant?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.875rem 1.5rem;
  border: 1.5px solid #e0e0e0;
  border-radius: 8px;
  background: white;
  color: #333;
  ${typography.button};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #d4af37;
    background: #fafafa;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const SwitchText = styled.p`
  ${typography.bodySmall};
  text-align: center;
  margin: 2rem 0 0;
  color: #666;
`;

export const SwitchLink = styled.a`
  color: #1a1a1a;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: #d4af37;
    text-decoration: underline;
  }
`;
