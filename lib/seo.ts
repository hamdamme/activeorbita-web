import type { Metadata } from "next";
import type { Product } from "@/app/data/products";

export const siteUrl = "https://www.activeorbita.com";
export const siteName = "Active Orbit INC";
export const siteDescription = "Explore motor oils, auto parts and personal-care products for wholesale supply. Request product availability, packaging options and a quote from Active Orbit INC.";
export const absoluteUrl = (path: string) => new URL(path, `${siteUrl}/`).toString();
export const categorySlug = (category: string) => category.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export function pageMetadata(title: string, description: string, path: string, image?: string): Metadata {
  const fullTitle = `${title} | ${siteName}`;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: { type: "website", locale: "en_US", siteName, title: fullTitle, description, url: absoluteUrl(path), ...(image ? { images: [{ url: absoluteUrl(image), alt: title }] } : {}) },
    twitter: { card: image ? "summary_large_image" : "summary", title: fullTitle, description, ...(image ? { images: [absoluteUrl(image)] } : {}) },
  };
}

export function productStructuredData(product: Product) {
  const url = absoluteUrl(`/products/${product.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${url}#product`,
    url,
    name: product.name,
    description: product.description,
    category: product.category,
    ...(product.sku ? { sku: product.sku } : {}),
    ...(product.brand ? { brand: { "@type": "Brand", name: product.brand } } : {}),
    ...(product.image ? { image: { "@type": "ImageObject", contentUrl: absoluteUrl(product.image), caption: product.imageCaption || product.imageNote || product.name } } : {}),
  };
}

export function breadcrumbStructuredData(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: absoluteUrl(item.path) })),
  };
}

// Escape HTML delimiters before placing catalog text inside a script element.
export const serializeStructuredData = (data: unknown) => JSON.stringify(data).replace(/</g, "\\u003c");
