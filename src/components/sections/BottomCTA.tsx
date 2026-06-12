"use client";

import { globalUI, companyDetails } from "@/config/site-config";
import { useState, useRef, type FormEvent } from "react";
import BusinessHoursWrapper from "@/components/ui/BusinessHoursWrapper";

interface FormErrors {
  name?: string;
  phone?: string;
  postcode?: string;
  jobType?: string;
}

export default function BottomCTA() {
  const { heading, subheading, form } = globalUI.bottomCTA;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", postcode: "", jobType: form.jobTypes[0] });
  const [errors, setErrors] = useState<FormErrors>({});
  const errorSummaryRef = useRef<HTMLDivElement>(null);
  const firstErrorRef = useRef<HTMLInputElement | HTMLSelectElement>(null);

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (!formData.name.trim()) {
      errs.name = "Full name is required.";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required.";
    } else if (!/^[\d\s+\-()]{7,}$/.test(formData.phone.trim())) {
      errs.phone = "Please enter a valid phone number.";
    }
    if (!formData.postcode.trim()) {
      errs.postcode = "Postcode is required.";
    }
    return errs;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Move focus to the error summary for screen readers
      errorSummaryRef.current?.focus();
      return;
    }

    setErrors({});
    // Mock submission — in production, wire to your API endpoint
    console.log("Form submitted:", formData);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="bg-brand-700 py-16 sm:py-20">
        <div className="section-container text-center">
          <svg className="mx-auto h-16 w-16 text-white/80" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
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
    <section className="bg-brand-700 py-16 sm:py-20" id="get-quote" aria-labelledby="bottom-cta-heading">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="bottom-cta-heading" className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            {heading}
          </h2>
          <p className="mt-3 text-lg text-white/80">{subheading}</p>
        </div>

        <BusinessHoursWrapper position="top" className="!block w-full">
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 max-w-2xl rounded-2xl bg-white p-6 shadow-xl sm:p-8"
            noValidate
          >
            {/* Error summary — announced by screen readers */}
            {Object.keys(errors).length > 0 && (
              <div
                ref={errorSummaryRef}
                tabIndex={-1}
                role="alert"
                aria-live="assertive"
                className="mb-6 rounded-lg border-2 border-red-600 bg-red-50 p-4 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-red-600"
              >
                <h3 className="text-sm font-semibold text-red-800">
                  Please fix the following errors:
                </h3>
                <ul className="mt-1 list-inside list-disc text-sm text-red-700">
                  {Object.values(errors).map((msg, i) => (
                    <li key={i}>{msg}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="grid gap-5 sm:grid-cols-3">
              {form.fields.map((field) => {
                const fieldError = errors[field.name as keyof FormErrors];
                const inputId = `cta-${field.name}`;
                const errorId = `${inputId}-error`;

                return (
                  <div key={field.name}>
                    <label htmlFor={inputId} className="input-label">
                      {field.label}{" "}
                      {field.required && <span className="text-red-600" aria-hidden="true">*</span>}
                    </label>
                    <input
                      ref={field.name === Object.keys(errors)[0] ? firstErrorRef as React.RefObject<HTMLInputElement> : undefined}
                      id={inputId}
                      type={field.type}
                      required={field.required}
                      placeholder={field.placeholder}
                      className={`input-field ${fieldError ? "input-field--error" : ""}`}
                      aria-invalid={fieldError ? "true" : undefined}
                      aria-describedby={fieldError ? errorId : undefined}
                      aria-required={field.required ? "true" : undefined}
                      value={formData[field.name as keyof typeof formData] ?? ""}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, [field.name]: e.target.value }))
                      }
                    />
                    {fieldError && (
                      <p id={errorId} className="input-error-message" role="alert">
                        {fieldError}
                      </p>
                    )}
                  </div>
                );
              })}
              <div className="sm:col-span-3">
                <label htmlFor="cta-jobType" className="input-label">
                  Job Type <span className="text-red-600" aria-hidden="true">*</span>
                </label>
                <select
                  id="cta-jobType"
                  required
                  className="input-field"
                  aria-required="true"
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

            <p className="mt-3 text-center text-xs text-gray-600">
              No spam, no obligation. We respect your privacy.
            </p>
          </form>
        </BusinessHoursWrapper>
      </div>
    </section>
  );
}
