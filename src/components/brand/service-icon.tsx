import { Blinds, Caravan, Factory, Shirt, Sofa } from "lucide-react";
import type { Service } from "@/lib/site";
import { cn } from "@/lib/utils";

const icons = {
  curtains: Blinds,
  sofa: Sofa,
  van: Caravan,
  garment: Shirt,
  factory: Factory,
} as const;

export function ServiceIcon({
  icon,
  className,
}: {
  icon: Service["icon"];
  className?: string;
}) {
  const Icon = icons[icon];
  return <Icon className={cn("size-6", className)} aria-hidden />;
}
