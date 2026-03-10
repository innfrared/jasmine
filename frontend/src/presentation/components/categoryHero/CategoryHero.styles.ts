import styled from 'styled-components';

export const HeroWrapper = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export const HeroInner = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 40% 60%;
  gap: 0;
  height: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    height: auto;
  }
`;

export const LeftPanel = styled.div`
  background: #ffffff;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 520px;
  max-height: 80vh;

  @media (max-width: 1024px) {
    min-height: 360px;
  }
`;

export const MainImage = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  img {
    object-fit: cover;
    object-position: center;
  }
`;

export const RightPanel = styled.div`
  background: #ffffff;
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  padding: 13vh 10vh 7vh 10vh;
  width: 100%;
  height: 100%;

  @media (max-width: 1024px) {
    padding: 60px 40px;
    min-height: unset;
  }
`;

export const SuperTitle = styled.h1`
  font-family: 'GFS Didot', serif;
  font-size: 72px;
  line-height: 0.95;
  letter-spacing: -0.02em;
  margin: 0 0 12px 0;
  font-weight: 400;
  color: #3a2521;
  text-align: start;
  align-content: flex-start;

  @media (max-width: 1200px) {
    font-size: 56px;
  }
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

export const Description = styled.p`
  font-family: 'EB Garamond', serif;
  margin: 0 0 20px 0;
  font-size: 18px;
  line-height: 1.6;
  color: #6e6865;
  align-content: flex-start;
  text-align: end;
  flex: 1;
`;

export const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10%;
  padding: 0 15px;

  > *:first-child {
    flex: 0 0 50%;
  }

  > *:last-child {
    flex: 0 0 40%;
  }
`;

export const ProductsStrip = styled.div`
  display: flex;
  gap: 30px;
  margin: 24px 0;
  overflow-x: auto;
  padding: 8px 0;
  height: fit-content;
  justify-content: space-between;

  @media (max-width: 768px) {
    gap: 12px;
  }
`;

export const CTARow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  margin-top: auto;
  padding-top: 24px;
  flex-wrap: wrap;
  padding: 0 15px;
`;

export const Eyebrow = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  background: rgba(255, 255, 255, 0.9);
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  font-family: 'EB Garamond', serif;
  color: #3a2521;
  z-index: 1;
`;
