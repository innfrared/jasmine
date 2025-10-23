import { useState } from 'react';
import { Category } from '../../../model/categoryModel';
import { fetchSubcategories } from '../../../service/categoryService';
import { useTranslation } from 'react-i18next';

export const useHeaderModel = () => {
  const { t } = useTranslation<'translation'>();

  const categories: Category[] = [
    {
      id: 1,
      name: 'Handbags',
      svg: '/assets/type_1.svg',
      url: 'handbags',
      parent_id: null,
    },
    {
      id: 2,
      name: 'Tote Bags',
      svg: '/assets/type_2.svg',
      url: 'tote-bags',
      parent_id: null,
    },
    {
      id: 3,
      name: 'Crossbody Bags',
      svg: '/assets/type_3.svg',
      url: 'crossbody-bags',
      parent_id: null,
    },
    {
      id: 4,
      name: 'Shoulder Bags',
      svg: '/assets/type_4.svg',
      url: 'shoulder-bags',
      parent_id: null,
    },
    {
      id: 5,
      name: 'Clutch Bags',
      svg: '/assets/type_5.svg',
      url: 'clutch-bags',
      parent_id: null,
    },
    {
      id: 6,
      name: 'Backpacks',
      svg: '/assets/type_6.svg',
      url: 'backpacks',
      parent_id: null,
    },
    {
      id: 7,
      name: 'Satchels',
      svg: '/assets/type_7.svg',
      url: 'satchels',
      parent_id: null,
    },
    {
      id: 8,
      name: 'Messenger Bags',
      svg: '/assets/type_8.svg',
      url: 'messenger-bags',
      parent_id: null,
    },
    {
      id: 9,
      name: 'Hobo Bags',
      svg: '/assets/type_9.svg',
      url: 'hobo-bags',
      parent_id: null,
    },
    {
      id: 10,
      name: 'Bucket Bags',
      svg: '/assets/type_10.svg',
      url: 'bucket-bags',
      parent_id: null,
    },
    {
      id: 11,
      name: 'Wallets',
      svg: '/assets/type_11.svg',
      url: 'wallets',
      parent_id: null,
    },
    {
      id: 12,
      name: 'Purses',
      svg: '/assets/type_12.svg',
      url: 'purses',
      parent_id: null,
    },
    {
      id: 13,
      name: 'Belt Bags',
      svg: '/assets/type_13.svg',
      url: 'belt-bags',
      parent_id: null,
    },
    {
      id: 14,
      name: 'Accessories',
      svg: '/assets/type_14.svg',
      url: 'accessories',
      parent_id: null,
    },
  ];
  const [hoveredCategory, setHoveredCategory] = useState<Category | null>(null);
  const [subcategories, setSubcategories] = useState<Category[]>([]);

  const handleCategoryHover = async (category: Category) => {
    setHoveredCategory(category);
    const fetchedSubcategories = await fetchSubcategories(category.id);
    setSubcategories(fetchedSubcategories);
  };

  return { categories, subcategories, hoveredCategory, handleCategoryHover };
};
