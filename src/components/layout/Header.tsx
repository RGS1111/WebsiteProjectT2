import { companyDetails } from "@/config/site-config";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import BusinessHoursWrapper from "@/components/ui/BusinessHoursWrapper";

export default function Header() {
  const { phone, name } = companyDetails;

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-sm">
      {/* Top bar — phone CTA */}
      <div className="hidden bg-gray-900 text-white sm:block">
        <div className="section-container flex items-center justify-between py-2 text-sm">
          <p className="flex items-center gap-2">
            <svg className="h-4 w-4 text-brand-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            Serving Nottingham, West Bridgford, Beeston & all NG postcodes
          </p>
          <p className="flex items-center gap-4">
            <span>Mon–Fri 7am–6pm | Sat 8am–2pm</span>
            <span className="text-brand-400 font-semibold">24/7 Emergencies</span>
          </p>
        </div>
      </div>

      {/* Main nav */}
      <div className="section-container">
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" aria-label={`${name} home`}>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-600 text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
              </svg>
            </div>
            <div className="leading-tight">
              <p className="text-lg font-bold text-gray-900">{name.split(" ")[0]}</p>
              <p className="text-[10px] font-medium uppercase tracking-widest text-brand-600">
                {name.split(" ").slice(1).join(" ")}
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            <Link href="/" className="btn-ghost">Home</Link>
            <Link href="/services" className="btn-ghost">Services</Link>
            <Link href="/about" className="btn-ghost">About</Link>
            <Link href="/reviews" className="btn-ghost">Reviews</Link>
            <Link href="/gallery" className="btn-ghost">Gallery</Link>
            <Link href="/contact" className="btn-ghost">Contact</Link>
          </nav>

          {/* Right: phone + CTA — wrapped with off-hours nudge */}
          <div className="flex items-center gap-3 sm:gap-4">
            <BusinessHoursWrapper position="bottom">
              <a
                href={`tel:${phone.raw}`}
                className="hidden items-center gap-1.5 text-lg font-bold text-gray-900 transition-colors hover:text-brand-600 sm:flex"
              >
                <svg className="h-5 w-5 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                {phone.display}
              </a>
            </BusinessHoursWrapper>

            <BusinessHoursWrapper position="bottom">
              <Link href="/contact" className="btn-primary whitespace-nowrap text-sm sm:text-base">
                Get a Free Quote
              </Link>
            </BusinessHoursWrapper>

            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
