"use client";

import { companyDetails, globalUI } from "@/config/site-config";
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger toggle — visible only on small screens */}
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 lg:hidden"
        aria-expanded={open}
        aria-label="Toggle navigation menu"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        )}
      </button>

      {/* Overlay + slide-out panel */}
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Panel */}
          <div className="fixed right-0 top-0 z-50 h-full w-72 bg-white shadow-2xl animate-[slideIn_200ms_ease-out]">
            <div className="flex items-center justify-between border-b px-4 py-4">
              <span className="text-lg font-bold text-gray-900">Menu</span>
              <button
                type="button"
                className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col gap-1 p-4" aria-label="Mobile navigation">
              {globalUI.header.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-brand-50 hover:text-brand-700"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile phone CTA */}
            <div className="border-t p-4">
              <a
                href={`tel:${companyDetails.phone.raw}`}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                {companyDetails.phone.display}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
