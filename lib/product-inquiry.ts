import type { Product } from "@/app/data/products";

export function getProductPackage(product: Product, packageId?: string | string[]) {
  return typeof packageId === "string"
    ? product.packages?.find((option) => option.id === packageId)
    : undefined;
}

export function getInquiryMessage(product: Product, packageId?: string | string[]) {
  const selected = getProductPackage(product, packageId);
  return `Hello, I would like a quote for ${product.name}${product.sku ? ` (SKU: ${product.sku})` : ""}.${selected ? `\nPackage: ${selected.label}${selected.manufacturerPartNumber ? ` (Manufacturer part: ${selected.manufacturerPartNumber})` : ""}.` : ""}${product.fitmentNote ? "\nVehicle / seat make and model:\nYear / engine (if applicable):\nExisting part number / dimensions:" : ""}`;
}
