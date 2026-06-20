export interface TeamMember {
  id: string;
  name: string;
  role: string;
  tagline: string;
  shortBio: string;
  detailedBio: string[];
  socials: {
    linkedin: string;
    twitter: string;
    instagram: string;
  };
  telemetry: {
    role: string;
    focus: string[];
    projects: string[];
    coreTech: string;
    location: string;
    status: string;
  };
  skills: string[];
}

export const teamMembers: TeamMember[] = [
  {
    id: "mihir-rabari",
    name: "Mihir Rabari",
    role: "Founder & Software Engineer",
    tagline: "Founder & Software Engineer at The Velnix",
    shortBio: "Mihir Rabari is a builder focused on AI-native systems, scalable infrastructure, workflow automation, and developer-first products.",
    detailedBio: [
      "Mihir Rabari is a builder focused on AI-native systems, scalable infrastructure, workflow automation, and developer-first products. His work spans communication intelligence, machine learning systems, security tooling, and modern web infrastructure.",
      "He has built projects ranging from AI-powered network security systems and intelligent attendance platforms to collaborative AI development environments and agent-native communication tools.",
      "Mihir has participated in multiple national hackathons, earned recognition for rapid problem-solving and engineering innovation, and actively explores the future of human and AI collaboration through software."
    ],
    socials: {
      linkedin: "https://www.linkedin.com/in/mihir-rabari/",
      twitter: "https://x.com/mihir_rabari",
      instagram: "https://instagram.com/mihir_rabari"
    },
    telemetry: {
      role: "System Architect",
      focus: ["AI Infrastructure", "Autonomous Workflows"],
      projects: ["InboxFM", "FlameNGen", "HackHunt"],
      coreTech: "Next.js / TypeScript / Python / WASM / Cloudflare",
      location: "Gujarat, India",
      status: "ONLINE_R&D_MODE"
    },
    skills: ["Next.js", "TypeScript", "Python", "WASM", "Cloudflare", "Rust", "Go", "PyTorch"]
  },
  {
    id: "alex-chen",
    name: "Alex Chen",
    role: "Founding Engineer",
    tagline: "Founding Systems Engineer at The Velnix",
    shortBio: "Alex focuses on high-performance distributed systems, database internals, and low-latency stream processing engines.",
    detailedBio: [
      "Alex Chen is a founding engineer at The Velnix, specializing in low-latency systems and distributed consensus algorithms.",
      "Before joining The Velnix, Alex was a core contributor to distributed datastores and high-throughput streaming systems, building data layers that scale to millions of requests per second.",
      "At The Velnix, Alex leads the developer infrastructure R&D, designing the real-time execution kernels that power our agent networks."
    ],
    socials: {
      linkedin: "https://linkedin.com/in/alex-chen",
      twitter: "https://x.com/alex-chen",
      instagram: "https://instagram.com/alex-chen"
    },
    telemetry: {
      role: "Founding Systems Architect",
      focus: ["Distributed Systems", "Database Internals"],
      projects: ["VedDB", "StreamCore", "HyperQueue"],
      coreTech: "Rust / Go / gRPC / Kubernetes / WebRTC",
      location: "San Francisco, CA",
      status: "DEPLOYING_AGENT_CLUSTER"
    },
    skills: ["Rust", "Go", "gRPC", "Kubernetes", "WebRTC", "C++", "Docker", "PostgreSQL"]
  },
  {
    id: "sarah-jenkins",
    name: "Sarah Jenkins",
    role: "Lead AI Research Engineer",
    tagline: "Lead AI Research Engineer at The Velnix",
    shortBio: "Sarah designs agentic workflows, multi-agent coordination frameworks, and optimizes large cognitive pipelines.",
    detailedBio: [
      "Sarah Jenkins is our Lead AI Research Engineer, crafting state-of-the-art cognitive workflows and agentic coordination logic.",
      "She has a deep background in computational linguistics and transformer efficiency research, focusing on localized inference optimization and secure agent sandboxing.",
      "Sarah's mission is to move AI from simple prompt-response wrappers to fully autonomous, high-fidelity co-builders."
    ],
    socials: {
      linkedin: "https://linkedin.com/in/sarah-jenkins",
      twitter: "https://x.com/sarah-jenkins",
      instagram: "https://instagram.com/sarah-jenkins"
    },
    telemetry: {
      role: "Lead AI Researcher",
      focus: ["Multi-Agent Networks", "Cognitive Pipelines"],
      projects: ["AgentOS", "CognitiveMesh", "SyncLLM"],
      coreTech: "PyTorch / Python / JAX / LangChain / HuggingFace",
      location: "London, UK",
      status: "TRAINING_COGNITIVE_MODEL"
    },
    skills: ["PyTorch", "Python", "JAX", "LangChain", "HuggingFace", "TensorFlow", "FastAPI", "Docker"]
  }
];
