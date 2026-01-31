import styled from 'styled-components';

export const Card = styled.div`
  width: 15rem;
  background: #fff;
  padding: 5px;
  overflow: hidden;
  transition: all 0.3s;
  position: relative;
  box-sizing: border-box;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 40vw;
    height: 230px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const HoverButtons = styled.div`
  width: 80%;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-around;
  gap: 10px;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: 10;
`;

export const FindSimilar = styled.div`
  position: absolute;
  display: flex;
  gap: 10px;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: 10;
`;

export const CardImage = styled.div`
  width: 100%;
  aspect-ratio: 4 / 5;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #ffffff;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    z-index: 1;
  }

  ::after {
    box-shadow:
      inset 0 0 30px rgba(0, 0, 0, 0.08),
      inset 0 0 60px rgba(0, 0, 0, 0.05);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    box-shadow:
      inset 0 0 30px rgba(0, 0, 0, 0.08),
      inset 0 0 60px rgba(0, 0, 0, 0.05);
    transition: opacity 0.4s ease;
    z-index: 2;
    pointer-events: none;
  }

  ${HoverButtons} {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 8px;
    opacity: 0;
    transition:
      opacity 0.4s ease,
      transform 0.4s ease;
    z-index: 3;
  }

  ${FindSimilar} {
    position: absolute;
    top: 0;
    display: flex;
    right: 0;
    gap: 8px;
    opacity: 0;
    transition:
      opacity 0.4s ease,
      transform 0.4s ease;
    z-index: 3;
  }

  &:hover img {
    transform: scale(1.05);
  }

  &:hover::after {
    opacity: 1;
    background: linear-gradient(
      to top,
      rgba(255, 255, 255, 1) 10%,
      rgba(255, 255, 255, 0) 50%
    );
  }

  &:hover ${HoverButtons} {
    opacity: 1;
    pointer-events: auto;
  }

  &:hover ${FindSimilar} {
    opacity: 1;
    pointer-events: auto;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.p`
  font-size: 0.8em;
  text-transform: uppercase;
  color: #4d4d4d;
  margin: 0;
`;

export const PriceContainer = styled.div`
  display: flex;
  margin: 5px 0;
  justify-content: start;
  width: 100%;
`;

export const Price = styled.p`
  font-size: 1.1em;
  margin: 0;
  font-weight: 700;
`;

export const OldPrice = styled.p`
  font-size: 14px;
  text-decoration: line-through;
  color: red;
  margin: 0 5px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`;

export const ButtonWrapper = styled.div`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
`;

export const Text = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: top 0.5s;
`;

export const Icon = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: top 0.5s;
`;

export const ButtonCompare = styled.div`
  width: 100%;
  height: 35px;
  background: #fff;
  color: #222;
  position: relative;
  border: 1px solid #222;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    background: #222;
    color: #fff;
  }

  @media (max-width: 768px) {
    background-color: #cc0c5c;
    border: none;
  }
`;

export const TextCompare = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
  font-weight: 500;
  font-family: inherit;
  transition: top 0.5s;

  ${ButtonCompare}:hover & {
    top: -100%;
    color: #fff;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 237, 237, 0.65);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const OverlayIcon = styled.div`
  font-size: 1.5rem;
  color: #e60000;
  font-weight: bold;
`;
