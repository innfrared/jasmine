import styled from 'styled-components';

export const Filters = styled.aside`
  width: 250px;

  > h3 {
    color: #cc0c5c;
    font-size: 1.6rem;
  }
`;

export const FilterGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const FilterTitle = styled.p`
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-align: left;
`;

export const Checkbox = styled.label`
  display: block;
  margin: 5px 0;
  text-align: left;
`;

export const CheckboxGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`;
