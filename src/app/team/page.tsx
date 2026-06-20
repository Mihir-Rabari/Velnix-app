import { Metadata } from "next";
import TeamDirectoryClient from "@/components/TeamDirectoryClient";

export const metadata: Metadata = {
  title: "Engineering Team | The Velnix",
  description: "Meet the elite systems architects, AI research engineers, and builders behind The Velnix. Explore our developer profiles, stack dossiers, and active project telemetry.",
  openGraph: {
    title: "Engineering Team | The Velnix",
    description: "Meet the elite systems architects, AI research engineers, and builders behind The Velnix. Explore our developer profiles, stack dossiers, and active project telemetry.",
    type: "website",
  },
};

export default function TeamPage() {
  return <TeamDirectoryClient />;
}
