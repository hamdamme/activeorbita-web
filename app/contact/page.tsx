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
    <main className="bg-white text-gray-900">
      <section className="border-b border-gray-200 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
              Contact
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl">
              Connect with Active Orbit INC for business inquiries
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We welcome conversations related to wholesale distribution, export
              opportunities, product inquiries, and long-term business partnerships.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Business Information</h2>

            <div className="mt-8 space-y-5 text-gray-700">
              <div className="rounded-2xl bg-gray-50 px-5 py-4">
                <span className="block text-sm font-medium text-gray-500">
                  Company
                </span>
                <span className="mt-1 block text-base font-medium">
                  Active Orbit INC
                </span>
              </div>

              <div className="rounded-2xl bg-gray-50 px-5 py-4">
                <span className="block text-sm font-medium text-gray-500">
                  Email
                </span>
                <span className="mt-1 block text-base font-medium">
                  info@activeorbita.com
                </span>
              </div>

              <div className="rounded-2xl bg-gray-50 px-5 py-4">
                <span className="block text-sm font-medium text-gray-500">
                  Business Focus
                </span>
                <span className="mt-1 block text-base font-medium">
                  Wholesale distribution and global export of automotive products
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Send an Inquiry</h2>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-700"
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
                  className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-gray-900"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700"
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
                  className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-gray-900"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-sm font-medium text-gray-700"
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
                  className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-gray-900"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-700"
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
                  className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-gray-900"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status.type === "loading"}
                className="rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status.type === "loading" ? "Sending..." : "Submit Inquiry"}
              </button>

              {status.type !== "idle" && (
                <p
                  className={`text-sm ${
                    status.type === "success"
                      ? "text-green-600"
                      : status.type === "error"
                      ? "text-red-600"
                      : "text-gray-600"
                  }`}
                >
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}