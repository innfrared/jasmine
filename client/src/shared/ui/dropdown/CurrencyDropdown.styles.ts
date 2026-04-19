import styled from 'styled-components';
import { typography } from '@/shared/styles/typography';

export const CurrencyOptionContent = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

export const CurrencyTriggerContent = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
`;

export const CurrencyIconBadge = styled.span`
  ${typography.badgeNumericBold}
  width: 18px;
  height: 18px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: rgba(154, 131, 0, 0.1);
  color: #9a8300;
`;

export const CurrencyCode = styled.span`
  ${typography.bodySmall}
`;

export const SelectedCurrencyIconBadge = styled(CurrencyIconBadge)`
  background: rgba(255, 255, 255, 0.68);
  color: #001f3f;
  box-shadow: 0 0 0 1px rgba(0, 31, 63, 0.08);
  transform: translateY(-0.5px);
`;

export const SelectedCurrencyCode = styled(CurrencyCode)``;
