import type { Metadata } from "next";
import { aboutPage, metadata as siteMeta } from "@/config/site-config";
import { getBreadcrumbSchema } from "@/lib/schema";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import BottomCTA from "@/components/sections/BottomCTA";

export const metadata: Metadata = {
  title: siteMeta.pages.about.title,
  description: siteMeta.pages.about.description,
  alternates: { canonical: "https://www.eliteroofingnottingham.co.uk/about" },
};

const breadcrumb = getBreadcrumbSchema([
  { name: "Home", href: "https://www.eliteroofingnottingham.co.uk" },
  { name: "About", href: "https://www.eliteroofingnottingham.co.uk/about" },
]);

export default function AboutPage() {
  const { story, team, accreditations, coverage } = aboutPage;

  return (
    <>
      <LocalBusinessSchema extraSchema={[breadcrumb]} />

      {/* ── PAGE HEADER ─────────────────────────────── */}
      <section className="bg-gray-900 py-16 sm:py-20">
        <div className="section-container text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
            {story.heading}
          </h1>
        </div>
      </section>

      {/* ── COMPANY STORY ───────────────────────────── */}
      <section className="section-py bg-white">
        <div className="section-container">
          <div className="mx-auto max-w-3xl">
            {story.paragraphs.map((paragraph, idx) => (
              <p
                key={idx}
                className={`text-base leading-relaxed text-gray-600 sm:text-lg ${
                  idx > 0 ? "mt-6" : ""
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ────────────────────────────────────── */}
      <section className="section-py bg-gray-50" aria-labelledby="team-heading">
        <div className="section-container">
          <h2 id="team-heading" className="heading-lg text-center">{team.heading}</h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.members.map((member) => (
              <div key={member.name} className="card p-6 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="mx-auto h-28 w-28 rounded-full object-cover shadow-md"
                  loading="lazy"
                />
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm font-medium text-brand-600">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACCREDITATIONS ──────────────────────────── */}
      <section className="section-py bg-white" aria-labelledby="accred-heading">
        <div className="section-container">
          <h2 id="accred-heading" className="heading-lg text-center">{accreditations.heading}</h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {accreditations.items.map((item) => (
              <div key={item.name} className="card flex flex-col items-center p-6 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-12 w-12 object-contain"
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-gray-900">{item.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COVERAGE MATRIX ────────────────────────── */}
      <section className="section-py bg-gray-50" id="coverage" aria-labelledby="coverage-heading">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="coverage-heading" className="heading-lg">{coverage.heading}</h2>
            <p className="subheading">{coverage.intro}</p>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {coverage.areas.map((area) => (
              <div
                key={area.name}
                className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm"
              >
                <svg className="h-5 w-5 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{area.name}</p>
                  <p className="text-xs text-gray-500">{area.postcodes}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-gray-500">
            Don&apos;t see your area? Call us — we may still cover your location.
          </p>
        </div>
      </section>

      {/* ── BOTTOM CTA ──────────────────────────────── */}
      <BottomCTA />
    </>
  );
}
