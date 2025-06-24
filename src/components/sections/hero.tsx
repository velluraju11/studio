import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { HeroAnimation } from './hero-animation';
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <AnimatedSection as="div" className="relative overflow-hidden pt-24 md:pt-32">
       <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(40%_40%_at_50%_40%,hsl(var(--primary)/0.1),transparent)]"
      />
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="text-center md:text-left">
            <h1 className="font-headline text-4xl font-black tracking-tighter text-glow-primary sm:text-5xl md:text-6xl lg:text-7xl">
              Ryha – The Future, Engineered for Everyone
            </h1>
            <p className="mt-6 max-w-xl mx-auto md:mx-0 text-lg text-muted-foreground md:text-xl">
              A visionary force reshaping the digital era through cutting-edge AI, autonomous systems, and hyper-secure architecture.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
               <Button asChild size="lg" className="box-glow-primary text-lg px-8 py-6">
                <Link href="#products">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
                <Link href="#mission">Learn More <ArrowRight className="ml-2"/></Link>
              </Button>
            </div>
          </div>
          <div className="relative h-96 w-full hidden md:block">
            <HeroAnimation />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
