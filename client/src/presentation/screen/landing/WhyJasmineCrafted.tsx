import React from 'react';
import { useNavigate } from 'react-router-dom';
import TemplateSection from '../../components/templateSection/TemplateSection';
import { useCategories } from '../../hooks/useCategories';

const WhyJasmineCrafted: React.FC = () => {
  const navigate = useNavigate();
  const { categories } = useCategories();

  const cards = [
    <div key="handmade">
      <h3>Handmade</h3>
      <p>
        Every stitch tells a story, crafted by hand with care and patience.
      </p>
    </div>,
    <div key="timeless">
      <h3>Timeless</h3>
      <p>
        Designed to age beautifully, your everyday companion, season after season.
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
    .flatMap((category) =>
      (category.subcategories || []).map((subcategory, index) => ({
        title: subcategory.name,
        description: category.name,
        imageUrl: `/assets/bag${(index % 4) + 1}.webp`,
        onClick: () =>
          navigate(`/products/category/${category.url}/${subcategory.url}`),
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
