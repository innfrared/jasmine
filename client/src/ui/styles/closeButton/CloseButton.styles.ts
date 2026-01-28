import styled from 'styled-components';

export const CloseButtonBase = styled.button`
  position: relative;
  width: 2em;
  height: 2em;
  border: none;
  cursor: pointer;
  background: rgba(61, 61, 61, 0.2);
  border-radius: 5px;
  transition: background 0.5s;

  &:hover {
    background-color: rgb(211, 21, 21);
  }

  &:active {
    background-color: rgb(130, 0, 0);
  }
`;

export const LineX = styled.span`
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1.5em;
  height: 1.5px;
  background-color: rgb(255, 255, 255);
  transform: translateX(-50%) rotate(45deg);
`;

export const LineY = styled.span`
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1.5em;
  height: 1.5px;
  background-color: #fff;
  transform: translateX(-50%) rotate(-45deg);
`;
