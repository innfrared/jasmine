'use client';

import React, { useState } from 'react';
import Dropdown, { DropdownOption } from './Dropdown';

const currencyOptions: DropdownOption[] = [
  { value: 'USD', label: 'USD' },
  { value: 'EUR', label: 'EUR' },
  { value: 'GBP', label: 'GBP' },
  { value: 'JPY', label: 'JPY' },
  { value: 'AUD', label: 'AUD' },
  { value: 'CAD', label: 'CAD' },
  { value: 'CHF', label: 'CHF' },
  { value: 'CNY', label: 'CNY' },
  { value: 'SEK', label: 'SEK' },
  { value: 'NOK', label: 'NOK' },
  { value: 'AMD', label: 'AMD' },
];

type CurrencyDropdownProps = {
  width?: string;
  searchable?: boolean;
  onChange?: (currency: string) => void;
  isScrolled?: boolean;
};

const CurrencyDropdown: React.FC<CurrencyDropdownProps> = ({
  width = '60px',
  searchable = false,
  onChange,
  isScrolled = false,
}) => {
  const [selected, setSelected] = useState<string>(() =>
    typeof window !== 'undefined'
      ? localStorage.getItem('currency') || 'USD'
      : 'USD'
  );

  const handleChange = (val?: string) => {
    if (!val) return;
    setSelected(val);
    localStorage.setItem('currency', val);
    onChange?.(val);
  };

  return (
    <Dropdown
      options={currencyOptions}
      value={selected}
      onChange={handleChange}
      placeholder="Currency"
      width={width}
      searchable={searchable}
      ariaLabel="Select currency"
      isScrolled={isScrolled}
    />
  );
};

export default CurrencyDropdown;
