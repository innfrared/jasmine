import styled from 'styled-components';

export const AccountBoxContainer = styled.div<{ $visible: boolean }>`
  margin-top: 10px;
  position: absolute;
  top: 100%;
  right: 0;
  background: #fff;
  border-radius: 20px;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  padding: 20px 25px;
  z-index: 1000;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) =>
    $visible ? 'translateY(0)' : 'translateY(-20px)'};
  transition:
    opacity 0.3s ease-in-out,
    transform 0.3s ease-in-out;
  pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
`;

export const AccountDetails = styled.div`
  text-align: center;

  > p {
    margin: 10px 0;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

export const VerticalLine = styled.div`
  width: 2px;
  height: 30px;
  background-color: #cc0c5c;
`;
