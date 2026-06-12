"use client";

import { useState, useRef, type FormEvent } from "react";
import BusinessHoursWrapper from "@/components/ui/BusinessHoursWrapper";

interface FormField {
  name: string;
  label: string;
  type: string;
  required: boolean;
  placeholder?: string;
}

interface FormConfig {
  fields: FormField[];
  jobTypes: string[];
  submitText: string;
  successMessage: string;
  successSubtext: string;
}

interface ContactFormProps {
  form: FormConfig;
}

export default function ContactForm({ form }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>({
    jobType: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const errorSummaryRef = useRef<HTMLDivElement>(null);

  function validate(): Record<string, string> {
    const errs: Record<string, string> = {};
    const nameField = form.fields.find((f) => f.name === "name");
    const phoneField = form.fields.find((f) => f.name === "phone");
    const emailField = form.fields.find((f) => f.name === "email");
    const jobTypeField = form.fields.find((f) => f.name === "jobType");
    const postcodeField = form.fields.find((f) => f.name === "postcode");

    if (nameField?.required && !(formData.name ?? "").trim()) {
      errs.name = "Full name is required.";
    }
    if (phoneField?.required && !(formData.phone ?? "").trim()) {
      errs.phone = "Phone number is required.";
    } else if (formData.phone && !/^[\d\s+\-()]{7,}$/.test(formData.phone.trim())) {
      errs.phone = "Please enter a valid phone number.";
    }
    if (emailField && formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (jobTypeField?.required && !formData.jobType) {
      errs.jobType = "Please select a job type.";
    }
    if (postcodeField?.required && !(formData.postcode ?? "").trim()) {
      errs.postcode = "Postcode is required.";
    }
    return errs;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      errorSummaryRef.current?.focus();
      return;
    }

    setErrors({});
    // Mock submission — wire to your API/email service in production
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
  }

  function handleChange(name: string, value: string) {
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear the error for this field when the user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-white p-8 text-center shadow-lg sm:p-10">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h2 className="mt-6 text-2xl font-bold text-gray-900">{form.successMessage}</h2>
        <p className="mt-3 text-gray-600">{form.successSubtext}</p>
      </div>
    );
  }

  return (
    <BusinessHoursWrapper position="top">
      <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-6 shadow-lg sm:p-8" noValidate>
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

        <div className="grid gap-5 sm:grid-cols-2">
          {form.fields.map((field) => {
            const fieldError = errors[field.name];
            const inputId = `contact-${field.name}`;
            const errorId = `${inputId}-error`;

            if (field.type === "textarea") {
              return (
                <div key={field.name} className="sm:col-span-2">
                  <label htmlFor={inputId} className="input-label">
                    {field.label}
                    {field.required && <span className="text-red-600" aria-hidden="true"> *</span>}
                  </label>
                  <textarea
                    id={inputId}
                    name={field.name}
                    required={field.required}
                    rows={4}
                    placeholder={field.placeholder}
                    className={`input-field resize-y ${fieldError ? "input-field--error" : ""}`}
                    aria-invalid={fieldError ? "true" : undefined}
                    aria-describedby={fieldError ? errorId : undefined}
                    aria-required={field.required ? "true" : undefined}
                    value={formData[field.name] ?? ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                  />
                  {fieldError && (
                    <p id={errorId} className="input-error-message" role="alert">
                      {fieldError}
                    </p>
                  )}
                </div>
              );
            }

            if (field.type === "select") {
              return (
                <div key={field.name}>
                  <label htmlFor={inputId} className="input-label">
                    {field.label}
                    {field.required && <span className="text-red-600" aria-hidden="true"> *</span>}
                  </label>
                  <select
                    id={inputId}
                    name={field.name}
                    required={field.required}
                    className={`input-field ${fieldError ? "input-field--error" : ""}`}
                    aria-invalid={fieldError ? "true" : undefined}
                    aria-describedby={fieldError ? errorId : undefined}
                    aria-required={field.required ? "true" : undefined}
                    value={formData[field.name] ?? ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                  >
                    <option value="">Select job type...</option>
                    {form.jobTypes.map((jt) => (
                      <option key={jt} value={jt}>
                        {jt}
                      </option>
                    ))}
                  </select>
                  {fieldError && (
                    <p id={errorId} className="input-error-message" role="alert">
                      {fieldError}
                    </p>
                  )}
                </div>
              );
            }

            return (
              <div key={field.name}>
                <label htmlFor={inputId} className="input-label">
                  {field.label}
                  {field.required && <span className="text-red-600" aria-hidden="true"> *</span>}
                </label>
                <input
                  id={inputId}
                  type={field.type}
                  name={field.name}
                  required={field.required}
                  placeholder={field.placeholder}
                  className={`input-field ${fieldError ? "input-field--error" : ""}`}
                  aria-invalid={fieldError ? "true" : undefined}
                  aria-describedby={fieldError ? errorId : undefined}
                  aria-required={field.required ? "true" : undefined}
                  value={formData[field.name] ?? ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                />
                {fieldError && (
                  <p id={errorId} className="input-error-message" role="alert">
                    {fieldError}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <button type="submit" className="btn-primary mt-6 w-full py-3.5 text-base">
          {form.submitText}
        </button>

        <p className="mt-3 text-center text-xs text-gray-600">
          We respect your privacy. No spam, no obligation — just a free,
          honest quote from a local roofing expert.
        </p>
      </form>
    </BusinessHoursWrapper>
  );
}
