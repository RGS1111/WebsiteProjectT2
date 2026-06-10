"use client";

import { companyDetails, globalUI } from "@/config/site-config";
import Link from "next/link";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import BusinessHoursWrapper from "@/components/ui/BusinessHoursWrapper";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Only render the portal after hydration to avoid SSR mismatches
  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const overlay = open && mounted && (
    <div className="fixed inset-0 z-[100] lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation menu">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-out panel */}
      <div className="fixed right-0 top-0 z-[110] flex h-full w-72 flex-col bg-white shadow-2xl animate-[slideIn_200ms_ease-out]">
        {/* Header bar */}
        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-4">
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

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto p-4" aria-label="Mobile navigation">
          <div className="flex flex-col gap-1">
            {globalUI.header.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-4 py-3 text-base font-semibold text-gray-800 transition-colors hover:bg-brand-50 hover:text-brand-700"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Phone CTA footer */}
        <div className="border-t border-gray-200 p-4">
          <BusinessHoursWrapper position="top">
            <a
              href={`tel:${companyDetails.phone.raw}`}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {companyDetails.phone.display}
            </a>
          </BusinessHoursWrapper>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Hamburger toggle — visible only on small screens */}
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 lg:hidden"
        aria-expanded={open}
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
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

      {/* Portal the overlay to document.body — escapes the header's backdrop-blur containing block */}
      {typeof document !== "undefined" &&
        createPortal(overlay, document.body)}
    </>
  );
}
