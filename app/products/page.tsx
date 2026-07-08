"use client";

import Image from "next/image";
import Link from "next/link";
import { products } from "@/app/data/products";

const categories = Array.from(new Set(products.map((p) => p.category)));

export default function ProductsPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        {/* Header */}
        <div className="mb-12 border-b border-gray-200 pb-6">
          <h1 className="text-4xl font-bold text-gray-900">
            Product Categories
          </h1>

          <p className="mt-3 max-w-2xl text-base text-gray-600">
            Choose a category to explore our wholesale product offerings.
          </p>
        </div>

        {/* Categories */}
        <div className="grid gap-8 md:grid-cols-3">
          {categories.map((category) => {
            const categorySlug = category
              .toLowerCase()
              .replace(/&/g, "and")
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/^-|-$/g, "");

            const count = products.filter(
              (product) => product.category === category
            ).length;

            const image =
              category === "Motor Oil & Transmission Fluids"
                ? "/images/categories/motor-oil.png"
                : category === "Auto Parts"
                ? "/images/categories/auto-parts.png"
                : "/images/categories/general-merchandise.png";

            const description =
              category === "Motor Oil & Transmission Fluids"
                ? "Premium engine oils, transmission fluids, lubricants, and automotive chemicals for commercial fleets, distributors, and wholesale buyers."
                : category === "Auto Parts"
                ? "Quality replacement parts and maintenance components for passenger vehicles, trucks, and commercial fleets."
                : "Wholesale general merchandise including personal care products, household essentials, and everyday retail items.";

            return (
              <Link
                key={category}
                href={`/products/category/${categorySlug}`}
                className="group flex min-h-[560px] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Category Image */}
                <div className="overflow-hidden bg-gray-50">
                  <Image
                    src={image}
                    alt={category}
                    width={600}
                    height={400}
                    className="h-72 w-full object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                    priority
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {category}
                    </h2>

                    <p className="mt-5 text-sm leading-7 text-gray-600">
                      {description}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="mt-10 border-t border-gray-200 pt-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {count} Products
                      </span>

                      <span className="font-semibold text-black transition group-hover:translate-x-1">
                        View Collection →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}