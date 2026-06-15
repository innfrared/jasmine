import type { ProductDto } from '@/shared/contracts/api';
import type { Product, VariantProductPreview } from './product';

export interface ListingProductVariant {
  id: number;
  name: string;
  color_name: string;
  color_palette: string;
  image_url?: string | null;
}

export interface ListingProduct {
  id: number;
  name: string;
  price: string;
  price_new: string | null;
  currency: string;
  availability: string;
  image_url: string | null;
  variant_color_name: string | null;
  variant_color_palette: string | null;
  created_at: string;
  variants: ListingProductVariant[];
}

function mapVariantToPreview(
  listing: ListingProduct,
  variant: ListingProductVariant
): VariantProductPreview {
  return {
    id: variant.id,
    product: null,
    folder: null,
    color: null,
    material: null,
    cord_diameter: null,
    cord_type: null,
    description: null,
    care: null,
    handles: null,
    name: variant.name,
    value: null,
    price: listing.price,
    availability: listing.availability,
    image: variant.image_url,
    image_url: variant.image_url ?? null,
    color_name: variant.color_name,
    color_palette: variant.color_palette,
    sort_order: null,
    created_at: null,
  };
}

export function listingProductToStorageProduct(
  listing: ListingProduct
): Product {
  const variants = listing.variants.map(variant =>
    mapVariantToPreview(listing, variant)
  );

  return {
    id: listing.id,
    name: listing.name,
    description: null,
    brand: null,
    price: listing.price,
    price_new: listing.price_new,
    price_old: null,
    availability: listing.availability,
    category_id: 0,
    category: null,
    subcategories: null,
    subcategory_ids: undefined,
    subcategory_id: null,
    subcategory: null,
    currency: listing.currency,
    created_at: listing.created_at,
    updated_at: listing.created_at,
    variant_group_id: null,
    variant_group: null,
    variant_ids: undefined,
    variant_options: undefined,
    variants_detailed: undefined,
    variant_color_name: listing.variant_color_name,
    variant_color_palette: listing.variant_color_palette,
    image_url: listing.image_url,
    variants,
    specifications: {},
    specifications_detailed: [],
  };
}

export function mapProductDtoToListingProduct(dto: ProductDto): ListingProduct {
  return {
    id: dto.id,
    name: dto.name,
    price: dto.price,
    price_new: dto.price_new,
    currency: dto.currency,
    availability: dto.availability,
    image_url: dto.image_url,
    variant_color_name: dto.variant_color_name,
    variant_color_palette: dto.variant_color_palette,
    created_at: dto.created_at,
    variants: (dto.variants ?? []).map(v => ({
      id: v.id,
      name: v.name,
      color_name: v.color_name,
      color_palette: v.color_palette,
      image_url: v.image_url ?? v.image ?? null,
    })),
  };
}

export function mapProductDtoToManifestoVariantCells(
  dto: ProductDto,
  maxCells = 3
): ListingProduct[] {
  const base = mapProductDtoToListingProduct(dto);

  type VariantSource = {
    id: number;
    image_url: string | null;
    color_name: string | null;
    color_palette: string | null;
  };

  const fromVariants: VariantSource[] = (dto.variants ?? []).map(v => ({
    id: v.id,
    image_url: v.image_url ?? v.image ?? null,
    color_name: v.color_name ?? null,
    color_palette: v.color_palette ?? null,
  }));

  const fromOptions: VariantSource[] = (dto.variant_options ?? []).map(o => ({
    id: o.id,
    image_url: o.image ?? null,
    color_name: o.color_name ?? null,
    color_palette: o.color_palette ?? null,
  }));

  const sources = fromVariants.length > 0 ? fromVariants : fromOptions;

  if (sources.length === 0) {
    return [base].slice(0, maxCells);
  }

  return sources.slice(0, maxCells).map(source => ({
    ...base,
    id: source.id,
    name: dto.name,
    image_url: source.image_url ?? base.image_url,
    variant_color_name: source.color_name,
    variant_color_palette: source.color_palette,
  }));
}
