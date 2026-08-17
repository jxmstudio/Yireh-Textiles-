"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDown, Loader2 } from "lucide-react";
import { enquirySchema, submitEnquiry, type EnquiryInput } from "@/lib/enquiry";
import { cn } from "@/lib/utils";

/**
 * Enquiry form (plan §3.10). Fields exactly per the questionnaire, validated
 * with zod + react-hook-form on the client and again on the server, with a
 * honeypot for spam. The success state replaces the form in place — no redirect.
 *
 * Posts to the JXM Forms backend (see submitEnquiry in lib/enquiry), which
 * stores the enquiry, filters spam and emails it on with the sender as Reply-To.
 */

/** Product interest options, per the questionnaire. */
const productOptions = [
  "Curtains",
  "Roman Blinds",
  "Privacy & Medical Curtains",
  "Soft Furnishings",
  "Sofas & Lounges",
  "Cushions",
  "Marine & Campervan",
  "Bulk Manufacturing",
  "Production Consulting",
] as const;

const fieldClass =
  "h-12 w-full border border-stone-300 bg-white px-4 text-[0.95rem] text-ink outline-none transition-colors placeholder:text-stone-600/50 focus-visible:border-[var(--blue-500)]";

function Field({
  label,
  required,
  error,
  children,
  htmlFor,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
  htmlFor: string;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-[0.7rem] font-medium tracking-[0.14em] text-stone-600 uppercase"
      >
        {label}
        {required && (
          <span className="ml-1 text-[var(--gold-600)]" aria-hidden>
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1.5 text-xs font-medium text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

export function EnquiryForm({ className }: { className?: string }) {
  const [sent, setSent] = React.useState(false);
  const [serverError, setServerError] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryInput>({
    resolver: zodResolver(enquirySchema),
    defaultValues: { topic: "", preference: "Either" },
  });

  const onSubmit = handleSubmit(async (values) => {
    setServerError(null);
    try {
      const result = await submitEnquiry(values);
      if (!result.ok) {
        setServerError(
          result.error ?? "Something went wrong. Please call us instead.",
        );
        return;
      }
      setSent(true);
    } catch {
      setServerError(
        "We could not send that. Please check your connection or call us.",
      );
    }
  });

  if (sent) {
    return (
      <div
        className={cn(
          "flex min-h-[28rem] flex-col justify-center border border-stone-300 bg-paper p-8 sm:p-12",
          className,
        )}
      >
        <div className="h-px w-12 bg-[var(--gold-500)]" aria-hidden />
        <h3 className="mt-6 font-display text-3xl text-ink">
          Thanks — that&rsquo;s with us.
        </h3>
        <p className="body-lg mt-4 text-stone-600">
          We read every enquiry and will come back to you with a written quote.
          If it is urgent, calling is always fastest.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className={cn("border border-stone-300 bg-paper p-6 sm:p-10", className)}
    >
      {/* Honeypot — visually hidden, never announced, real people leave it empty */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("company")}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" required htmlFor="name" error={errors.name?.message}>
          <input
            id="name"
            className={fieldClass}
            autoComplete="name"
            {...register("name")}
          />
        </Field>

        <Field
          label="Phone"
          required
          htmlFor="phone"
          error={errors.phone?.message}
        >
          <input
            id="phone"
            type="tel"
            inputMode="tel"
            className={fieldClass}
            autoComplete="tel"
            {...register("phone")}
          />
        </Field>

        <Field label="Email" htmlFor="email" error={errors.email?.message}>
          <input
            id="email"
            type="email"
            className={fieldClass}
            autoComplete="email"
            {...register("email")}
          />
        </Field>

        <Field
          label="Suburb"
          required
          htmlFor="suburb"
          error={errors.suburb?.message}
        >
          <input
            id="suburb"
            className={fieldClass}
            autoComplete="address-level2"
            {...register("suburb")}
          />
        </Field>

        <div className="sm:col-span-2">
          <Field
            label="Product interest"
            required
            htmlFor="topic"
            error={errors.topic?.message}
          >
            <div className="relative">
              <select
                id="topic"
                className={cn(fieldClass, "appearance-none pr-10")}
                {...register("topic")}
              >
                <option value="">Choose one…</option>
                {productOptions.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-stone-600"
                aria-hidden
              />
            </div>
          </Field>
        </div>

        <div className="sm:col-span-2">
          <Field
            label="Message"
            htmlFor="message"
            error={errors.message?.message}
          >
            <textarea
              id="message"
              rows={5}
              className={cn(fieldClass, "h-auto resize-y py-3")}
              placeholder="Windows, rooms, quantities, timing — whatever you have."
              {...register("message")}
            />
          </Field>
        </div>
      </div>

      {serverError && (
        <p role="alert" className="mt-5 text-sm font-medium text-destructive">
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-8 inline-flex h-14 w-full items-center justify-center bg-ink px-9 text-sm font-medium tracking-wide text-linen transition-colors hover:bg-[var(--indigo-700)] disabled:opacity-70 sm:w-auto"
      >
        {isSubmitting && (
          <Loader2 className="mr-2 size-4 animate-spin" aria-hidden />
        )}
        {isSubmitting ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
