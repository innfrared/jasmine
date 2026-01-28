import styled, { css } from 'styled-components';

export const TopNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #cc0c5c;
  padding: 0 1rem;
  font-size: 14px;
  height: 3vh;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0 2vh;
    font-size: 12px;
    height: auto;
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
  }
`;

export const LanguageSelector = styled.div`
  display: flex;
  gap: 10px;
  border-radius: 5px;
  padding: 2px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LanguageButton = styled.button<{ $active?: boolean }>`
  border: none;
  padding: 0;
  cursor: pointer;
  transition: transform 0.3s ease;
  background: none;
  height: 17px;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    width: 24px;
    height: 16px;
    background-color: #cbcbcb;
    border-radius: 3px;
  }

  ${({ $active }) =>
    $active &&
    css`
      svg {
        transform: scale(1.1);
        border-radius: 3px;
        background-color: #ffffff;
      }
    `}
`;
