export const slugify = (value: string) => {
  const cleaned = value
    .toLowerCase()
    .trim()
    .replace(/['"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return cleaned;
};

export const buildProductSlug = (name: string, id: number) => {
  const base = slugify(name);
  const prefix = base || 'product';
  return `${prefix}-${id}`;
};

export const getProductIdFromSlug = (slug?: string | null) => {
  if (!slug) return null;

  const match = slug.match(/-(\d+)$/);
  if (!match) return null;

  const parsed = Number(match[1]);
  return Number.isFinite(parsed) ? parsed : null;
};