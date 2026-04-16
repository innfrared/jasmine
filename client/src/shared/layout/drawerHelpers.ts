import type { CartItem } from '../../entities/shoppingBag/cartItem';
import type { Product } from '../../entities/catalog/product';
import { formatMoney, parseMoneyValue } from '@/shared/formatters/money';
import { getProductDetailPath } from '@/shared/routing/productPaths';
import { buildWishlistDialogPath } from '@/shared/routing/wishlistShare';

export { getProductDetailPath };

export const getProductDisplayPrice = (product: Product) => {
  return product.price_new || product.price;
};

export const getPriceValue = (price: string) => {
  return parseMoneyValue(price);
};

export const formatDrawerPrice = (amount: number) => {
  return formatMoney(amount, 'AMD').value;
};

export const getCartSubtotal = (items: CartItem[]) => {
  return items.reduce((sum, item) => {
    const itemPrice = getPriceValue(getProductDisplayPrice(item.product));
    return sum + itemPrice * item.quantity;
  }, 0);
};

const getUniqueDrawerMetaParts = (parts: Array<string | null | undefined>) => {
  return parts.filter((part, index, values): part is string => {
    if (!part) {
      return false;
    }

    const normalizedPart = part.trim();
    if (!normalizedPart) {
      return false;
    }

    return (
      values.findIndex(value => value?.trim() === normalizedPart) === index
    );
  });
};

export const getDrawerProductDetails = (product: Product) => {
  const eyebrow =
    product.brand?.trim() ||
    product.category?.name?.trim() ||
    product.subcategory?.name?.trim() ||
    undefined;
  const metaParts = getUniqueDrawerMetaParts([
    product.category?.name,
    product.subcategory?.name,
    product.variant_color_name,
  ]).filter(part => part !== eyebrow);
  const meta = metaParts.join(' • ') || undefined;

  return {
    eyebrow,
    meta,
  };
};

export const shareWishlistProducts = async (
  currentPathname: string,
  currentSearch: string,
  origin: string,
  title: string
) => {
  const shareUrl = `${origin}${buildWishlistDialogPath(
    currentPathname,
    currentSearch
  )}`;

  if (navigator.share) {
    await navigator.share({ title, url: shareUrl });
    return;
  }

  if (navigator.clipboard) {
    await navigator.clipboard.writeText(shareUrl);
  }
};
