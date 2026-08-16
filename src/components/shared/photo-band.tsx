import Image from "next/image";
import { SectionLabel } from "@/components/shared/section-label";
import type { Img } from "@/content/images";
import { cn } from "@/lib/utils";

/**
 * A full-bleed row of photographs used on the inner pages, in place of the icon
 * cards and bullet blocks the client rejected. Two columns on mobile, four on
 * desktop, hairline gutters, subtle scale on hover.
 */
export function PhotoBand({
  images: photos,
  eyebrow,
  heading,
  className,
}: {
  images: Img[];
  eyebrow?: string;
  heading?: string;
  className?: string;
}) {
  if (photos.length === 0) return null;

  return (
    <section className={cn("bg-linen py-16 lg:py-24", className)}>
      {(eyebrow || heading) && (
        <div className="mx-auto mb-10 max-w-[1600px] px-5 sm:px-8 lg:mb-14 lg:px-12">
          {eyebrow && <SectionLabel>{eyebrow}</SectionLabel>}
          {heading && (
            <h2 className="display-md mt-5 max-w-[22ch] text-balance text-ink">
              {heading}
            </h2>
          )}
        </div>
      )}

      <div className="grid grid-cols-2 gap-0.5 lg:grid-cols-4">
        {photos.map((img) => (
          <div
            key={img.src}
            className="group relative aspect-[4/5] overflow-hidden bg-ink"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
              placeholder="blur"
              blurDataURL={img.blurDataURL}
              className="object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
