import { products } from "@/app/data/products";
import ContactForm from "./contact-form";

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string | string[] }>;
}) {
  const { product: slug } = await searchParams;
  const product = typeof slug === "string"
    ? products.find((item) => item.slug === slug)
    : undefined;
  const initialMessage = product
    ? `Hello, I would like a quote for ${product.name}${product.sku ? ` (SKU: ${product.sku})` : ""}.`
    : "";

  return <ContactForm key={product?.slug ?? "general"} initialMessage={initialMessage} />;
}
