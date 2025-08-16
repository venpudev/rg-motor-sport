/**
 * Utility functions for generating URL-friendly slugs
 */

/**
 * Removes accents from a string
 */
function removeAccents(str: string): string {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

/**
 * Creates a basic slug from a string
 */
export function makeSlug(text: string): string {
  return removeAccents(text)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

/**
 * Creates a car-specific slug including brand, model, and year
 */
export function makeCarSlug(brand: string, model: string, year: number): string {
  const brandSlug = makeSlug(brand);
  const modelSlug = makeSlug(model);
  return `${brandSlug}-${modelSlug}-${year}`;
}

/**
 * Parses a car slug back to its components
 */
export function parseCarSlug(slug: string): { brand: string; model: string; year: number } | null {
  const parts = slug.split('-');
  if (parts.length < 3) return null;
  
  const year = parseInt(parts[parts.length - 1]);
  if (isNaN(year)) return null;
  
  const yearIndex = parts.length - 1;
  const brand = parts[0];
  const model = parts.slice(1, yearIndex).join(' ');
  
  return {
    brand: brand.charAt(0).toUpperCase() + brand.slice(1),
    model: model.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    year
  };
}