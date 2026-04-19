import LandingScreen from '@/features/landing/views/LandingScreen';
import type { ListingProduct } from '@/entities/catalog/listingProduct';
import { mapProductDtoToListingProduct } from '@/entities/catalog/listingProduct';
import { buildLiveCatalogQuery } from '@/shared/catalog/productQuery';
import { getServerCatalogProducts } from '@/server/django/catalog';
import { validateLocale, type LocaleRouteParams } from './_route-utils/locale';

type HomePageProps = {
  params: Promise<LocaleRouteParams>;
};

const FEATURED_LIMIT = 6;

const HomePage = async ({ params }: HomePageProps) => {
  await validateLocale(params);

  if (process.env.DEBUG_MINIMAL_HOME_PAGE === '1') {
    return <p>ok</p>;
  }

  let featuredProducts: ListingProduct[] = [];

  try {
    const query = buildLiveCatalogQuery({
      page: 1,
      pageSize: FEATURED_LIMIT,
      categoryId: null,
      subcategoryId: null,
      subcategorySlug: null,
      colorFilters: undefined,
      sortByNewest: true,
    });

    const response = await getServerCatalogProducts(query, {
      revalidate: 180,
      tags: ['landing', 'catalog:products'],
    });

    const items = response.items ?? [];
    featuredProducts = items
      .slice(0, FEATURED_LIMIT)
      .map(mapProductDtoToListingProduct);
  } catch {
    featuredProducts = [];
  }

  return <LandingScreen featuredProducts={featuredProducts} />;
};

export default HomePage;
