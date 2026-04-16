import type { CategoryNavItem } from '../../entities/catalog/category';
import {
  getCatalogNavKeyFromTaxonomy,
  getCatalogPathForNavKey,
  getCatalogRouteDefinition,
  isLiveCatalogNavKey,
  type CatalogNavKey,
} from '../config/navigation';

export type CatalogIntent = CatalogNavKey | null;
export type CatalogResolutionStatus = 'resolved' | 'unresolved' | 'ambiguous';
export type CatalogResolutionReason =
  | 'unavailable'
  | 'category-not-found'
  | 'category-ambiguous'
  | 'subcategory-not-found'
  | 'subcategory-ambiguous';

export type ResolvedCatalogTaxonomy = {
  intent: CatalogIntent;
  status: CatalogResolutionStatus;
  reason?: CatalogResolutionReason;
  categoryId?: number;
  subcategoryId?: number;
  category?: CategoryNavItem;
  subcategory?: CategoryNavItem;
};

type ResolvedItemMatch<T> =
  | { status: 'resolved'; item: T }
  | { status: 'unresolved' }
  | { status: 'ambiguous' };

type TaxonomyIds = {
  categoryId?: number | null;
  subcategoryId?: number | null;
};

type ResolvedTaxonomyByIds = {
  category?: CategoryNavItem;
  subcategory?: CategoryNavItem;
};

const runtimeEnv =
  (globalThis as { process?: { env?: Record<string, string | undefined> } })
    .process?.env ?? {};

const isDevelopmentEnvironment = runtimeEnv.NODE_ENV !== 'production';

const normalizeLabel = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .replace(/[_\s-]+/g, ' ');

const getItemValues = (item: CategoryNavItem) => ({
  slug: normalizeLabel(item.url),
  name: normalizeLabel(item.name),
});

const getMatchedCandidates = (
  items: CategoryNavItem[],
  aliases?: string[],
  matchOn: 'slug' | 'name' | 'token' = 'token'
) => {
  if (!aliases || aliases.length === 0) {
    return [];
  }

  const normalizedAliases = aliases.map(normalizeLabel);

  return items.filter(item => {
    const values = getItemValues(item);

    if (matchOn === 'slug') {
      return normalizedAliases.includes(values.slug);
    }

    if (matchOn === 'name') {
      return normalizedAliases.includes(values.name);
    }

    return normalizedAliases.some(
      alias => values.slug.includes(alias) || values.name.includes(alias)
    );
  });
};

const resolveItemMatch = (
  items: CategoryNavItem[],
  aliases?: string[]
): ResolvedItemMatch<CategoryNavItem> => {
  if (!aliases || aliases.length === 0) {
    return { status: 'unresolved' };
  }

  const exactSlugMatches = getMatchedCandidates(items, aliases, 'slug');
  if (exactSlugMatches.length === 1) {
    return { status: 'resolved', item: exactSlugMatches[0] };
  }
  if (exactSlugMatches.length > 1) {
    return { status: 'ambiguous' };
  }

  const exactNameMatches = getMatchedCandidates(items, aliases, 'name');
  if (exactNameMatches.length === 1) {
    return { status: 'resolved', item: exactNameMatches[0] };
  }
  if (exactNameMatches.length > 1) {
    return { status: 'ambiguous' };
  }

  const tokenMatches = getMatchedCandidates(items, aliases, 'token');
  if (tokenMatches.length === 1) {
    return { status: 'resolved', item: tokenMatches[0] };
  }
  if (tokenMatches.length > 1) {
    return { status: 'ambiguous' };
  }

  return { status: 'unresolved' };
};

function logResolutionWarning(
  intent: CatalogIntent,
  reason: CatalogResolutionReason
) {
  if (!isDevelopmentEnvironment || !intent) {
    return;
  }

  console.warn(`[catalog] Unable to resolve "${intent}" intent: ${reason}`);
}

export function resolveCatalogTaxonomy(
  categories: CategoryNavItem[],
  intent: CatalogIntent
): ResolvedCatalogTaxonomy {
  if (!intent || intent === 'new') {
    return {
      intent,
      status: 'resolved',
    };
  }

  const definition = getCatalogRouteDefinition(intent);

  if (
    definition.availability !== 'live' ||
    definition.taxonomyMode === 'unavailable'
  ) {
    logResolutionWarning(intent, 'unavailable');
    return {
      intent,
      status: 'unresolved',
      reason: 'unavailable',
    };
  }

  const categoryMatch = resolveItemMatch(
    categories,
    definition.categoryAliases
  );

  if (categoryMatch.status === 'ambiguous') {
    logResolutionWarning(intent, 'category-ambiguous');
    return {
      intent,
      status: 'ambiguous',
      reason: 'category-ambiguous',
    };
  }

  if (categoryMatch.status === 'unresolved') {
    logResolutionWarning(intent, 'category-not-found');
    return {
      intent,
      status: 'unresolved',
      reason: 'category-not-found',
    };
  }

  const category = categoryMatch.item;

  if (definition.taxonomyMode === 'category') {
    return {
      intent,
      status: 'resolved',
      categoryId: category.id,
      category,
    };
  }

  const subcategoryMatch = resolveItemMatch(
    category.subcategories ?? [],
    definition.subcategoryAliases
  );

  if (subcategoryMatch.status === 'ambiguous') {
    logResolutionWarning(intent, 'subcategory-ambiguous');
    return {
      intent,
      status: 'ambiguous',
      reason: 'subcategory-ambiguous',
      categoryId: category.id,
      category,
    };
  }

  if (subcategoryMatch.status === 'unresolved') {
    logResolutionWarning(intent, 'subcategory-not-found');
    return {
      intent,
      status: 'unresolved',
      reason: 'subcategory-not-found',
      categoryId: category.id,
      category,
    };
  }

  return {
    intent,
    status: 'resolved',
    categoryId: category.id,
    subcategoryId: subcategoryMatch.item.id,
    category,
    subcategory: subcategoryMatch.item,
  };
}

export function findTaxonomyByIds(
  categories: CategoryNavItem[],
  { categoryId, subcategoryId }: TaxonomyIds
): ResolvedTaxonomyByIds {
  if (subcategoryId) {
    for (const category of categories) {
      const subcategory = category.subcategories?.find(
        candidate => candidate.id === subcategoryId
      );

      if (!subcategory) {
        continue;
      }

      if (categoryId && category.id !== categoryId) {
        return {};
      }

      return {
        category,
        subcategory,
      };
    }

    return {};
  }

  if (!categoryId) {
    return {};
  }

  return {
    category: categories.find(category => category.id === categoryId),
  };
}

export function resolveCatalogNavKeyFromIds(
  categories: CategoryNavItem[],
  ids: TaxonomyIds
): CatalogNavKey | null {
  const taxonomy = findTaxonomyByIds(categories, ids);

  if (!taxonomy.category) {
    return null;
  }

  return getCatalogNavKeyFromTaxonomy({
    categoryName: taxonomy.category.name,
    categorySlug: taxonomy.category.url,
    subcategoryName: taxonomy.subcategory?.name,
    subcategorySlug: taxonomy.subcategory?.url,
  });
}

export function resolveLiveCatalogPathFromIds(
  categories: CategoryNavItem[],
  ids: TaxonomyIds
) {
  const navKey = resolveCatalogNavKeyFromIds(categories, ids);

  if (!isLiveCatalogNavKey(navKey)) {
    return null;
  }

  return getCatalogPathForNavKey(navKey);
}
