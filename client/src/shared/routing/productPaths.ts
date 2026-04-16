export function getProductDetailPath(product: { id: number; name: string }) {
  return `/products/product/${encodeURIComponent(product.name)}?id=${product.id}`;
}
