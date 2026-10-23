"use client";

import Link from "next/link";
import { useState } from "react";
import type { QuoteProduct } from "@/lib/quote-basket";
import { itemKey, maxQuantity, resolveBasket, validQuantity } from "@/lib/quote-basket";
import { removeQuoteItem, updateQuoteQuantity, useQuoteBasket } from "./basket-store";

function Quantity({ value, label, onChange }: { value: number; label: string; onChange: (quantity: number) => void }) {
  const [draft, setDraft] = useState(String(value));
  return <input aria-label={label} type="number" min={1} max={maxQuantity} step={1} value={draft} onChange={(event) => { const next = event.target.value; setDraft(next);  }} onBlur={() => { if (validQuantity(Number(draft))) onChange(Number(draft)); else setDraft(String(value)); }} className="w-24 rounded-xl border border-gray-300 px-3 py-2" />;
}

export default function QuoteBasket({ catalog }: { catalog: QuoteProduct[] }) {
  const { items, ready, persistent } = useQuoteBasket();
  const resolved = resolveBasket(items, catalog);
  return <main className="mx-auto max-w-5xl px-6 py-12 lg:px-10">
    <Link href="/products" className="text-sm underline underline-offset-4">Continue browsing</Link>
    <h1 className="mt-6 text-4xl font-semibold">Your quote list</h1>
    <p className="mt-4 text-gray-600">Review products and quantities before requesting one quote. Pricing and availability are confirmed by our team.</p>
    {!ready ? <p role="status" className="mt-8">Loading your quote list…</p> : !items.length ? <div className="mt-8 rounded-2xl border border-gray-200 p-8"><h2 className="text-xl font-semibold">Your list is empty</h2><p className="mt-3 text-gray-600">Open a product, select its quantity and add it to your quote list.</p><Link href="/products" className="mt-6 inline-block rounded-full bg-gray-900 px-6 py-3 text-white">Browse Products</Link></div> : <>
      {!persistent && <p role="status" className="mt-6 text-amber-800">Browser storage is unavailable. Your list will last only until this page is reloaded.</p>}
      <ul className="mt-8 divide-y divide-gray-200 rounded-2xl border border-gray-200 px-5 sm:px-8">
        {items.map((item) => {
          const key = itemKey(item);
          const row = resolved.find((entry) => itemKey(entry.item) === key);
          return <li key={key} className="flex flex-col gap-5 py-6 sm:flex-row sm:justify-between">
            <div className="min-w-0 flex-1">{row ? <><h2 className="text-lg font-semibold"><Link href={`/products/${row.product.slug}`} className="hover:underline">{row.product.name}</Link></h2><p className="mt-2 text-sm text-gray-600">{row.packaging?.label || `Requested as ${item.unit}; pack counts will be confirmed.`}</p>{row.product.sku && <p className="mt-1 text-sm text-gray-500">SKU: {row.product.sku}</p>}</> : <p className="text-amber-800">This product or package is no longer listed. Remove it to continue.</p>}</div>
            <div className="flex flex-wrap items-center gap-3"><label className="flex items-center gap-2 text-sm">Quantity <Quantity key={`${key}:${item.quantity}`} value={item.quantity} label={`Quantity for ${row?.product.name || item.slug}, ${row?.packaging?.label || item.unit}`} onChange={(quantity) => updateQuoteQuantity(key, quantity)} /></label><span className="text-sm text-gray-500">{item.unit}</span><button type="button" onClick={() => removeQuoteItem(key)} aria-label={`Remove ${row?.product.name || item.slug}, ${row?.packaging?.label || item.unit}`} className="rounded px-2 py-2 text-sm underline underline-offset-4">Remove</button></div>
          </li>;
        })}
      </ul>
      <p className="mt-5 text-sm text-gray-500">Quantities refer to the selected package, individual units or cases. This is a quote request, not a purchase.</p>
      {resolved.length === items.length ? <Link href="/contact?basket=1" className="mt-6 inline-block rounded-full bg-gray-900 px-6 py-3 font-medium text-white hover:bg-gray-700">Request quote for {items.length} {items.length === 1 ? "item" : "items"}</Link> : <p role="status" className="mt-6 text-amber-800">Remove unavailable items before requesting your quote.</p>}
    </>}
  </main>;
}
