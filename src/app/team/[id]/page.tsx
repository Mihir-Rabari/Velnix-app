import { Metadata } from "next";
import { notFound } from "next/navigation";
import TeamMemberClient from "@/components/TeamMemberClient";
import { teamMembers } from "@/lib/teamData";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return teamMembers.map((member) => ({
    id: member.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const member = teamMembers.find((m) => m.id === id);

  if (!member) {
    return {
      title: "Team Member Dossier | The Velnix",
      description: "Explore the background and stack profile of our systems builders.",
    };
  }

  return {
    title: `${member.name} | ${member.role} | The Velnix`,
    description: member.shortBio,
    openGraph: {
      title: `${member.name} | ${member.role} | The Velnix`,
      description: member.shortBio,
      type: "profile",
    },
  };
}

export default async function TeamMemberPage({ params }: PageProps) {
  const { id } = await params;
  const member = teamMembers.find((m) => m.id === id);

  if (!member) {
    notFound();
  }

  return <TeamMemberClient member={member} />;
}
