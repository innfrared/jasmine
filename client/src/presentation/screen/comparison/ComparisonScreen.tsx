import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { useTranslation } from 'react-i18next';
import { Product } from 'model/productModel';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import { useNavigate } from 'react-router-dom';
import { getImageUrl } from '../../../utils/imageUtils';
import Languages from '../../components/languages/languages';
import {
  ComparisonPage,
  ComparisonText,
  ComparisonTable,
  TableLeft,
  FeatureRow,
  TableRight,
  ProductColumn,
  ProductHeader,
  FeatureCellTableBottom,
  FeatureCellTable,
  FeatureCell,
  RemoveButton,
  DividerLine,
} from './ComparisonScreen.styles';

const ComparisonScreen = () => {
  const { t } = useTranslation<'translation'>();
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();
  const primaryColor = '#CC0C5C';
  const secondaryColor = '#F2A800';

  useEffect(() => {
    const stored = localStorage.getItem('compareProducts');
    if (stored) {
      setProducts(JSON.parse(stored));
    }
  }, []);

  const groupBySubcategory = (products: Product[]) => {
    const grouped: Record<string, Product[]> = {};
    for (const product of products) {
      const key = product.category_id;
      if (!grouped[key]) grouped[key] = [];
      grouped[key].push(product);
    }
    return grouped;
  };

  const getUniqueSpecKeys = (products: Product[]) => {
    const specSet = new Set<string>();
    products.forEach(product => {
      if (product.specifications)
        Object.keys(product.specifications).forEach(key => specSet.add(key));
    });
    return Array.from(specSet);
  };

  const handleRemoveProduct = (id: number) => {
    const updated = products.filter(p => p.id !== id);
    setProducts(updated);
    localStorage.setItem('compareProducts', JSON.stringify(updated));
  };

  const handleProductDetailNavigation = (product: Product) => {
    navigate(`/products/details/${encodeURIComponent(product.name)}?id=${product.id}`);
  };

  return (
    <ComparisonPage>
      <Languages />
      <Header primaryColor={primaryColor} secondaryColor={secondaryColor} />
      <Breadcrumb />
      <ComparisonText>{t('comparison')}</ComparisonText>

      {Object.entries(groupBySubcategory(products)).map(
        ([groupName, group]) => {
          const specKeys = getUniqueSpecKeys(group);

          return (
            <>
              <ComparisonTable key={groupName}>
                <TableLeft>
                  {specKeys.map((key, idx) => (
                    <FeatureRow key={idx}>
                      {key}
                    </FeatureRow>
                  ))}
                </TableLeft>

                <TableRight>
                  {group.map((product, idx) => (
                    <ProductColumn key={idx}>
                      <ProductHeader
                        onClick={() => handleProductDetailNavigation(product)}
                      >
                        <img
                          src={getImageUrl(product.variant_image)}
                          alt={product.name}
                          loading="lazy"
                        />
                        <div>{product.name}</div>
                      </ProductHeader>
                      <FeatureCellTableBottom>
                        <FeatureCellTable>
                          {specKeys.map((key, specIdx) => (
                            <FeatureCell key={specIdx}>
                              {product.specifications[key] || '-'}
                            </FeatureCell>
                          ))}
                        </FeatureCellTable>
                        <RemoveButton
                          onClick={() => handleRemoveProduct(product.id)}
                          title="Remove from comparison"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6zm2 .5a.5.5 0 0 1 .5-.5.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6z" />
                            <path
                              fillRule="evenodd"
                              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1 0-2H5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1h2.5a1 1 0 0 1 1 1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM5 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5V3H5v-.5z"
                            />
                          </svg>
                        </RemoveButton>
                      </FeatureCellTableBottom>
                    </ProductColumn>
                  ))}
                </TableRight>
              </ComparisonTable>
              <DividerLine />
            </>
          );
        }
      )}

      <Footer />
    </ComparisonPage>
  );
};

export default ComparisonScreen;
