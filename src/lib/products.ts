import { Cpu, Bot, ShieldCheck, type LucideIcon } from "lucide-react";

export interface Product {
  slug: string;
  icon: LucideIcon;
  title: string;
  image: string;
  aiHint: string;
  status: "Under Development" | "Planned";
  features: string[];
  note: string;
}

export const products: Product[] = [
  {
    slug: "ryha-os",
    icon: Cpu,
    title: "Ryha OS — The World’s Smartest Operating System",
    image: "https://images.unsplash.com/photo-1713989765634-5d357b49303c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxvcGVyYXRpbmclMjBzeXN0ZW0lMjBpbnRlcmZhY2V8ZW58MHx8fHwxNzUwNzg3NzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    aiHint: "operating system interface",
    status: "Under Development",
    features: [
      "AI-assisted & voice-controlled OS.",
      "10x faster with zero bloatware.",
      "Real-time threat detection.",
      "Private cloud integration you control.",
    ],
    note: "Ryha OS respects your data. You decide what’s stored — on your terms."
  },
  {
    slug: "ryha-ai",
    icon: Bot,
    title: "Ryha AI — The Infinite Agent, Reimagined",
    image: "https://images.unsplash.com/photo-1674027444454-97b822a997b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwYnJhaW58ZW58MHx8fHwxNzUwNzg3NzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    aiHint: "artificial intelligence brain",
    status: "Under Development",
    features: [
      "Infinite contextual memory & autonomous learning.",
      "100% private, no data collection for training.",
      "Operates securely in your private cloud.",
      "Natively integrated into Ryha OS.",
    ],
    note: "AI that works for you, not on you."
  },
  {
    slug: "human-pentesting-agent",
    icon: ShieldCheck,
    title: "Human Pentesting Agent — AI That Hacks Like a Human",
    image: "https://images.unsplash.com/photo-1655036387197-566206c80980?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxjeWJlcnNlY3VyaXR5JTIwc2hpZWxkfGVufDB8fHx8MTc1MDc4Nzc0OHww&ixlib=rb-4.1.0&q=80&w=1080",
    aiHint: "cybersecurity shield",
    status: "Planned",
    features: [
      "AI that simulates human pentesting.",
      "1000+ tools in a sandboxed environment.",
      "Detects vulnerabilities 100x faster than humans.",
      "Generates full reports with recordings.",
    ],
    note: "Perfect for bug bounty hunters, SOC teams, and ethical hackers."
  }
];
