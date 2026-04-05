"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error" | "loading";
    message: string;
  }>({
    type: "idle",
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus({
      type: "loading",
      message: "Sending your inquiry...",
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send inquiry.");
      }

      setStatus({
        type: "success",
        message: "Your inquiry was sent successfully.",
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    }
  }

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

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
          coordination, product requests, or partnership opportunities.
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
              info@activeorbita.com
            </p>
            <p>
              <span className="font-semibold text-slate-900">Phone:</span>{" "}
              +1 (773) 882-5595
            </p>
            <p>
              <span className="font-semibold text-slate-900">Business:</span>{" "}
              Wholesale, export, and trade support
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-2xl font-semibold">Send us a message</h2>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
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
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500"
                required
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
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500"
                required
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
                value={formData.company}
                onChange={handleChange}
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
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500"
                required
              />
            </div>

            <button
              type="submit"
              disabled={status.type === "loading"}
              className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status.type === "loading" ? "Sending..." : "Send inquiry"}
            </button>

            {status.type !== "idle" && (
              <p
                className={`text-sm ${
                  status.type === "success"
                    ? "text-green-600"
                    : status.type === "error"
                    ? "text-red-600"
                    : "text-slate-600"
                }`}
              >
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}