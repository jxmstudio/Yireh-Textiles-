/**
 * Renders a JSON-LD block. Structured data is one of the cheapest SEO wins
 * available, so every page type on this site emits one.
 */
export function JsonLd({
  id,
  data,
}: {
  id: string;
  data: Record<string, unknown> | Record<string, unknown>[];
}) {
  return (
    <script
      type="application/ld+json"
      id={`ld-${id}`}
      // Content is authored by us, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
