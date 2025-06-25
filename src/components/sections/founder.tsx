import Image from 'next/image';
import {AnimatedSection} from '@/components/animated-section';
import {Card, CardContent} from '@/components/ui/card';
import {CheckCircle} from 'lucide-react';
import {Glow} from '@/components/ui/glow';

export function Founder() {
  return (
    <AnimatedSection id="founder">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <Glow />
          <Image
            src="https://ik.imagekit.io/ps8bybjwy/Screenshot%202025-06-11%20101654.png?updatedAt=1750819846177"
            alt="Velluraju C, Founder of Ryha"
            width={120}
            height={120}
            className="mx-auto rounded-full border-2 border-primary/30 object-cover shadow-lg"
          />
          <h2 className="mt-8 bg-gradient-to-br from-primary from-30% to-primary/70 bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-4xl">
            About the Founder – Velluraju C
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-left text-lg text-muted-foreground">
            <p>
              I’m Velluraju C — the solo architect, student, and world’s number
              one hacker aspirant behind Ryha.
            </p>
            <p>
              I didn’t have a team. I didn’t have funding. But I had a vision —
              and the hunger to build a revolution.
            </p>
            <p>
              Everything Ryha is today — from the bootloader of Ryha OS to the
              brain of Ryha AI, to the core of the Humanized Pentesting Agent — was
              designed, developed, and optimized by me alone: line by line,
              system by system. No shortcuts. No compromises.
            </p>
            <p>With the loyal support of my close friend Sanjay, I built:</p>
            <Card className="border-primary/20 bg-card/50 text-left">
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>
                      <span className="font-semibold text-foreground">
                        Ryha OS
                      </span>{' '}
                      — a voice-controlled, AI-powered operating system that
                      adapts to you
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>
                      <span className="font-semibold text-foreground">
                        Ryha AI
                      </span>{' '}
                      — a privacy-first, lightning-fast, all-capable AI
                      assistant that never stops until the task is done
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>
                      <span className="font-semibold text-foreground">
                        Humanized Pentesting Agent
                      </span>{' '}
                      — a fully autonomous ethical hacker that works like a
                      human, but 100x faster
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <p>
              Every interface. Every security layer. Every AI prompt and
              response — it’s my code, my design, my battle. Built with
              obsession, late nights, and raw determination.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
