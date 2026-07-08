import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/app/data/products";

type CategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

function createSlug(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
function getCategoryImage(category: string) {
  switch (category) {
    case "Motor Oil & Transmission Fluids":
      return "/images/products/motor-oil.png";

    case "Auto Parts":
      return "/images/products/auto-parts.png";

    case "General Merchandise":
      return "/images/products/general-merchandise.png";

    default:
      return "/placeholder.jpg";
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;

  const categoryProducts = products.filter(
    (product) => createSlug(product.category) === category
  );

  if (categoryProducts.length === 0) {
    notFound();
  }

  const categoryName = categoryProducts[0].category;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="mb-8">
          <Link
            href="/products"
            className="text-sm text-gray-500 underline underline-offset-4"
          >
            Back to Categories
          </Link>
        </div>

        <div className="mb-12 border-b border-gray-200 pb-6">
          <h1 className="text-4xl font-bold text-gray-900">{categoryName}</h1>
          <p className="mt-3 text-base text-gray-600">
            Browse available products in this category.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {categoryProducts.map((product) => (
            <div key={product.id} className="group">
              <div className="aspect-square overflow-hidden bg-gray-100">
                <Image
  src={product.image || getCategoryImage(product.category)}
  alt={product.name}
  width={600}
  height={600}
  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
/>
              </div>

              <div className="mt-4">
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  {product.subcategory}
                </p>

                <h2 className="mt-1 text-lg font-medium text-gray-900">
                  {product.name}
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {product.shortDescription}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-900">
                    {product.price}
                  </span>

                  <Link
                    href={`/products/${product.slug}`}
                    className="text-sm font-medium text-black underline underline-offset-4"
                  >
                    View Details
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