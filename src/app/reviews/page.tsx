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
      <section className="bg-gray-900 py-16 sm:py-20">
        <div className="section-container text-center">
          {/* Aggregate rating */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 backdrop-blur-sm">
            <span className="text-2xl">⭐</span>
            <span className="text-lg font-bold text-white">5.0 out of 5 Stars</span>
            <span className="text-white/60">•</span>
            <span className="text-white/80">120+ Verified Reviews</span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
            {hero.heading}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
            {hero.subheading}
          </p>

          {/* Platform badges */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="flex items-center gap-3 rounded-xl bg-white/10 px-5 py-3 backdrop-blur-sm"
              >
                <span className="text-lg font-bold text-white">{platform.name}</span>
                <span className="text-brand-400 text-lg">{"★".repeat(Math.floor(platform.rating))}</span>
                <span className="text-sm text-white/60">({platform.count} reviews)</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL FEED ────────────────────────── */}
      <section className="section-py bg-white">
        <div className="section-container">
          <div className="mx-auto grid max-w-4xl gap-6">
            {testimonials.map((review) => (
              <ReviewCard key={review.id} {...review} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ──────────────────────────────── */}
      <BottomCTA />
    </>
  );
}
