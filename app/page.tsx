export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* Hero Section */}
      <section className="px-6 py-20 text-center bg-gray-50">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          Global Wholesale Distribution of Automotive Products
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Active Orbit INC delivers high-quality motor oils and automotive
          products to partners worldwide with reliability, efficiency, and
          precision.
        </p>
      </section>

      {/* Company Overview */}
      <section className="px-6 py-16 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-semibold">
          Trusted by Businesses Across International Markets
        </h2>
        <p className="mt-4 text-gray-600">
          We specialize in wholesale distribution and export operations,
          providing consistent supply and dependable logistics support for
          automotive businesses.
        </p>
      </section>

      {/* Services */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg">Wholesale Distribution</h3>
            <p className="text-gray-600 mt-2">
              Bulk supply of automotive products tailored for business needs.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Global Export</h3>
            <p className="text-gray-600 mt-2">
              Efficient international shipping and export handling worldwide.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Supply Chain Reliability</h3>
            <p className="text-gray-600 mt-2">
              Stable sourcing and consistent delivery across all operations.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 py-16 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-semibold">
          Commitment to Quality and Long-Term Partnerships
        </h2>
        <p className="mt-4 text-gray-600">
          Our focus is on building trusted relationships through transparent
          operations, reliable logistics, and consistent product quality.
        </p>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center bg-black text-white">
        <h2 className="text-2xl font-semibold">
          Partner with Active Orbit INC
        </h2>
        <p className="mt-4 text-gray-300">
          Contact us to explore wholesale opportunities and international
          distribution partnerships.
        </p>
      </section>

    </main>
  );
}