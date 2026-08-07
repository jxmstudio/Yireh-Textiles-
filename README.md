# Yireh Textiles

Marketing and lead-generation website for Yireh Textiles — custom curtains, blinds,
upholstery and soft furnishings, manufactured in Penrith, NSW.

Built with **Next.js 16 (App Router)**, **Tailwind CSS v4** and **shadcn/ui**.

---

## Running it

```bash
npm install && npm run dev
```

Then open http://localhost:3000.

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build (also type-checks) |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |

---

## Pages

| Route | Notes |
| --- | --- |
| `/` | Home — hero, clients, services, why us, process, areas, FAQs, enquiry form |
| `/services` | Services index |
| `/services/[slug]` | 5 service pages, generated from `src/lib/site.ts` |
| `/about` | Company story, the name, capability, values |
| `/areas-we-serve` | Area index, grouped by region |
| `/areas-we-serve/[slug]` | 12 local SEO pages with area-specific copy and FAQs |
| `/contact` | Contact details + enquiry form |
| `/privacy` | Privacy policy (noindex) |
| `/brand` | **Client-facing logo concept picker** (noindex) — send this link to Jan |
| `/sitemap.xml`, `/robots.txt` | Generated automatically |

---

## Editing content

Almost all copy lives in **`src/lib/site.ts`**. Editing it updates the pages, the
navigation, the schema markup, the enquiry form dropdown and the sitemap together.

- `site` — business name, phone, email, address, hours
- `services` — the five services (adding one creates its page and sitemap entry)
- `areas` — suburbs/regions (adding one creates a new local SEO page)
- `clients`, `faqs`, `stats`, `processSteps`, `differentiators`, `nav`

**Adding a new local SEO page** is the monthly retainer work described in the
proposal: add an entry to `areas` and a fully-formed page is generated, linked
from the footer, the area index, every service page, and the sitemap.

---

## The enquiry form

`src/components/forms/enquiry-form.tsx` → `POST /api/enquiry`

Fields: name, phone, email (optional), suburb, product/service, preferred
contact method, message. Validated with Zod on both the client and the server,
plus a honeypot field and a per-IP rate limit.

### Email delivery

Copy `.env.example` to `.env.local` and fill it in:

```bash
cp .env.example .env.local
```

- `RESEND_API_KEY` — from https://resend.com
- `ENQUIRY_TO_EMAIL` — defaults to `info@yirehstitchtech.com`
- `ENQUIRY_FROM_EMAIL` — must be on a domain verified in Resend

**Without the API key the form still works** — submissions are validated and
logged to the server console instead of emailed. Set the key before launch.

> Verifying a *sending* subdomain (e.g. `send.yirehstitchtech.com`) in Resend does
> not touch the existing GoDaddy mailbox on `info@yirehstitchtech.com`.

---

## Branding

- **Palette:** navy (`#08182c` / `#0f2440`), white, gold lining (`#c9a227`), warm
  sand (`#f8f5ef`). Defined as CSS variables in `src/app/globals.css`.
- **Type:** Fraunces (headings) + Inter (body), self-hosted via `next/font`.
- **Logo:** three concepts in `src/components/brand/logo.tsx`, all vector.
  The **Woven Y** is currently live. Show the client `/brand` to choose.
- **Textures:** `.weave-texture` and `.drape-texture` utilities — abstract
  warp/weft and pleat line work, no photography required.

---

## Still outstanding before launch

1. **Photos.** The client has product photos to send via WhatsApp. The hero,
   service pages and area pages are designed to hold up without them, but real
   work photos will lift the site significantly. Drop them in `public/` and use
   `next/image`.
2. **Logo sign-off.** Send `/brand` and get a concept chosen, then produce the
   final file set (SVG, PNG, favicon, social avatar) for handover.
3. **Resend key + verified domain**, so enquiries reach the inbox.
4. **Domain.** Point `www.yirehstitchtech.com` (GoDaddy) at the host. Leave the
   existing MX records alone so email keeps working.
5. **Google Search Console + Analytics**, sitemap submitted, pages indexed.
6. **Aboriginal art theme** — see the note at the bottom of `/brand`. Genuine
   Aboriginal artwork should be commissioned or licensed from an Aboriginal
   artist rather than imitated; happy to help arrange it.

---

## Notes

- No CMS. Content is in typed TypeScript, which keeps the site static, fast and
  impossible to break with a plugin update.
- Every page ships JSON-LD (`LocalBusiness`, `Service`, `FAQPage`,
  `BreadcrumbList`) and a canonical URL.
- `metadataBase` and all canonicals come from `site.url` in `src/lib/site.ts` —
  change it there if the domain changes.
