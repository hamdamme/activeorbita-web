export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto flex max-w-7xl flex-col px-6 py-16 lg:px-12">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Active Orbit INC
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Wholesale and export solutions built for global business
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Active Orbit INC helps partners source products, manage international
            trade relationships, and grow with reliable wholesale operations.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Request a Quote
            </a>

            <a
              href="/services"
              className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-50"
            >
              Our Services
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-12">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-xl font-semibold">Wholesale Supply</h2>
            <p className="mt-3 text-slate-600">
              Product sourcing and supply support for business customers.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-xl font-semibold">Export Support</h2>
            <p className="mt-3 text-slate-600">
              Reliable coordination for international trade, logistics, and shipment workflows.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-xl font-semibold">Business Partnerships</h2>
            <p className="mt-3 text-slate-600">
              Long-term collaboration focused on trust, responsiveness, and growth.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-12">
        <div className="rounded-2xl bg-slate-100 p-8">
          <h2 className="text-2xl font-semibold">
            Let’s talk about your wholesale and export needs
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            We are building a modern platform for wholesale, export, and future
            online ordering with payment and account features.
          </p>
        </div>
      </section>
    </main>
  );
}