import React, { useEffect, useState } from 'react';
import styles from './ProductFilters.module.css';
import { useParams } from 'react-router-dom';
import { getCategorySpecifications } from '../../../service/productService';

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
    <aside className={styles.filters}>
      <h3>Ֆիլտրել</h3>
      {Object.entries(specs).map(([key, values]) => (
        <div key={key} className={styles.filterGroup}>
          <p className={styles.filterTitle}>{key}</p>
          <div className={styles.checkboxGrid}>
            {values.map(value => (
              <label key={value} className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={selectedFilters[key]?.includes(value) || false}
                  onChange={() => handleCheckboxChange(key, value)}
                />
                {value}
              </label>
            ))}
          </div>
        </div>
      ))}
    </aside>
  );
};

export default ProductFilters;
