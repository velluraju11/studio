import { Cpu, Bot, ShieldCheck, type LucideIcon } from "lucide-react";

export interface Product {
  slug: string;
  icon: LucideIcon;
  title: string;
  image: string;
  aiHint: string;
  status: "Under Development" | "Planned";
  description: string;
  features: string[];
  targetAudience: string[];
  note: string;
}

export const products: Product[] = [
  {
    slug: "ryha-os",
    icon: Cpu,
    title: "Ryha OS — The World’s Smartest Operating System",
    image: "https://ik.imagekit.io/ps8bybjwy/os.png?updatedAt=1750854897698",
    aiHint: "QR code",
    status: "Under Development",
    description: "Ryha OS is a groundbreaking, AI-native operating system designed from first principles to be intelligent, secure, and blazing fast. It eliminates digital friction by automating repetitive tasks, proactively optimizing workflows, and providing a seamless, voice-controlled experience. Built for power users who demand performance without compromise, Ryha OS puts you in complete control of your digital world.",
    features: [
      "AI-assisted & voice-controlled OS.",
      "10x faster with zero bloatware.",
      "Real-time threat detection.",
      "Private cloud integration you control.",
    ],
    targetAudience: ["Power Users & Developers", "Security Professionals", "Innovators & Creators", "Anyone seeking a faster, smarter OS"],
    note: "Ryha OS respects your data. You decide what’s stored — on your terms."
  },
  {
    slug: "ryha-ai",
    icon: Bot,
    title: "Ryha AI — The Infinite Agent, Reimagined",
    image: "https://ik.imagekit.io/ps8bybjwy/Generated%20image%201%20(1).png?updatedAt=1750854478428",
    aiHint: "artificial intelligence brain",
    status: "Under Development",
    description: "Ryha AI is not just another assistant; it's an autonomous agent with infinite contextual memory and a deep understanding of your needs. Engineered for absolute privacy, it operates within your secure environment without ever sending your data to the cloud for training. It's the co-pilot that helps you code, design, write, and think—all while keeping your data yours.",
    features: [
      "Infinite contextual memory & autonomous learning.",
      "100% private, no data collection for training.",
      "Operates securely in your private cloud.",
      "Natively integrated into Ryha OS.",
    ],
    targetAudience: ["Developers & Engineers", "Writers & Content Creators", "Researchers & Analysts", "Privacy-conscious Individuals"],
    note: "AI that works for you, not on you."
  },
  {
    slug: "humanized-pentesting-agent",
    icon: ShieldCheck,
    title: "Humanized Pentesting Agent — AI That Hacks Like a Human",
    image: "https://images.unsplash.com/photo-1655036387197-566206c80980?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxjeWJlcnNlY3VyaXR5JTIwc2hpZWxkfGVufDB8fHx8MTc1MDc4Nzc0OHww&ixlib=rb-4.1.0&q=80&w=1080",
    aiHint: "cybersecurity shield",
    status: "Planned",
    description: "The Humanized Pentesting Agent is a revolutionary cybersecurity tool that leverages AI to think and act like a world-class ethical hacker. It autonomously probes systems, discovers vulnerabilities, and exploits them in a secure, sandboxed environment. Capable of running thousands of tools and generating comprehensive reports with video evidence, it's the ultimate force multiplier for security teams.",
    features: [
      "AI that simulates humanized pentesting.",
      "1000+ tools in a sandboxed environment.",
      "Detects vulnerabilities 100x faster than humans.",
      "Generates full reports with recordings.",
    ],
    targetAudience: ["Bug Bounty Hunters", "SOC Teams & Blue Teams", "Red Teams & Pentesters", "Cybersecurity Training Centers"],
    note: "Perfect for bug bounty hunters, SOC teams, and ethical hackers."
  }
];
