import type {
  ProductDto,
  VariantDetailedImageDto,
} from '@/shared/contracts/api';
export interface VariantProductPreview {
  id: number;
  product?: number | null;
  folder?: string | null;
  color?: string | null;
  material?: string | null;
  cord_diameter?: string | null;
  cord_type?: string | null;
  description?: string | null;
  care?: string | null;
  handles?: string | null;
  name: string;
  value?: string | null;
  price: string;
  availability: string;
  image?: string | null;
  image_url?: string | null;
  color_name: string;
  color_palette: string;
  sort_order?: number | null;
  created_at?: string | null;
}

export interface VariantOption {
  id: number;
  image?: string | null;
  color_name?: string | null;
  color_palette?: string | null;
  is_current?: boolean;
}

export interface VariantDetailedImage {
  id: number;
  url: string;
  alt: string | null;
  sort_order: number;
  is_primary: boolean;
}

export interface VariantDetailed {
  id: number;
  folder?: string | null;
  color?: string | null;
  material?: string | null;
  cord_diameter?: string | null;
  cord_type?: string | null;
  description?: string | null;
  care?: string | null;
  handles?: string | null;
  image_url?: string | null;
  sort_order?: number | null;
  images: VariantDetailedImage[];
}

export interface SpecificationDetail {
  key: string;
  label: string;
  type: string;
  value: string;
  display: string;
  unit: string | null;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  created_at: string;
}

export interface Subcategory {
  id: number;
  category_id: number;
  name: string;
  slug: string;
  created_at: string;
}

export interface Product {
  id: number;
  name: string;
  description?: string | null;
  brand: string | null;
  price: string;
  price_new: string | null;
  price_old: string | null;
  availability: string;
  category_id: number;
  category: Category | null;
  subcategories?: Subcategory[] | null;
  subcategory_ids?: number[];
  subcategory_id: number | null;
  subcategory: Subcategory | null;
  currency: string;
  created_at: string;
  updated_at: string;
  variant_group_id: number | null;
  variant_group?: number | null;
  variant_ids?: number[];
  variant_options?: VariantOption[];
  variants_detailed?: VariantDetailed[];
  variant_color_name: string | null;
  variant_color_palette: string | null;
  image_url: string | null;
  variants: VariantProductPreview[];
  specifications: Record<string, string>;
  specifications_detailed: SpecificationDetail[];
}

export type CatalogProduct = Product;
export type ProductDetails = Product;

export const mapProductDtoToCatalogProduct = (
  product: ProductDto
): CatalogProduct => ({
  ...product,
  category: product.category ?? null,
  subcategory: product.subcategory ?? null,
  variants: product.variants ?? [],
  variants_detailed: product.variants_detailed?.map(variant => ({
    ...variant,
    images: (variant.images ?? [])
      .map(rawImage => {
        const loose = rawImage as VariantDetailedImageDto & {
          imageUrl?: string | null;
        };

        const resolvedUrl =
          [
            typeof rawImage.url === 'string' ? rawImage.url : '',
            typeof rawImage.image_url === 'string' ? rawImage.image_url : '',
            typeof loose.imageUrl === 'string' ? loose.imageUrl : '',
          ]
            .map(segment => segment.trim())
            .find(segment => segment.length > 0) ?? '';

        return {
          id: rawImage.id,
          url: resolvedUrl,
          alt: rawImage.alt ?? null,
          sort_order: rawImage.sort_order,
          is_primary: rawImage.is_primary,
        };
      })
      .filter(image => image.url.length > 0),
  })),
  specifications: product.specifications ?? {},
  specifications_detailed: product.specifications_detailed ?? [],
});
