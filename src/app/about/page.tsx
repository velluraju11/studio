
import {
  BrainCircuit,
  Code,
  Target,
  Lock,
  Mic,
  Network,
  Rocket,
  Search,
  Shield,
  User,
  Zap,
  Bot,
  Atom
} from 'lucide-react';
import { AnimatedSection } from '@/components/animated-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Glow } from '@/components/ui/glow';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const howIWork = [
  {
    icon: BrainCircuit,
    title: 'Self-Evolving AI Architecture',
    description: "I’m building Ryha to be modular, autonomous, and self-modifying — an AI that doesn't just assist but learns, adapts, and rewrites its own code to serve better.",
  },
  {
    icon: Shield,
    title: 'Cyberwarfare-First Mindset',
    description: 'Every module is designed from the mindset of a cyberwarrior: secure, resilient, untouchable. Offensive and defensive systems are coded with precision, tested like weapons, and evolve through AI-powered feedback loops.',
  },
  {
    icon: Mic,
    title: 'Voice-Led OS Engineering',
    description: 'I develop Ryha with voice-first architecture — where everything from launching apps to hacking simulations can be controlled hands-free, with full-stack control across OS, VMs, and AI agents.',
  },
  {
    icon: Code,
    title: 'Dynamic Programming',
    description: 'I work without boundaries — constantly developing code that modifies itself, optimizes systems, and builds new layers of functionality automatically based on commands I issue.',
  },
  {
    icon: Bot,
    title: 'AI-Centric Design Philosophy',
    description: 'My core principle: “Let humans think. Let machines execute.” I engineer every Ryha module so AI becomes the brain that manages workflows — from cybersecurity operations to app deployment — all through natural language and autonomous code execution.',
  },
  {
    icon: Atom,
    title: 'First-Principles Engineering',
    description: 'I don’t just improve existing tools; I rebuild them from the ground up. Every system in Ryha is re-architected based on fundamental truths, not industry trends, to achieve unparalleled performance and security.',
  },
];

const characteristics = [
    { icon: Zap, title: "Relentlessly Fast", description: "I build like time doesn’t exist — always in high-output, no-waste mode." },
    { icon: Search, title: "Hyper-Analytical", description: "I reverse-engineer problems, systems, and human behavior — turning chaos into structure." },
    { icon: Lock, title: "Security-Obsessed", description: "Privacy, control, and security are non-negotiable." },
    { icon: Bot, title: "AI-Driven Everything", description: "If a task can be done by AI, I’ll make it automatic." },
    { icon: Rocket, title: "Zero Dependence", description: "I don’t wait on platforms or tools. I build my own." },
    { icon: Network, title: "System Thinker", description: "I see the whole structure — from UI flow to backend logic to AI interaction — and I build accordingly." },
    { icon: Target, title: "Vision-Locked", description: "Once I define a mission, I execute ruthlessly until it's complete." },
    { icon: Code, title: "Code as Craft", description: "I write every line with precision and intent, building systems that are elegant, efficient, and resilient." },
];


export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <AnimatedSection as="div" className="relative overflow-hidden pt-24 pb-12 md:pt-32 md:pb-20 text-center">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-20 hero-grid-bg"
          />
          <Glow />
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <div className="inline-block rounded-full bg-primary/10 p-4 border border-primary/20 mb-6">
                <User className="h-10 w-10 text-primary" />
              </div>
              <h1 className="font-headline text-4xl font-black tracking-tighter text-primary sm:text-5xl md:text-6xl">
                About Me — Velluraju C
              </h1>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                Founder & Visionary Architect of Ryha, the World's First AI-Native Cyberwarfare Ecosystem. I’m not just building software — I’m engineering an AI-driven revolution. As the World’s No. 1 Hacker Aspirant, I live to break barriers — in code, systems, and thinking. I lead the development of Ryha, a next-generation operating system and AI framework that fuses cybersecurity, automation, and intelligence into a single unified force.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="pb-20 space-y-20">
          <div className="container mx-auto px-4 md:px-6">
             <div className="mx-auto max-w-6xl space-y-20">
                <div className="text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter text-accent sm:text-4xl">How I Work for Ryha’s Development</h2>
                     <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        {howIWork.map((item, index) => (
                             <Card key={index} className="flex flex-col hologram-effect">
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        <div className="rounded-lg bg-primary/10 p-2 border border-primary/20">
                                            <item.icon className="h-6 w-6 text-primary" />
                                        </div>
                                        <CardTitle className="text-xl text-foreground">{item.title}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex flex-1 flex-col pt-0">
                                    <p className="text-muted-foreground flex-1">{item.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                 <div className="text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter text-accent sm:text-4xl">My Characteristics as a Builder & Leader</h2>
                     <div className="mt-12 grid grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-4">
                        {characteristics.map((item, index) => (
                            <Card key={index} className="flex flex-col bg-card/50">
                                <CardContent className="p-6 flex items-start gap-4">
                                    <div className="rounded-lg bg-primary/10 p-3 border border-primary/20 mt-1 flex-shrink-0">
                                        <item.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-foreground">{item.title}</h3>
                                        <p className="text-muted-foreground mt-1 text-sm">{item.description}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                <div className="text-center space-y-8 border-t border-border pt-16 max-w-4xl mx-auto">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter text-accent sm:text-4xl">Why I Built Ryha</h2>
                     <p className="text-lg text-muted-foreground">
                        I created Ryha not just as a tool, but as a movement. A way to redefine what it means to interact with technology. To make AI the executor of human will, with full control, total security, and limitless potential.
                    </p>
                    <blockquote className="border-l-2 border-primary/50 pl-6 text-xl text-foreground/90 italic">
                        “Ryha is my vision, my weapon, and my contribution to the world — an empire built from scratch, where AI obeys, protects, and empowers.”
                    </blockquote>
                </div>
             </div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
