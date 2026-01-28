import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCategorySpecifications } from '../../../service/productService';
import {
  Filters,
  FilterGroup,
  FilterTitle,
  Checkbox,
  CheckboxGrid,
} from './ProductFilters.styles';

type Props = {
  onFilterChange: (filters: Record<string, string[]>) => void;
};

const ProductFilters: React.FC<Props> = ({ onFilterChange }) => {
  const { category, subcategory } = useParams();
  const [specs, setSpecs] = useState<Record<string, string[]>>({});
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >({});

  useEffect(() => {
    const fetchSpecs = async () => {
      try {
        const data = await getCategorySpecifications(category!, subcategory);
        setSpecs(data);
      } catch (err) {
        console.error('Failed to load specifications', err);
      }
    };

    fetchSpecs();
  }, [category, subcategory]);

  const handleCheckboxChange = (specKey: string, value: string) => {
    setSelectedFilters(prev => {
      const current = prev[specKey] || [];

      // Add or remove value
      const updated = current.includes(value)
        ? current.filter(v => v !== value)
        : [...current, value];

      // Build new filters object
      const newFilters = {
        ...prev,
        [specKey]: updated,
      };

      // Clean up empty arrays
      if (updated.length === 0) {
        delete newFilters[specKey];
      }

      onFilterChange(newFilters); // Apply filters immediately
      return newFilters;
    });
  };

  return (
    <Filters>
      <h3>Ֆիլտրել</h3>
      {Object.entries(specs).map(([key, values]) => (
        <FilterGroup key={key}>
          <FilterTitle>{key}</FilterTitle>
          <CheckboxGrid>
            {values.map(value => (
              <Checkbox key={value}>
                <input
                  type="checkbox"
                  checked={selectedFilters[key]?.includes(value) || false}
                  onChange={() => handleCheckboxChange(key, value)}
                />
                {value}
              </Checkbox>
            ))}
          </CheckboxGrid>
        </FilterGroup>
      ))}
    </Filters>
  );
};

export default ProductFilters;
