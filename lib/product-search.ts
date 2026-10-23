import type { Product } from "../app/data/products";

// Buyers commonly enter grades as either 15W40 or 15W-40.
function normalize(value: string) {
  return value.toLowerCase().replace(/(\d+)\s*w\s*[-–]?\s*(\d+)/g, "$1w$2");
}

export function matchesProductSearch(product: Product, query: string) {
  const searchable = normalize([
    product.name, product.brand, product.sku, product.selectionCode,
    product.category, product.subcategory, product.viscosity, product.packaging,
    product.unitSize, product.format,
    ...(product.packages ?? []).flatMap((item) => [item.label, item.manufacturerPartNumber]),
  ].filter(Boolean).join(" "));
  return normalize(query).trim().split(/\s+/).every((word) => searchable.includes(word));
}
