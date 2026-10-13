import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/app/data/products";
import ProductImage from "../product-image";
import ProductOrder from "../product-order";

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();

  const details = [
    [product.brand ? "Catalog SKU" : "SKU", product.sku],
    ["Brand", product.brand],
    ["Oil Type", product.oilType],
    ["Viscosity", product.viscosity],
    ["API Rating", product.apiRating],
    ["Format", product.format],
    ["Unit Size", product.unitSize],
    ["Units / Case", product.unitsPerCase],
    ["Packaging", product.packaging],
    ["MOQ", product.moq],
  ].filter(([, value]) => value);
  const categorySlug = product.category.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-");

  return (
    <main className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <Link href={`/products/category/${categorySlug}`} className="text-sm text-gray-600 underline underline-offset-4">Back to {product.category}</Link>
        <div className="mt-8 grid items-start gap-12 lg:grid-cols-2">
          <figure>
            <ProductImage product={product} priority />
            {product.imageCaption && <figcaption className="mt-3 text-sm text-gray-500">{product.imageCaption}</figcaption>}
          </figure>
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">{product.brand ? `${product.brand} · ${product.subcategory}` : product.category}</p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl">{product.name}</h1>
            <p className="mt-4 text-lg font-medium">{product.price}</p>
            <p className="mt-6 leading-7 text-gray-600">{product.description}</p>
            <ProductOrder product={product} />
            <section className="mt-10 border-t border-gray-200 pt-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide">Product Details</h2>
              <dl className="mt-4 grid gap-4 text-sm sm:grid-cols-2">
                {details.map(([label, value]) => <div key={label} className="min-w-0"><dt className="font-medium text-gray-900">{label}</dt><dd className="mt-1 break-words text-gray-600">{value}</dd></div>)}
              </dl>
              {product.specs?.length ? <div className="mt-6"><h3 className="text-sm font-semibold">Key Features</h3><ul className="mt-3 space-y-2 text-sm text-gray-600">{product.specs.map((spec) => <li key={spec} className="border-b border-gray-100 pb-2">{spec}</li>)}</ul></div> : null}
              {product.sourceUrl && <a href={product.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block text-sm text-gray-600 underline underline-offset-4 hover:text-black">Manufacturer product information ↗</a>}
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
