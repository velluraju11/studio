import Image from 'next/image';
import { AnimatedSection } from "@/components/animated-section";
import { Button } from '@/components/ui/button';

export function About() {
  return (
    <AnimatedSection id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-5 md:gap-16 items-center">
          <div className="md:col-span-2 flex justify-center">
            <div className="relative h-64 w-64">
              <Image
                src="https://placehold.co/400x400.png"
                alt="John Doe, Visual Designer"
                width={400}
                height={400}
                className="rounded-lg object-cover"
                data-ai-hint="designer portrait"
              />
            </div>
          </div>
          <div className="md:col-span-3">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl">About Me</h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                I'm John Doe, a passionate visual designer and UX specialist with a knack for creating intuitive, beautiful, and impactful digital experiences. My journey into design started with a simple curiosity about how things work, which evolved into a deep-seated passion for crafting user-centric solutions.
              </p>
              <p>
                With over 5 years of experience in the industry, I've had the privilege of working with a diverse range of clients, from innovative startups to established corporations. My approach is collaborative and iterative, focusing on understanding user needs to deliver designs that are not only visually stunning but also highly functional.
              </p>
              <p className="text-foreground">
                I believe that great design is about problem-solving and storytelling. Let's work together to tell your story.
              </p>
               <Button size="lg" variant="outline" className="mt-4">
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
