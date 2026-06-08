"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface Project {
  id: string;
  category: string;
  jobType: string;
  location: string;
  description: string;
  before: { src: string; alt: string };
  after: { src: string; alt: string };
}

interface Filter {
  id: string;
  label: string;
}

interface GalleryGridProps {
  filters: Filter[];
  projects: Project[];
}

export default function GalleryGrid({ filters, projects }: GalleryGridProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* Filter bar */}
      <div className="mb-12 flex flex-wrap justify-center gap-2">
        {filters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            onClick={() => setActiveFilter(filter.id)}
            className={cn(
              "rounded-full px-5 py-2 text-sm font-medium transition-all duration-200",
              activeFilter === filter.id
                ? "bg-brand-600 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {filtered.length === 0 ? (
          <p className="col-span-full py-12 text-center text-gray-500">
            No projects found for this category. Please check back soon or
            contact us for recent examples.
          </p>
        ) : (
          filtered.map((project) => (
            <article
              key={project.id}
              className="card group overflow-hidden"
              itemScope
              itemType="https://schema.org/CreativeWork"
            >
              {/* Before/After side-by-side */}
              <div className="grid grid-cols-2 gap-px bg-gray-300">
                <div className="relative overflow-hidden bg-gray-100">
                  <img
                    src={project.before.src}
                    alt={project.before.alt}
                    className="h-48 w-full object-cover sm:h-56"
                    loading="lazy"
                  />
                  <span className="absolute left-2 top-2 rounded bg-black/60 px-2 py-0.5 text-[10px] font-semibold uppercase text-white backdrop-blur-sm">
                    Before
                  </span>
                </div>
                <div className="relative overflow-hidden bg-gray-100">
                  <img
                    src={project.after.src}
                    alt={project.after.alt}
                    className="h-48 w-full object-cover sm:h-56"
                    loading="lazy"
                  />
                  <span className="absolute right-2 top-2 rounded bg-brand-600/80 px-2 py-0.5 text-[10px] font-semibold uppercase text-white backdrop-blur-sm">
                    After
                  </span>
                </div>
              </div>

              {/* Meta */}
              <div className="p-4 sm:p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-semibold text-gray-900">
                    {project.jobType}
                  </h3>
                  <span className="rounded bg-brand-50 px-2 py-0.5 text-xs font-medium text-brand-700">
                    {project.location}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {project.description}
                </p>
              </div>
            </article>
          ))
        )}
      </div>
    </>
  );
}
