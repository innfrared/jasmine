'use client';

import React, { useMemo } from 'react';
import { useParams, usePathname, useSearchParams } from 'next/navigation';
import { useCategories } from '../../hooks/useCategories';
import {
  BreadcrumbNav,
  BreadcrumbLink,
  BreadcrumbText,
  BreadcrumbSeparator,
} from './Breadcrumb.styles';
import { normalizeLocale, withLocale } from '../../../utils/locale';

type BreadcrumbProps = {
  categoryName?: string;
  subcategoryName?: string;
  productName?: string;
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  categoryName,
  subcategoryName,
  productName: propProductName,
}) => {
  const params = useParams<{ locale?: string; slug?: string }>();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { categories } = useCategories();
  const locale = normalizeLocale(params?.locale);
  const pathnames = pathname.split('/').filter(x => x);
  const normalizedPathnames =
    pathnames[0] === locale ? pathnames.slice(1) : pathnames;

  const productName = propProductName || params.slug;

  const categoryIdParam = searchParams.get('category_id');
  const subcategoryIdParam = searchParams.get('subcategory_id');
  const categoryId = categoryIdParam ? Number(categoryIdParam) : null;
  const subcategoryId = subcategoryIdParam ? Number(subcategoryIdParam) : null;

  const resolvedCategoryName = useMemo(() => {
    if (!categoryId) return undefined;
    return categories.find(cat => cat.id === categoryId)?.name;
  }, [categories, categoryId]);

  const resolvedSubcategoryName = useMemo(() => {
    if (!categoryId || !subcategoryId) return undefined;
    return categories
      .find(cat => cat.id === categoryId)
      ?.subcategories?.find(subcat => subcat.id === subcategoryId)?.name;
  }, [categories, categoryId, subcategoryId]);

  const finalCategoryName = categoryName || resolvedCategoryName;
  const finalSubcategoryName = subcategoryName || resolvedSubcategoryName;

  const breadcrumbItems: Array<{ label: string; path: string }> = [];

  if (
    normalizedPathnames.includes('profile') ||
    normalizedPathnames.includes('orders') ||
    normalizedPathnames.includes('shipping') ||
    normalizedPathnames.includes('cart')
  ) {
    breadcrumbItems.push({ label: 'Home', path: withLocale(locale, '/') });

    if (normalizedPathnames.includes('profile')) {
      breadcrumbItems.push({
        label: 'Profile',
        path: withLocale(locale, '/profile'),
      });
    }

    if (normalizedPathnames.includes('orders')) {
      breadcrumbItems.push({
        label: 'Order History',
        path: withLocale(locale, '/orders'),
      });
    }

    if (normalizedPathnames.includes('shipping')) {
      breadcrumbItems.push({
        label: 'Shipping Information',
        path: withLocale(locale, '/shipping'),
      });
    }

    if (normalizedPathnames.includes('cart')) {
      breadcrumbItems.push({
        label: 'Cart',
        path: withLocale(locale, '/cart'),
      });
    }
  } else {
    breadcrumbItems.push({ label: 'Catalog', path: withLocale(locale, '/') });

    if (finalCategoryName && categoryId) {
      breadcrumbItems.push({
        label: finalCategoryName,
        path: withLocale(locale, `/products?category_id=${categoryId}`),
      });
    }

    if (
      finalSubcategoryName &&
      finalCategoryName &&
      categoryId &&
      subcategoryId
    ) {
      breadcrumbItems.push({
        label: finalSubcategoryName,
        path: withLocale(
          locale,
          `/products?category_id=${categoryId}&subcategory_id=${subcategoryId}`
        ),
      });
    }

    if (productName && normalizedPathnames.includes('product')) {
      breadcrumbItems.push({
        label: decodeURIComponent(productName),
        path: pathname,
      });
    }
  }

  return (
    <BreadcrumbNav>
      {breadcrumbItems.map((item, index) => {
        const isLast = index === breadcrumbItems.length - 1;
        return (
          <React.Fragment key={index}>
            {index > 0 && <BreadcrumbSeparator>/</BreadcrumbSeparator>}
            {isLast ? (
              <BreadcrumbText>{item.label}</BreadcrumbText>
            ) : (
              <BreadcrumbLink href={item.path}>{item.label}</BreadcrumbLink>
            )}
          </React.Fragment>
        );
      })}
    </BreadcrumbNav>
  );
};

export default Breadcrumb;
