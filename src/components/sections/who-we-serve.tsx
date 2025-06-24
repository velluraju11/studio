import { AnimatedSection } from "@/components/animated-section";
import { Badge } from "@/components/ui/badge";

const sectors = [
  "Students & Learners", "Developers & Cybersecurity Experts", "Researchers & Innovators", "Healthcare & Medical Platforms", "Governments, Law Enforcement & Public Systems", "Designers, Engineers & Architects", "Businesses, Startups & Enterprises", "E-commerce, Retail & Logistics", "Aerospace, Defense & Military Tech", "Industrial Automation & Robotics", "NGOs & Global Service Networks", "Schools, Universities & Institutions", "Banks, Fintech & Corporate Firms", "AI Builders, Prompt Engineers & Creators of Tomorrow"
];

export function WhoWeServe() {
  return (
    <AnimatedSection id="who-we-serve">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">Who We Serve</h2>
          <p className="mt-4 text-lg text-muted-foreground">Ryha’s technology is built for everyone, across every sector.</p>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-3 md:gap-4">
          {sectors.map((sector, index) => (
            <Badge key={index} variant="secondary" className="text-md py-2 px-4 transition-all hover:bg-primary/20 hover:text-primary">
              {sector}
            </Badge>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
