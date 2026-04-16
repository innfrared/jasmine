export interface TokenPair {
  access: string;
  refresh: string;
}

export interface UserDto {
  id: number;
  email: string;
  first_name: string | null;
  last_name: string | null;
  phone: string | null;
  is_active: boolean;
  created_at: string;
}

export interface CategoryDto {
  id: number;
  name: string;
  slug: string;
  created_at: string;
}

export interface SubcategoryDto {
  id: number;
  category_id: number;
  name: string;
  slug: string;
  created_at: string;
  description?: string | null;
}

export interface CategoryWithSubcategoriesDto extends CategoryDto {
  subcategories?: SubcategoryDto[];
}

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

export interface VariantOptionDto {
  id: number;
  image?: string | null;
  color_name?: string | null;
  color_palette?: string | null;
  is_current?: boolean;
}

export interface VariantDetailedDto {
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
}

export interface SpecificationDetailDto {
  key: string;
  label: string;
  type: string;
  value: string;
  display: string;
  unit: string | null;
}

export interface ProductDto {
  id: number;
  name: string;
  description?: string | null;
  brand: string | null;
  price: string;
  price_new: string | null;
  price_old: string | null;
  availability: string;
  category_id: number;
  category: CategoryDto | null;
  subcategories?: SubcategoryDto[] | null;
  subcategory_ids?: number[];
  subcategory_id: number | null;
  subcategory: SubcategoryDto | null;
  currency: string;
  created_at: string;
  updated_at: string;
  variant_group_id: number | null;
  variant_group?: number | null;
  variant_ids?: number[];
  variant_options?: VariantOptionDto[];
  variants_detailed?: VariantDetailedDto[];
  variant_color_name: string | null;
  variant_color_palette: string | null;
  image_url: string | null;
  variants: VariantProductPreview[];
  specifications: Record<string, string>;
  specifications_detailed: SpecificationDetailDto[];
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  page_size: number;
  total_pages: number;
  has_next: boolean;
  has_previous: boolean;
}

export interface AddressDto {
  id: number;
  label: string;
  full_name: string;
  phone: string;
  country: string;
  city: string;
  street: string;
  apartment: string | null;
  postal_code: string;
  is_default: boolean;
  created_at: string;
}
