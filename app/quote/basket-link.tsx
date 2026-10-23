"use client";
import Link from "next/link";
import { useQuoteBasket } from "./basket-store";

export default function BasketLink() {
  const { items } = useQuoteBasket();
  return <Link href="/quote" aria-label={`Quote basket, ${items.length} ${items.length === 1 ? "item" : "items"}`} className="inline-flex min-h-11 shrink-0 items-center rounded-full border border-gray-300 px-3 py-2 text-sm font-medium hover:border-gray-900">Quote <span className="ml-1">({items.length})</span></Link>;
}
