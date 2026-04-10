import { products } from "@/app/data/products";

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-10">Products</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="rounded-xl mb-4 h-40 w-full object-cover"
            />

            <h2 className="text-xl font-semibold mb-2">
              {product.name}
            </h2>

            <p className="text-gray-600 mb-4">
              {product.shortDescription}
            </p>

            <p className="font-bold mb-4">{product.price}</p>

            <button className="bg-black text-white px-4 py-2 rounded-xl">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}