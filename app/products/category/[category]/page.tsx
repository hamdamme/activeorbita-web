import { pageMetadata, categorySlug, breadcrumbStructuredData, serializeStructuredData } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/app/data/products";
import ProductCatalog from "../../product-catalog";

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const product = products.find((item) => categorySlug(item.category) === category);
  if (!product) notFound();
  return pageMetadata(`${product.category} Wholesale Catalog`, `Browse ${product.category.toLowerCase()} from Active Orbit INC. Find products by brand and type, then request quantities, availability and wholesale pricing.`, `/products/category/${category}`);
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const categoryProducts = products.filter((product) => categorySlug(product.category) === category);
  if (!categoryProducts.length) notFound();

  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeStructuredData(breadcrumbStructuredData([{ name: "Home", path: "/" }, { name: "Products", path: "/products" }, { name: categoryProducts[0].category, path: `/products/category/${category}` }])) }} />
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
