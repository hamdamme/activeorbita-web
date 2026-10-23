import { pageMetadata, productStructuredData, breadcrumbStructuredData, serializeStructuredData, categorySlug as getCategorySlug } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/app/data/products";
import ProductImage from "../product-image";
import ProductOrder from "../product-order";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();
  return pageMetadata(product.name, `${product.shortDescription} Request availability, packaging and wholesale pricing from Active Orbit INC.`, `/products/${product.slug}`, product.image);
}

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
    ["Unit Size", product.unitSize || (product.brand && !product.packages ? "Specify your preferred size in the inquiry" : undefined)],
    ["Units / Case", product.unitsPerCase || (product.brand ? "Confirmed with your quote" : undefined)],
    ["Packaging", product.packaging],
    ["Minimum Order", product.moq || (product.brand ? "Confirmed with your quote" : undefined)],
  ].filter(([, value]) => value);
  const categorySlug = getCategorySlug(product.category);

  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeStructuredData([
        productStructuredData(product),
        breadcrumbStructuredData([{ name: "Home", path: "/" }, { name: "Products", path: "/products" }, { name: product.category, path: `/products/category/${categorySlug}` }, { name: product.name, path: `/products/${product.slug}` }]),
      ]) }} />
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <Link href={`/products/category/${categorySlug}`} className="text-sm text-gray-600 underline underline-offset-4">Back to {product.category}</Link>
        <div className="mt-8 grid items-start gap-12 lg:grid-cols-2">
          <figure>
            <ProductImage product={product} priority />
            {(product.imageCaption || product.imageNote) && <figcaption className="mt-3 text-sm leading-6 text-gray-500">{product.imageCaption || product.imageNote}</figcaption>}
          </figure>
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">{product.brand ? `${product.brand} · ${product.subcategory}` : product.category}</p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl">{product.name}</h1>
            <p className="mt-4 text-lg font-medium">{product.price}</p>
            <p className="mt-6 leading-7 text-gray-600">{product.description}</p>
            {product.manufacturerSizes?.length ? (
              <section className="mt-6 rounded-2xl bg-gray-50 p-5" aria-label="Manufacturer-listed sizes">
                <h2 className="text-sm font-semibold">Manufacturer-listed sizes</h2>
                <ul className="mt-3 flex flex-wrap gap-2">{product.manufacturerSizes.map((size) => <li key={size} className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm">{size}</li>)}</ul>
                <p className="mt-3 text-sm leading-6 text-gray-600">These are manufacturer references. Tell us your preferred size; availability and wholesale case quantities are confirmed with your quote.</p>
              </section>
            ) : null}
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
