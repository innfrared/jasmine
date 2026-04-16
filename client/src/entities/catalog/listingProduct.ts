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

/** Expands a grid-only product into a full `Product` for wishlist / bag localStorage. */
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
