export default function ContactPage() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-6 py-16 lg:px-12">
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Contact
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Let’s discuss your business needs
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Reach out to Active Orbit INC for wholesale inquiries, export coordination,
          product requests, or partnership opportunities.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-2xl font-semibold">Contact information</h2>

          <div className="mt-6 space-y-4 text-slate-600">
            <p>
              <span className="font-semibold text-slate-900">Company:</span>{" "}
              Active Orbit INC
            </p>
            <p>
              <span className="font-semibold text-slate-900">Email:</span>{" "}
              contact@activeorbitinc.com
            </p>
            <p>
              <span className="font-semibold text-slate-900">Phone:</span>{" "}
              +1 (000) 000-0000
            </p>
            <p>
              <span className="font-semibold text-slate-900">Business:</span>{" "}
              Wholesale, export, and trade support
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-2xl font-semibold">Send us a message</h2>

          <form className="mt-6 space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-slate-900"
              >
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-900"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500"
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="mb-2 block text-sm font-medium text-slate-900"
              >
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Your company name"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-slate-900"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell us about your request"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500"
              />
            </div>

            <button
              type="submit"
              className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Send inquiry
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}