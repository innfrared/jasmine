import type { MetadataRoute } from 'next';
import { SUPPORTED_LOCALES } from '../src/lib/locale';
import { listProducts } from '../src/service/productsService';
import { listCategoriesWithSubcategories } from '../src/service/categoriesService';
import { buildProductSlug } from '../src/utils/slug';

const policySlugs = [
  'shipping-policy',
  'returns-refunds',
  'privacy-policy',
  'terms-conditions',
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/+$/, '');
  const items: MetadataRoute.Sitemap = [];
  const revalidate = 3600;
  const pageSize = 100;

  let page = 1;
  let hasNext = true;
  const productSlugs: string[] = [];

  while (hasNext) {
    const response = await listProducts(
      { page, page_size: pageSize, fields: ['id', 'name'] },
      { next: { revalidate } }
    );
    response.items.forEach((product) => {
      productSlugs.push(buildProductSlug(product.name, product.id));
    });
    hasNext = response.has_next && response.items.length > 0;
    page += 1;
  }

  const categories = await listCategoriesWithSubcategories({
    next: { revalidate },
  });

  SUPPORTED_LOCALES.forEach((locale) => {
    items.push({
      url: `${siteUrl}/${locale}`,
      lastModified: new Date(),
    });
    items.push({
      url: `${siteUrl}/${locale}/products`,
      lastModified: new Date(),
    });

    categories.forEach((category) => {
      items.push({
        url: `${siteUrl}/${locale}/products?category_id=${category.id}`,
        lastModified: new Date(),
      });
      category.subcategories?.forEach((subcategory) => {
        items.push({
          url: `${siteUrl}/${locale}/products?category_id=${category.id}&subcategory_id=${subcategory.id}`,
          lastModified: new Date(),
        });
      });
    });

    policySlugs.forEach((slug) => {
      items.push({
        url: `${siteUrl}/${locale}/policies/${slug}`,
        lastModified: new Date(),
      });
    });

    productSlugs.forEach((slug) => {
      items.push({
        url: `${siteUrl}/${locale}/product/${slug}`,
        lastModified: new Date(),
      });
    });
  });

  return items;
}
