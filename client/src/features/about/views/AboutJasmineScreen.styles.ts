import Link from 'next/link';
import styled, { css } from 'styled-components';
import { down } from '@/shared/styles/breakpoints';
import { typography } from '@/shared/styles/typography';

type AboutQuoteProps = {
  $variant: 'hero' | 'aside';
};

type AboutRowQuoteBlockProps = {
  $align?: 'left' | 'right';
};

type AboutActionsProps = {
  $align?: 'left' | 'right';
};

export const AboutPageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f6f1e9;
`;

export const AboutPageMain = styled.main`
  flex: 1;
  background:
    radial-gradient(
      circle at top left,
      rgba(68, 86, 108, 0.1),
      transparent 32%
    ),
    radial-gradient(
      circle at bottom right,
      rgba(119, 130, 142, 0.08),
      transparent 28%
    ),
    linear-gradient(180deg, #f8f4ed 0%, #f4efe7 52%, #eee7dc 100%);
`;

export const AboutPageInner = styled.div`
  width: min(1240px, calc(100vw - 64px));
  margin: 0 auto;
  padding: clamp(8.5rem, 10vw, 11rem) 0 clamp(5rem, 7vw, 7.5rem);
  display: flex;
  flex-direction: column;
  gap: clamp(3rem, 5vw, 5rem);

  ${down.laptop} {
    width: calc(100vw - 32px);
    padding: 7.5rem 0 4.5rem;
    gap: 2.5rem;
  }
`;

export const AboutLead = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-width: 44rem;
`;

export const AboutLabel = styled.p`
  ${typography.label};
  margin: 0;
  color: rgba(58, 74, 94, 0.72);
`;

export const AboutTitle = styled.h1`
  ${typography.pageHeading};
  margin: 0;
  color: #23374b;
  text-wrap: balance;
  max-width: 20ch;
`;

export const AboutRow = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(0, 0.85fr);
  column-gap: clamp(2.5rem, 6vw, 7rem);
  align-items: end;

  ${down.laptop} {
    grid-template-columns: 1fr;
    row-gap: 1.75rem;
  }
`;

export const AboutRowContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 52rem;
`;

export const AboutIntro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
`;

export const AboutParagraph = styled.p`
  ${typography.body};
  margin: 0;
  color: rgba(40, 54, 70, 0.82);
`;

export const AboutRowQuoteBlock = styled.div<AboutRowQuoteBlockProps>`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  ${({ $align = 'right' }) =>
    $align === 'right'
      ? css`
          align-items: flex-end;
          justify-self: end;
        `
      : css`
          align-items: flex-start;
          justify-self: start;
        `}

  ${down.laptop} {
    align-items: flex-start;
    justify-self: start;
  }
`;

const heroQuoteStyles = css`
  width: fit-content;
  max-width: none;
  text-align: right;
  white-space: nowrap;
  opacity: 0.8;

  ${down.laptop} {
    text-align: left;
    white-space: normal;
    text-wrap: balance;
  }
`;

const asideQuoteStyles = css`
  width: fit-content;
  max-width: 25ch;
  text-align: left;
  white-space: normal;
  text-wrap: balance;
  opacity: 0.92;

  ${down.laptop} {
    max-width: 14ch;
  }
`;

export const AboutQuote = styled.p<AboutQuoteProps>`
  ${typography.editorialScriptHeading};
  margin: 0;
  color: rgba(49, 67, 88, 0.88);
  ${({ $variant }) =>
    $variant === 'hero' ? heroQuoteStyles : asideQuoteStyles};
`;

export const AboutActions = styled.div<AboutActionsProps>`
  display: flex;
  ${({ $align = 'left' }) =>
    $align === 'right'
      ? css`
          justify-content: flex-end;
        `
      : css`
          justify-content: flex-start;
        `}
`;

export const AboutCollectionLink = styled(Link)`
  ${typography.button};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 3rem;
  padding: 0.88rem 1.35rem;
  border: none;
  border-radius: 0;
  background: #26384b;
  color: #f7f2eb;
  text-decoration: none;
  transition:
    background-color 0.22s ease,
    color 0.22s ease,
    transform 0.22s ease;

  &:hover,
  &:focus-visible {
    background: #1f2f40;
    color: #ffffff;
    transform: translateY(-1px);
    outline: none;
  }
`;
