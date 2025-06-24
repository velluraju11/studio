import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animated-section";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function Hero() {
  return (
    <AnimatedSection as="div" className="pt-16 md:pt-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              A Visual Designer
              <br />
              Specializing in <span className="text-primary/80">UI & UX</span>
            </h1>
            <p className="mx-auto max-w-xl text-lg text-muted-foreground md:mx-0">
              Crafting intuitive and engaging digital experiences that users love. I focus on clean aesthetics, user-centric design, and measurable results.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              <Badge variant="outline">Product Design</Badge>
              <Badge variant="outline">UI/UX Experience</Badge>
              <Badge variant="outline">Web & Mobile</Badge>
            </div>
            <div className="flex justify-center md:justify-start gap-4 pt-4">
              <Link href="#contact">
                <Button size="lg" className="font-bold">
                  Contact Me
                </Button>
              </Link>
              <Link href="#work">
                <Button size="lg" variant="outline" className="font-bold">
                  View My Work
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://placehold.co/600x600.png"
              alt="Portrait of a designer"
              width={500}
              height={500}
              className="rounded-full aspect-square object-cover"
              data-ai-hint="designer portrait"
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
