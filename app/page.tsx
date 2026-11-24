import { pageMetadata, siteUrl, serializeStructuredData } from "@/lib/seo";
import Link from "next/link";
import Image from "next/image";
import ProductImage from "./products/product-image";
import { products } from "@/app/data/products";

const collections = [
  {
    title: "Motor oils & lubricants",
    image: "/images/products/brands/mobil-1-full-synthetic-5w-30.webp",
    href: "/products/category/motor-oil-and-transmission-fluids",
    description: "Passenger-car oils, heavy-duty diesel oils and transmission fluids. Explore gallon, pail and drum options on selected diesel oils.",
    brands: "Mobil 1 · Mobil Super · Mobil Delvac · Everest · Castrol · Shell",
  },
  {
    title: "Personal care",
    image: "/images/products/brands/crest-cavity-protection-toothpaste.webp",
    href: "/products/category/general-merchandise",
    description: "Antiperspirants, toothpaste, toothbrushes and everyday merchandise for your retail assortment.",
    brands: "Old Spice · Degree · Crest · Oral-B",
  },
  {
    title: "Truck & auto parts",
    image: "/images/products/truck-parts/drum-original.png",
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
    <main className="bg-white text-[#122637]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeStructuredData({ "@context": "https://schema.org", "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "Active Orbit INC", logo: `${siteUrl}/images/brand/active-orbit-original.png`, url: siteUrl, telephone: "+1-773-882-8507", email: "info@activeorbita.com" }) }} />
      <section className="border-b border-gray-200 bg-gradient-to-br from-white to-sky-50">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-10 lg:grid-cols-[1.2fr_1fr] lg:px-10 lg:py-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Active Orbit Inc · Wholesale supply</p>
            <h1 className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl lg:text-6xl">Essential products.<br /><span className="text-sky-700">One supply partner.</span></h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">Motor oils, truck parts, and everyday essentials. Build your product list. We’ll help with the quote.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products" className="rounded-lg bg-sky-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-800">Browse Products</Link>
              <Link href="/contact" className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium transition hover:border-gray-900">Request a Quote</Link>
            </div>
            <p className="mt-5 text-sm text-gray-600">Prefer to talk? <a href="tel:+17738828507" className="font-semibold text-gray-900 underline underline-offset-4">773-882-8507</a></p>
          </div>
          <div className="rounded-3xl border border-sky-100 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">From our catalog</p>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <Link href="/products/mobil-1-full-synthetic-5w-30" className="relative block h-52 rounded-xl focus-visible:outline-2 focus-visible:outline-sky-700 sm:h-64" aria-label="Explore Mobil 1 motor oil">
                <Image src="/images/products/brands/mobil-1-full-synthetic-5w-30.webp" alt="Mobil 1 motor oil — representative family photo" fill sizes="(max-width: 639px) 40vw, (max-width: 1023px) 35vw, 220px" className="object-contain" preload />
              </Link>
              <Link href="/products/semi-truck-brake-drums" className="relative block h-52 rounded-xl focus-visible:outline-2 focus-visible:outline-sky-700 sm:h-64" aria-label="Explore semi-truck brake drums">
                <Image src="/images/products/truck-parts/drum-original.png" alt="Semi-truck brake drum — representative photo" fill sizes="(max-width: 639px) 40vw, (max-width: 1023px) 35vw, 220px" className="object-contain" />
              </Link>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-4">
              <p className="text-sm font-medium">Motor oils &amp; heavy-duty parts</p>
              <Link href="/products" className="text-sm font-semibold text-sky-700 hover:underline">Explore products ↗</Link>
            </div>
            <p className="mt-3 text-xs text-slate-500">Representative photos. Packaging and fitment confirmed with your quote.</p>
          </div>
        </div>
      </section>

      <div className="border-b border-slate-100">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-4 px-6 py-6 lg:px-10">
          <p className="text-xs uppercase tracking-widest text-slate-500">Brands in our catalog</p>
          {["Mobil", "Everest", "Castrol", "Shell", "Degree", "Crest"].map((brand) => <span key={brand} className="text-base font-semibold text-slate-600">{brand}</span>)}
        </div>
      </div>

      <section aria-labelledby="collections-heading" className="border-y border-gray-200 bg-sky-50/60">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-16">
          <h2 id="collections-heading" className="text-3xl font-semibold">What does your business need?</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {collections.map((collection) => (
              <div key={collection.href} className="flex flex-col rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
                <Link href={collection.href} aria-label={`Browse ${collection.title}`} className="relative mb-5 block h-40 overflow-hidden rounded-xl bg-white"><Image src={collection.image} alt={`${collection.title} — representative product photo`} fill sizes="(max-width: 767px) 80vw, 320px" className="object-contain p-3" /></Link>
                <h3 className="text-xl font-semibold">{collection.title}</h3>
                <p className="mt-4 text-sm leading-7 text-gray-600">{collection.description}</p>
                <Link href={collection.href} className="mt-auto pt-6 text-sm font-semibold text-sky-700 hover:underline underline-offset-4">Browse collection →</Link>
              </div>
            ))}
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

      <section aria-labelledby="ordering-heading" className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-16">
        <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">How to order</p>
        <h2 id="ordering-heading" className="mt-3 text-3xl font-semibold">From product selection to a confirmed quote</h2>
        <ol className="mt-8 grid gap-8 md:grid-cols-3">
          {orderingSteps.map((step, index) => (
            <li key={step.title}>
              <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-700 text-sm font-semibold text-white">{index + 1}</span>
              <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">{step.description}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 border-t border-gray-200 pt-6 text-sm text-gray-600">Planning an export order? Include your destination and packaging requirements. <Link href="/services" className="font-medium text-gray-900 underline underline-offset-4">Explore our services</Link>.</p>
      </section>

      <section className="bg-[#122637] text-white">
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
