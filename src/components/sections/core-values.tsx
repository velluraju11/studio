import { Shield, BrainCircuit, User, Infinity, Wallet, Zap, KeyRound, Lightbulb } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  { icon: Shield, title: "Security by Design", description: "Not an afterthought, but a foundation." },
  { icon: BrainCircuit, title: "AI-First Thinking", description: "Every layer is smart, from kernel to UI." },
  { icon: User, title: "User-Driven Interfaces", description: "Designed for experience, not complexity." },
  { icon: Infinity, title: "Boundless Innovation", description: "No barriers. No limits." },
  { icon: Wallet, title: "Affordable Power", description: "Elite tech made accessible." },
  { icon: Zap, title: "Autonomous Evolution", description: "Self-updating and self-improving systems." },
  { icon: KeyRound, title: "True Freedom", description: "No surveillance. No vendor lock-ins." },
  { icon: Lightbulb, title: "Real Utility", description: "Not just hype. Tangible, daily-impacting results." },
];

export function CoreValues() {
  return (
    <AnimatedSection id="values" className="bg-card/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-accent sm:text-4xl md:text-5xl">Our Core Values</h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
                <Card key={index} className="flex flex-col bg-card/50">
                    <CardContent className="p-6 flex items-start gap-4">
                        <div className="rounded-lg bg-primary/10 p-3 border border-primary/20 mt-1 flex-shrink-0">
                            <value.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">{value.title}</h3>
                            <p className="text-sm text-muted-foreground">{value.description}</p>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
