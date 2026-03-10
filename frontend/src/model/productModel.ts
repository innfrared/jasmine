export interface VariantProductPreview {
  id: number;
  name: string;
  price: string;
  availability: string;
  image: string;
  color_name: string;
  color_palette: string;
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
  brand: string | null;
  price: string;
  price_new: string | null;
  price_old: string | null;
  availability: string;
  category_id: number;
  category: Category | null;
  subcategory_id: number | null;
  subcategory: Subcategory | null;
  currency: string;
  created_at: string;
  updated_at: string;
  variant_group_id: number | null;
  variant_color_name: string | null;
  variant_color_palette: string | null;
  variant_image: string | null;
  variants: VariantProductPreview[];
  specifications: Record<string, string>;
  specifications_detailed: SpecificationDetail[];
}

export const getProductMainImage = (product: Product): string => {
  return product.variant_image || '';
};

export const getProductAdditionalImages = (product: Product): string[] => {
  return product.variants?.filter(v => v.image).map(v => v.image) || [];
};
