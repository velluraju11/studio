import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <AnimatedSection as="div" className="relative overflow-hidden pt-24 md:pt-32 text-center">
       <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 hero-grid-bg"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.15),transparent_40%)]"
      />
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
            <h1 className="font-headline text-4xl font-black tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl">
              Ryha – The Future, Engineered for Everyone
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
               Ryha isn’t just a startup — it’s a visionary force reshaping the digital era through cutting-edge AI, autonomous systems, and hyper-secure architecture.
            </p>
             <blockquote className="mt-6 text-lg italic text-foreground/80">
                “We don’t build tools. We build digital worlds where machines work for you — intelligently, securely, and forever.”
                <cite className="mt-2 block text-sm not-italic font-medium text-muted-foreground">— Velluraju C, Founder of Ryha</cite>
              </blockquote>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
               <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/#products">Explore Products</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
                <Link href="/#mission">Our Mission <ArrowRight className="ml-2"/></Link>
              </Button>
            </div>
          </div>
      </div>
    </AnimatedSection>
  );
}
