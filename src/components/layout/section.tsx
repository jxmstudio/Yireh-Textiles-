import * as React from "react";
import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

export function Section({
  className,
  children,
  id,
  tone = "default",
}: {
  className?: string;
  children: React.ReactNode;
  id?: string;
  tone?: "default" | "sand" | "navy";
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 sm:py-20 lg:py-24",
        tone === "sand" && "bg-sand",
        tone === "navy" && "bg-navy-950 text-navy-100",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function Eyebrow({
  children,
  tone = "default",
  className,
}: {
  children: React.ReactNode;
  tone?: "default" | "onDark";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em]",
        tone === "onDark" ? "text-gold-400" : "text-gold-600",
        className,
      )}
    >
      <span
        className={cn(
          "h-px w-8",
          tone === "onDark" ? "bg-gold-400" : "bg-gold-500",
        )}
        aria-hidden
      />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "default",
  align = "left",
  as: Heading = "h2",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  tone?: "default" | "onDark";
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <Eyebrow
          tone={tone}
          className={align === "center" ? "justify-center" : undefined}
        >
          {eyebrow}
        </Eyebrow>
      )}
      <Heading
        className={cn(
          "mt-4 text-balance font-heading text-3xl font-semibold leading-[1.15] sm:text-4xl lg:text-[2.75rem]",
          tone === "onDark" ? "text-white" : "text-navy-950",
        )}
      >
        {title}
      </Heading>
      {description && (
        <div
          className={cn(
            "mt-5 text-pretty text-base leading-relaxed sm:text-lg",
            tone === "onDark" ? "text-navy-100/80" : "text-muted-foreground",
          )}
        >
          {description}
        </div>
      )}
    </div>
  );
}
