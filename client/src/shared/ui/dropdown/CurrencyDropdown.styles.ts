import styled from 'styled-components';

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
  width: 18px;
  height: 18px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: rgba(154, 131, 0, 0.1);
  color: #9a8300;
  font-size: 0.72rem;
  font-weight: 700;
  line-height: 1;
`;

export const CurrencyCode = styled.span`
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.02em;
`;

export const SelectedCurrencyIconBadge = styled(CurrencyIconBadge)`
  background: rgba(255, 255, 255, 0.68);
  color: #001f3f;
  box-shadow: 0 0 0 1px rgba(0, 31, 63, 0.08);
  line-height: 0;
  transform: translateY(-0.5px);
`;

export const SelectedCurrencyCode = styled(CurrencyCode)`
  font-size: 0.68rem;
`;
