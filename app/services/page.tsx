export default function ServicesPage() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-6 py-16 lg:px-12">
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Services
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Wholesale, export, and business support
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Active Orbit INC provides reliable business support for product
          sourcing, wholesale operations, and international trade coordination.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-xl font-semibold">Wholesale Supply</h2>
          <p className="mt-3 text-slate-600">
            Support for sourcing products and building dependable supply
            channels for business customers.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-xl font-semibold">Export Coordination</h2>
          <p className="mt-3 text-slate-600">
            Assistance with international trade communication, shipment flow,
            and partner coordination.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-xl font-semibold">Product Inquiry Handling</h2>
          <p className="mt-3 text-slate-600">
            Organized intake of quote requests, customer inquiries, and product
            interest from new and existing partners.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-xl font-semibold">Partner Communication</h2>
          <p className="mt-3 text-slate-600">
            Professional communication that helps maintain long-term business
            relationships and trust.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-xl font-semibold">Future Online Ordering</h2>
          <p className="mt-3 text-slate-600">
            A foundation for later adding product catalogs, account features,
            and online order workflows.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-xl font-semibold">Retail Expansion Readiness</h2>
          <p className="mt-3 text-slate-600">
            Website architecture prepared for future customer accounts, payment
            flows, and direct online sales.
          </p>
        </div>
      </div>
    </main>
  );
}