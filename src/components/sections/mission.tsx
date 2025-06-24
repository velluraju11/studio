import { AnimatedSection } from "@/components/animated-section";
import { Target } from "lucide-react";

export function OurMission() {
  return (
    <AnimatedSection id="mission">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
           <div className="inline-block rounded-full bg-primary/10 p-4 border border-primary/20 mb-4">
            <Target className="h-10 w-10 text-primary" />
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">Our Mission</h2>
          <p className="mt-6 text-xl text-foreground/90 md:text-2xl">
            To engineer ultra-intelligent, self-optimizing ecosystems that eliminate complexity, remove digital stress, and make every interaction fast, secure, and human-focused.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
