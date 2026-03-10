import { Product } from '../model/productModel';
import { ProductDto } from '../service/types';

export const mapProductDtoToModel = (item: ProductDto): Product => ({
  ...item,
  category: item.category ?? null,
  subcategory: item.subcategory ?? null,
  variants: item.variants ?? [],
  specifications: item.specifications ?? {},
  specifications_detailed: item.specifications_detailed ?? [],
});

export const mapProductDtosToModels = (items: ProductDto[]): Product[] =>
  items.map(mapProductDtoToModel);
