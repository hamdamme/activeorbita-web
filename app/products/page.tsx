import Link from "next/link";
import { products } from "@/app/data/products";

export default function ProductsPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Product Catalog
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Premium automotive product solutions
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Explore our featured product line designed for wholesale distribution,
            export operations, and dependable supply partnerships.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="mb-3 flex items-center justify-between gap-4">
                  <span className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-600">
                    {product.category}
                  </span>
                  <span className="text-lg font-bold text-gray-900">
                    {product.price}
                  </span>
                </div>

                <h2 className="mb-3 text-2xl font-semibold text-gray-900">
                  {product.name}
                </h2>

                <p className="mb-6 text-sm leading-7 text-gray-600">
                  {product.shortDescription}
                </p>

                <Link
                  href={`/products/${product.slug}`}
                  className="inline-flex items-center rounded-full bg-gray-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-black"
                >
                  View Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}