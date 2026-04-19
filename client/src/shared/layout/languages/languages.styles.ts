import styled from 'styled-components';
import { typography } from '@/shared/styles/typography';

export const LanguageFlagImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`;

export const SelectedLanguageFlag = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  overflow: hidden;
`;

export const LanguageTriggerContent = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  min-width: 0;
`;

export const LanguageLabelText = styled.span`
  ${typography.nav}
  white-space: nowrap;
`;
