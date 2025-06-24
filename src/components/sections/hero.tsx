import { AnimatedSection } from "@/components/animated-section";

export function Hero() {
  return (
    <AnimatedSection as="div" className="relative overflow-hidden pt-24 md:pt-32">
       <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(40%_40%_at_50%_40%,hsl(var(--primary)/0.2),transparent)]"
      />
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-headline text-4xl font-black tracking-tighter text-primary text-glow-primary sm:text-6xl md:text-7xl">
            Ryha – The Future, Engineered for Everyone
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            Ryha isn’t just a startup — it’s a visionary force reshaping the digital era through cutting-edge AI, autonomous systems, and hyper-secure architecture. Founded under the blazing ambition of one student hacker’s dream, Ryha Group of Companies is set to become the world’s most powerful AI-native tech empire — built entirely from the ground up.
          </p>
          <blockquote className="mt-8 border-l-4 border-primary/50 pl-4 italic text-foreground/80 md:pl-6">
            “We don’t build tools. We build digital worlds where machines work for you — intelligently, securely, and forever.”
            <cite className="mt-2 block not-italic font-medium text-muted-foreground">— Velluraju C, Founder of Ryha</cite>
          </blockquote>
        </div>
      </div>
    </AnimatedSection>
  );
}
