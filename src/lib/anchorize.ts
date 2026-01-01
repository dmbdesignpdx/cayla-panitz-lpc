/**
 * @file Provide a function to generate anchor links from strings.
 * @module lib/anchorize
 */


interface Anchor {
  href: string;
  id: string;
}


export function getAnchor(value: string): Anchor {
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
