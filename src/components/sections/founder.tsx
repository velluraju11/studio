import Image from 'next/image';
import { AnimatedSection } from "@/components/animated-section";

export function Founder() {
  return (
    <AnimatedSection id="founder" className="bg-card/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-5 md:gap-16 items-center">
          <div className="md:col-span-2 flex justify-center">
            <div className="relative h-64 w-64 md:h-80 md:w-80">
              <Image
                src="https://placehold.co/400x400.png"
                alt="Velluraju C, Founder of Ryha"
                width={400}
                height={400}
                className="rounded-lg object-cover border-2 border-primary/50 shadow-lg shadow-primary/20 box-glow-primary"
                data-ai-hint="founder portrait"
              />
            </div>
          </div>
          <div className="md:col-span-3">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl">About the Founder – Velluraju C</h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                I’m Velluraju C — the solo architect, student, and world’s number one hacker aspirant behind Ryha. I didn’t have a team. I didn’t have funding. But I had a vision — and the hunger to build a revolution.
              </p>
              <p>
                Everything Ryha is today — from the bootloader of Ryha OS to the brain of Ryha AI, to the core of the Human Pentesting Agent — was designed, developed, and optimized by me alone: line by line, system by system. No shortcuts. No compromises.
              </p>
               <p>
                This is just the beginning. I’m Velluraju C — and Ryha is my digital revolution. You’ll see what’s coming next.
              </p>
              <blockquote className="mt-4 border-l-2 border-primary/50 pl-4 text-foreground/90">
                “I didn’t just want to build an OS, an AI, or a tool. I wanted to build a world — where humans and machines thrive together. And that’s what Ryha is.”
                <cite className="mt-2 block text-sm not-italic font-medium text-muted-foreground">— Velluraju C</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
