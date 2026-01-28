import styled, { css, keyframes } from 'styled-components';

const slideInTop = keyframes`
    0% { transform: translateY(-50px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
`;

export const FooterContainer = styled.footer<{ $secondaryColor: string }>`
  color: ${({ $secondaryColor }) => $secondaryColor};
  background-color: #001f3f;
  width: 100%;
  padding: 4rem 6rem;
  font-family: 'Questrial', sans-serif;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const FooterLinkSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  flex: 2;
  justify-content: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  justify-content: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LogoSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Logo = styled.img`
  width: 150px;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    width: 110px;
  }
`;

export const LogoDescription = styled.p`
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
  font-weight: bold;
`;

export const LinksSection = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const SectionTitle = styled.h3<{ $color: string }>`
  font-size: 18px;
  margin: 0 0 10px;
  color: ${({ $color }) => $color};
`;

export const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

export const LinkItem = styled.li<{ $color: string }>`
  margin-bottom: 8px;

  a {
    text-decoration: none;
    color: ${({ $color }) => $color};
    font-size: 14px;
    transition: color 0.3s ease;

    &:hover {
      color: black;
    }
  }
`;

export const SocialSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const Card = styled.div`
  width: fit-content;
  height: fit-content;
  background-color: rgb(238, 238, 238);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
  border-radius: 20px;
  gap: 20px;
  box-shadow:
    rgba(50, 50, 93, 0.4) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.6) 0px 30px 60px -30px;
`;

export const SocialContainer = styled.a<{
  variant: 'instagram' | 'viber' | 'whatsapp' | 'telegram';
}>`
  width: 52px;
  height: 52px;
  background-color: rgb(44, 44, 44);
  display: flex;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition:
    background-color 0.3s,
    transform 0.3s;

  ${({ variant }) =>
    variant === 'instagram' &&
    css`
      &:hover {
        background-color: #d62976;
      }
    `}
  ${({ variant }) =>
    variant === 'viber' &&
    css`
      &:hover {
        background-color: #7f4da0;
      }
    `}
    ${({ variant }) =>
    variant === 'whatsapp' &&
    css`
      &:hover {
        background-color: #128c7e;
      }
    `}
    ${({ variant }) =>
    variant === 'telegram' &&
    css`
      &:hover {
        background-color: #0ea958;
      }
    `}

    &:active {
    transform: scale(0.9);
  }
`;

export const SocialSvg = styled.svg`
  width: 17px;
  height: 17px;
  fill: white;
  animation: ${slideInTop} 0.3s both;
`;

export const FooterBottom = styled.div`
  text-align: left;
  font-size: 12px;
`;
