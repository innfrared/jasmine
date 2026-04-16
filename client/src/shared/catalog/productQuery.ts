export type LiveCatalogQuery = {
  page: number;
  page_size: number;
  category_id?: number;
  subcategory_id?: number;
  subcategory_slug?: string;
  sort?: 'newest';
  color_palette?: string;
};

type BuildLiveCatalogQueryParams = {
  page: number;
  pageSize: number;
  categoryId?: number | null;
  subcategoryId?: number | null;
  subcategorySlug?: string | null;
  colorFilters?: string[];
  sortByNewest?: boolean;
};

const DEFAULT_PAGE = 1;
const DEFAULT_PAGE_SIZE = 20;
const MAX_PAGE_SIZE = 60;

const toSafePositiveInt = (
  value: number | undefined,
  fallback: number,
  max?: number
) => {
  if (!Number.isFinite(value)) {
    return fallback;
  }

  const normalized = Math.floor(Number(value));
  if (normalized < 1) {
    return fallback;
  }

  if (max && normalized > max) {
    return max;
  }

  return normalized;
};

const sanitizeColorFilters = (filters: string[] | undefined) => {
  if (!filters || filters.length === 0) {
    return undefined;
  }

  const sanitized = filters
    .map(filter =>
      filter
        // eslint-disable-next-line no-control-regex -- strip ASCII controls from color tokens
        .replace(/[\u0000-\u001f\u007f]/g, '')
        .replace(/[^a-zA-Z0-9#(),.%\s-]/g, '')
        .trim()
        .slice(0, 40)
    )
    .filter(Boolean);

  return sanitized.length > 0 ? sanitized : undefined;
};

export function buildLiveCatalogQuery({
  page,
  pageSize,
  categoryId,
  subcategoryId,
  subcategorySlug,
  colorFilters,
  sortByNewest,
}: BuildLiveCatalogQueryParams): LiveCatalogQuery {
  const query: LiveCatalogQuery = {
    page: toSafePositiveInt(page, DEFAULT_PAGE),
    page_size: toSafePositiveInt(pageSize, DEFAULT_PAGE_SIZE, MAX_PAGE_SIZE),
  };

  if (categoryId) {
    query.category_id = categoryId;
  }

  if (subcategoryId) {
    query.subcategory_id = subcategoryId;
  } else if (subcategorySlug) {
    query.subcategory_slug = subcategorySlug;
  }

  if (sortByNewest) {
    query.sort = 'newest';
  }

  const safeColorFilters = sanitizeColorFilters(colorFilters);
  if (safeColorFilters) {
    query.color_palette = safeColorFilters.join(',');
  }

  return query;
}
