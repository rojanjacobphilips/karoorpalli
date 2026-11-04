"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import { ui } from "@/content/site";

type Field = {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
};

export function ParishForm({
  locale,
  type,
  fields,
}: {
  locale: Locale;
  type: string;
  fields: Field[];
}) {
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");

  return (
    <form
      className="space-y-4"
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = Object.fromEntries(new FormData(form).entries());
        const res = await fetch("/api/forms", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ type, ...data }),
        });
        setStatus(res.ok ? "ok" : "error");
        if (res.ok) form.reset();
      }}
    >
      <input type="hidden" name="type" value={type} />
      <p className="hidden" aria-hidden>
        <label>
          Company
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      {fields.map((field) => (
        <label key={field.name} className="block text-sm font-medium">
          {field.label}
          {field.textarea ? (
            <textarea
              name={field.name}
              required={field.required}
              rows={5}
              className="mt-1 w-full rounded-2xl border border-maroon/15 bg-white px-3 py-2 font-normal"
            />
          ) : (
            <input
              name={field.name}
              type={field.type || "text"}
              required={field.required}
              className="mt-1 w-full rounded-2xl border border-maroon/15 bg-white px-3 py-2 font-normal"
            />
          )}
        </label>
      ))}
      <button
        type="submit"
        className="rounded-full bg-maroon px-6 py-3 font-semibold text-ivory"
      >
        {ui.send[locale]}
      </button>
      {status === "ok" ? (
        <p className="text-sm text-maroon">
          {locale === "ml" ? "നന്ദി. ഓഫീസ് ബന്ധപ്പെടും." : "Thank you. The parish office will be in touch."}
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-maroon-soft">Please try again or call the office.</p>
      ) : null}
    </form>
  );
}
