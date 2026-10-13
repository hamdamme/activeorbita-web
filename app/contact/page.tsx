import { products } from "@/app/data/products";
import ContactForm from "./contact-form";
import { getInquiryMessage, getProductPackage } from "@/lib/product-inquiry";

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string | string[]; package?: string | string[] }>;
}) {
  const { product: slug, package: packageId } = await searchParams;
  const product = typeof slug === "string"
    ? products.find((item) => item.slug === slug)
    : undefined;
  const selected = product ? getProductPackage(product, packageId) : undefined;
  const initialMessage = product ? getInquiryMessage(product, packageId) : "";

  return <ContactForm key={`${product?.slug ?? "general"}:${selected?.id ?? ""}`} initialMessage={initialMessage} />;
}
