import type { Product } from "../app/data/products";

export type QuoteProduct = Pick<Product, "slug" | "name" | "sku" | "packages">;
export const toQuoteProduct = ({ slug, name, sku, packages }: Product): QuoteProduct => ({ slug, name, sku, packages });

export type QuoteItem = { slug: string; packageId: string; quantity: number; unit: "units" | "cases" | "packages" };
export const maxQuantity = 9999;
export const maxItems = 50;
export const itemKey = (item: Pick<QuoteItem, "slug" | "packageId" | "unit">) => `${item.slug}:${item.packageId}:${item.unit}`;
export const validQuantity = (value: number) => Number.isInteger(value) && value >= 1 && value <= maxQuantity;

export function parseBasket(raw: string | null): QuoteItem[] {
  try {
    const data: unknown = JSON.parse(raw || "null");
    if (!data || typeof data !== "object" || !("version" in data) || data.version !== 1 || !("items" in data) || !Array.isArray(data.items)) return [];
    const result: QuoteItem[] = [];
    for (const value of data.items.slice(0, maxItems)) {
      if (!value || typeof value !== "object") continue;
      const { slug, packageId, quantity, unit } = value;
      if (typeof slug !== "string" || slug.length > 200 || typeof packageId !== "string" || packageId.length > 100 || !validQuantity(quantity) || !["units", "cases", "packages"].includes(unit)) continue;
      const item = { slug, packageId, quantity, unit } as QuoteItem;
      const existing = result.find((row) => itemKey(row) === itemKey(item));
      if (existing) existing.quantity = Math.min(maxQuantity, existing.quantity + quantity);
      else result.push(item);
    }
    return result;
  } catch { return []; }
}

export function resolveBasket(items: QuoteItem[], catalog: QuoteProduct[]) {
  return items.flatMap((item) => {
    const product = catalog.find((p) => p.slug === item.slug);
    if (!product) return [];
    const packaging = product.packages?.find((p) => p.id === item.packageId);
    if (product.packages?.length ? !packaging || item.unit !== "packages" : item.packageId !== "" || item.unit === "packages") return [];
    return [{ item, product, packaging }];
  });
}

export function basketMessage(items: QuoteItem[], catalog: QuoteProduct[]) {
  const lines = resolveBasket(items, catalog).map(({ item, product, packaging }, index) =>
    `${index + 1}. ${product.name}${product.sku ? ` (SKU: ${product.sku})` : ""}\nQuantity: ${item.quantity} ${item.unit}${packaging ? `\nPackage: ${packaging.label}${packaging.manufacturerPartNumber ? ` (Manufacturer part: ${packaging.manufacturerPartNumber})` : ""}` : ""}`
  );
  return `Hello, I would like a quote for the following products:\n\n${lines.join("\n\n")}\n\nPlease confirm availability, pricing, case quantities and delivery options.`;
}
