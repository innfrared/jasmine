import { Product } from 'model/productModel';
import {
  mockTrendingInBags,
  mockTrendingInDressesAndMatchingSets,
} from '../mocks/productsMock';

export interface PaginatedProductResponse {
  products: Product[];
  total: number;
  limit: number;
}

export const fetchProducts = async (
  category?: string,
  subcategory?: string,
  filters?: Record<string, string[]>,
  page: number = 1,
  limit: number = 20
): Promise<PaginatedProductResponse> => {
  if (category && filters && Object.keys(filters).length > 0) {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/products/filter?page=${page}&limit=${limit}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category, subcategory, filters }),
      }
    );
    if (!res.ok) throw new Error('Failed to fetch filtered products');
    const result = await res.json();
    return {
      products: result.data,
      total: result.total,
      limit: result.limit,
    };
  }

  // Build correct URL for non-filtered products
  let url = `${import.meta.env.VITE_API_URL}/api/products`;
  if (category && subcategory) {
    url += `/category/${encodeURIComponent(category)}/${encodeURIComponent(subcategory)}`;
  } else if (category) {
    url += `/category/${encodeURIComponent(category)}`;
  } else {
    url += `/`; // fallback to all products
  }

  url += `?page=${page}&limit=${limit}`;
  console.log('🔗 Fetching from:', url);
  const res = await fetch(url);
  const result = await res.json();
  if (!res.ok) throw new Error('Failed to fetch products');
  return {
    products: result.data,
    total: result.total,
    limit: result.limit,
  };
};

export const fetchProductById = async (id: number): Promise<Product> => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/products/product/${id}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch product details');
  }
  return response.json();
};

export const fetchBestDeals = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/products/best-deals`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch best deals');
  }
  return await response.json();
};

// export const fetchTopSellers = async () => {
//     const response = await fetch(`${import.meta.env.VITE_API_URL}/api/products/top-sellers`);
//     if (!response.ok) {
//         throw new Error('Failed to fetch top sellers');
//     }
//     return await response.json();
// };
export const fetchTrending = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockTrendingInBags);
    }, 300);
  });
};

export const fetchDressesTrending = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockTrendingInDressesAndMatchingSets);
    }, 300);
  });
};

export const fetchNewAdded = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/products/new-added`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch newly added');
  }
  return await response.json();
};

export const getCategorySpecifications = async (
  category: string,
  subcategory?: string
) => {
  const params = new URLSearchParams();
  params.append('category', category);
  if (subcategory) params.append('subcategory', subcategory);

  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/api/products/specifications?${params.toString()}`
  );
  if (!res.ok) throw new Error('Failed to fetch specifications');

  return await res.json();
};

export const filterProducts = async (
  category: string,
  subcategory: string | undefined,
  filters: Record<string, string[]>
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/api/products/filter`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ category, subcategory, filters }), // POST body is safe, no encode needed
    }
  );

  if (!res.ok) throw new Error('Failed to fetch filtered products');

  return await res.json();
};
