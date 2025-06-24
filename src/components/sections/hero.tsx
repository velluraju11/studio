import { Button } from "@/components/ui/button";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { AnimatedSection } from "@/components/animated-section";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-background/50 backdrop-blur-sm z-10"></div>
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[150px] animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[120px] animate-pulse"></div>
      </div>
      <AnimatedSection as="div" className="container relative z-20 mx-auto px-4 md:px-6 text-center">
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
          <TypingAnimation text="Ryha – The Future, Engineered for Everyone" duration={3000} className="text-glow-primary" />
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
          A visionary force reshaping the digital era through cutting-edge AI, autonomous systems, and hyper-secure architecture.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg" className="font-bold box-glow-primary transition-all duration-300 hover:scale-105">
            Explore Products
          </Button>
          <Button size="lg" variant="outline" className="font-bold border-accent text-accent box-glow-accent transition-all duration-300 hover:scale-105 hover:bg-accent hover:text-accent-foreground">
            Our Mission
          </Button>
        </div>
      </AnimatedSection>
    </section>
  );
}
