import Image from 'next/image';
import { AnimatedSection } from "@/components/animated-section";

export function Founder() {
  return (
    <AnimatedSection id="founder" className="bg-card/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-5 md:gap-16">
          <div className="md:col-span-2 flex flex-col items-center text-center">
            <div className="relative h-48 w-48">
              <Image
                src="https://placehold.co/200x200.png"
                alt="Velluraju C, Founder of Ryha"
                width={200}
                height={200}
                className="rounded-full border-4 border-primary object-cover box-glow-primary"
                data-ai-hint="hacker portrait"
              />
               <div className="absolute inset-0 rounded-full hologram-effect"></div>
            </div>
            <h3 className="mt-6 font-headline text-2xl font-bold">Velluraju C</h3>
            <p className="text-muted-foreground">Solo Architect, Student, Hacker Aspirant</p>
            <blockquote className="mt-6 border-l-4 border-accent pl-4 text-left italic text-accent/90">
              "I didn’t just want to build an OS, an AI, or a tool. I wanted to build a world."
            </blockquote>
          </div>
          <div className="md:col-span-3">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary text-glow-primary sm:text-4xl">About the Founder</h2>
            <div className="mt-6 space-y-4 text-foreground/80">
              <p>
                I’m Velluraju C — the solo architect behind Ryha. I didn’t have a team or funding. But I had a vision — and the hunger to build a revolution. Everything Ryha is today was designed, developed, and optimized by me alone: line by line, system by system. No shortcuts. No compromises.
              </p>
              <p>
                With the loyal support of my close friend Sanjay, I built Ryha OS, Ryha AI, and the Human Pentesting Agent. Every interface, security layer, and AI prompt is my code, my design, my battle.
              </p>
              <p className="font-bold text-foreground">
                Ryha isn’t just a startup. It’s my rebellion — against surveillance, against complexity, against control. It’s the future I want to live in, where machines serve, not spy. This is just the beginning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
