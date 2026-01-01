/**
 * @file Provide a utility function to check if a value is defined (not null or undefined).
 * @module lib/is-defined
 */


export function isDefined<T>(value: T | undefined | null): value is Required<T> {
  return value !== undefined && value !== null;
}
