export const PRODUCT_CARD_FIELDS = [
  'id',
  'name',
  'price',
  'price_new',
  'price_old',
  'availability',
  'variant_image',
  'currency',
];

export const PRODUCT_LIST_FIELDS = [
  ...PRODUCT_CARD_FIELDS,
  'variant_color_palette',
  'variant_color_name',
  'variants',
];
