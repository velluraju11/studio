import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Cpu, Bot, ShieldCheck } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";

const products = [
  {
    icon: Cpu,
    title: "Ryha OS — The World’s Smartest Operating System",
    description: "Fully integrated with Ryha AI, voice-controlled, and 10x faster. It automates tasks, features real-time threat detection, and gives you full control over your data with intelligent, private cloud integration.",
    aiHint: "operating system interface"
  },
  {
    icon: Bot,
    title: "Ryha AI — The Infinite Agent, Reimagined",
    description: "A next-gen AI with infinite contextual memory and autonomous learning. It's built for total privacy, never collecting your data, and works securely in your private cloud until every task is complete.",
    aiHint: "artificial intelligence brain"
  },
  {
    icon: ShieldCheck,
    title: "Human Pentesting Agent — AI That Hacks Like a Human",
    description: "A self-operating cybersecurity expert that simulates human pentesting behavior. It detects vulnerabilities across applications 100x faster than human testers, with over 1000+ tools in a sandboxed warzone.",
    aiHint: "cybersecurity shield"
  }
];

export function Products() {
  return (
    <AnimatedSection id="products" className="bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-accent text-glow-accent sm:text-4xl md:text-5xl">Flagship Products Powering the Ryha Movement</h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {products.map((product, index) => (
            <Card key={index} className="bg-card/50 flex flex-col text-center transition-all duration-300 border border-transparent hover:border-primary/80 hover:bg-card hover:-translate-y-2">
              <CardHeader className="items-center">
                <div className="rounded-full bg-primary/10 p-4 box-glow-primary">
                  <product.icon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4 text-xl">{product.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
