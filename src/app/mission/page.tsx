
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { AnimatedSection } from '@/components/animated-section';
import { Bot, Combine, Cpu, ShieldCheck, Target, Zap } from 'lucide-react';
import { Glow } from '@/components/ui/glow';

const achievements = [
    {
        icon: Zap,
        title: 'Total Automation of Repetition',
        description: 'Any digital task that is repetitive, boring, or purely technical? Gone. Ryha will handle it — in real time, with zero latency.',
    },
    {
        icon: Bot,
        title: 'Self-Optimizing Systems That Think Ahead',
        description: 'Ryha AI learns how you work — without storing your data — and adjusts system flows, shortcuts, and resource allocation to maximize speed and efficiency.',
    },
    {
        icon: ShieldCheck,
        title: 'Military-Grade Privacy Without Complexity',
        description: 'Whether you’re a student or a SOC analyst, Ryha ensures every file, connection, and execution is fortified with classified-level protection, yet always user-friendly.',
    },
    {
        icon: Cpu,
        title: 'Performance That Scales Across Devices',
        description: 'We believe powerful AI shouldn\'t require supercomputers. Ryha’s mission includes delivering blazing-fast intelligence with ultra-low system footprint.',
    },
    {
        icon: Combine,
        title: 'Bridge Between Human Creativity & Machine Precision',
        description: 'By removing friction in development, testing, UI/UX design, and more — Ryha empowers creators to focus purely on vision, while the AI handles execution.',
    },
];


export default function MissionPage() {
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
                        <Target className="h-10 w-10 text-primary" />
                    </div>
                    <h1 className="font-headline text-4xl font-black tracking-tighter text-primary sm:text-5xl md:text-6xl">
                        Ryha’s Mission — Engineering Intelligence That Works for Humanity
                    </h1>
                    <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                        Ryha’s mission is to eliminate digital complexity and engineer AI-native ecosystems that are not just tools, but living, evolving systems — designed to think, act, and adapt like a human… and beyond.
                    </p>
                </div>
            </div>
        </AnimatedSection>

        <AnimatedSection>
            <div className="container mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-4xl space-y-16">
                    <div className="text-center">
                        <h2 className="font-headline text-3xl font-bold tracking-tighter text-accent sm:text-4xl">What This Means in Practice</h2>
                        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                            <div className="space-y-2">
                                <h3 className="font-bold text-xl text-foreground">🔧 Autonomy, Not Assistance</h3>
                                <p className="text-muted-foreground">We build agents that act on your behalf, handle full workflows, troubleshoot systems, and continuously evolve.</p>
                                 <blockquote className="border-l-2 border-primary/50 pl-4 text-foreground/80 text-sm italic">
                                    “If Ryha OS is your digital universe, then Ryha AI is the mind that powers it.”
                                </blockquote>
                            </div>
                             <div className="space-y-2">
                                <h3 className="font-bold text-xl text-foreground">🔐 Security by Default</h3>
                                <p className="text-muted-foreground">Security is the DNA of our architecture. Every operation is encrypted, monitored, and isolated. No spyware, no forced data pipelines.</p>
                                 <blockquote className="border-l-2 border-primary/50 pl-4 text-foreground/80 text-sm italic">
                                    “You decide what’s stored, when it’s stored, and where it lives — not us.”
                                </blockquote>
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-bold text-xl text-foreground">⚙️ Human-Centric AI</h3>
                                <p className="text-muted-foreground">Ryha understands context, adapts to your needs, and executes without error. It feels like working with another mind, not a machine.</p>
                                 <blockquote className="border-l-2 border-primary/50 pl-4 text-foreground/80 text-sm italic">
                                    “A system that thinks like you, works for you, and never forgets.”
                                </blockquote>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <h2 className="font-headline text-3xl font-bold tracking-tighter text-accent sm:text-4xl">What We Aim to Achieve</h2>
                        <div className="mt-10 grid grid-cols-1 gap-8 text-left sm:grid-cols-2">
                            {achievements.map((item, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="rounded-lg bg-primary/10 p-3 border border-primary/20 mt-1">
                                        <item.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-foreground">{item.title}</h3>
                                        <p className="text-muted-foreground mt-1">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center space-y-4 border-t border-border pt-12">
                        <h3 className="font-headline text-2xl font-bold tracking-tighter text-accent sm:text-3xl">Ryha’s Mission in One Line:</h3>
                         <p className="text-xl text-foreground/90 md:text-2xl">
                            To build a world where machines work not just with you — but for you — intelligently, securely, and forever.
                        </p>
                         <div className="text-lg text-muted-foreground pt-4">
                            <p>We’re not chasing hype. We’re not copying Silicon Valley.</p>
                            <p className="font-bold text-foreground mt-2">We’re building the first AI-native tech empire — engineered from scratch, by one mind, for the entire world.</p>
                        </div>
                    </div>

                </div>
            </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
