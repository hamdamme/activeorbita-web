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
          Reach out to Active Orbit INC for wholesale inquiries, export
          coordination, product requests, or future partnership opportunities.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-2xl font-semibold">Get in touch</h2>

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
          <h2 className="text-2xl font-semibold">Contact form coming next</h2>
          <p className="mt-4 leading-8 text-slate-600">
            In the next step, we will replace this section with a real working
            contact form and connect it to Resend for email notifications.
          </p>
        </div>
      </div>
    </main>
  );
}