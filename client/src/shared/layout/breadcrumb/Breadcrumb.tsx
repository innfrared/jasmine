'use client';

import { Fragment } from 'react';
import { useParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { useLocalizedRouting } from '@/shared/routing/localeRouting';
import {
  BreadcrumbNav,
  BreadcrumbLink,
  BreadcrumbText,
  BreadcrumbSeparator,
} from './Breadcrumb.styles';

type BreadcrumbProps = {
  categoryName?: string;
  categoryPath?: string;
  subcategoryName?: string;
  subcategoryPath?: string;
  productName?: string;
};

const Breadcrumb = ({
  categoryName,
  categoryPath,
  subcategoryName,
  subcategoryPath,
  productName: propProductName,
}: BreadcrumbProps) => {
  const { t } = useTranslation<'translation'>();
  const params = useParams<{ productName?: string }>();
  const { pathname, getLocalizedPath } = useLocalizedRouting();
  const pathnames = pathname.split('/').filter(x => x);

  const productName = propProductName || params.productName;

  const breadcrumbItems: Array<{ label: string; path?: string }> = [];

  if (
    pathnames.includes('profile') ||
    pathnames.includes('orders') ||
    pathnames.includes('shipping') ||
    pathnames.includes('cart')
  ) {
    breadcrumbItems.push({ label: t('breadcrumb.home'), path: '/' });

    if (pathnames.includes('profile')) {
      breadcrumbItems.push({
        label: t('breadcrumb.profile'),
        path: '/profile',
      });
    }

    if (pathnames.includes('orders')) {
      breadcrumbItems.push({ label: t('breadcrumb.orders'), path: '/orders' });
    }

    if (pathnames.includes('shipping')) {
      breadcrumbItems.push({
        label: t('breadcrumb.shipping'),
        path: '/shipping',
      });
    }

    if (pathnames.includes('cart')) {
      breadcrumbItems.push({ label: t('breadcrumb.cart'), path: '/cart' });
    }
  } else {
    breadcrumbItems.push({ label: t('breadcrumb.catalog'), path: '/' });

    if (categoryName) {
      breadcrumbItems.push({
        label: categoryName,
        path: categoryPath,
      });
    }

    if (subcategoryName) {
      breadcrumbItems.push({
        label: subcategoryName,
        path: subcategoryPath,
      });
    }

    if (productName && pathnames.includes('product')) {
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
          <Fragment key={index}>
            {index > 0 && <BreadcrumbSeparator>/</BreadcrumbSeparator>}
            {isLast || !item.path ? (
              <BreadcrumbText>{item.label}</BreadcrumbText>
            ) : (
              <BreadcrumbLink href={getLocalizedPath(item.path)}>
                {item.label}
              </BreadcrumbLink>
            )}
          </Fragment>
        );
      })}
    </BreadcrumbNav>
  );
};

export default Breadcrumb;
