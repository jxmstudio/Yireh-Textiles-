import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
