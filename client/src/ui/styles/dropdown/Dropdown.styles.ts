import styled, { css, keyframes } from 'styled-components';

export const VisuallyHiddenLabel = styled.span`
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap;
  clip-path: inset(50%);
`;

export const Container = styled.div<{ $width?: string }>`
  position: relative;
  width: ${({ $width }) => $width ?? '240px'};
  font-family: inherit;
`;

export const Trigger = styled.button<{ $isScrolled?: boolean }>`
  width: 100%;
  height: 38px;
  padding: 0;
  border: none;
  border-bottom: 1px solid
    ${({ $isScrolled }) => ($isScrolled ? '#001f3f' : '#ffffff')};
  background: transparent;
  color: ${({ $isScrolled }) => ($isScrolled ? '#001f3f' : '#ffffff')};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  cursor: pointer;
  transition:
    border-color 0.3s ease,
    color 0.3s ease;

  &:hover {
    border-color: ${({ $isScrolled }) => ($isScrolled ? '#9a8300' : '#ffffff')};
  }

  &:focus-visible {
    outline: none;
    border-color: #9a8300;
  }
`;

export const ValueText = styled.span<{ $isScrolled?: boolean }>`
  color: ${({ $isScrolled }) => ($isScrolled ? '#001f3f' : '#ffffff')};
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const PlaceholderText = styled.span<{ $isScrolled?: boolean }>`
  color: ${({ $isScrolled }) => ($isScrolled ? '#8a8f98' : '#ffffffb3')};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Chevron = styled.span<{ $isScrolled?: boolean }>`
  font-size: 0.8rem;
  transform: rotate(0deg);
  transition:
    transform 0.2s ease,
    color 0.3s ease;
  color: ${({ $isScrolled }) => ($isScrolled ? '#001f3f' : '#ffffff')};

  &[data-open='true'] {
    transform: rotate(180deg);
    color: ${({ $isScrolled }) => ($isScrolled ? '#9a8300' : '#ffffff')};
  }
`;

const pop = keyframes`
  0% { opacity: 0; transform: translateY(-4px) scale(0.98); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`;

export const Menu = styled.ul<{ $maxHeight?: string }>`
  position: absolute;
  left: 0;
  right: 0;
  margin: 6px 0 0 0;
  padding: 6px;
  border-radius: 12px;
  background: #ffffff;
  border: 1px solid #e6e6e6;
  box-shadow:
    0 10px 25px rgba(0, 0, 0, 0.08),
    0 6px 12px rgba(0, 0, 0, 0.06);
  list-style: none;
  max-height: ${({ $maxHeight }) => $maxHeight ?? '260px'};
  overflow: auto;
  z-index: 1000;
  animation: ${pop} 0.12s ease both;

  /* Scroll aesthetics */
  scrollbar-width: thin;
  scrollbar-color: #c7c7c7 transparent;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #c7c7c7;
    border-radius: 8px;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 36px;
  margin: 2px 2px 6px;
  padding: 0 10px;
  border-radius: 8px;
  border: 1px solid #e2e2e2;
  background: #fafafa;
  color: #001f3f;
  &:focus {
    outline: 2px solid #9a8300;
    outline-offset: 1px;
  }
`;

export const OptionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 36px;
  padding: 6px 8px;
  margin-bottom: 6px;
  border-radius: 8px;
  color: #001f3f;
  cursor: pointer;
  user-select: none;
  transition:
    background 0.15s ease,
    color 0.15s ease;

  &[data-disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &[aria-selected='true'] {
    background: rgba(154, 131, 0, 0.1);
    color: #9a8300;
    font-weight: 600;
  }

  &[data-highlighted] {
    background: rgba(0, 31, 63, 0.08);
  }

  &:not([data-disabled]):hover {
    background: rgba(0, 31, 63, 0.08);
  }
`;

export const OptionIcon = styled.span`
  display: inline-flex;
  width: 18px;
  height: 18px;
  & > svg {
    width: 18px;
    height: 18px;
    fill: currentColor;
    stroke: currentColor;
  }
  & > img {
    width: 18px;
    height: 18px;
    object-fit: contain;
  }
`;

export const NoResults = styled.div`
  color: #8a8f98;
  padding: 12px 8px;
  text-align: center;
`;
