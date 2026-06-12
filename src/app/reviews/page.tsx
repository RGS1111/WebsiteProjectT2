import type { Metadata } from "next";
import { reviewsPage, metadata as siteMeta } from "@/config/site-config";
import { getBreadcrumbSchema } from "@/lib/schema";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import ReviewCard from "@/components/sections/ReviewCard";
import BottomCTA from "@/components/sections/BottomCTA";

export const metadata: Metadata = {
  title: siteMeta.pages.reviews.title,
  description: siteMeta.pages.reviews.description,
  alternates: { canonical: "https://www.eliteroofingnottingham.co.uk/reviews" },
};

const breadcrumb = getBreadcrumbSchema([
  { name: "Home", href: "https://www.eliteroofingnottingham.co.uk" },
  { name: "Reviews", href: "https://www.eliteroofingnottingham.co.uk/reviews" },
]);

export default function ReviewsPage() {
  const { hero, platforms, testimonials } = reviewsPage;

  return (
    <>
      <LocalBusinessSchema extraSchema={[breadcrumb]} />

      {/* ── REVIEWS HERO ────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 sm:py-28">
        {/* Subtle background texture */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(249,115,22,0.12),transparent_50%)]" />

        <div className="section-container relative text-center">
          {/* Aggregate rating badge */}
          <div className="mb-8 inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-sm">
            {/* 5 gold stars */}
            <div className="flex gap-0.5" aria-label="5 out of 5 stars" role="img">
              {Array.from({ length: 5 }, (_, i) => (
                <svg
                  key={i}
                  className="h-5 w-5 text-amber-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xl font-bold text-white">5.0 out of 5</span>
            <span className="text-white/40">·</span>
            <span className="text-white/75">120+ Verified Reviews</span>
          </div>

          <h1 className="max-w-4xl mx-auto text-3xl font-bold leading-tight tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
            {hero.heading}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-200 sm:text-lg">
            {hero.subheading}
          </p>

          {/* Platform badges */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm"
              >
                <span className="text-base font-semibold text-white">{platform.name}</span>
                <span className="flex gap-0.5">
                  {Array.from({ length: Math.floor(platform.rating) }, (_, i) => (
                    <svg
                      key={i}
                      className="h-4 w-4 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </span>
                <span className="text-sm text-white/50">({platform.count} reviews)</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL GRID ────────────────────────── */}
      <section className="section-py bg-stone-50" aria-labelledby="testimonials-heading">
        <div className="section-container">
          <h2 id="testimonials-heading" className="sr-only">Customer Testimonials</h2>
          {/* Masonry-style staggered grid */}
          <div className="mx-auto max-w-5xl">
            <div className="columns-1 gap-6 md:columns-2 md:gap-8">
              {testimonials.map((review, idx) => (
                <div
                  key={review.id}
                  className={`mb-6 break-inside-avoid md:mb-8 ${
                    // Stagger alternating cards for human-curated feel
                    idx % 3 === 1 ? "md:mt-8" : ""
                  }`}
                >
                  <ReviewCard {...review} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ──────────────────────────────── */}
      <BottomCTA />
    </>
  );
}
