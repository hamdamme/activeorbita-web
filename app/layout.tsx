import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

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
          <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
              <Link href="/" className="text-lg font-semibold tracking-wide">
                Active Orbit INC
              </Link>

              <nav className="hidden items-center gap-8 text-sm font-medium text-gray-700 md:flex">
                <Link href="/" className="transition hover:text-black">
                  Home
                </Link>
                <Link href="/about" className="transition hover:text-black">
                  About
                </Link>
                <Link href="/services" className="transition hover:text-black">
                  Services
                </Link>
                <Link href="/products" className="transition hover:text-black">
                  Products
                </Link>
                <Link href="/contact" className="transition hover:text-black">
                  Contact
                </Link>
              </nav>

              <Link
                href="/contact"
                className="rounded-full border border-gray-900 px-4 py-2 text-sm font-medium transition hover:bg-gray-900 hover:text-white"
              >
                Request a Quote
              </Link>
            </div>
          </header>

          {children}

          <footer className="border-t border-gray-200 bg-white">
            <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 lg:px-10 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-base font-semibold">Active Orbit INC</p>
                <p className="mt-2 text-sm text-gray-600">
                  Wholesale automotive products for commercial supply and distribution.
                </p>
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