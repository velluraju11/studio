import { AnimatedSection } from "@/components/animated-section";

export function Mission() {
  return (
    <AnimatedSection>
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-accent text-glow-accent sm:text-4xl md:text-5xl">Our Mission</h2>
          <blockquote className="mt-6 text-xl md:text-2xl font-light text-muted-foreground">
            "We don’t build tools. We build digital worlds where machines work for you — intelligently, securely, and forever."
          </blockquote>
          <p className="mt-2 text-md text-foreground/80">- Velluraju C, Founder of Ryha</p>
          <p className="mt-8 text-lg text-foreground md:text-xl">
            To engineer ultra-intelligent, self-optimizing ecosystems that eliminate complexity, remove digital stress, and make every interaction fast, secure, and human-focused.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
