import styled, { css } from 'styled-components';

export const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
  padding-left: 5rem;
  background: url('/assets/bg.jpg');
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(17, 17, 17, 0.4);
    z-index: 1;
    pointer-events: none;
  }

  > * {
    position: relative;
    z-index: 2;
  }

  @media (max-width: 768px) {
    height: 50vh;
    padding-left: 2rem;
  }
`;

export const CentralText = styled.div<{ isLoaded: boolean }>`
  position: relative;
  z-index: 2;
  text-align: left;

  h1,
  h3 {
    opacity: 0;
    transform: translateY(20px);
    transition:
      opacity 0.6s ease-out,
      transform 0.6s ease-out;
  }

  ${({ isLoaded }) =>
    isLoaded &&
    css`
      h1,
      h3 {
        opacity: 1;
        transform: translateY(0);
      }
    `}
`;

export const Title = styled.h1<{ secondaryColor: string }>`
  font-size: 48px;
  color: #fff;
  text-transform: uppercase;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.h3<{ secondaryColor: string }>`
  font-size: 32px;
  color: #fff;
  margin: 10px 0 0 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Line = styled.div<{ isLoaded: boolean; secondaryColor: string }>`
  width: 0;
  height: 4px;
  background-color: #fff;
  margin: 15px 0;
  transition: width 1s ease-out;

  ${({ isLoaded }) =>
    isLoaded &&
    css`
      width: 100%;
    `}
`;
