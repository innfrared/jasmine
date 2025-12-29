import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header';
import ProductCell from '../../../ui/styles/productCell/ProductCell';
import Footer from '../../components/footer/Footer';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import { useProductScreenModel } from './ProductsScreenModel';
import { Product } from '../../../model/productModel';
import { mockCategories } from '../../../mocks/categoriesMock';
import {
  ProductsPageContainer,
  ProductsContent,
  ProductsHeader,
  ProductsTitle,
  ProductsGrid,
  PaginationContainer,
  PaginationButton,
  PageButton,
  LoadingMessage,
  ErrorMessage,
  EmptyMessage,
  ControlsContainer,
  FiltersContainer,
  FilterGroup,
  FilterLabel,
  FilterOptions,
  FilterCheckbox,
  ColorOption,
  ColorSwatch,
  SortContainer,
  SortLabel,
  SortSelect,
  SubcategoriesContainer,
  SubcategoriesTitle,
  SubcategoriesGrid,
  SubcategoryCard,
  MainContent,
} from './ProductsScreen.styles';

const ProductsScreen: React.FC = () => {
  const { category: categoryUrl, subcategory: subcategoryUrl } = useParams();
  const navigate = useNavigate();
  const [filters, setFilters] = useState<Record<string, string[]>>({
    color: [],
    size: [],
  });
  const [sortBy, setSortBy] = useState<string>('price_asc');
  const [currentPage, setCurrentPage] = useState(1);
  const {
    products,
    loading,
    error,
    category,
    subcategory,
    totalPages,
    availableColors,
    availableSizes,
    colorPaletteMap,
  } = useProductScreenModel(filters, currentPage, 20, sortBy);

  // Get subcategories for current category
  const getSubcategories = () => {
    if (subcategoryUrl || !categoryUrl) return [];
    
    // Decode the category URL parameter
    const decodedCategory = decodeURIComponent(categoryUrl);
    
    // Try to find by URL slug first
    let categoryData = mockCategories.find(cat => cat.url === decodedCategory || cat.url === categoryUrl);
    
    // If not found, try to find by category name
    if (!categoryData) {
      categoryData = mockCategories.find(
        cat => cat.name.toLowerCase() === decodedCategory.toLowerCase() ||
               cat.name === decodedCategory
      );
    }
    
    return categoryData?.subcategories || [];
  };

  const subcategories = getSubcategories();

  const handleFilterChange = (filterType: 'color' | 'size', value: string) => {
    setFilters(prev => {
      const currentValues = prev[filterType] || [];
      const newValues = currentValues.includes(value)
        ? currentValues.filter(v => v !== value)
        : [...currentValues, value];
      return {
        ...prev,
        [filterType]: newValues,
      };
    });
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
    setCurrentPage(1); // Reset to first page when sort changes
  };

  const handleSubcategoryClick = (subcategoryUrl: string) => {
    if (categoryUrl) {
      navigate(`/products/category/${categoryUrl}/${subcategoryUrl}`);
    }
  };

  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
    setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('ellipsis');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('ellipsis');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(totalPages);
      }
    }

    return (
      <PaginationContainer>
        <PaginationButton
          onClick={() => handlePageClick(1)}
          disabled={currentPage === 1}
          aria-label="First page"
        >
          ⏮
        </PaginationButton>
        <PaginationButton
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous page"
        >
          ◀
        </PaginationButton>

        {pages.map((page, index) => {
          if (page === 'ellipsis') {
            return (
              <PageButton key={`ellipsis-${index}`} disabled>
                ...
              </PageButton>
            );
          }
          return (
            <PageButton
              key={page}
              onClick={() => handlePageClick(page as number)}
              $isActive={currentPage === page}
            >
              {page}
            </PageButton>
          );
        })}

        <PaginationButton
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Next page"
        >
          ▶
        </PaginationButton>
        <PaginationButton
          onClick={() => handlePageClick(totalPages)}
          disabled={currentPage === totalPages}
          aria-label="Last page"
        >
          ⏭
        </PaginationButton>
      </PaginationContainer>
    );
  };

  return (
    <ProductsPageContainer>
      <Header primaryColor="#CC0C5C" secondaryColor="#F2A800" />
      <ProductsContent>
        <Breadcrumb
          categoryName={category}
          subcategoryName={subcategory}
        />
        <ProductsHeader>
          <ProductsTitle>
            {subcategory || category || 'All Products'}
          </ProductsTitle>
        </ProductsHeader>

        {/* Show subcategories if viewing a category page (not subcategory) */}
        {subcategories.length > 0 && !subcategoryUrl && (
          <SubcategoriesContainer>
            <SubcategoriesTitle>Shop by Subcategory</SubcategoriesTitle>
            <SubcategoriesGrid>
              {subcategories.map(subcat => (
                <SubcategoryCard
                  key={subcat.id}
                  onClick={e => {
                    e.preventDefault();
                    handleSubcategoryClick(subcat.url);
                  }}
                  href={`/products/category/${categoryUrl}/${subcat.url}`}
                >
                  {subcat.name}
                </SubcategoryCard>
              ))}
            </SubcategoriesGrid>
          </SubcategoriesContainer>
        )}

        <ControlsContainer>
          <FiltersContainer>
            {availableColors.length > 0 && (
              <FilterGroup>
                <FilterLabel>Color</FilterLabel>
                <FilterOptions>
                  {availableColors.map(colorPalette => {
                    const colorValue = colorPaletteMap?.get(colorPalette);
                    return (
                      <ColorOption key={colorPalette}>
                        <input
                          type="checkbox"
                          checked={filters.color?.includes(colorPalette) || false}
                          onChange={() => handleFilterChange('color', colorPalette)}
                        />
                        {colorValue && <ColorSwatch $colorValue={colorValue} />}
                        <span>{colorPalette}</span>
                      </ColorOption>
                    );
                  })}
                </FilterOptions>
              </FilterGroup>
            )}

            {availableSizes.length > 0 && (
              <FilterGroup>
                <FilterLabel>Size</FilterLabel>
                <FilterOptions>
                  {availableSizes.map(size => (
                    <FilterCheckbox key={size}>
                      <input
                        type="checkbox"
                        checked={filters.size?.includes(size) || false}
                        onChange={() => handleFilterChange('size', size)}
                      />
                      <span>{size}</span>
                    </FilterCheckbox>
                  ))}
                </FilterOptions>
              </FilterGroup>
            )}
          </FiltersContainer>

          <MainContent>
            {products.length > 0 && (
              <SortContainer>
                <SortLabel>Sort by:</SortLabel>
                <SortSelect value={sortBy} onChange={handleSortChange}>
                  <option value="price_asc">Price: Low to High</option>
                  <option value="price_desc">Price: High to Low</option>
                  <option value="name_asc">Name: A to Z</option>
                  <option value="name_desc">Name: Z to A</option>
                </SortSelect>
              </SortContainer>
            )}

            {loading ? (
              <LoadingMessage>Loading products...</LoadingMessage>
            ) : error ? (
              <ErrorMessage>{error}</ErrorMessage>
            ) : products.length === 0 ? (
              <EmptyMessage>No products found.</EmptyMessage>
            ) : (
              <>
                <ProductsGrid>
                  {products.map((product: Product) => (
                    <ProductCell key={product.id} product={product} />
                  ))}
                </ProductsGrid>
                {renderPagination()}
              </>
            )}
          </MainContent>
        </ControlsContainer>
      </ProductsContent>
      <Footer />
    </ProductsPageContainer>
  );
};

export default ProductsScreen;
