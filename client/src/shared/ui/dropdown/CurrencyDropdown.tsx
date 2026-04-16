import { useState } from 'react';
import Dropdown, { type DropdownOption } from './Dropdown';
import { type AppCurrency } from '@/shared/preferences/constants';
import {
  persistCurrencyPreference,
  resolveStoredCurrency,
} from '@/shared/preferences/clientPreferences';
import {
  CurrencyIconBadge,
  CurrencyTriggerContent,
  SelectedCurrencyCode,
  SelectedCurrencyIconBadge,
} from './CurrencyDropdown.styles';

const createCurrencyIcon = (symbol: string) => (
  <CurrencyIconBadge aria-hidden="true">{symbol}</CurrencyIconBadge>
);

const currencySymbols: Record<string, string> = {
  USD: '$',
  EUR: '€',
  RUB: '₽',
  AMD: '֏',
};

const currencyOptions: DropdownOption[] = [
  { value: 'USD', label: 'USD', icon: createCurrencyIcon('$') },
  { value: 'EUR', label: 'EUR', icon: createCurrencyIcon('€') },
  { value: 'RUB', label: 'RUB', icon: createCurrencyIcon('₽') },
  { value: 'AMD', label: 'AMD', icon: createCurrencyIcon('֏') },
];

type CurrencyDropdownProps = {
  width?: string;
  searchable?: boolean;
  onChange?: (currency: string) => void;
  isScrolled?: boolean;
};

const CurrencyDropdown = ({
  width = '60px',
  searchable = false,
  onChange,
  isScrolled = false,
}: CurrencyDropdownProps) => {
  const [selected, setSelected] = useState<string>(() =>
    resolveStoredCurrency()
  );

  const handleChange = (val?: string) => {
    if (!val) return;
    setSelected(val);
    persistCurrencyPreference(val as AppCurrency);
    onChange?.(val);
  };

  const handleDropdownChange = (value: string | undefined) => {
    if (!value) {
      return;
    }

    handleChange(value);
  };

  const renderTriggerContent = (selectedOption?: DropdownOption) => {
    if (!selectedOption) {
      return null;
    }

    const symbol =
      currencySymbols[selectedOption.value] ?? selectedOption.value;

    return (
      <CurrencyTriggerContent>
        <SelectedCurrencyIconBadge aria-hidden="true">
          {symbol}
        </SelectedCurrencyIconBadge>
        <SelectedCurrencyCode>{selectedOption.label}</SelectedCurrencyCode>
      </CurrencyTriggerContent>
    );
  };

  return (
    <Dropdown
      options={currencyOptions}
      value={selected}
      onChange={handleDropdownChange}
      placeholder="Currency"
      width={width}
      menuMinWidth="92px"
      searchable={searchable}
      ariaLabel="Select currency"
      isScrolled={isScrolled}
      allowClear={false}
      renderTriggerContent={renderTriggerContent}
    />
  );
};

export default CurrencyDropdown;
