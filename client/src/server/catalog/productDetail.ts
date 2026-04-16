import { API_ENDPOINTS } from '@/shared/api/endpoints';
import type { PaginatedResponse, ProductDto } from '@/shared/contracts/api';
import { sanitizeSearchQuery } from '@/shared/text/searchQuery';
import { fetchServerJson } from '@/server/django/client';

export async function getServerProductById(productId: number) {
  return fetchServerJson<ProductDto>(
    API_ENDPOINTS.products.details(productId),
    undefined,
    {
      revalidate: 120,
      tags: [`product:${productId}`],
    }
  );
}

export async function getServerProductBySlug(
  productName: string
): Promise<ProductDto | null> {
  let decodedName = productName;
  try {
    decodedName = decodeURIComponent(productName);
  } catch {
    decodedName = productName;
  }

  const safeSearch = sanitizeSearchQuery(decodedName) ?? '';
  const response = await fetchServerJson<PaginatedResponse<ProductDto>>(
    API_ENDPOINTS.products.list,
    {
      search: safeSearch,
      page: 1,
      page_size: 20,
    },
    {
      revalidate: 60,
      tags: ['catalog', 'product-by-slug'],
    }
  );
  const normalized = safeSearch.trim().toLowerCase();
  const exactMatch = response.items.find(
    item => item.name.trim().toLowerCase() === normalized
  );
  return exactMatch ?? null;
}
