import { getApiBaseUrl } from '../service/apiClient';

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

  if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
    return imageUrl;
  }

  if (imageUrl.startsWith('assets/') || imageUrl.startsWith('/assets/')) {
    return imageUrl.startsWith('/') ? imageUrl : `/${imageUrl}`;
  }

  const baseUrl = getMediaBaseUrl();
  
  const normalizedUrl = imageUrl.startsWith('/') ? imageUrl : `/${imageUrl}`;
  
  return `${baseUrl}${normalizedUrl}`;
};

