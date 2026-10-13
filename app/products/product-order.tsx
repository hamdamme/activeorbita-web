"use client";

import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/app/data/products";
import { getInquiryMessage, getProductPackage } from "@/lib/product-inquiry";

export default function ProductOrder({ product }: { product: Product }) {
  const [packageId, setPackageId] = useState(product.packages?.[0]?.id ?? "");
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
      <div className="mt-6 flex flex-wrap gap-4">
        <Link href={`/contact?${query}`} className="rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-700">
          Request a Quote
        </Link>
        <a href={`https://wa.me/17738828507?text=${encodeURIComponent(getInquiryMessage(product, packageId))}`} target="_blank" rel="noopener noreferrer" className="rounded-full border border-green-700 px-6 py-3 text-sm font-medium text-green-700 transition hover:bg-green-700 hover:text-white">
          WhatsApp
        </a>
      </div>
    </div>
  );
}
