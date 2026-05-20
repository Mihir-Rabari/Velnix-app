import { Metadata } from "next";
import TeamDirectoryClient from "@/components/TeamDirectoryClient";

export const metadata: Metadata = {
  title: "Engineering Team | VedLabs",
  description: "Meet the elite systems architects, AI research engineers, and builders behind VedLabs. Explore our developer profiles, stack dossiers, and active project telemetry.",
  openGraph: {
    title: "Engineering Team | VedLabs",
    description: "Meet the elite systems architects, AI research engineers, and builders behind VedLabs. Explore our developer profiles, stack dossiers, and active project telemetry.",
    type: "website",
  },
};

export default function TeamPage() {
  return <TeamDirectoryClient />;
}
