import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Explore More — E-bike Rental in Sovata",
    short_name: "Explore More",
    description: "Electric mountain bike rentals in Sovata.",
    start_url: "/",
    display: "standalone",
    background_color: "#14160e",
    theme_color: "#2a2a24",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
