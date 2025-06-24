import { CheckCircle } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  "Automate repetitive and technical tasks in real time",
  "Continuously optimize workflows without relying on user pattern learning",
  "Embed military-grade security at every layer — by default",
  "Deliver extreme performance with an ultra-light system footprint",
  "Fuse human creativity with machine precision",
  "Assist in coding, UI/UX, cybersecurity, DevOps, testing, and more",
  "Serve all industries — from students to defense"
];

export function WhatWeBuild() {
  return (
    <AnimatedSection id="what-we-build" className="bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="space-y-4">
                 <h2 className="font-headline text-3xl font-bold tracking-tighter text-accent text-glow-accent sm:text-4xl md:text-5xl">What Ryha Builds</h2>
                 <p className="text-lg text-muted-foreground">
                    Ryha creates AI-native, autonomous digital ecosystems. This is not traditional software. These are AI-native ecosystems that think, work, and evolve — like a human.
                 </p>
            </div>
            <Card className="border-primary/30 bg-card/50">
                <CardContent className="p-8">
                    <ul className="space-y-4">
                        {features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                            <span className="text-foreground/90">{feature}</span>
                        </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
      </div>
    </AnimatedSection>
  );
}
