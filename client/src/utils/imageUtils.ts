import { getApiBaseUrl } from '../service/apiClient';

/**
 * Converts a relative image URL to an absolute URL using the backend base URL.
 * If the URL is already absolute (starts with http:// or https://), it returns it as-is.
 * If the URL is relative, it prepends the backend base URL.
 * 
 * @param imageUrl - The image URL (can be relative or absolute)
 * @returns The absolute image URL
 */
const getMediaBaseUrl = () => {
  const envBase =
    (typeof import.meta !== 'undefined' &&
      (import.meta.env?.VITE_MEDIA_BASE_URL ||
        import.meta.env?.VITE_ASSET_BASE_URL)) ||
    '';

  if (envBase) return envBase.replace(/\/+$/, '');

  return getApiBaseUrl().replace(/\/api\/?$/, '');
};

export const getImageUrl = (imageUrl: string | null | undefined): string => {
  if (!imageUrl) {
    return '';
  }

  // If already absolute URL, return as-is
  if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
    return imageUrl;
  }

  // If it's a local asset path, return as-is
  if (imageUrl.startsWith('assets/') || imageUrl.startsWith('/assets/')) {
    return imageUrl.startsWith('/') ? imageUrl : `/${imageUrl}`;
  }

  // Get media base URL (defaults to API base without /api)
  const baseUrl = getMediaBaseUrl();
  
  // Ensure imageUrl starts with /
  const normalizedUrl = imageUrl.startsWith('/') ? imageUrl : `/${imageUrl}`;
  
  return `${baseUrl}${normalizedUrl}`;
};

