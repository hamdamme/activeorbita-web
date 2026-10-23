"use client";

import Link from "next/link";
import type { QuoteProduct } from "@/lib/quote-basket";
import { basketMessage, resolveBasket } from "@/lib/quote-basket";
import { useQuoteBasket } from "@/app/quote/basket-store";
import ContactForm from "./contact-form";

export default function BasketInquiry({ catalog }: { catalog: QuoteProduct[] }) {
  const { items, ready } = useQuoteBasket();
  if (!ready) return <main className="mx-auto max-w-5xl px-6 py-16"><p role="status">Loading your quote request…</p></main>;
  if (!items.length || resolveBasket(items, catalog).length !== items.length) return <main className="mx-auto max-w-5xl px-6 py-16"><h1 className="text-3xl font-semibold">Review your quote list</h1><p className="mt-4">Add products or remove unavailable packages before continuing.</p><Link href="/quote" className="mt-6 inline-block underline">Back to quote list</Link></main>;
  return <ContactForm initialMessage={basketMessage(items, catalog)} basketInquiry />;
}
