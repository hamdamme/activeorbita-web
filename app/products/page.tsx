"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { products } from "@/app/data/products";

const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase()) ||
        product.packaging?.toLowerCase().includes(search.toLowerCase()) ||
        product.specs?.some((spec) =>
          spec.toLowerCase().includes(search.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="mb-12 border-b border-gray-200 pb-6">
          <h1 className="text-3xl font-semibold text-gray-900">
            Product Catalog
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Wholesale automotive products for reliable supply and export operations.
          </p>
        </div>

        <div className="mb-10 grid gap-4 md:grid-cols-[1fr_220px]">
          <input
            type="text"
            placeholder="Search products, packaging, specs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-gray-900"
          />

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-gray-900"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="border border-gray-200 px-6 py-12 text-center">
            <p className="text-sm text-gray-600">No products found.</p>
          </div>
        ) : (
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="aspect-square w-full overflow-hidden bg-gray-100">
                 <Image
                    src={product.image}
                    alt={product.name}
                    width={600}
                    height={600}
                     className="h-full w-full object-cover"
                      />
                </div>

                <div className="mt-4">
                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    {product.category}
                  </p>

                  <h2 className="mt-1 text-lg font-medium text-gray-900">
                    {product.name}
                  </h2>

                  <p className="mt-1 text-sm text-gray-600">
                    {product.shortDescription}
                  </p>

                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-900">
                      {product.price}
                    </span>

                    <Link
                      href={`/products/${product.slug}`}
                      className="text-sm font-medium text-black underline underline-offset-4"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}