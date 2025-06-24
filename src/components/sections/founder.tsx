import Image from 'next/image';
import { AnimatedSection } from "@/components/animated-section";
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export function Founder() {
  return (
    <AnimatedSection id="founder">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
            <Image
                src="https://placehold.co/400x400.png"
                alt="Velluraju C, Founder of Ryha"
                width={128}
                height={128}
                className="rounded-full object-cover border-2 border-primary/50 shadow-lg shadow-primary/20 mx-auto"
                data-ai-hint="founder portrait"
              />
            <h2 className="font-headline mt-8 text-3xl font-bold tracking-tighter text-primary sm:text-4xl">About the Founder – Velluraju C</h2>
            <div className="mt-8 space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              <p>
                I’m Velluraju C — the solo architect, student, and world’s number one hacker aspirant behind Ryha. I didn’t have a team. I didn’t have funding. But I had a vision — and the hunger to build a revolution.
              </p>
              <p>
                Everything Ryha is today — from the bootloader of Ryha OS to the brain of Ryha AI, to the core of the Human Pentesting Agent — was designed, developed, and optimized by me alone, with the loyal support of my close friend Sanjay. Line by line, system by system. No shortcuts. No compromises.
              </p>
              <Card className="mt-8 text-left bg-card/50 border-primary/20">
                <CardContent className="p-6">
                    <p className="font-bold text-foreground mb-4">I built:</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                           <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                           <span><span className="font-semibold text-foreground">Ryha OS</span> — a voice-controlled, AI-powered operating system that adapts to you.</span>
                        </li>
                        <li className="flex items-start gap-3">
                           <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                           <span><span className="font-semibold text-foreground">Ryha AI</span> — a privacy-first, lightning-fast, all-capable AI assistant that never stops.</span>
                        </li>
                        <li className="flex items-start gap-3">
                           <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                           <span><span className="font-semibold text-foreground">Human Pentesting Agent</span> — a fully autonomous ethical hacker that works like a human, but 100x faster.</span>
                        </li>
                    </ul>
                </CardContent>
              </Card>
              <p className="mt-8">
                Ryha isn’t just a startup. It’s my rebellion — against surveillance, against complexity, against control. It’s the future I want to live in — where machines serve, not spy… where technology feels like magic you own.
              </p>
               <p>
                This is just the beginning. I’m Velluraju C — and Ryha is my digital revolution. You’ll see what’s coming next.
              </p>
              <blockquote className="mt-8 border-l-2 border-primary/50 pl-4 text-xl text-foreground/90">
                “I didn’t just want to build an OS, an AI, or a tool. I wanted to build a world — where humans and machines thrive together. And that’s what Ryha is.”
              </blockquote>
            </div>
          </div>
      </div>
    </AnimatedSection>
  );
}
