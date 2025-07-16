export function getAnchor(value: string) {
  const id = value
    .toLowerCase()
    .trim()
    .replace(/[^\w-]+/g, " ")
    .replace(/\s+/g, "-");

  return {
    href: `#${id}`,
    id,
  };
}
