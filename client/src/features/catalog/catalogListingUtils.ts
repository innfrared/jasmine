import type { ListingProduct } from '@/entities/catalog/listingProduct';

export type ProductFilters = Record<string, string[]>;

export function sortNewestFirst(
  products: ListingProduct[],
  applyNewestSort: boolean
) {
  if (!applyNewestSort) {
    return products;
  }

  return [...products].sort((leftProduct, rightProduct) => {
    if (!leftProduct.created_at || !rightProduct.created_at) {
      return 0;
    }

    return (
      new Date(rightProduct.created_at).getTime() -
      new Date(leftProduct.created_at).getTime()
    );
  });
}

export function filterProducts(
  products: ListingProduct[],
  filters?: ProductFilters
) {
  if (!filters?.color || filters.color.length === 0) {
    return products;
  }

  return products.filter(product => {
    if (
      product.variant_color_palette &&
      filters.color.includes(product.variant_color_palette)
    ) {
      return true;
    }

    return (
      product.variants?.some(
        variant =>
          Boolean(variant.color_palette) &&
          filters.color.includes(variant.color_palette)
      ) ?? false
    );
  });
}

export function buildAvailableColors(products: ListingProduct[]) {
  return Array.from(
    new Set(
      products
        .flatMap(product => {
          const colors: string[] = [];

          if (product.variant_color_palette) {
            colors.push(product.variant_color_palette);
          }

          product.variants?.forEach(variant => {
            if (variant.color_palette) {
              colors.push(variant.color_palette);
            }
          });

          return colors;
        })
        .filter(Boolean)
    )
  ).sort();
}

export function buildColorPaletteMap(products: ListingProduct[]) {
  const nextColorPaletteMap = new Map<string, string>();

  products.forEach(product => {
    if (product.variant_color_palette && product.variant_color_name) {
      nextColorPaletteMap.set(
        product.variant_color_palette,
        product.variant_color_name
      );
    }

    product.variants?.forEach(variant => {
      if (
        variant.color_palette &&
        variant.color_name &&
        !nextColorPaletteMap.has(variant.color_palette)
      ) {
        nextColorPaletteMap.set(variant.color_palette, variant.color_name);
      }
    });
  });

  return nextColorPaletteMap;
}
