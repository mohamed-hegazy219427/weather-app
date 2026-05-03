export function qs(selector, parent = document) {
  const el = parent.querySelector(selector);
  if (!el) throw new Error(`Element not found: "${selector}"`);
  return el;
}

export function qsAll(selector, parent = document) {
  return Array.from(parent.querySelectorAll(selector));
}
