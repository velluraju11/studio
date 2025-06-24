import { CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";

const features = [
  "Automate repetitive and technical tasks in real time",
  "Continuously optimize workflows without relying on user pattern learning",
  "Embed military-grade security at every layer — by default",
  "Deliver extreme performance with an ultra-light system footprint",
  "Fuse human creativity with machine precision",
  "Assist in coding, UI/UX, cybersecurity, DevOps, testing, and more",
  "Serve all industries — from students to defense",
];

export function WhatWeBuild() {
  return (
    <AnimatedSection className="bg-card/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary text-glow-primary sm:text-4xl md:text-5xl">What Ryha Builds</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ryha creates AI-native, autonomous digital ecosystems. This is not traditional software. These are systems that think, work, and evolve — like a human.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-accent" />
              <p className="text-foreground">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
