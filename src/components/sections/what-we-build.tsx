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
  "Serve all industries — from students to defense",
  "Ensure seamless integration across all digital tools and platforms"
];

export function WhatWeBuild() {
  return (
    <AnimatedSection id="what-we-build" className="bg-card/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
             <h2 className="font-headline text-3xl font-bold tracking-tighter text-accent sm:text-4xl md:text-5xl">What Ryha Builds</h2>
             <p className="mt-4 text-lg text-muted-foreground">
                Ryha creates AI-native, autonomous digital ecosystems. This is not traditional software. These are AI-native ecosystems that think, work, and evolve — like a human.
             </p>
        </div>
        <div className="mt-12">
            <Card className="border-primary/20 bg-card/50 hologram-effect">
                <CardContent className="p-8">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        {features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                            <span className="text-foreground/90 text-left">{feature}</span>
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
