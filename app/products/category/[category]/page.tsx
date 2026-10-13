import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/app/data/products";
import ProductCatalog from "../../product-catalog";

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const categoryProducts = products.filter((product) => product.category.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-") === category);
  if (!categoryProducts.length) notFound();

  return (
    <main className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <Link href="/products" className="text-sm text-gray-600 underline underline-offset-4">Back to Categories</Link>
        <div className="mb-10 mt-8 border-b border-gray-200 pb-6">
          <h1 className="text-4xl font-semibold text-gray-900">{categoryProducts[0].category}</h1>
          <p className="mt-3 text-gray-600">Find products by brand, product type or name. Contact us for quantities and wholesale pricing.</p>
        </div>
        <ProductCatalog products={categoryProducts} />
      </div>
    </main>
  );
}
