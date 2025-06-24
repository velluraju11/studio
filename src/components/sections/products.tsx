import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Bot, ShieldCheck, CheckCircle } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    icon: Cpu,
    title: "Ryha OS — The World’s Smartest Operating System",
    image: "https://placehold.co/600x400.png",
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
    icon: Bot,
    title: "Ryha AI — The Infinite Agent, Reimagined",
    image: "https://placehold.co/600x400.png",
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
    icon: ShieldCheck,
    title: "Human Pentesting Agent — AI That Hacks Like a Human",
    image: "https://placehold.co/600x400.png",
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

export function Products() {
  return (
    <AnimatedSection id="products">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-accent sm:text-4xl md:text-5xl">Flagship Products</h2>
           <p className="mt-4 text-lg text-muted-foreground">Powering the Ryha Movement</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {products.map((product, index) => (
            <Card key={index} className="hologram-effect flex flex-col">
              <CardHeader className="p-0">
                 <Image
                    src={product.image}
                    alt={product.title}
                    width={600}
                    height={400}
                    className="rounded-t-lg object-cover"
                    data-ai-hint={product.aiHint}
                  />
              </CardHeader>
              <CardContent className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3">
                  <product.icon className="h-6 w-6 text-primary" />
                  <CardTitle className="font-headline text-xl">{product.title}</CardTitle>
                </div>

                <Badge 
                  variant={product.status === 'Planned' ? 'secondary' : 'default'} 
                  className="mt-4 w-fit"
                >
                  {product.status}
                </Badge>

                <ul className="mt-4 flex-1 space-y-3 text-sm text-muted-foreground">
                    {product.features.map((feature, i) => (
                         <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
                <p className="mt-auto border-t border-border/50 pt-4 text-center text-xs italic text-muted-foreground/80">
                  {product.note}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
