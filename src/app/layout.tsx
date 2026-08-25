import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { StickyMobileBar } from "@/components/layout/sticky-mobile-bar";
import { JsonLd } from "@/components/seo/json-ld";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Custom Curtains & Soft Furnishings, Sydney`,
    template: `%s | ${site.name}`,
  },
  description:
    "Yireh Textiles & Sourcing manufactures custom curtains, Roman blinds and soft furnishings in Penrith, Western Sydney. Ten years supplying furniture brands, designers and homes across Sydney.",
  keywords: [
    "custom curtains Sydney",
    "soft furnishings Sydney",
    "Roman blinds Penrith",
    "upholstery Western Sydney",
    "privacy curtains",
    "campervan upholstery Sydney",
    "bulk garment manufacturing Sydney",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Custom Curtains & Soft Furnishings, Sydney`,
    description:
      "Custom curtains, Roman blinds, upholstery and soft furnishings manufactured in Penrith and delivered across Sydney.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Custom Curtains & Soft Furnishings, Sydney`,
    description:
      "Custom curtains, Roman blinds, upholstery and soft furnishings manufactured in Penrith and delivered across Sydney.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "Manufacturing",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-AU"
      // Next 16 no longer overrides scroll-behavior during navigation unless
      // this attribute is present, which would make route changes animate.
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background">
        <JsonLd id="org" data={organizationSchema()} />
        <JsonLd id="website" data={websiteSchema()} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <StickyMobileBar />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
