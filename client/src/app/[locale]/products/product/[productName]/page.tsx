import { notFound } from 'next/navigation';
import CatalogProductPage from '@/features/catalog/pages/CatalogProductPage';
import { mapProductDtoToCatalogProduct } from '@/entities/catalog/product';
import {
  getServerProductById,
  getServerProductBySlug,
} from '@/server/catalog/productDetail';
import {
  validateLocale,
  type LocaleRouteParams,
} from '@/app/[locale]/_route-utils/locale';

type ProductDetailsRouteParams = LocaleRouteParams & {
  productName: string;
};

type ProductDetailsPageProps = {
  params: Promise<ProductDetailsRouteParams>;
  searchParams: Promise<{ id?: string }>;
};

const ProductDetailsPage = async ({
  params,
  searchParams,
}: ProductDetailsPageProps) => {
  await validateLocale(params);
  const resolvedParams = await params;
  const resolvedSearch = await searchParams;
  const idParam = resolvedSearch.id ? Number(resolvedSearch.id) : NaN;

  if (Number.isFinite(idParam) && idParam > 0) {
    try {
      const dto = await getServerProductById(idParam);
      const product = mapProductDtoToCatalogProduct(dto);
      return <CatalogProductPage product={product} />;
    } catch {
      notFound();
    }
  }

  const dto = await getServerProductBySlug(resolvedParams.productName);
  if (!dto) {
    notFound();
  }

  const product = mapProductDtoToCatalogProduct(dto);
  return <CatalogProductPage product={product} />;
};

export default ProductDetailsPage;
