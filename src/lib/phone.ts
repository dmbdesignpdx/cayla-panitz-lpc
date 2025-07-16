export function getHref(value: string): string {
  const converted = value.replace(/[^0-9+]/g, "");

  return `tel:${converted}`;
}
