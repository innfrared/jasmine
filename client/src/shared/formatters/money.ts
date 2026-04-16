import { DEFAULT_CURRENCY, type AppCurrency } from '../preferences/constants';

export interface Money {
  amount: number;
  currency: AppCurrency;
}

export interface FormattedMoney {
  value: string;
  currency: AppCurrency;
}

const currencySymbols: Record<AppCurrency, string> = {
  USD: '$',
  EUR: '€',
  RUB: '₽',
  AMD: '֏',
};

export const parseMoneyValue = (rawValue: string) => {
  return parseFloat(rawValue.replace(/[^\d.-]/g, '')) || 0;
};

export const formatMoney = (
  amount: number,
  currency: AppCurrency = DEFAULT_CURRENCY
): FormattedMoney => {
  const symbol = currencySymbols[currency];
  const value =
    currency === 'AMD'
      ? `${amount.toLocaleString()} ${symbol}`
      : `${symbol}${amount.toLocaleString()}`;

  return {
    value,
    currency,
  };
};
