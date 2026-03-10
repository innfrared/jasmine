'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import TemplateSection from '../../components/templateSection/TemplateSection';
import { useCategories } from '../../hooks/useCategories';
import { normalizeLocale, withLocale } from '../../../utils/locale';

const WhyJasmineCrafted: React.FC = () => {
  const router = useRouter();
  const params = useParams<{ locale?: string }>();
  const locale = normalizeLocale(params?.locale);
  const { categories } = useCategories();

  const cards = [
    <div key="handmade">
      <h3>Handmade</h3>
      <p>Every stitch tells a story, crafted by hand with care and patience.</p>
    </div>,
    <div key="timeless">
      <h3>Timeless</h3>
      <p>
        Designed to age beautifully, your everyday companion, season after
        season.
      </p>
    </div>,
    <div key="personalizable">
      <h3>Personalizable</h3>
      <p>
        Choose your colors, details, and finish, to match your style or the
        moment.
      </p>
    </div>,
  ];

  const subcategoryItems = categories
    .flatMap(category =>
      (category.subcategories || []).map((subcategory, index) => ({
        title: subcategory.name,
        description: category.name,
        imageUrl: `/assets/bag${(index % 4) + 1}.webp`,
        onClick: () =>
          router.push(
            withLocale(
              locale,
              `/products?category_id=${category.id}&subcategory_id=${subcategory.id}`
            )
          ),
      }))
    )
    .slice(0, 4);

  return (
    <TemplateSection
      title="Made to stay with you"
      description="Made for the moments you keep, not just the ones you gift."
      layoutVariant="staggered"
      cards={cards}
      subcategoryItems={subcategoryItems}
    />
  );
};

export default WhyJasmineCrafted;
