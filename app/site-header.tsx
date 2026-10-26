"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import CompanyLogo from "./company-logo";
import BasketLink from "./quote/basket-link";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  return <HeaderNavigation key={pathname} pathname={pathname} />;
}

function HeaderNavigation({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  function navigationLinks() {
    return links.map(({ href, label }) => (
      <Link
        key={href}
        href={href}
        aria-current={pathname === href ? "page" : href !== "/" && pathname.startsWith(`${href}/`) ? "location" : undefined}
        onClick={() => setOpen(false)}
        className="min-h-11 rounded px-2 py-3 transition aria-[current]:bg-gray-100 aria-[current]:text-black hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900"
      >
        {label}
      </Link>
    ));
  }

  return (
    <header
      className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          toggleRef.current?.focus();
        }
      }}
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-3 sm:px-6 lg:px-10">
        <Link href="/" aria-label="Active Orbit Inc home" title="Active Orbit Inc" onClick={() => setOpen(false)} className="inline-flex shrink-0 items-center gap-2 rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900">
          <CompanyLogo priority />
          <span className="max-w-20 text-sm font-semibold leading-tight sm:max-w-none sm:text-base">Active Orbit Inc</span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-4 text-sm font-medium text-gray-700 lg:flex">
          {navigationLinks()}
        </nav>

        <div className="flex items-center gap-2">
          <BasketLink />
          <Link href="/contact" onClick={() => setOpen(false)} className="hidden rounded-full border border-gray-900 px-4 py-2 text-sm font-medium transition hover:bg-gray-900 hover:text-white xl:inline-flex">
            Request a Quote
          </Link>
          <button
            ref={toggleRef}
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
            className="rounded-full border border-gray-200 p-3 transition hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900 lg:hidden"
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>

        <nav id="mobile-navigation" aria-label="Mobile navigation" hidden={!open} className="max-h-[calc(100dvh-5rem)] w-full overflow-y-auto border-t border-gray-200 pt-4 text-sm font-medium text-gray-700 lg:hidden">
          <div className="flex flex-col gap-2">
            {navigationLinks()}
            <Link href="/contact" onClick={() => setOpen(false)} className="mt-2 self-start rounded-full bg-gray-900 px-5 py-3 text-white transition hover:bg-gray-700">
              Request a Quote
            </Link>
            <a href="tel:+17738828507" className="min-h-11 self-start rounded px-2 py-3 underline underline-offset-4">Call 773-882-8507</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
