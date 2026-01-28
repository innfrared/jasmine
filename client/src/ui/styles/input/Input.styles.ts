import styled from 'styled-components';

export const InputField = styled.input`
  max-width: 190px;
  height: 44px;
  background-color: rgba(128, 128, 128, 0.1);
  border-radius: 0.5rem;
  padding: 0 1rem;
  border: 1px solid transparent;
  font-size: 1rem;
  font-family: inherit;
  transition:
    border-color 0.3s cubic-bezier(0.25, 0.01, 0.25, 1),
    color 0.3s cubic-bezier(0.25, 0.01, 0.25, 1),
    background 0.2s cubic-bezier(0.25, 0.01, 0.25, 1);

  &:hover,
  &:focus {
    outline: none;
    border-color: #414141;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.3rem;
  font-size: 0.9rem;
  font-weight: normal;
  color: rgba(47, 47, 47, 0.6);
  transition: color 0.3s cubic-bezier(0.25, 0.01, 0.25, 1);
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  &:hover ${InputField},
  &:focus-within ${InputField} {
    outline: none;
    border-color: #414141;
  }

  &:hover ${Label},
  &:focus-within ${Label} {
    color: rgba(58, 58, 58, 0.76);
  }
`;
