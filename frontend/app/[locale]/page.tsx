import { Suspense } from 'react';
import LandingScreen from '../../src/presentation/screen/landing/LandingScreen';
import { listCategoriesWithSubcategories } from '../../src/service/categoriesService';
import { listProducts } from '../../src/service/productsService';
import { mapProductDtosToModels } from '../../src/utils/productMapper';
import { buildAlternates, getLocaleMetadata } from '../../src/utils/metadata';
import { normalizeLocale } from '../../src/utils/locale';
import { PRODUCT_CARD_FIELDS } from '../../src/utils/productFields';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = normalizeLocale(rawLocale);
  const meta = getLocaleMetadata(locale);

  return {
    title: meta.homeTitle,
    description: meta.homeDescription,
    alternates: buildAlternates(locale, '/'),
  };
}

const pickCategoryId = (
  categories: { id: number; name: string }[],
  keywords: string[]
) => {
  const lowerKeywords = keywords.map((keyword) => keyword.toLowerCase());

  return (
    categories.find((category) =>
      lowerKeywords.some((keyword) =>
        category.name.toLowerCase().includes(keyword)
      )
    )?.id ?? null
  );
};

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;

  try {
    const categories = await listCategoriesWithSubcategories({
    });

    const bagCategoryId = pickCategoryId(categories, ['bag', 'bags']);
    const dressCategoryId = pickCategoryId(categories, ['dress', 'dresses']);

    const [bagsResponse, dressesResponse] = await Promise.all([
      listProducts(
        {
          page: 1,
          page_size: 10,
          category_id: bagCategoryId || undefined,
          fields: PRODUCT_CARD_FIELDS,
        },
      ),
      listProducts(
        {
          page: 1,
          page_size: 10,
          category_id: dressCategoryId || undefined,
          fields: PRODUCT_CARD_FIELDS,
        },
      ),
    ]);

    return (
      <Suspense fallback={<div />}>
        <LandingScreen
          initialTrendingBagsProducts={mapProductDtosToModels(bagsResponse.items)}
          initialTrendingDressProducts={mapProductDtosToModels(dressesResponse.items)}
        />
      </Suspense>
    );
  } catch (error) {
    console.error('Landing page data fetch failed:', error);

    return (
      <Suspense fallback={<div />}>
        <LandingScreen
          initialTrendingBagsProducts={[]}
          initialTrendingDressProducts={[]}
        />
      </Suspense>
    );
  }
}