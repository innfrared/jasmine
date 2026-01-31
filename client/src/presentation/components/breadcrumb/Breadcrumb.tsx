import React, { useMemo } from 'react';
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom';
import { useCategories } from '../../hooks/useCategories';
import {
  BreadcrumbNav,
  BreadcrumbLink,
  BreadcrumbText,
  BreadcrumbSeparator,
} from './Breadcrumb.styles';

type BreadcrumbProps = {
  categoryName?: string;
  subcategoryName?: string;
  productName?: string;
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ 
  categoryName, 
  subcategoryName, 
  productName: propProductName 
}) => {
  const location = useLocation();
  const params = useParams();
  const [searchParams] = useSearchParams();
  const { categories } = useCategories();
  const pathnames = location.pathname.split('/').filter(x => x);

  const productName = propProductName || params.productName;
  
  const categoryIdParam = searchParams.get('category_id');
  const subcategoryIdParam = searchParams.get('subcategory_id');
  const categoryId = categoryIdParam ? Number(categoryIdParam) : null;
  const subcategoryId = subcategoryIdParam ? Number(subcategoryIdParam) : null;

  const resolvedCategoryName = useMemo(() => {
    if (!categoryId) return undefined;
    return categories.find((cat) => cat.id === categoryId)?.name;
  }, [categories, categoryId]);

  const resolvedSubcategoryName = useMemo(() => {
    if (!categoryId || !subcategoryId) return undefined;
    return categories
      .find((cat) => cat.id === categoryId)
      ?.subcategories?.find((subcat) => subcat.id === subcategoryId)?.name;
  }, [categories, categoryId, subcategoryId]);

  const finalCategoryName =
    categoryName || location.state?.categoryName || resolvedCategoryName;
  const finalSubcategoryName =
    subcategoryName || location.state?.subcategoryName || resolvedSubcategoryName;

  const breadcrumbItems: Array<{ label: string; path: string }> = [];

  if (pathnames.includes('profile') || pathnames.includes('orders') || pathnames.includes('shipping') || pathnames.includes('cart')) {
    breadcrumbItems.push({ label: 'Home', path: '/' });
    
    if (pathnames.includes('profile')) {
      breadcrumbItems.push({ label: 'Profile', path: '/profile' });
    }
    
    if (pathnames.includes('orders')) {
      breadcrumbItems.push({ label: 'Order History', path: '/orders' });
    }
    
    if (pathnames.includes('shipping')) {
      breadcrumbItems.push({ label: 'Shipping Information', path: '/shipping' });
    }
    
    if (pathnames.includes('cart')) {
      breadcrumbItems.push({ label: 'Cart', path: '/cart' });
    }
  } else {
    breadcrumbItems.push({ label: 'Catalog', path: '/' });
    
    if (finalCategoryName && categoryId) {
      breadcrumbItems.push({
        label: finalCategoryName,
        path: `/products?category_id=${categoryId}`,
      });
    }

    if (finalSubcategoryName && finalCategoryName && categoryId && subcategoryId) {
      breadcrumbItems.push({
        label: finalSubcategoryName,
        path: `/products?category_id=${categoryId}&subcategory_id=${subcategoryId}`,
      });
    }

    if (productName && pathnames.includes('product')) {
      breadcrumbItems.push({
        label: decodeURIComponent(productName),
        path: location.pathname,
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
              <BreadcrumbLink to={item.path}>
                {item.label}
              </BreadcrumbLink>
            )}
          </React.Fragment>
        );
      })}
    </BreadcrumbNav>
  );
};

export default Breadcrumb;
