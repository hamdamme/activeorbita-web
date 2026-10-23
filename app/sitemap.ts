import type { MetadataRoute } from "next";
import { products } from "@/app/data/products";
import { absoluteUrl, categorySlug } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const categories = [...new Set(products.map((product) => product.category))];
  const paths = ["/", "/about", "/services", "/products", "/contact", ...categories.map((category) => `/products/category/${categorySlug(category)}`), ...products.map((product) => `/products/${product.slug}`)];
  return [...new Set(paths)].map((path) => ({ url: absoluteUrl(path) }));
}
