import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  buildAlternates,
  buildPolicyTitle,
  getLocaleMetadata,
} from '../../../../src/utils/metadata';
import { normalizeLocale } from '../../../../src/utils/locale';

const policyMap = {
  'shipping-policy': {
    label: 'Shipping Policy',
    content: <div><h1>Shipping Policy</h1></div>,
  },
  'returns-refunds': {
    label: 'Returns & Refunds',
    content: <div><h1>Returns & Refunds</h1></div>,
  },
  'privacy-policy': {
    label: 'Privacy Policy',
    content: <div><h1>Privacy Policy</h1></div>,
  },
  'terms-conditions': {
    label: 'Terms & Conditions',
    content: <div><h1>Terms & Conditions</h1></div>,
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale = normalizeLocale(rawLocale);
  const meta = getLocaleMetadata(locale);
  const policy = policyMap[slug as keyof typeof policyMap];

  if (!policy) {
    return {
      title: meta.policiesTitle,
      description: meta.policiesDescription,
      alternates: buildAlternates(locale, `/policies/${slug}`),
    };
  }

  return {
    title: buildPolicyTitle(locale, policy.label),
    description: meta.policiesDescription,
    alternates: buildAlternates(locale, `/policies/${slug}`),
  };
}

export default async function PolicyPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const policy = policyMap[slug as keyof typeof policyMap];

  if (!policy) notFound();

  return policy.content;
}