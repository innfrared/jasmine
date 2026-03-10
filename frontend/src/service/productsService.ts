import { httpClient, type RequestOptions } from './httpClient';
import { PaginatedResponse, ProductDto } from './types';
import { mapProductDtosToModels } from '../utils/productMapper';
import { PRODUCT_CARD_FIELDS } from '../utils/productFields';
import { getProductIdFromSlug, slugify } from '../utils/slug';

export interface ListProductsParams {
  category_id?: number;
  subcategory_id?: number;
  subcategory_ids?: string;
  search?: string;
  availability?: 'in_stock' | 'out_of_stock' | 'pre_order';
  page?: number;
  page_size?: number;
  specFilters?: Record<string, string | number | boolean>;
  fields?: string[] | string;
}

export const listProducts = (
  params: ListProductsParams = {},
  options: RequestOptions = {}
) => {
  const { specFilters, fields, ...rest } = params;
  const query: Record<string, string | number | boolean | undefined> = {
    ...rest,
  };

  if (fields) {
    query.fields = Array.isArray(fields) ? fields.join(',') : fields;
  }

  if (specFilters) {
    Object.entries(specFilters).forEach(([key, value]) => {
      query[`spec_${key}`] = value;
    });
  }

  return httpClient.get<PaginatedResponse<ProductDto>>('products/', {
    query,
    ...options,
  });
};

export const getProduct = (productId: number, options: RequestOptions = {}) =>
  httpClient.get<ProductDto>(`products/${productId}/`, options);

export const getProductBySlug = async (
  productName: string,
  options: RequestOptions = {}
) => {
  const idFromSlug = getProductIdFromSlug(productName);
  if (idFromSlug) {
    try {
      return await getProduct(idFromSlug, options);
    } catch {
      return null;
    }
  }

  const decodedName = decodeURIComponent(productName);
  const response = await listProducts(
    { search: decodedName, page: 1, page_size: 50 },
    options
  );

  const normalized = decodedName.trim().toLowerCase();
  const normalizedSlug = slugify(decodedName);

  const exactMatch = response.items.find((item) => {
    const itemName = item.name.trim();
    if (normalizedSlug && slugify(itemName) === normalizedSlug) return true;
    return itemName.toLowerCase() === normalized;
  });

  return exactMatch ?? null;
};

export const listProductsMapped = async (
  params: ListProductsParams = {},
  options: RequestOptions = {}
) => {
  const response = await listProducts(params, options);
  return mapProductDtosToModels(response.items);
};

export const fetchBestDeals = async (options: RequestOptions = {}) =>
  listProductsMapped(
    { page: 1, page_size: 12, fields: PRODUCT_CARD_FIELDS },
    options
  );

export const fetchNewAdded = async (options: RequestOptions = {}) =>
  listProductsMapped(
    { page: 1, page_size: 12, fields: PRODUCT_CARD_FIELDS },
    options
  );

export const getCategorySpecifications = async (
  categoryId?: string | number | null,
  subcategoryId?: string | number | null,
  options: RequestOptions = {}
) => {
  if (!categoryId && !subcategoryId) {
    return {};
  }

  const response = await listProducts(
    {
      page: 1,
      page_size: 50,
      category_id: categoryId ? Number(categoryId) : undefined,
      subcategory_id: subcategoryId ? Number(subcategoryId) : undefined,
      fields: ['specifications', 'specifications_detailed'],
    },
    options
  );

  const map = new Map<string, Set<string>>();

  response.items.forEach((product) => {
    if (product.specifications) {
      Object.entries(product.specifications).forEach(([key, value]) => {
        if (!value) return;
        const entry = map.get(key) ?? new Set<string>();
        entry.add(String(value));
        map.set(key, entry);
      });
    }

    if (product.specifications_detailed) {
      product.specifications_detailed.forEach((detail) => {
        const key = detail.key || detail.label;
        if (!key) return;
        const value = detail.display || detail.value;
        if (!value) return;
        const entry = map.get(key) ?? new Set<string>();
        entry.add(String(value));
        map.set(key, entry);
      });
    }
  });

  return Array.from(map.entries()).reduce<Record<string, string[]>>(
    (acc, [key, values]) => {
      acc[key] = Array.from(values).sort();
      return acc;
    },
    {}
  );
};