"use client";

import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/app/data/products";
import ProductImage from "./product-image";

const pageSize = 24;
const emptyFilters = { search: "", brand: "", subcategory: "", viscosity: "" };

export default function ProductCatalog({ products }: { products: Product[] }) {
  const [filters, setFilters] = useState(emptyFilters);
  const [limit, setLimit] = useState(pageSize);
  const brands = [...new Set(products.map((p) => p.brand || "Other products"))].sort();
  const subcategories = [...new Set(products.map((p) => p.subcategory))].sort();
  const viscosities = [...new Set(products.flatMap((p) => p.viscosity ? [p.viscosity] : []))].sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  const filtered = products.filter((p) => {
    const text = `${p.name} ${p.brand ?? ""} ${p.sku ?? ""} ${p.subcategory} ${p.packaging ?? ""}`.toLowerCase();
    return filters.search.toLowerCase().trim().split(/\s+/).every((word) => text.includes(word))
      && (!filters.brand || (p.brand || "Other products") === filters.brand)
      && (!filters.subcategory || p.subcategory === filters.subcategory)
      && (!filters.viscosity || p.viscosity === filters.viscosity);
  });

  function update(key: keyof typeof emptyFilters, value: string) {
    setFilters((current) => ({ ...current, [key]: value }));
    setLimit(pageSize);
  }

  const fieldClass = "mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900";
  return (
    <>
      <div className="mb-8 rounded-2xl border border-gray-200 bg-gray-50 p-5">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <label className="text-sm font-medium text-gray-700">
            Search products
            <input type="search" placeholder="Name, brand or SKU" value={filters.search} onChange={(event) => update("search", event.target.value)} className={fieldClass} />
          </label>
          <label className="text-sm font-medium text-gray-700">
            Brand
            <select value={filters.brand} onChange={(event) => update("brand", event.target.value)} className={fieldClass}>
              <option value="">All brands</option>
              {brands.map((brand) => <option key={brand}>{brand}</option>)}
            </select>
          </label>
          <label className="text-sm font-medium text-gray-700">
            Product type
            <select value={filters.subcategory} onChange={(event) => update("subcategory", event.target.value)} className={fieldClass}>
              <option value="">All types</option>
              {subcategories.map((category) => <option key={category}>{category}</option>)}
            </select>
          </label>
          {viscosities.length > 0 && <label className="text-sm font-medium text-gray-700">
            Viscosity
            <select value={filters.viscosity} onChange={(event) => update("viscosity", event.target.value)} className={fieldClass}>
              <option value="">All viscosities</option>
              {viscosities.map((viscosity) => <option key={viscosity}>{viscosity}</option>)}
            </select>
          </label>}
        </div>
        <div className="mt-4 flex items-center justify-between gap-4 text-sm">
          <p role="status" className="text-gray-600">{filtered.length} {filtered.length === 1 ? "product" : "products"} found</p>
          {Object.values(filters).some(Boolean) && <button type="button" onClick={() => { setFilters(emptyFilters); setLimit(pageSize); }} className="font-medium underline underline-offset-4">Clear filters</button>}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-gray-200 px-6 py-16 text-center">
          <h2 className="text-xl font-semibold">No matching products</h2>
          <p className="mt-3 text-gray-600">Try another search or clear your filters.</p>
        </div>
      ) : (
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.slice(0, limit).map((product) => (
            <article key={product.id} className="group flex flex-col">
              <Link href={`/products/${product.slug}`} aria-label={`View ${product.name}`}><ProductImage product={product} /></Link>
              <div className="mt-4 flex flex-1 flex-col">
                <p className="text-xs font-medium uppercase tracking-wide text-gray-500">{product.brand || product.subcategory}</p>
                <h2 className="mt-2 text-lg font-semibold text-gray-900"><Link href={`/products/${product.slug}`} className="hover:underline">{product.name}</Link></h2>
                <p className="mt-2 text-sm leading-6 text-gray-600">{product.shortDescription}</p>
                {product.packages && <p className="mt-2 text-xs text-gray-500">1 gallon · 5 gallon pail · 55 gallon drum</p>}
                <div className="mt-auto flex items-center justify-between gap-3 pt-5 text-sm">
                  <span className="font-medium">{product.price}</span>
                  <Link href={`/products/${product.slug}`} className="font-medium underline underline-offset-4">View Details</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
      {filtered.length > limit && <div className="mt-12 text-center"><button type="button" onClick={() => setLimit((current) => current + pageSize)} className="rounded-full border border-gray-900 px-6 py-3 text-sm font-medium transition hover:bg-gray-900 hover:text-white">Show more products ({filtered.length - limit} remaining)</button></div>}
    </>
  );
}
