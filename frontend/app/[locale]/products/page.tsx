import type { Metadata } from 'next';
import { Suspense } from 'react';
import ProductsScreen from '../../../src/presentation/screen/products/ProductsScreen';
import { listCategoriesWithSubcategories } from '../../../src/service/categoriesService';
import { listProducts } from '../../../src/service/productsService';
import { mapProductDtosToModels } from '../../../src/utils/productMapper';
import { buildAlternates, getLocaleMetadata } from '../../../src/utils/metadata';
import { normalizeLocale } from '../../../src/utils/locale';
import { PRODUCT_LIST_FIELDS } from '../../../src/utils/productFields';
import { AuthProvider } from '../../../src/context/AuthContext';

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams?: Promise<{
    category_id?: string;
    subcategory_id?: string;
    page?: string;
  }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const resolvedSearchParams = searchParams ? await searchParams : undefined;

  const locale = normalizeLocale(rawLocale);
  const meta = getLocaleMetadata(locale);

  const categoryId = resolvedSearchParams?.category_id
    ? Number(resolvedSearchParams.category_id)
    : null;
  const subcategoryId = resolvedSearchParams?.subcategory_id
    ? Number(resolvedSearchParams.subcategory_id)
    : null;
  const page = resolvedSearchParams?.page
    ? Number(resolvedSearchParams.page)
    : undefined;

  if (!categoryId) {
    return {
      title: meta.productsTitle,
      description: meta.productsDescription,
      alternates: buildAlternates(locale, '/products', {
        page: page && page > 1 ? page : undefined,
      }),
    };
  }

  try {
    const categories = await listCategoriesWithSubcategories();
    const category = categories.find((cat) => cat.id === categoryId);
    const subcategory = category?.subcategories?.find(
      (sub) => sub.id === subcategoryId
    );

    const title = subcategory?.name
      ? `${subcategory.name} | ${meta.siteName}`
      : category?.name
        ? `${category.name} | ${meta.siteName}`
        : meta.productsTitle;

    return {
      title,
      description: meta.productsDescription,
      alternates: buildAlternates(locale, '/products', {
        category_id: categoryId ?? undefined,
        subcategory_id: subcategoryId ?? undefined,
        page: page && page > 1 ? page : undefined,
      }),
    };
  } catch {
    return {
      title: meta.productsTitle,
      description: meta.productsDescription,
      alternates: buildAlternates(locale, '/products', {
        page: page && page > 1 ? page : undefined,
      }),
    };
  }
}

export default async function ProductsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams?: Promise<{
    category_id?: string;
    subcategory_id?: string;
    page?: string;
  }>;
}) {
  await params;
  const resolvedSearchParams = searchParams ? await searchParams : undefined;

  const categoryId = resolvedSearchParams?.category_id
    ? Number(resolvedSearchParams.category_id)
    : undefined;
  const subcategoryId = resolvedSearchParams?.subcategory_id
    ? Number(resolvedSearchParams.subcategory_id)
    : undefined;
  const page = resolvedSearchParams?.page
    ? Number(resolvedSearchParams.page)
    : 1;

  try {
    const response = await listProducts({
      page,
      page_size: 20,
      category_id: categoryId,
      subcategory_id: subcategoryId,
      fields: PRODUCT_LIST_FIELDS,
    });

    const products = mapProductDtosToModels(response.items);

    return (
      <AuthProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <ProductsScreen
            initialProducts={products}
            initialTotalPages={response.total_pages || 1}
          />
        </Suspense>
      </AuthProvider>
    );
  } catch (error) {
    console.error('Products page data fetch failed:', error);

    return (
      <AuthProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <ProductsScreen initialProducts={[]} initialTotalPages={1} />
        </Suspense>
      </AuthProvider>
    );
  }
}