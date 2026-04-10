const services = [
  {
    title: "Wholesale Distribution",
    description:
      "Dependable bulk supply solutions designed for automotive businesses seeking consistent sourcing and fulfillment.",
  },
  {
    title: "Global Export Coordination",
    description:
      "Structured support for international shipping, export communication, and market expansion workflows.",
  },
  {
    title: "Product Inquiry Management",
    description:
      "Organized handling of quote requests, customer interest, and business inquiries across product lines.",
  },
  {
    title: "Partner Communication",
    description:
      "Responsive and professional communication that strengthens trust and long-term business relationships.",
  },
  {
    title: "Digital Growth Readiness",
    description:
      "A modern operational foundation prepared for product catalogs, account features, and future online ordering.",
  },
  {
    title: "Scalable Business Support",
    description:
      "A flexible structure built to support growth in products, customers, and international operations.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="border-b border-gray-200 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
              Services
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl">
              Premium business solutions for wholesale distribution and export operations
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Active Orbit INC provides structured support for product distribution,
              global trade coordination, and scalable business growth with a focus on
              professionalism, consistency, and long-term value.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[1.75rem] border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1"
            >
              <h2 className="text-xl font-semibold">{service.title}</h2>
              <p className="mt-4 leading-7 text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
                Service Approach
              </p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Designed for operational clarity and long-term partnership value
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our service model is centered on dependable execution, structured
                communication, and a premium business presence that supports trust
                across domestic and international markets.
              </p>
            </div>

            <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
              <ul className="space-y-4 text-gray-700">
                <li className="rounded-2xl bg-gray-50 px-5 py-4">
                  Reliable coordination across supply and export workflows
                </li>
                <li className="rounded-2xl bg-gray-50 px-5 py-4">
                  Modern digital infrastructure supporting business growth
                </li>
                <li className="rounded-2xl bg-gray-50 px-5 py-4">
                  Scalable operations for expanding product and market reach
                </li>
                <li className="rounded-2xl bg-gray-50 px-5 py-4">
                  Professional communication built for serious commercial relationships
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}