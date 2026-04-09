export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="border-b border-gray-200 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
              About Active Orbit INC
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl">
              A modern wholesale and export business built on trust, structure, and long-term growth
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Active Orbit INC is focused on delivering dependable wholesale distribution
              and global export support for automotive products, with an emphasis on
              professionalism, consistency, and scalable business operations.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
              Our Position
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Built to support serious business relationships across markets
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We combine product sourcing, wholesale distribution, and international
              coordination with a growing digital infrastructure designed to improve
              communication, efficiency, and customer experience.
            </p>
          </div>

          <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
            <div className="space-y-5 text-gray-700">
              <p>
                Our goal is to create a premium business presence that reflects
                operational discipline, reliable execution, and strong partner support.
              </p>
              <p>
                As we continue to grow, our platform is being designed to support
                product catalog expansion, inquiry management, and future online
                ordering capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[1.75rem] border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold">Professional Communication</h3>
              <p className="mt-4 leading-7 text-gray-600">
                Clear, responsive communication that supports long-term business trust.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold">Structured Operations</h3>
              <p className="mt-4 leading-7 text-gray-600">
                Reliable workflows designed to support efficient distribution and export activity.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold">Scalable Vision</h3>
              <p className="mt-4 leading-7 text-gray-600">
                A digital-first foundation prepared for future growth in products and services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}