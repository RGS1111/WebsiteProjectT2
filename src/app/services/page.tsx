import type { Metadata } from "next";
import { servicesPage, metadata as siteMeta, companyDetails } from "@/config/site-config";
import { getBreadcrumbSchema, getFAQSchema } from "@/lib/schema";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import BottomCTA from "@/components/sections/BottomCTA";
import { getIcon } from "@/components/ui/Icons";
import Link from "next/link";

export const metadata: Metadata = {
  title: siteMeta.pages.services.title,
  description: siteMeta.pages.services.description,
  alternates: { canonical: "https://www.eliteroofingnottingham.co.uk/services" },
};

const breadcrumb = getBreadcrumbSchema([
  { name: "Home", href: "https://www.eliteroofingnottingham.co.uk" },
  { name: "Services", href: "https://www.eliteroofingnottingham.co.uk/services" },
]);

const faq = getFAQSchema([
  {
    question: "How much does a roof repair cost in Nottingham?",
    answer: "The cost depends on the extent of the damage. Minor tile repairs start from £120, while more significant repairs such as valley or flashing replacement typically range from £350–£900. We provide free, no-obligation quotes so you know the exact price before any work begins.",
  },
  {
    question: "How long does a new roof installation take?",
    answer: "Most standard pitched roof replacements on a typical 3-bedroom semi-detached home take 3–5 working days. Larger properties or complex roofs may take 1–2 weeks. We'll give you a clear timeline during your free quote.",
  },
  {
    question: "Do you offer emergency roofing services in Nottingham?",
    answer: "Yes, we provide 24/7 emergency roofing across Nottingham and surrounding areas. Our emergency team responds within 1–2 hours for urgent situations like storm damage, fallen trees, or sudden leaks. Call 0115 987 6543 any time.",
  },
  {
    question: "What areas do you cover?",
    answer: "We cover Nottingham city centre and all NG postcodes including West Bridgford, Beeston, Carlton, Arnold, Hucknall, Mansfield, Newark-on-Trent, as well as Derby and Loughborough. We typically cover homes within a 30-mile radius of NG7.",
  },
]);

export default function ServicesPage() {
  const { intro, services } = servicesPage;

  return (
    <>
      <LocalBusinessSchema extraSchema={[breadcrumb, faq]} />

      {/* ── INTRO ───────────────────────────────────── */}
      <section className="bg-gray-900 py-16 sm:py-20">
        <div className="section-container text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
            {intro.heading}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gray-200 sm:text-lg">
            {intro.subheading}
          </p>
        </div>
      </section>

      {/* ── SERVICE BLOCKS ──────────────────────────── */}
      {services.map((service, idx) => {
        const Icon = getIcon(service.icon);
        const isEven = idx % 2 === 0;

        return (
          <section
            key={service.id}
            id={service.id}
            className={`section-py ${idx % 2 === 1 ? "bg-gray-50" : "bg-white"}`}
            aria-labelledby={`svc-${service.id}`}
          >
            <div className="section-container">
              <div
                className={`grid gap-10 items-center lg:grid-cols-2 lg:gap-16 ${
                  isEven ? "" : "lg:[&>div:first-child]:order-2"
                }`}
              >
                {/* Image */}
                <div className={isEven ? "" : "lg:order-2"}>
                  <div className="overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src={service.image}
                      alt={`${service.title} service in Nottingham`}
                      className="h-64 w-full object-cover sm:h-80 lg:h-96"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-3">
                    {Icon && (
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100">
                        <Icon className="h-5 w-5 text-brand-700" aria-hidden="true" />
                      </div>
                    )}
                    <h2
                      id={`svc-${service.id}`}
                      className="text-2xl font-bold text-gray-900 sm:text-3xl"
                    >
                      {service.title}
                    </h2>
                  </div>

                  <p className="mt-4 text-base leading-relaxed text-gray-700">
                    {service.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="mt-5 space-y-2">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2 text-sm text-gray-700">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/contact?jobType=${encodeURIComponent(service.title)}`}
                    className="btn-primary mt-6"
                  >
                    {service.ctaText}
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── BOTTOM CTA ──────────────────────────────── */}
      <BottomCTA />
    </>
  );
}
