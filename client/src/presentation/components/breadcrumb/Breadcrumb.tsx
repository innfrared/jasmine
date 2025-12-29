import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import styles from './Breadcrumb.module.css';

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
  const breadcrumbItems: Array<{ label: string; path: string }> = [
    { label: 'Catalog', path: '/' },
  ];

  // Add category if available
  if (finalCategoryName) {
    breadcrumbItems.push({
      label: finalCategoryName,
      path: `/products/category/${encodeURIComponent(finalCategoryName)}`,
    });
  }

  // Add subcategory if available
  if (finalSubcategoryName && finalCategoryName) {
    breadcrumbItems.push({
      label: finalSubcategoryName,
      path: `/products/category/${encodeURIComponent(finalCategoryName)}/${encodeURIComponent(finalSubcategoryName)}`,
    });
  }

  // Add product name if on product details page
  if (productName && pathnames.includes('details')) {
    breadcrumbItems.push({
      label: decodeURIComponent(productName),
      path: location.pathname,
    });
  }

  return (
    <nav className={styles.breadcrumb}>
      {breadcrumbItems.map((item, index) => {
        const isLast = index === breadcrumbItems.length - 1;
        return (
          <React.Fragment key={index}>
            {index > 0 && <span className={styles.separator}>/</span>}
            {isLast ? (
              <span className={styles.crumb}>{item.label}</span>
            ) : (
              <Link to={item.path} className={styles.crumb}>
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
