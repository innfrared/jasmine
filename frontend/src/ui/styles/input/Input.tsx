import React from 'react';
import { InputField, InputGroup, Label } from './Input.styles';

interface InputProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ label, type, value, onChange }) => {
  return (
    <InputGroup>
      <Label>{label}</Label>
      <InputField type={type} value={value} onChange={onChange} />
    </InputGroup>
  );
};

export default Input;
