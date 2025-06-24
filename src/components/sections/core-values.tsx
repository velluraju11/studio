import { Shield, BrainCircuit, User, Infinity, Wallet, Zap, KeyRound, Lightbulb } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <AnimatedSection id="values">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-accent text-glow-accent sm:text-4xl md:text-5xl">Our Core Values</h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {values.map((value, index) => (
            <Card key={index} className="bg-card/50 text-center transition-all duration-300 border border-transparent hover:border-primary/80 hover:bg-card hover:-translate-y-2">
              <CardHeader className="items-center">
                <div className="rounded-full bg-primary/10 p-3 box-glow-primary">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4 text-lg">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
