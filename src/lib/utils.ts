/**
 * Merge Tailwind CSS classes safely, filtering out falsy values.
 */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Format a UK phone number for tel: links (strips spaces and leading 0
 * for international format when prefixed with +44).
 */
export function formatPhoneForHref(phone: string): string {
  return `tel:${phone.replace(/\s/g, "")}`;
}

/**
 * Render star rating as an accessible string + emoji/unicode fallback.
 */
export function renderStars(rating: number): string {
  return "★".repeat(Math.floor(rating)) + (rating % 1 >= 0.5 ? "½" : "");
}

/**
 * Slugify a string for use in anchor IDs.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
