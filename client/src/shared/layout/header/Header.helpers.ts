import { shoppingBagRepository } from '@/shared/repositories/shoppingBagRepository';
import { wishlistRepository } from '@/shared/repositories/wishlistRepository';

export const HEADER_ANIMATION_DURATION_MS = 500;

export const getStoredCartCount = () => {
  return shoppingBagRepository.getCount();
};

export const getStoredLikedCount = () => {
  return wishlistRepository.getCount();
};

export const applyCurrentColorToLogo = (svg: SVGElement) => {
  svg.querySelectorAll('[stroke]').forEach((element: Element) => {
    element.setAttribute('stroke', 'currentColor');
  });
};
