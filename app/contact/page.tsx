import { pageMetadata } from "@/lib/seo";
import { toQuoteProduct } from "@/lib/quote-basket";
import { products } from "@/app/data/products";
import BasketInquiry from "./basket-inquiry";
import ContactForm from "./contact-form";
import { getInquiryMessage, getProductPackage } from "@/lib/product-inquiry";

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ product?: string | string[]; basket?: string | string[]; package?: string | string[] }> }) {
  const query = await searchParams;
  return {
    ...pageMetadata("Contact Us & Request a Wholesale Quote", "Contact Active Orbit INC at 773-882-8507. Send your product list, quantities and delivery requirements to request a wholesale quote.", "/contact"),
    ...(query.product !== undefined || query.basket !== undefined || query.package !== undefined ? { robots: { index: false, follow: true } } : {}),
  };
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string | string[]; package?: string | string[]; basket?: string | string[] }>;
}) {
  const { product: slug, package: packageId, basket } = await searchParams;
  if (basket === "1") return <BasketInquiry catalog={products.map(toQuoteProduct)} />;
  const product = typeof slug === "string"
    ? products.find((item) => item.slug === slug)
    : undefined;
  const selected = product ? getProductPackage(product, packageId) : undefined;
  const initialMessage = product ? getInquiryMessage(product, packageId) : "";

  return <ContactForm key={`${product?.slug ?? "general"}:${selected?.id ?? ""}`} initialMessage={initialMessage} />;
}
