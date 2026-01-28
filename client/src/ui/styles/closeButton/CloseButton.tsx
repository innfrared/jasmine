import React from 'react';
import { CloseButtonBase, LineX, LineY } from './CloseButton.styles';

type ButtonProps = {
  onClick?: () => void;
};

const CloseButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <CloseButtonBase onClick={onClick} type="button">
      <LineX />
      <LineY />
    </CloseButtonBase>
  );
};

export default CloseButton;
