import { AnimatedSection } from "@/components/animated-section";
import { Badge } from "@/components/ui/badge";

const sectors = [
  "Students & Learners", "Developers & Cybersecurity Experts", "Researchers & Innovators", "Healthcare & Medical Platforms", "Governments, Law Enforcement & Public Systems", "Designers, Engineers & Architects", "Businesses, Startups & Enterprises", "E-commerce, Retail & Logistics", "Aerospace, Defense & Military Tech", "Industrial Automation & Robotics", "NGOs & Global Service Networks", "Schools, Universities & Institutions", "Banks, Fintech & Corporate Firms", "AI Builders, Prompt Engineers & Creators of Tomorrow"
];

export function WhoWeServe() {
  return (
    <AnimatedSection id="who-we-serve" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary text-glow-primary sm:text-4xl md:text-5xl">Who We Serve</h2>
          <p className="mt-4 text-lg text-muted-foreground">Ryha’s technology is built for everyone, across every sector.</p>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-3 md:gap-4">
          {sectors.map((sector, index) => (
            <Badge key={index} variant="outline" className="text-md border-accent/50 text-accent/80 py-2 px-4 transition-all hover:bg-accent/20 hover:text-accent hover:border-accent">
              {sector}
            </Badge>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
