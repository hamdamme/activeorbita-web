import { pageMetadata, siteUrl, serializeStructuredData } from "@/lib/seo";
import Link from "next/link";
import ProductImage from "./products/product-image";
import { products } from "@/app/data/products";

const collections = [
  {
    title: "Motor oils & lubricants",
    href: "/products/category/motor-oil-and-transmission-fluids",
    description: "Passenger-car oils, heavy-duty diesel oils and transmission fluids. Explore gallon, pail and drum options on selected diesel oils.",
    brands: "Mobil 1 · Mobil Super · Mobil Delvac · Everest · Castrol · Shell",
  },
  {
    title: "Personal care & everyday essentials",
    href: "/products/category/general-merchandise",
    description: "Antiperspirants, toothpaste, toothbrushes and everyday merchandise for your retail assortment.",
    brands: "Old Spice · Degree · Crest · Oral-B",
  },
  {
    title: "Auto parts & maintenance",
    href: "/products/category/auto-parts",
    description: "Browse replacement parts and maintenance products. Include vehicle details in your inquiry so we can confirm the right fit.",
    brands: "Filters · Brakes · Maintenance components",
  },
];

const featuredSlugs = [
  "mobil-1-full-synthetic-5w-30",
  "everest-advanced-ck-4-synthetic-blend-diesel-15w-40",
  "old-spice-high-endurance-pure-sport-antiperspirant",
  "crest-cavity-protection-toothpaste",
];
const featuredProducts = featuredSlugs.flatMap((slug) => {
  const product = products.find((item) => item.slug === slug);
  return product ? [product] : [];
});
const orderingSteps = [
  { title: "Find your products", description: "Browse the catalog by brand, product type or oil viscosity. Open a product to review its details and package options." },
  { title: "Tell us what you need", description: "Request a quote with your quantities, preferred packaging and delivery destination. You can also contact us by phone or WhatsApp." },
  { title: "Confirm your order", description: "We confirm availability, pricing and delivery details with you before you place an order." },
];

export const metadata = pageMetadata('Wholesale Motor Oil, Auto Parts & Personal Care', 'Browse Mobil, Everest, Castrol, Shell, Old Spice, Degree, Crest and Oral-B products. Request a wholesale quote with your quantities and packaging needs.', '/');

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeStructuredData({ "@context": "https://schema.org", "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "Active Orbit INC", url: siteUrl, telephone: "+1-773-882-8507", email: "info@activeorbita.com" }) }} />
      <section className="border-b border-gray-200 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 lg:grid-cols-[1.2fr_1fr] lg:px-10 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">Active Orbit INC · Wholesale supply</p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">Motor oils, auto parts & everyday essentials.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">Explore automotive and personal-care products for your business. Choose your products, share your quantities, and request a quote from our team.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products" className="rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-700">Browse Products</Link>
              <Link href="/contact" className="rounded-full border border-gray-300 px-6 py-3 text-sm font-medium transition hover:border-gray-900">Request a Quote</Link>
            </div>
            <p className="mt-5 text-sm text-gray-600">Prefer to talk? <a href="tel:+17738828507" className="font-semibold text-gray-900 underline underline-offset-4">773-882-8507</a></p>
          </div>
          <div className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">Explore our catalog</p>
            <div className="mt-5 divide-y divide-gray-200">
              {collections.map((collection) => (
                <Link key={collection.href} href={collection.href} className="group block rounded py-5 first:pt-0 last:pb-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900">
                  <div className="flex items-start justify-between gap-4"><h2 className="text-xl font-semibold group-hover:underline">{collection.title}</h2><span aria-hidden="true">↗</span></div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">{collection.brands}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="featured-heading" className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-16">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div><p className="text-sm font-semibold uppercase tracking-wide text-gray-500">From our catalog</p><h2 id="featured-heading" className="mt-3 text-3xl font-semibold">Explore products for your business</h2></div>
          <Link href="/products" className="text-sm font-medium underline underline-offset-4">View all products →</Link>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <article key={product.id} className="group flex flex-col">
              <Link href={`/products/${product.slug}`} aria-label={`View ${product.name}`}><ProductImage product={product} /></Link>
              <p className="mt-4 text-xs font-medium uppercase tracking-wide text-gray-500">{product.brand}</p>
              <h3 className="mt-2 text-lg font-semibold"><Link href={`/products/${product.slug}`} className="hover:underline">{product.name}</Link></h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{product.shortDescription}</p>
              <Link href={`/products/${product.slug}`} className="mt-auto pt-4 text-sm font-medium underline underline-offset-4">View product & options</Link>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="collections-heading" className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-16">
          <h2 id="collections-heading" className="text-3xl font-semibold">Shop by business need</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {collections.map((collection) => (
              <div key={collection.href} className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
                <h3 className="text-xl font-semibold">{collection.title}</h3>
                <p className="mt-4 text-sm leading-7 text-gray-600">{collection.description}</p>
                <Link href={collection.href} className="mt-auto pt-6 text-sm font-medium underline underline-offset-4">Browse collection →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="ordering-heading" className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-16">
        <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">How to order</p>
        <h2 id="ordering-heading" className="mt-3 text-3xl font-semibold">From product selection to a confirmed quote</h2>
        <ol className="mt-8 grid gap-8 md:grid-cols-3">
          {orderingSteps.map((step, index) => (
            <li key={step.title}>
              <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-sm font-semibold text-white">{index + 1}</span>
              <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">{step.description}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 border-t border-gray-200 pt-6 text-sm text-gray-600">Planning an export order? Include your destination and packaging requirements. <Link href="/services" className="font-medium text-gray-900 underline underline-offset-4">Explore our services</Link>.</p>
      </section>

      <section className="bg-gray-900 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-14 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-16">
          <div className="max-w-xl"><h2 className="text-3xl font-semibold">Ready to discuss your order?</h2><p className="mt-4 leading-7 text-gray-300">Send your product list, quantities and destination. Our team will help confirm the details for your quote.</p></div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-gray-900 transition hover:bg-gray-200">Request a Quote</Link>
            <a href="https://wa.me/17738828507" target="_blank" rel="noopener noreferrer" className="rounded-full border border-gray-500 px-6 py-3 text-sm font-medium transition hover:border-white">WhatsApp Us</a>
          </div>
        </div>
      </section>
    </main>
  );
}
