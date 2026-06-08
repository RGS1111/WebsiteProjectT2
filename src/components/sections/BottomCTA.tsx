"use client";

import { globalUI, companyDetails } from "@/config/site-config";
import { useState, type FormEvent } from "react";

export default function BottomCTA() {
  const { heading, subheading, form } = globalUI.bottomCTA;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", postcode: "", jobType: form.jobTypes[0] });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // Mock submission — in production, wire to your API endpoint
    console.log("Form submitted:", formData);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="bg-brand-600 py-16 sm:py-20">
        <div className="section-container text-center">
          <svg className="mx-auto h-16 w-16 text-white/80" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
            Thank you! We&apos;ll be in touch within 2 hours.
          </h2>
          <p className="mt-3 text-lg text-white/80">
            One of our roofing experts will call you shortly.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-brand-600 py-16 sm:py-20" id="get-quote">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            {heading}
          </h2>
          <p className="mt-3 text-lg text-white/80">{subheading}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 max-w-2xl rounded-2xl bg-white p-6 shadow-xl sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-3">
            {form.fields.map((field) => (
              <div key={field.name}>
                <label htmlFor={`cta-${field.name}`} className="input-label">
                  {field.label}
                </label>
                <input
                  id={`cta-${field.name}`}
                  type={field.type}
                  required={field.required}
                  placeholder={field.placeholder}
                  className="input-field"
                  value={formData[field.name as keyof typeof formData] ?? ""}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, [field.name]: e.target.value }))
                  }
                />
              </div>
            ))}
            <div className="sm:col-span-3">
              <label htmlFor="cta-jobType" className="input-label">
                Job Type
              </label>
              <select
                id="cta-jobType"
                required
                className="input-field"
                value={formData.jobType}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, jobType: e.target.value }))
                }
              >
                {form.jobTypes.map((jt) => (
                  <option key={jt} value={jt}>
                    {jt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button type="submit" className="btn-primary mt-6 w-full py-3.5 text-base">
            {form.submitText}
          </button>

          <p className="mt-3 text-center text-xs text-gray-500">
            No spam, no obligation. We respect your privacy.
          </p>
        </form>
      </div>
    </section>
  );
}
