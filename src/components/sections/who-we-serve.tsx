import { AnimatedSection } from "@/components/animated-section";
import { Badge } from "@/components/ui/badge";

const sectors = [
  "Students & Learners", "Developers & Cybersecurity Experts", "Researchers & Innovators", "Healthcare & Medical Platforms", "Governments & Public Systems", "Designers & Engineers", "Businesses & Enterprises", "E-commerce & Logistics", "Aerospace & Defense", "Industrial Automation", "NGOs & Global Networks", "Universities & Institutions", "Banks & Fintech", "AI Builders & Creators"
];

export function WhoWeServe() {
  return (
    <AnimatedSection className="bg-card/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary text-glow-primary sm:text-4xl md:text-5xl">Who We Serve</h2>
          <p className="mt-4 text-lg text-muted-foreground">Ryha’s technology is built for everyone, across every sector.</p>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-2 md:gap-4">
          {sectors.map((sector, index) => (
            <Badge key={index} variant="outline" className="text-lg border-accent/50 text-accent/80 py-2 px-4 transition-all hover:bg-accent/20 hover:text-accent">
              {sector}
            </Badge>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
