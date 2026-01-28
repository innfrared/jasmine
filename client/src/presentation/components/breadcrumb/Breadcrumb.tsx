import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
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
  const pathnames = location.pathname.split('/').filter(x => x);

  // Get product name from props, params, or location state
  const productName = propProductName || params.productName;
  
  // Get category/subcategory from props, location state, or search params
  const finalCategoryName = categoryName || 
    location.state?.categoryName || 
    new URLSearchParams(location.search).get('category');
  const finalSubcategoryName = subcategoryName || 
    location.state?.subcategoryName || 
    new URLSearchParams(location.search).get('subcategory');

  // Build breadcrumb items
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
    
    if (finalCategoryName) {
      breadcrumbItems.push({
        label: finalCategoryName,
        path: `/products/category/${encodeURIComponent(finalCategoryName)}`,
      });
    }

    if (finalSubcategoryName && finalCategoryName) {
      breadcrumbItems.push({
        label: finalSubcategoryName,
        path: `/products/category/${encodeURIComponent(finalCategoryName)}/${encodeURIComponent(finalSubcategoryName)}`,
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
