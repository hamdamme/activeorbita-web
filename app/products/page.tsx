import Link from "next/link";
import { products } from "@/app/data/products";

export default function ProductsPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        {/* Header */}
        <div className="mb-12 border-b border-gray-200 pb-6">
          <h1 className="text-3xl font-semibold text-gray-900">
            Product Catalog
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Wholesale automotive products for reliable supply and export operations.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="group">
              {/* Image */}
              <div className="aspect-square w-full overflow-hidden bg-gray-100">
                <img
                  src={product.image}
  alt={product.name}
  onError={(e) => {
    (e.currentTarget as HTMLImageElement).src = "/placeholder.jpg";
  }}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              {/* Info */}
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
      </div>
    </div>
  );
}