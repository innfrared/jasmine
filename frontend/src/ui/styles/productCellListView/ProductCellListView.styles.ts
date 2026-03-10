import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  padding: 25px;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const CardImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;

  img {
    object-fit: cover;
  }
`;

export const Content = styled.div`
  flex-grow: 1;
`;

export const Title = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Price = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

export const OldPrice = styled.p`
  font-size: 18px;
  text-decoration: line-through;
  color: #888;
`;

export const ButtonContainer = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 10px;
`;

export const LeftSideContainer = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
`;

export const ButtonWrapper = styled.div`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  color: #fff;
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  color: #fff;
  transition: top 0.5s;
`;

export const TextCompare = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  color: inherit;
  font-weight: 500;
  font-family: inherit;
  transition: top 0.5s;
`;

export const Icon = styled.span`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  color: #fff;
  top: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: top 0.5s;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const ButtonBase = styled.div`
  width: 100%;
  height: 35px;
  background: #222;
  position: relative;
  text-align: center;
  border-radius: 10px;
  font-size: 12px;
  transition: background 0.7s;
  cursor: pointer;

  &::after,
  &::before {
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s;
  }

  &:hover {
    background: #222;
  }

  &:hover ${Text} {
    top: -100%;
  }

  &:hover ${Icon} {
    top: 0;
  }

  &:hover::before,
  &:hover::after {
    opacity: 1;
    visibility: visible;
  }
`;

export const ButtonCompare = styled.div`
  cursor: pointer;
  width: 100%;
  height: 35px;
  background: #fff;
  position: relative;
  text-align: center;
  border-radius: 10px;
  font-size: 12px;
  transition: all 0.7s ease;
  color: #222;
  border: 1px solid #222;

  &::after,
  &::before {
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s;
  }

  &:hover {
    background: #222;
    color: #fff;
    border: 1px solid #222;
  }

  &:hover ${Icon} {
    top: 0;
  }

  &:hover ${TextCompare} {
    top: -100%;
    color: #ffffff;
  }
`;
