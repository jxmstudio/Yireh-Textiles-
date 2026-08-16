"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { CheckCircle2, ChevronDown, Loader2, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ctaSolid } from "@/components/ui/cta";
import {
  contactPreferences,
  enquirySchema,
  enquiryTopics,
  type EnquiryInput,
} from "@/lib/enquiry";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const selectClass =
  "flex h-11 w-full appearance-none rounded-lg border border-input bg-white px-3 pr-10 text-sm text-navy-950 outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40";

/**
 * Native <select> keeps the mobile picker (better on phones than a custom
 * listbox) but loses the chevron once appearance is stripped, so we draw one.
 */
function SelectShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {children}
      <ChevronDown
        className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
        aria-hidden
      />
    </div>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="mt-1.5 text-xs font-medium text-destructive">
      {message}
    </p>
  );
}

export function EnquiryForm({
  /** Pre-selects the dropdown when the form is embedded on a service page. */
  defaultTopic,
  className,
}: {
  defaultTopic?: string;
  className?: string;
}) {
  const [sent, setSent] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryInput>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      suburb: "",
      topic: defaultTopic ?? "",
      preference: "Either",
      message: "",
      company: "",
    },
  });

  async function onSubmit(values: EnquiryInput) {
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const body = (await res.json()) as { ok: boolean; error?: string };

      if (!res.ok || !body.ok) {
        toast.error(
          body.error ??
            `Something went wrong. Please call ${site.phone.display}.`,
        );
        return;
      }

      setSent(true);
      reset();
      toast.success("Enquiry sent. We'll be in touch shortly.");
    } catch {
      toast.error(
        `Could not send your enquiry. Please call ${site.phone.display}.`,
      );
    }
  }

  if (sent) {
    return (
      <div
        className={cn(
          "rounded-2xl border border-gold-300 bg-gold-100/50 p-8 text-center",
          className,
        )}
      >
        <CheckCircle2 className="mx-auto size-10 text-gold-600" aria-hidden />
        <h3 className="mt-4 font-heading text-xl font-semibold text-navy-950">
          Thanks — we&apos;ve got it.
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-navy-900/75">
          Your enquiry is with us and we&apos;ll come back to you with a quote.
          If it&apos;s urgent, call {site.phone.display} between 8am and 6pm.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href={site.phone.href} className={ctaSolid()}>
            <Phone aria-hidden />
            {site.phone.display}
          </a>
          <button
            type="button"
            onClick={() => setSent(false)}
            className="text-sm font-semibold text-navy-900 underline underline-offset-4 hover:text-gold-600"
          >
            Send another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={cn("space-y-5", className)}
    >
      {/* Honeypot — visually and semantically hidden from real users */}
      <div className="absolute left-[-9999px]" aria-hidden>
        <label htmlFor="company">Company (leave blank)</label>
        <input
          id="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("company")}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name" className="mb-1.5">
            Your name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="name"
            autoComplete="name"
            placeholder="Jane Smith"
            className="h-11"
            aria-invalid={!!errors.name}
            {...register("name")}
          />
          <FieldError message={errors.name?.message} />
        </div>

        <div>
          <Label htmlFor="phone" className="mb-1.5">
            Phone <span className="text-destructive">*</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="0400 000 000"
            className="h-11"
            aria-invalid={!!errors.phone}
            {...register("phone")}
          />
          <FieldError message={errors.phone?.message} />
        </div>

        <div>
          <Label htmlFor="email" className="mb-1.5">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className="h-11"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          <FieldError message={errors.email?.message} />
        </div>

        <div>
          <Label htmlFor="suburb" className="mb-1.5">
            Suburb <span className="text-destructive">*</span>
          </Label>
          <Input
            id="suburb"
            autoComplete="address-level2"
            placeholder="e.g. Penrith"
            className="h-11"
            aria-invalid={!!errors.suburb}
            {...register("suburb")}
          />
          <FieldError message={errors.suburb?.message} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="topic" className="mb-1.5">
            What do you need? <span className="text-destructive">*</span>
          </Label>
          <SelectShell>
            <select
              id="topic"
              className={selectClass}
              aria-invalid={!!errors.topic}
              {...register("topic")}
            >
              <option value="">Choose a product or service…</option>
              {enquiryTopics.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </SelectShell>
          <FieldError message={errors.topic?.message} />
        </div>

        <div>
          <Label htmlFor="preference" className="mb-1.5">
            Best way to reach you
          </Label>
          <SelectShell>
            <select
              id="preference"
              className={selectClass}
              {...register("preference")}
            >
              {contactPreferences.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </SelectShell>
        </div>
      </div>

      <div>
        <Label htmlFor="message" className="mb-1.5">
          Tell us about the job
        </Label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Window sizes, quantities, fabric preferences, timeframe — whatever you have. If it's trade work, mention volumes."
          aria-invalid={!!errors.message}
          {...register("message")}
        />
        <FieldError message={errors.message?.message} />
      </div>

      <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={isSubmitting}
          className={ctaSolid("lg", "w-full sm:w-auto")}
        >
          {isSubmitting && <Loader2 className="animate-spin" aria-hidden />}
          {isSubmitting ? "Sending…" : "Send Enquiry"}
        </button>
        <p className="text-xs leading-relaxed text-muted-foreground">
          Or call{" "}
          <a
            href={site.phone.href}
            className="font-semibold text-navy-900 underline underline-offset-2"
          >
            {site.phone.display}
          </a>{" "}
          — {site.hours.display}
        </p>
      </div>
    </form>
  );
}
