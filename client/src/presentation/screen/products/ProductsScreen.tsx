import React, { useState } from 'react';
import Header from '../../components/header/Header';
import ProductCell from '../../../ui/styles/productCell/ProductCell';
import ProductCellListView from '../../../ui/styles/productCellListView/ProductCellListView';
import Footer from '../../components/footer/Footer';
import styles from './ProductsScreen.module.css';
import { useProductScreenModel } from './ProductsScreenModel';
import { Product } from '../../../model/productModel';
import Breadcrumb from '../../../presentation/components/breadcrumb/Breadcrumb';
import ProductFilters from '../../components/Filters/ProductFilters';

const ProductsScreen: React.FC = () => {
  const [filters, setFilters] = useState<Record<string, string[]>>({});
  const [currentPage, setCurrentPage] = useState(1);
  const { products, loading, error, category, subcategory, totalPages } =
    useProductScreenModel(filters, currentPage);
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid');
  const [sort, setSort] = useState('price_asc');
  const [paginationStart, setPaginationStart] = useState(1);
  const visiblePages = 5;

  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  const handlePageClick = (page: number) => {
    setCurrentPage(page);

    const lastStart = Math.max(1, totalPages - visiblePages + 1);
    const newStart = Math.min(
      Math.max(1, page - Math.floor(visiblePages / 2)),
      lastStart
    );

    setPaginationStart(newStart);
  };

  const handleEllipsisForward = () => {
    const nextStart = paginationStart + visiblePages - 1;
    if (nextStart <= totalPages) {
      setPaginationStart(nextStart);
      setCurrentPage(nextStart);
    }
  };

  const handleEllipsisBack = () => {
    const prevStart = Math.max(1, paginationStart - visiblePages + 1);
    setPaginationStart(prevStart);
    setCurrentPage(prevStart + visiblePages - 1);
  };

  return (
    <div className={styles.productsPage}>
      <Header primaryColor="#CC0C5C" secondaryColor="#F2A800" />
      <div className={styles.contentContainer}>
        <Breadcrumb />
        <div className={styles.contentAll}>
          <aside className={styles.filters}>
            <ProductFilters
              onFilterChange={newFilters => {
                setFilters(newFilters);
                setCurrentPage(1);
              }}
            />
          </aside>

          <section className={styles.products}>
            <div className={styles.upperPart}>
              <h1>{subcategory ? subcategory : category}</h1>
              <select value={sort} onChange={e => setSort(e.target.value)}>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
                <option value="name_asc">Alphabetical: A–Z</option>
                <option value="name_desc">Alphabetical: Z–A</option>
              </select>

              <div className={styles.viewToggle}>
                <button
                  className={`${styles.viewToggleButton} ${viewType === 'grid' ? styles.active : ''}`}
                  onClick={() => setViewType('grid')}
                >
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                  >
                    <rect
                      x="4"
                      y="4"
                      width="7"
                      height="7"
                      rx="1"
                      style={{
                        fill: viewType === 'grid' ? '#ffffff' : '#CC0C5C',
                      }}
                    ></rect>
                    <rect
                      x="4"
                      y="13"
                      width="7"
                      height="7"
                      rx="1"
                      style={{
                        fill: viewType === 'grid' ? '#ffffff' : '#CC0C5C',
                      }}
                    ></rect>
                    <rect
                      x="13"
                      y="4"
                      width="7"
                      height="7"
                      rx="1"
                      style={{
                        fill: viewType === 'grid' ? '#ffffff' : '#CC0C5C',
                      }}
                    ></rect>
                    <rect
                      x="13"
                      y="13"
                      width="7"
                      height="7"
                      rx="1"
                      style={{
                        fill: viewType === 'grid' ? '#ffffff' : '#CC0C5C',
                      }}
                    ></rect>
                  </svg>
                </button>

                <button
                  className={`${styles.viewToggleButton} ${viewType === 'list' ? styles.active : ''}`}
                  onClick={() => setViewType('list')}
                >
                  <svg
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                  >
                    <path
                      d="m 2 1 c -0.554688 0 -1 0.445312 -1 1 v 2 c 0 0.554688 0.445312 1 1 1 h 2 c 0.554688 0 1 -0.445312 1 -1 v -2 c 0 -0.554688 -0.445312 -1 -1 -1 z m 5 1 v 2 h 8 v -2 z m -5 4.015625 c -0.554688 0 -1 0.445313 -1 1 v 1.980469 c 0 0.550781 0.445312 1 1 1 h 2 c 0.554688 0 1 -0.449219 1 -1 v -1.980469 c 0 -0.554687 -0.445312 -1 -1 -1 z m 5 0.984375 v 2 h 8 v -2 z m -5 4 c -0.554688 0 -1 0.445312 -1 1 v 1.980469 c 0 0.550781 0.445312 1 1 1 h 2 c 0.554688 0 1 -0.449219 1 -1 v -1.980469 c 0 -0.554688 -0.445312 -1 -1 -1 z m 5 0.984375 v 2 h 8 v -2 z m 0 0"
                      style={{
                        fill: viewType === 'list' ? '#ffffff' : '#CC0C5C',
                      }}
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p style={{ color: 'red' }}>{error}</p>
            ) : (
              <div
                className={
                  viewType === 'grid'
                    ? styles.gridContainer
                    : styles.listContainer
                }
              >
                {products.map((product: Product) =>
                  viewType === 'grid' ? (
                    <ProductCell key={product.id} product={product} />
                  ) : (
                    <ProductCellListView key={product.id} product={product} />
                  )
                )}
              </div>
            )}

            <div className={styles.pagination}>
              <button
                onClick={() => handlePageClick(1)}
                disabled={currentPage === 1}
                className={styles.pagePaginateButton}
              >
                ⏮
              </button>
              <button
                onClick={() => handlePageClick(currentPage - 1)}
                disabled={currentPage === 1}
                className={styles.pagePaginateButton}
              >
                ◀
              </button>

              {paginationStart > 1 && (
                <>
                  <button
                    onClick={() => handlePageClick(1)}
                    className={`${styles.pageButton} ${currentPage === 1 ? styles.activePage : ''}`}
                  >
                    1
                  </button>
                  <button
                    onClick={handleEllipsisBack}
                    className={styles.pageButton}
                  >
                    ...
                  </button>
                </>
              )}

              {[...Array(visiblePages)].map((_, i) => {
                let page = paginationStart + i;

                if (
                  paginationStart + visiblePages - 1 > totalPages &&
                  currentPage > page
                ) {
                  page = totalPages - visiblePages + 1 + i;
                }

                if (page > totalPages || page < 1) return null;

                return (
                  <button
                    key={page}
                    onClick={() => handlePageClick(page)}
                    className={`${styles.pageButton} ${currentPage === page ? styles.activePage : ''}`}
                  >
                    {page}
                  </button>
                );
              })}

              {paginationStart + visiblePages - 1 < totalPages && (
                <>
                  <button
                    onClick={handleEllipsisForward}
                    className={styles.pageButton}
                  >
                    ...
                  </button>
                  <button
                    onClick={() => handlePageClick(totalPages)}
                    className={`${styles.pageButton} ${currentPage === totalPages ? styles.activePage : ''}`}
                  >
                    {totalPages}
                  </button>
                </>
              )}

              <button
                onClick={() => handlePageClick(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={styles.pagePaginateButton}
              >
                ▶
              </button>
              <button
                onClick={() => handlePageClick(totalPages)}
                disabled={currentPage === totalPages}
                className={styles.pagePaginateButton}
              >
                ⏭
              </button>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductsScreen;
