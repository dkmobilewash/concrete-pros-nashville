"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/data/services";
import { areas } from "@/data/areas";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm({ defaultService, defaultArea }: { defaultService?: string; defaultArea?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      phone: String(data.get("phone") || ""),
      email: String(data.get("email") || ""),
      address: String(data.get("address") || ""),
      service: String(data.get("service") || ""),
      message: String(data.get("message") || ""),
      company: String(data.get("company") || ""), // honeypot
    };

    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      if (!res.ok || !result.ok) {
        setStatus("error");
        setErrorMessage(result.error || "Something went wrong. Please call us instead.");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please call us instead.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-brand-200 bg-brand-50 p-6 text-brand-800">
        <p className="font-heading text-xl font-bold mb-1">Thanks — we&apos;ve got your request.</p>
        <p className="text-sm">
          We&apos;ll follow up within one business day to schedule your free estimate. If it&apos;s urgent, call us
          directly at (615) 239-1809.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {/* Honeypot field — hidden from real users via CSS, not visually hidden from screen readers is fine since bots target the name */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Full Name" name="name" required autoComplete="name" />
        <Field label="Phone" name="phone" type="tel" required autoComplete="tel" />
      </div>
      <Field label="Email" name="email" type="email" required autoComplete="email" />
      <Field label="Property Address" name="address" autoComplete="street-address" />

      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-concrete-800 mb-1">
          Service Needed
        </label>
        <select
          id="service"
          name="service"
          defaultValue={defaultService || ""}
          className="w-full rounded-md border border-concrete-300 px-3 py-2.5 text-concrete-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
        >
          <option value="">Select a service (optional)</option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
        </select>
      </div>

      {defaultArea && (
        <input type="hidden" name="areaHint" value={areas.find((a) => a.slug === defaultArea)?.name || ""} />
      )}

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-concrete-800 mb-1">
          Tell us about your project <span className="text-brand-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full rounded-md border border-concrete-300 px-3 py-2.5 text-concrete-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
          placeholder="e.g. Replacing a cracked driveway, about 600 sq ft, in Brentwood"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-md px-3 py-2">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full sm:w-auto rounded-md bg-brand-600 px-7 py-3.5 font-bold text-white shadow-sm hover:bg-brand-700 disabled:opacity-60 transition-colors"
      >
        {status === "submitting" ? "Sending…" : "Request Free Estimate"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-concrete-800 mb-1">
        {label} {required && <span className="text-brand-600">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-md border border-concrete-300 px-3 py-2.5 text-concrete-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
      />
    </div>
  );
}
