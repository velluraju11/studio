import { PenTool, Megaphone, Code } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";

const services = [
  {
    icon: PenTool,
    title: "UI/UX Design",
    description: "Crafting intuitive and visually appealing interfaces that provide a seamless user experience across all devices."
  },
  {
    icon: Megaphone,
    title: "Brand Strategy & Identity",
    description: "Developing strong brand identities, from logo design to comprehensive style guides that resonate with your target audience."
  },
  {
    icon: Code,
    title: "Web & Mobile Development",
    description: "Building responsive, high-performance websites and mobile applications with clean code and modern technologies."
  }
];

export function Services() {
  return (
    <AnimatedSection id="services" className="bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Delivering creative and effective solutions for your digital needs.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-4 p-6 rounded-lg">
              <div className="p-4 bg-background rounded-full border">
                <service.icon className="h-8 w-8 text-primary/80" />
              </div>
              <h3 className="text-xl font-bold font-headline">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
