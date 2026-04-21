import Link from "next/link";
import { products } from "@/app/data/products";

const services = [
  {
    title: "Wholesale Distribution",
    description:
      "Bulk supply solutions for automotive businesses seeking dependable sourcing and consistent fulfillment.",
  },
  {
    title: "Global Export",
    description:
      "International trade support designed for efficient coordination, documentation, and delivery.",
  },
  {
    title: "Supply Chain Reliability",
    description:
      "Operational consistency backed by responsive communication and long-term partnership thinking.",
  },
];

const advantages = [
  "Professional and dependable business communication",
  "International wholesale and export focus",
  "Structured operations with modern digital workflows",
  "Scalable foundation for product catalog and online ordering",
];

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <section className="border-b border-gray-200 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
              Active Orbit INC
            </p>

            <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Premium wholesale distribution for global automotive markets
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Active Orbit INC supports business partners with dependable
              wholesale supply, international export coordination, and a modern
              digital foundation built for long-term growth.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-700"
              >
                Request a Quote
              </Link>

              <Link
                href="/services"
                className="rounded-full border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900 transition hover:border-gray-900"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl bg-gray-50 p-6">
                  <p className="text-sm font-medium text-gray-500">Focus</p>
                  <p className="mt-3 text-xl font-semibold">
                    Wholesale Automotive Products
                  </p>
                </div>

                <div className="rounded-2xl bg-gray-50 p-6">
                  <p className="text-sm font-medium text-gray-500">Model</p>
                  <p className="mt-3 text-xl font-semibold">
                    Global Export Partnerships
                  </p>
                </div>

                <div className="rounded-2xl bg-gray-50 p-6">
                  <p className="text-sm font-medium text-gray-500">Approach</p>
                  <p className="mt-3 text-xl font-semibold">
                    Reliable, Structured, Professional
                  </p>
                </div>

                <div className="rounded-2xl bg-gray-50 p-6">
                  <p className="text-sm font-medium text-gray-500">Vision</p>
                  <p className="mt-3 text-xl font-semibold">
                    Built for Scalable Growth
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
            Corporate Overview
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Built to support trusted international business relationships
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We combine product distribution, export coordination, and
            technology-enabled operations to create a dependable experience for
            business customers and long-term partners.
          </p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
              Core Capabilities
            </p>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Structured solutions for wholesale and export operations
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-[1.75rem] border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-4 leading-7 text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
              Why Active Orbit INC
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              A premium business presence built on reliability and trust
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our business approach is centered on consistency, responsiveness,
              and scalable operations that support serious commercial
              relationships.
            </p>
          </div>

          <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
            <ul className="space-y-4">
              {advantages.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl bg-gray-50 px-5 py-4 text-gray-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
              Next Growth Phase
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Product catalog and digital ordering infrastructure coming next
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We are building a stronger digital platform that will support
              product discovery, inquiry management, and future online ordering
              experiences for business customers.
            </p>

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-gray-900 transition hover:bg-gray-200"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="border-t border-gray-200 bg-white">
  <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
    <div className="mb-8 flex items-end justify-between gap-4">
      <div>
        <p className="text-sm uppercase tracking-wide text-gray-500">
          Featured Products
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-gray-900">
          Selected motor oil products
        </h2>
      </div>

      <Link
        href="/products"
        className="text-sm font-medium text-black underline underline-offset-4"
      >
        View All
      </Link>
    </div>

    <div className="grid gap-8 md:grid-cols-3">
      {products.filter((product) => product.featured).slice(0, 3).map((product) => (
        <div key={product.id}>
          <div className="aspect-square overflow-hidden bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="mt-4">
            <p className="text-xs uppercase tracking-wide text-gray-500">
              {product.category}
            </p>
            <h3 className="mt-1 text-lg font-medium text-gray-900">
              {product.name}
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              {product.shortDescription}
            </p>

            <Link
              href={`/products/${product.slug}`}
              className="mt-3 inline-block text-sm font-medium text-black underline underline-offset-4"
            >
              View
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
    </main>
  );
}