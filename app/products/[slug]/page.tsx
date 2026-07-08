import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/app/data/products";
import Image from "next/image";

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
            <Image
 src={
  product.image ||
  (product.category === "Motor Oil & Transmission Fluids"
    ? "/images/products/motor-oil.png"
    : product.category === "Auto Parts"
    ? "/images/products/auto-parts.png"
    : "/images/products/general-merchandise.png")
}
  alt={product.name}
  width={800}
  height={800}
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
           <div className="mt-8 border-t border-gray-200 pt-6">
  <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
    Product Details
  </h2>

  <div className="mt-4 grid gap-y-3 text-sm text-gray-700 sm:grid-cols-2 sm:gap-x-8">
    {product.sku && (
      <div>
        <span className="font-medium text-gray-900">SKU:</span> {product.sku}
      </div>
    )}

    {product.oilType && (
      <div>
        <span className="font-medium text-gray-900">Oil Type:</span> {product.oilType}
      </div>
    )}

    {product.viscosity && (
      <div>
        <span className="font-medium text-gray-900">Viscosity:</span> {product.viscosity}
      </div>
    )}

    {product.apiRating && (
      <div>
        <span className="font-medium text-gray-900">API Rating:</span> {product.apiRating}
      </div>
    )}

    {product.unitSize && (
      <div>
        <span className="font-medium text-gray-900">Unit Size:</span> {product.unitSize}
      </div>
    )}

    {product.unitsPerCase && (
      <div>
        <span className="font-medium text-gray-900">Units / Case:</span> {product.unitsPerCase}
      </div>
    )}

    {product.packaging && (
      <div>
        <span className="font-medium text-gray-900">Packaging:</span> {product.packaging}
      </div>
    )}

    {product.moq && (
      <div>
        <span className="font-medium text-gray-900">MOQ:</span> {product.moq}
      </div>
    )}
  </div>

  {product.specs && product.specs.length > 0 && (
    <div className="mt-6">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
        Key Features
      </h3>

      <ul className="mt-3 space-y-2 text-sm text-gray-700">
        {product.specs.map((spec, index) => (
          <li key={index} className="border-b border-gray-100 pb-2">
            {spec}
          </li>
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