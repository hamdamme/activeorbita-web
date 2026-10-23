import { pageMetadata } from "@/lib/seo";
import { toQuoteProduct } from "@/lib/quote-basket";
import { products } from "@/app/data/products";
import QuoteBasket from "./quote-basket";

export const metadata = { ...pageMetadata('Your Quote List', 'Review your selected products, quantities and package sizes before requesting a combined wholesale quote.', '/quote'), robots: { index: false, follow: true } };

export default function QuotePage() {
  return <QuoteBasket catalog={products.map(toQuoteProduct)} />;
}
