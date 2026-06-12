import type { Metadata } from "next";
import { galleryPage, metadata as siteMeta } from "@/config/site-config";
import { getBreadcrumbSchema } from "@/lib/schema";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import BottomCTA from "@/components/sections/BottomCTA";
import GalleryGrid from "./GalleryGrid";

export const metadata: Metadata = {
  title: siteMeta.pages.gallery.title,
  description: siteMeta.pages.gallery.description,
  alternates: { canonical: "https://www.eliteroofingnottingham.co.uk/gallery" },
};

const breadcrumb = getBreadcrumbSchema([
  { name: "Home", href: "https://www.eliteroofingnottingham.co.uk" },
  { name: "Gallery", href: "https://www.eliteroofingnottingham.co.uk/gallery" },
]);

export default function GalleryPage() {
  const { heading, subheading, filters, projects } = galleryPage;

  return (
    <>
      <LocalBusinessSchema extraSchema={[breadcrumb]} />

      {/* ── PAGE HEADER ─────────────────────────────── */}
      <section className="bg-gray-900 py-16 sm:py-20">
        <div className="section-container text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
            {heading}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-200 sm:text-lg">
            {subheading}
          </p>
        </div>
      </section>

      {/* ── FILTERABLE GALLERY ──────────────────────── */}
      <section className="section-py bg-white" aria-labelledby="gallery-grid-heading">
        <div className="section-container">
          <h2 id="gallery-grid-heading" className="sr-only">Project Portfolio</h2>
          <GalleryGrid filters={filters} projects={projects} />
        </div>
      </section>

      {/* ── BOTTOM CTA ──────────────────────────────── */}
      <BottomCTA />
    </>
  );
}
