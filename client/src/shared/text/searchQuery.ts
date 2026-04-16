export function sanitizeSearchQuery(value: string | undefined) {
  if (!value) {
    return undefined;
  }

  const normalized = value
    // eslint-disable-next-line no-control-regex -- intentional ASCII control strip
    .replace(/[\u0000-\u001f\u007f]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 120);

  return normalized || undefined;
}
