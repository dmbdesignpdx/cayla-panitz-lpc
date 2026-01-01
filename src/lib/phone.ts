/**
 * @file Provide a function to generate tel: links from phone numbers.
 * @module lib/phone
 */


export function getHref(value: string): string {
  const converted = value.replace(/[^0-9+]/g, "");

  return `tel:${converted}`;
}
