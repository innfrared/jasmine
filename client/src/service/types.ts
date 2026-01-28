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
}

export interface CategoryWithSubcategoriesDto extends CategoryDto {
  subcategories?: SubcategoryDto[];
}

export interface VariantProductPreview {
  id: number;
  name: string;
  price: string;
  availability: string;
  image: string;
  color_name: string;
  color_palette: string;
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
  brand: string | null;
  price: string;
  price_new: string | null;
  price_old: string | null;
  availability: string;
  category_id: number;
  category: CategoryDto | null;
  subcategory_id: number | null;
  subcategory: SubcategoryDto | null;
  currency: string;
  created_at: string;
  updated_at: string;
  variant_group_id: number | null;
  variant_color_name: string | null;
  variant_color_palette: string | null;
  variant_image: string | null;
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
