import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import ProductScreen from '../../../../src/presentation/screen/product/ProductScreen';
import { getProduct, getProductBySlug } from '../../../../src/service/productsService';
import { mapProductDtoToModel } from '../../../../src/utils/productMapper';
import { getImageUrl } from '../../../../src/utils/imageUtils';
import {
  buildAlternates,
  buildProductTitle,
  getLocaleMetadata,
  getSiteUrl,
} from '../../../../src/utils/metadata';
import { normalizeLocale } from '../../../../src/utils/locale';
import { buildProductSlug, getProductIdFromSlug } from '../../../../src/utils/slug';
import { AuthProvider } from '../../../../src/context/AuthContext';

const parsePrice = (price: string | null | undefined) => {
  if (!price) return null;
  const parsed = Number(price.replace(/[^\d.-]/g, ''));
  return Number.isFinite(parsed) ? parsed : null;
};

const resolveDescription = (product: ReturnType<typeof mapProductDtoToModel>) => {
  const direct =
    product.specifications?.description ||
    product.specifications?.details ||
    product.specifications?.summary;

  if (direct) return String(direct);

  const detailed = product.specifications_detailed?.find(
    (item) =>
      item.key === 'description' ||
      item.label?.toLowerCase() === 'description'
  );

  return detailed?.display || '';
};

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string; slug: string }>;
  searchParams?: Promise<{ id?: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const resolvedSearchParams = searchParams ? await searchParams : undefined;

  const locale = normalizeLocale(rawLocale);
  const meta = getLocaleMetadata(locale);
  const idFromSlug = getProductIdFromSlug(slug);
  const id = resolvedSearchParams?.id ? Number(resolvedSearchParams.id) : undefined;

  try {
    const dto = idFromSlug
      ? await getProduct(idFromSlug)
      : id
        ? await getProduct(id)
        : await getProductBySlug(slug);

    if (!dto) {
      return {
        title: meta.productsTitle,
        description: meta.productsDescription,
        alternates: buildAlternates(locale, '/products'),
      };
    }

    const product = mapProductDtoToModel(dto);
    const description = resolveDescription(product) || meta.productsDescription;
    const image = getImageUrl(product.variant_image);
    const canonicalSlug = buildProductSlug(product.name, product.id);
    const siteUrl = getSiteUrl();
    const ogImage = image ? new URL(image, siteUrl).toString() : undefined;
    const canonicalUrl = `${siteUrl}/${locale}/product/${canonicalSlug}`;

    return {
      title: buildProductTitle(locale, product.name),
      description,
      alternates: buildAlternates(locale, `/product/${canonicalSlug}`),
      openGraph: image
        ? {
            title: buildProductTitle(locale, product.name),
            description,
            url: canonicalUrl,
            images: ogImage ? [{ url: ogImage }] : undefined,
          }
        : undefined,
    };
  } catch {
    return {
      title: meta.productsTitle,
      description: meta.productsDescription,
      alternates: buildAlternates(locale, '/products'),
    };
  }
}

export default async function ProductPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string; slug: string }>;
  searchParams?: Promise<{ id?: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const resolvedSearchParams = searchParams ? await searchParams : undefined;

  const locale = normalizeLocale(rawLocale);
  const idFromSlug = getProductIdFromSlug(slug);
  const id = resolvedSearchParams?.id ? Number(resolvedSearchParams.id) : undefined;

  const dto = idFromSlug
    ? await getProduct(idFromSlug)
    : id
      ? await getProduct(id)
      : await getProductBySlug(slug);

  if (!dto) {
    notFound();
  }

  const product = mapProductDtoToModel(dto);
  const canonicalSlug = buildProductSlug(product.name, product.id);

  if (slug !== canonicalSlug || resolvedSearchParams?.id) {
    redirect(`/${locale}/product/${canonicalSlug}`);
  }

  const description = resolveDescription(product);
  const image = getImageUrl(product.variant_image);
  const price = parsePrice(product.price_new || product.price);
  const siteUrl = getSiteUrl();
  const canonicalUrl = `${siteUrl}/${locale}/product/${canonicalSlug}`;
  const jsonLdImage = image
    ? new URL(image, siteUrl).toString()
    : `${siteUrl}/assets/logo.png`;
  const jsonLdDescription =
    description || product.name || 'Jasmine Crafted product';

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: jsonLdDescription,
    image: [jsonLdImage],
    brand: product.brand ? { '@type': 'Brand', name: product.brand } : undefined,
    offers: price
      ? {
          '@type': 'Offer',
          priceCurrency: product.currency || 'USD',
          price,
          url: canonicalUrl,
          availability:
            product.availability === 'in_stock'
              ? 'https://schema.org/InStock'
              : 'https://schema.org/OutOfStock',
        }
      : undefined,
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${siteUrl}/${locale}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Products',
        item: `${siteUrl}/${locale}/products`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: product.name,
        item: canonicalUrl,
      },
    ],
  };

  return (
    <AuthProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ProductScreen initialProduct={product} />
    </AuthProvider>
  );
}