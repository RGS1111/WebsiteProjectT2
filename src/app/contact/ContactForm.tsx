"use client";

import { useState, type FormEvent } from "react";

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
    jobType: form.jobTypes[0],
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // Mock submission — wire to your API/email service in production
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
  }

  function handleChange(name: string, value: string) {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-white p-8 text-center shadow-lg sm:p-10">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h2 className="mt-6 text-2xl font-bold text-gray-900">{form.successMessage}</h2>
        <p className="mt-3 text-gray-600">{form.successSubtext}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-6 shadow-lg sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        {form.fields.map((field) => {
          if (field.type === "textarea") {
            return (
              <div key={field.name} className="sm:col-span-2">
                <label htmlFor={`contact-${field.name}`} className="input-label">
                  {field.label}
                </label>
                <textarea
                  id={`contact-${field.name}`}
                  name={field.name}
                  required={field.required}
                  rows={4}
                  placeholder={field.placeholder}
                  className="input-field resize-y"
                  value={formData[field.name] ?? ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                />
              </div>
            );
          }

          if (field.type === "select") {
            return (
              <div key={field.name}>
                <label htmlFor={`contact-${field.name}`} className="input-label">
                  {field.label}
                </label>
                <select
                  id={`contact-${field.name}`}
                  name={field.name}
                  required={field.required}
                  className="input-field"
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
              </div>
            );
          }

          return (
            <div key={field.name}>
              <label htmlFor={`contact-${field.name}`} className="input-label">
                {field.label}
              </label>
              <input
                id={`contact-${field.name}`}
                type={field.type}
                name={field.name}
                required={field.required}
                placeholder={field.placeholder}
                className="input-field"
                value={formData[field.name] ?? ""}
                onChange={(e) => handleChange(field.name, e.target.value)}
              />
            </div>
          );
        })}
      </div>

      <button type="submit" className="btn-primary mt-6 w-full py-3.5 text-base">
        {form.submitText}
      </button>

      <p className="mt-3 text-center text-xs text-gray-500">
        We respect your privacy. No spam, no obligation — just a free,
        honest quote from a local roofing expert.
      </p>
    </form>
  );
}
