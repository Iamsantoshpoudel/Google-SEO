export function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export function fitMetaDescription(value: string, maxLength = 159): string {
  if (value.length <= maxLength) return value;

  const truncated = value.slice(0, maxLength - 1);
  const lastSpace = truncated.lastIndexOf(" ");
  return `${truncated.slice(0, lastSpace > 0 ? lastSpace : maxLength - 1).trimEnd()}…`;
}
