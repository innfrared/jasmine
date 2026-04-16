import CatalogProductPage from '@/features/catalog/pages/CatalogProductPage';
import { validateLocale, type LocaleRouteParams } from '../../../_route-utils/locale';

type ProductDetailsRouteParams = LocaleRouteParams & {
  productName: string;
};

type ProductDetailsPageProps = {
  params: Promise<ProductDetailsRouteParams>;
};

const ProductDetailsPage = async ({ params }: ProductDetailsPageProps) => {
  await validateLocale(params);
  return <CatalogProductPage />;
};

export default ProductDetailsPage;
