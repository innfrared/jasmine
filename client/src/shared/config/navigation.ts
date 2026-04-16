export const LEGACY_CATALOG_NAV_QUERY_KEY = 'nav';
export const CATALOG_NAV_QUERY_KEY = LEGACY_CATALOG_NAV_QUERY_KEY;

export const CATALOG_NAV_KEYS = [
  'new',
  'all-bags',
  'crossbody',
  'shoulder',
  'top-handle',
  'evening',
  'accessories',
  'belts',
] as const;

export type CatalogNavKey = (typeof CATALOG_NAV_KEYS)[number];
export type CatalogRouteAvailability = 'live' | 'unavailable';
export type CatalogTaxonomyMode =
  | 'none'
  | 'category'
  | 'single-subcategory'
  | 'unavailable';

export type CatalogRouteDefinition = {
  labelKey: string;
  href: string;
  availability: CatalogRouteAvailability;
  taxonomyMode: CatalogTaxonomyMode;
  parentNavKey?: CatalogNavKey;
  categoryAliases?: string[];
  subcategoryAliases?: string[];
};

export type HeaderNavItem = {
  id: string;
  labelKey: string;
  href: string;
  navKey?: CatalogNavKey;
};

type CatalogTaxonomyInput = {
  categoryName?: string | null;
  categorySlug?: string | null;
  subcategoryName?: string | null;
  subcategorySlug?: string | null;
};

const CATALOG_ROUTE_DEFINITIONS: Record<CatalogNavKey, CatalogRouteDefinition> =
  {
    new: {
      labelKey: 'navigation.new',
      href: '/new',
      availability: 'live',
      taxonomyMode: 'none',
    },
    'all-bags': {
      labelKey: 'navigation.allBags',
      href: '/bags',
      availability: 'live',
      taxonomyMode: 'category',
      categoryAliases: [
        'bags',
        'bag',
        'purse',
        'purses',
        'handbag',
        'handbags',
      ],
    },
    crossbody: {
      labelKey: 'navigation.crossbody',
      href: '/bags/crossbody',
      availability: 'live',
      taxonomyMode: 'single-subcategory',
      parentNavKey: 'all-bags',
      categoryAliases: [
        'bags',
        'bag',
        'purse',
        'purses',
        'handbag',
        'handbags',
      ],
      subcategoryAliases: [
        'crossbody',
        'cross body',
        'cross-body',
        'crossbody bags',
      ],
    },
    shoulder: {
      labelKey: 'navigation.shoulder',
      href: '/bags/shoulder',
      availability: 'live',
      taxonomyMode: 'single-subcategory',
      parentNavKey: 'all-bags',
      categoryAliases: [
        'bags',
        'bag',
        'purse',
        'purses',
        'handbag',
        'handbags',
      ],
      subcategoryAliases: ['shoulder', 'shoulder bags', 'shoulder bag'],
    },
    'top-handle': {
      labelKey: 'navigation.topHandle',
      href: '/bags/top-handle',
      availability: 'live',
      taxonomyMode: 'single-subcategory',
      parentNavKey: 'all-bags',
      categoryAliases: [
        'bags',
        'bag',
        'purse',
        'purses',
        'handbag',
        'handbags',
      ],
      subcategoryAliases: [
        'top handle',
        'top-handle',
        'tophandle',
        'top handle bags',
        'top handle bag',
      ],
    },
    evening: {
      labelKey: 'navigation.evening',
      href: '/bags/evening',
      availability: 'live',
      taxonomyMode: 'single-subcategory',
      parentNavKey: 'all-bags',
      categoryAliases: [
        'bags',
        'bag',
        'purse',
        'purses',
        'handbag',
        'handbags',
      ],
      subcategoryAliases: [
        'evening',
        'clutch',
        'evening bags',
        'evening bag',
        'clutch bags',
        'clutch bag',
      ],
    },
    accessories: {
      labelKey: 'navigation.accessories',
      href: '/accessories',
      availability: 'unavailable',
      taxonomyMode: 'unavailable',
      categoryAliases: ['accessories', 'accessory'],
    },
    belts: {
      labelKey: 'navigation.belts',
      href: '/accessories/belts',
      availability: 'unavailable',
      taxonomyMode: 'unavailable',
      parentNavKey: 'accessories',
      categoryAliases: ['accessories', 'accessory'],
      subcategoryAliases: ['belts', 'belt'],
    },
  };

export const LIVE_CATALOG_NAV_KEYS: CatalogNavKey[] = [
  'new',
  'all-bags',
  'crossbody',
  'shoulder',
  'top-handle',
  'evening',
];

const HEADER_NAV_ORDER: CatalogNavKey[] = [...LIVE_CATALOG_NAV_KEYS];

export const HEADER_NAV_ITEMS: HeaderNavItem[] = HEADER_NAV_ORDER.map(
  navKey => ({
    id: navKey,
    labelKey: CATALOG_ROUTE_DEFINITIONS[navKey].labelKey,
    href: CATALOG_ROUTE_DEFINITIONS[navKey].href,
    navKey,
  })
);

export const CATALOG_CANONICAL_ROUTE_PATHS = LIVE_CATALOG_NAV_KEYS.map(
  navKey => CATALOG_ROUTE_DEFINITIONS[navKey].href
);

const normalizeLabel = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .replace(/[_\s-]+/g, ' ');

const getNormalizedValues = (...values: Array<string | null | undefined>) =>
  values.filter((value): value is string => Boolean(value)).map(normalizeLabel);

const matchesExactAlias = (values: string[], aliases?: string[]) => {
  if (!aliases || values.length === 0) {
    return false;
  }

  const normalizedAliases = aliases.map(normalizeLabel);
  return values.some(value => normalizedAliases.includes(value));
};

const matchesUniqueTokenAlias = (values: string[], aliases?: string[]) => {
  if (!aliases || values.length === 0) {
    return false;
  }

  const matchedAliases = aliases.filter(alias => {
    const normalizedAlias = normalizeLabel(alias);
    return values.some(value => value.includes(normalizedAlias));
  });

  return matchedAliases.length === 1;
};

const getNormalizedPathname = (pathname: string) => {
  if (!pathname) {
    return '/';
  }

  if (pathname === '/') {
    return pathname;
  }

  return pathname.replace(/\/+$/, '') || '/';
};

export const isCatalogNavKey = (
  value: string | null | undefined
): value is CatalogNavKey =>
  Boolean(value && CATALOG_NAV_KEYS.includes(value as CatalogNavKey));

export const isLiveCatalogNavKey = (
  navKey: CatalogNavKey | null | undefined
): navKey is CatalogNavKey =>
  Boolean(navKey && CATALOG_ROUTE_DEFINITIONS[navKey].availability === 'live');

export const getCatalogRouteDefinition = (navKey: CatalogNavKey) =>
  CATALOG_ROUTE_DEFINITIONS[navKey];

export const getHeaderNavItemByKey = (navKey: CatalogNavKey) =>
  HEADER_NAV_ITEMS.find(item => item.navKey === navKey);

export const getCatalogPathForNavKey = (navKey: CatalogNavKey) =>
  CATALOG_ROUTE_DEFINITIONS[navKey].href;

export const getCatalogSectionNavKey = (navKey: CatalogNavKey | null) => {
  if (!navKey || navKey === 'new') {
    return null;
  }

  return CATALOG_ROUTE_DEFINITIONS[navKey].parentNavKey ?? navKey;
};

export const getCatalogNavKeyFromPath = (pathname: string) => {
  const normalizedPathname = getNormalizedPathname(pathname);

  return (
    CATALOG_NAV_KEYS.find(
      navKey => CATALOG_ROUTE_DEFINITIONS[navKey].href === normalizedPathname
    ) ?? null
  );
};

export const getCatalogNavKeyFromLegacySearch = (search: string) => {
  const searchParams = new URLSearchParams(search);
  const navKey = searchParams.get(LEGACY_CATALOG_NAV_QUERY_KEY);

  return isCatalogNavKey(navKey) ? navKey : null;
};

export const getCatalogNavKeyFromLocation = (
  pathname: string,
  search: string
) =>
  getCatalogNavKeyFromPath(pathname) ??
  getCatalogNavKeyFromLegacySearch(search);

export const getLegacyCatalogRedirectPath = (
  pathname: string,
  search: string
) => {
  const normalizedPathname = getNormalizedPathname(pathname);

  if (normalizedPathname !== '/products') {
    return null;
  }

  const searchParams = new URLSearchParams(search);
  const navKey = searchParams.get(LEGACY_CATALOG_NAV_QUERY_KEY);

  if (!isCatalogNavKey(navKey)) {
    return null;
  }

  searchParams.delete(LEGACY_CATALOG_NAV_QUERY_KEY);

  const nextSearch = searchParams.toString();
  const nextPath = getCatalogPathForNavKey(navKey);

  return nextSearch ? `${nextPath}?${nextSearch}` : nextPath;
};

export const getCatalogNavKeyFromTaxonomy = ({
  categoryName,
  categorySlug,
  subcategoryName,
  subcategorySlug,
}: CatalogTaxonomyInput) => {
  const categoryValues = getNormalizedValues(categoryName, categorySlug);
  const subcategoryValues = getNormalizedValues(
    subcategoryName,
    subcategorySlug
  );

  const subcategoryKeys = CATALOG_NAV_KEYS.filter(
    navKey =>
      CATALOG_ROUTE_DEFINITIONS[navKey].taxonomyMode === 'single-subcategory'
  );

  const exactSubcategoryMatch = subcategoryKeys.find(navKey =>
    matchesExactAlias(
      subcategoryValues,
      CATALOG_ROUTE_DEFINITIONS[navKey].subcategoryAliases
    )
  );

  if (exactSubcategoryMatch) {
    return exactSubcategoryMatch;
  }

  const exactCategoryMatch = CATALOG_NAV_KEYS.find(navKey =>
    matchesExactAlias(
      categoryValues,
      CATALOG_ROUTE_DEFINITIONS[navKey].categoryAliases
    )
  );

  if (exactCategoryMatch) {
    return exactCategoryMatch;
  }

  const tokenSubcategoryMatches = subcategoryKeys.filter(navKey =>
    matchesUniqueTokenAlias(
      subcategoryValues,
      CATALOG_ROUTE_DEFINITIONS[navKey].subcategoryAliases
    )
  );

  if (tokenSubcategoryMatches.length === 1) {
    return tokenSubcategoryMatches[0];
  }

  const tokenCategoryMatches = CATALOG_NAV_KEYS.filter(navKey =>
    matchesUniqueTokenAlias(
      categoryValues,
      CATALOG_ROUTE_DEFINITIONS[navKey].categoryAliases
    )
  );

  if (tokenCategoryMatches.length === 1) {
    return tokenCategoryMatches[0];
  }

  return null;
};

export const resolveCatalogPathFromTaxonomy = ({
  categoryName,
  categorySlug,
  subcategoryName,
  subcategorySlug,
}: CatalogTaxonomyInput) => {
  const navKey = getCatalogNavKeyFromTaxonomy({
    categoryName,
    categorySlug,
    subcategoryName,
    subcategorySlug,
  });

  return navKey ? getCatalogPathForNavKey(navKey) : null;
};

export const isHeaderNavItemActive = (
  pathname: string,
  search: string,
  navKey?: CatalogNavKey
) => {
  if (!navKey) {
    return false;
  }

  return getCatalogNavKeyFromLocation(pathname, search) === navKey;
};
