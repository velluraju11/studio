import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AnimatedSection } from "@/components/animated-section";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A complete redesign of a leading e-commerce platform, focusing on user flow and conversion optimization.",
    image: "https://placehold.co/600x400.png",
    tags: ["UI/UX", "Web Design", "Figma"],
    aiHint: "ecommerce website"
  },
  {
    title: "Mobile Banking App",
    description: "A secure and intuitive mobile banking app that simplifies personal finance management.",
    image: "https://placehold.co/600x400.png",
    tags: ["Mobile App", "Fintech", "UX Research"],
    aiHint: "mobile banking"
  },
  {
    title: "SaaS Dashboard",
    description: "An analytics dashboard for a B2B SaaS product, designed for clarity and actionable insights.",
    image: "https://placehold.co/600x400.png",
    tags: ["SaaS", "Dashboard", "Data Visualization"],
    aiHint: "saas dashboard"
  },
  {
    title: "Corporate Branding",
    description: "A full corporate identity and branding guide for a tech startup, from logo to marketing materials.",
    image: "https://placehold.co/600x400.png",
    tags: ["Branding", "Graphic Design", "Strategy"],
    aiHint: "corporate branding"
  },
]

export function SelectedWorks() {
  return (
    <AnimatedSection id="work">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Selected Works</h2>
          <p className="mt-4 text-lg text-muted-foreground">A collection of my favorite projects.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card border-border overflow-hidden group transition-all duration-300 hover:border-primary/50 hover:-translate-y-2">
                <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    data-ai-hint={project.aiHint}
                />
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                <CardDescription className="pt-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
