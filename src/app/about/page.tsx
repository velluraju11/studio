
import Image from 'next/image';
import { AnimatedSection } from '@/components/animated-section';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, User } from 'lucide-react';
import { Glow } from '@/components/ui/glow';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <AnimatedSection as="div" className="relative overflow-hidden pt-24 pb-12 md:pt-32 md:pb-20 text-center">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-20 hero-grid-bg"
          />
          <Glow />
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <div className="inline-block rounded-full bg-primary/10 p-4 border border-primary/20 mb-6">
                <User className="h-10 w-10 text-primary" />
              </div>
              <h1 className="font-headline text-4xl font-black tracking-tighter text-primary sm:text-5xl md:text-6xl">
                About The Founder
              </h1>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                The mind behind the mission.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="pb-20">
          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <Image
                src="https://placehold.co/120x120.png"
                alt="Velluraju C, Founder of Ryha"
                width={120}
                height={120}
                className="mx-auto rounded-full border-2 border-primary/30 object-cover shadow-lg"
                data-ai-hint="founder portrait"
              />
              <h2 className="mt-8 bg-gradient-to-br from-primary from-30% to-primary/70 bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-4xl">
                Velluraju C
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
                  brain of Ryha AI, to the core of the Human Pentesting Agent — was
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
                            Human Pentesting Agent
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
                <p>
                  Ryha isn’t just a startup. It’s my rebellion — against
                  surveillance, against complexity, against control. It’s the future
                  I want to live in — where machines serve, not spy… where
                  technology feels like magic you own.
                </p>
                <p>
                  This is just the beginning. I’m Velluraju C — and Ryha is my
                  digital revolution. You’ll see what’s coming next.
                </p>
                <blockquote className="border-l-2 border-primary/50 pl-6 text-xl text-foreground/90">
                  “I didn’t just want to build an OS, an AI, or a tool. I wanted to
                  build a world — where humans and machines thrive together. And
                  that’s what Ryha is.”
                </blockquote>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
