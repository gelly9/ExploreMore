import type { Metadata } from "next";
import { Home } from "@/components/Home";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("ro");

export default function Page() {
  return <Home lang="ro" />;
}
