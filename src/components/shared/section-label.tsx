import { cn } from "@/lib/utils";

/**
 * The gold small-caps label above each section heading (plan §2.3).
 * Gold appears here as a label and as 1px rules — never as a fill (§2.1.4).
 */
export function SectionLabel({
  children,
  className,
  withRule = true,
}: {
  children: React.ReactNode;
  className?: string;
  withRule?: boolean;
}) {
  return (
    <p className={cn("eyebrow flex items-center gap-3", className)}>
      {withRule && (
        <span
          aria-hidden="true"
          className="h-px w-8 bg-[var(--gold-500)] opacity-80"
        />
      )}
      {children}
    </p>
  );
}
