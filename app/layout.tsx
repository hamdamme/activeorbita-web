import "./globals.css";
import type { Metadata } from "next";
import { siteUrl, siteName, siteDescription } from "@/lib/seo";
import Link from "next/link";
import CompanyLogo from "./company-logo";
import SiteHeader from "./site-header";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteName, template: `%s | ${siteName}` },
  description: siteDescription,
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
          <a href="#main-content" className="sr-only fixed left-4 top-4 z-[100] rounded-lg bg-gray-900 px-5 py-3 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>
          <SiteHeader />

          <div id="main-content" tabIndex={-1} className="scroll-mt-24 outline-none">{children}</div>

          <footer className="border-t border-gray-200 bg-white">
            <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 lg:px-10 md:flex-row md:items-center md:justify-between">
              <div>
                <Link href="/" aria-label="Active Orbit INC home" className="inline-flex items-center gap-3 rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900"><CompanyLogo /><span className="text-base font-semibold">Active Orbit Inc</span></Link>
                <p className="mt-2 text-sm text-gray-600">
                  Wholesale motor oils, automotive products, and personal care essentials.
                </p>
                <a
                  href="tel:+17738828507"
                  className="mt-3 inline-block rounded text-sm font-medium text-gray-700 underline-offset-4 transition hover:text-black hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900"
                >
                  773-882-8507
                </a>
              </div>

              <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-gray-700">
                <Link href="/products" className="inline-flex min-h-11 items-center hover:underline">Products</Link>
                <Link href="/quote" className="inline-flex min-h-11 items-center hover:underline">Your quote list</Link>
                <Link href="/contact" className="inline-flex min-h-11 items-center hover:underline">Contact</Link>
                <a href="mailto:info@activeorbita.com" className="inline-flex min-h-11 items-center break-all hover:underline">info@activeorbita.com</a>
              </nav>

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
