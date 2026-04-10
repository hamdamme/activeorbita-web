import { notFound } from "next/navigation";
import { products } from "@/app/data/products";

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[400px] object-cover rounded-2xl shadow-sm"
          />
        </div>

        <div>
          <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">
            {product.category}
          </p>

          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

          <p className="text-lg text-gray-600 mb-6">
            {product.description}
          </p>

          <p className="text-2xl font-semibold mb-6">{product.price}</p>

          <button className="bg-black text-white px-6 py-3 rounded-xl hover:opacity-90 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}