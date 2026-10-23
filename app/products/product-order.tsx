"use client";

import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/app/data/products";
import { addQuoteItem, useQuoteBasket } from "@/app/quote/basket-store";
import { maxQuantity, validQuantity, type QuoteItem } from "@/lib/quote-basket";
import { getInquiryMessage, getProductPackage } from "@/lib/product-inquiry";

export default function ProductOrder({ product }: { product: Product }) {
  const [packageId, setPackageId] = useState(product.packages?.[0]?.id ?? "");
  const [quantity, setQuantity] = useState("1");
  const [unit, setUnit] = useState<QuoteItem["unit"]>("units");
  const [feedback, setFeedback] = useState("");
  const { ready } = useQuoteBasket();
  const selected = getProductPackage(product, packageId);
  const query = new URLSearchParams({ product: product.slug });
  if (selected) query.set("package", selected.id);

  return (
    <div className="mt-8">
      {product.packages?.length ? (
        <fieldset>
          <legend className="text-sm font-semibold text-gray-900">Choose your package</legend>
          <div className="mt-3 flex flex-wrap gap-3">
            {product.packages.map((option) => (
              <label key={option.id} className="cursor-pointer">
                <input
                  type="radio"
                  name="package"
                  value={option.id}
                  checked={packageId === option.id}
                  onChange={() => setPackageId(option.id)}
                  className="peer sr-only"
                />
                <span className="inline-flex rounded-xl border border-gray-300 px-4 py-3 text-sm transition peer-checked:border-gray-900 peer-checked:bg-gray-900 peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-gray-900">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
          <p className="mt-3 text-sm text-gray-500">Package availability and order quantities are confirmed with your quote.</p>
          {selected?.manufacturerPartNumber && (
            <p className="mt-2 text-sm text-gray-600">Manufacturer part: {selected.manufacturerPartNumber}</p>
          )}
        </fieldset>
      ) : null}
      <form className="mt-6 rounded-2xl border border-gray-200 p-5" onSubmit={(event) => {
        event.preventDefault();
        if (!validQuantity(Number(quantity))) return;
        const added = addQuoteItem({ slug: product.slug, packageId: selected?.id || "", quantity: Number(quantity), unit: selected ? "packages" : unit });
        setFeedback(added ? "Added to your quote list." : "Your list allows up to 50 items and 9,999 per item. Review your list to adjust quantities.");
      }}>
        <div className="flex flex-wrap items-end gap-3">
          <label className="text-sm font-medium">Quantity
            <input type="number" min={1} max={maxQuantity} step={1} required value={quantity} onChange={(event) => { setQuantity(event.target.value); setFeedback(""); }} className="mt-2 block w-24 rounded-xl border border-gray-300 px-3 py-3" />
          </label>
          {selected ? <p className="pb-3 text-sm text-gray-600">of the selected package</p> : <label className="text-sm font-medium">Order unit<select value={unit} onChange={(event) => setUnit(event.target.value as QuoteItem["unit"])} className="mt-2 block rounded-xl border border-gray-300 bg-white px-3 py-3"><option value="units">Individual units</option><option value="cases">Cases</option></select></label>}
          <button type="submit" disabled={!ready} className="rounded-full bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-700 disabled:opacity-50">Add to Quote List</button>
        </div>
        <p className="mt-3 text-xs text-gray-500">Collect multiple products, then request one quote. Case quantities and availability are confirmed by our team.</p>
        <p role="status" className="mt-3 text-sm">{feedback}</p>
        <Link href="/quote" className="mt-2 inline-block text-sm font-medium underline underline-offset-4">Review quote list →</Link>
      </form>
      <div className="mt-6 flex flex-wrap gap-4">
        <Link href={`/contact?${query}`} className="rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-700">
          Ask About This Product
        </Link>
        <a href={`https://wa.me/17738828507?text=${encodeURIComponent(getInquiryMessage(product, packageId))}`} target="_blank" rel="noopener noreferrer" className="rounded-full border border-green-700 px-6 py-3 text-sm font-medium text-green-700 transition hover:bg-green-700 hover:text-white">
          WhatsApp
        </a>
      </div>
    </div>
  );
}
