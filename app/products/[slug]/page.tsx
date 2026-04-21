import Link from "next/link";
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
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="mb-8">
          <Link
            href="/products"
            className="text-sm text-gray-500 underline underline-offset-4"
          >
            Back to Products
          </Link>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="overflow-hidden bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-wide text-gray-500">
              {product.category}
            </p>

            <h1 className="mt-2 text-3xl font-semibold text-gray-900">
              {product.name}
            </h1>

            <p className="mt-4 text-lg font-medium text-gray-900">
              {product.price}
            </p>

            <p className="mt-6 text-base leading-7 text-gray-600">
              {product.description}
            </p>
            <div className="mt-6 space-y-3 text-sm text-gray-700">
                  {product.packaging && (
                <p>
                <span className="font-medium text-gray-900">Packaging:</span>{" "}
      {product.packaging}
    </p>
  )}

  {product.moq && (
    <p>
      <span className="font-medium text-gray-900">MOQ:</span> {product.moq}
    </p>
  )}

  {product.specs && (
    <div>
      <p className="font-medium text-gray-900 mb-1">Specifications:</p>
      <ul className="list-disc list-inside space-y-1">
        {product.specs.map((spec, index) => (
          <li key={index}>{spec}</li>
        ))}
      </ul>
    </div>
  )}
</div>
            

          <div className="mt-8 flex gap-4">
  <Link
    href="/contact"
    className="inline-flex rounded-none border border-gray-900 px-6 py-3 text-sm font-medium text-gray-900 transition hover:bg-gray-900 hover:text-white"
  >
    Request a Quote
  </Link>

  <a
    href={`https://wa.me/7738825595?text=${encodeURIComponent(
      product.whatsappMessage || `Hello, I am interested in ${product.name}.`
    )}`}
    target="_blank"
    className="inline-flex rounded-none border border-green-600 px-6 py-3 text-sm font-medium text-green-600 transition hover:bg-green-600 hover:text-white"
  >
    WhatsApp
  </a>
</div>
          </div>
        </div>
      </div>
    </div>
  );
}