import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // One canonical host. site.url is https://www.yirehtextiles.com.au, every
  // canonical/sitemap URL uses it, and Search Console should be told the same.
  // Requests to the bare apex are 308'd to www so Google never indexes both.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "yirehtextiles.com.au" }],
        destination: "https://www.yirehtextiles.com.au/:path*",
        permanent: true,
      },
    ];
  },
  images: {
    // Placeholder photography is served from the Unsplash CDN while we wait on
    // the client's own workroom photos. Swapping to local files is a data edit
    // in src/content/images.ts — see the note at the top of that file.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
    ],
    // Next 16 narrowed the default to [75]; the hero and capability tiles are
    // large enough to want a little more, the marquee thumbnails a little less.
    qualities: [60, 75, 90],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
