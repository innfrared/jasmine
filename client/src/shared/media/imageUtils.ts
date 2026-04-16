import { getApiBaseUrl } from '../../service/apiClient';

const getMediaBaseUrl = () => {
  const runtimeEnv =
    (globalThis as { process?: { env?: Record<string, string | undefined> } })
      .process?.env ?? {};
  const envBase =
    runtimeEnv.NEXT_PUBLIC_MEDIA_BASE_URL ||
    runtimeEnv.NEXT_PUBLIC_ASSET_BASE_URL ||
    runtimeEnv.VITE_MEDIA_BASE_URL ||
    runtimeEnv.VITE_ASSET_BASE_URL ||
    '';

  if (envBase) return envBase.replace(/\/+$/, '');

  return getApiBaseUrl().replace(/\/api\/?$/, '');
};

type ResponsiveImageOptions = {
  widths: number[];
  quality?: number;
};

const DEFAULT_IMAGE_QUALITY = 76;

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

function appendImageParams(imageUrl: string, width: number, quality: number) {
  if (
    !imageUrl ||
    imageUrl.startsWith('data:') ||
    imageUrl.startsWith('blob:')
  ) {
    return imageUrl;
  }

  const separator = imageUrl.includes('?') ? '&' : '?';
  return `${imageUrl}${separator}w=${width}&q=${quality}&fit=cover&auto=format`;
}

export function getResponsiveImageSet(
  imageUrl: string | null | undefined,
  options: ResponsiveImageOptions
) {
  const resolvedSource = getImageUrl(imageUrl);

  if (!resolvedSource) {
    return {
      src: '',
      srcSet: undefined,
    };
  }

  const uniqueWidths = Array.from(new Set(options.widths)).sort(
    (left, right) => left - right
  );
  const quality = options.quality ?? DEFAULT_IMAGE_QUALITY;

  return {
    src: appendImageParams(resolvedSource, uniqueWidths[0], quality),
    srcSet: uniqueWidths
      .map(
        width =>
          `${appendImageParams(resolvedSource, width, quality)} ${width}w`
      )
      .join(', '),
  };
}
