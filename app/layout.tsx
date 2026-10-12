import "./globals.css";
import type { Metadata } from "next";
import SiteHeader from "./site-header";

export const metadata: Metadata = {
  title: "Active Orbit INC",
  description:
  "Wholesale automotive products for commercial supply and distribution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <div className="min-h-screen">
          <SiteHeader />

          {children}

          <footer className="border-t border-gray-200 bg-white">
            <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 lg:px-10 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-base font-semibold">Active Orbit INC</p>
                <p className="mt-2 text-sm text-gray-600">
                  Wholesale automotive products for commercial supply and distribution.
                </p>
                <a
                  href="tel:+17738828507"
                  className="mt-3 inline-block rounded text-sm font-medium text-gray-700 underline-offset-4 transition hover:text-black hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900"
                >
                  773-882-8507
                </a>
              </div>

              <div className="text-sm text-gray-500">
                © {new Date().getFullYear()} Active Orbit INC. All rights reserved.
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
