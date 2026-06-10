import type { Metadata } from "next";
import { homePage, metadata as siteMeta, companyDetails } from "@/config/site-config";
import { getBreadcrumbSchema } from "@/lib/schema";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import TrustBar from "@/components/sections/TrustBar";
import ServiceTile from "@/components/sections/ServiceTile";
import BeforeAfterSlider from "@/components/sections/BeforeAfterSlider";
import BottomCTA from "@/components/sections/BottomCTA";
import BusinessHoursWrapper from "@/components/ui/BusinessHoursWrapper";
import { getIcon } from "@/components/ui/Icons";
import Link from "next/link";

export const metadata: Metadata = {
  title: siteMeta.pages.home.title,
  description: siteMeta.pages.home.description,
  alternates: { canonical: "https://www.eliteroofingnottingham.co.uk" },
};

const breadcrumb = getBreadcrumbSchema([
  { name: "Home", href: "https://www.eliteroofingnottingham.co.uk" },
]);

export default function HomePage() {
  const { hero, servicesOverview, googleReviewsStrip, beforeAfterGallery, whyChooseUs } = homePage;
  const { phone } = companyDetails;

  return (
    <>
      <LocalBusinessSchema extraSchema={[breadcrumb]} />

      {/* ── HERO ────────────────────────────────────── */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-gray-900 sm:min-h-[90vh]">
        {/* Background image */}
        <img
          src={hero.backgroundImage}
          alt="Elite Roofing Nottingham — professional roofing services"
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        {/* Overlay */}
        <div className="absolute inset-0 overlay-darker" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white text-balance sm:text-4xl lg:text-5xl xl:text-6xl">
            {hero.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-200 sm:text-lg lg:text-xl">
            {hero.subheadline}
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-5">
            <BusinessHoursWrapper position="top">
              <Link href={hero.ctaPrimary.href} className="btn-primary px-8 py-4 text-base sm:text-lg">
                {hero.ctaPrimary.text}
              </Link>
            </BusinessHoursWrapper>
            <BusinessHoursWrapper position="top">
              <a
                href={`tel:${phone.raw}`}
                className="btn-outline px-8 py-4 text-base sm:text-lg"
              >
                <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                {phone.display}
              </a>
            </BusinessHoursWrapper>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ───────────────────────────────── */}
      <TrustBar />

      {/* ── SERVICES OVERVIEW ───────────────────────── */}
      <section className="section-py bg-gray-50" aria-labelledby="services-heading">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="services-heading" className="heading-lg">{servicesOverview.heading}</h2>
            <p className="subheading">{servicesOverview.subheading}</p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicesOverview.tiles.map((tile) => (
              <ServiceTile key={tile.id} {...tile} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/services" className="btn-primary">
              View All Services
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── GOOGLE REVIEWS STRIP ────────────────────── */}
      <section className="section-py bg-white" aria-labelledby="reviews-heading">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5">
              <span className="text-2xl">⭐</span>
              <span className="text-sm font-semibold text-brand-700">
                5.0 out of 5 Stars — 120+ Reviews
              </span>
            </div>
            <h2 id="reviews-heading" className="heading-lg">{googleReviewsStrip.heading}</h2>
            <p className="subheading">{googleReviewsStrip.subheading}</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {googleReviewsStrip.featuredReviews.map((review, idx) => (
              <div key={idx} className="card p-6">
                {/* Stars */}
                <div className="flex gap-0.5 text-brand-500" aria-label="5 out of 5 stars">
                  {"★★★★★".split("").map((s, i) => (
                    <span key={i}>{s}</span>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="mt-4 border-t pt-4">
                  <p className="text-sm font-semibold text-gray-900">{review.name}</p>
                  <p className="text-xs text-gray-500">
                    {review.location} — {review.jobType}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/reviews" className="btn-ghost text-brand-600 hover:text-brand-700">
              Read all 120+ reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* ── BEFORE / AFTER GALLERY ──────────────────── */}
      <section className="section-py bg-gray-50" aria-labelledby="gallery-heading">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="gallery-heading" className="heading-lg">{beforeAfterGallery.heading}</h2>
            <p className="subheading">{beforeAfterGallery.subheading}</p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {beforeAfterGallery.pairs.map((pair) => (
              <BeforeAfterSlider
                key={pair.id}
                before={pair.before}
                after={pair.after}
                label={pair.jobType}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/gallery" className="btn-primary">
              View Full Gallery
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ───────────────────────────── */}
      <section className="section-py bg-white" aria-labelledby="why-us-heading">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="why-us-heading" className="heading-lg">{whyChooseUs.heading}</h2>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.features.map((feature) => {
              const Icon = getIcon(feature.icon);
              return (
                <div key={feature.icon} className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50">
                    {Icon && <Icon className="h-7 w-7 text-brand-600" />}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ──────────────────────────────── */}
      <BottomCTA />
    </>
  );
}
