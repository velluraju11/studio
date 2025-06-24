import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { Badge } from "@/components/ui/badge";
import { products } from "@/lib/products";
import { Button } from "@/components/ui/button";

export function Products() {
  return (
    <AnimatedSection id="products">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-accent sm:text-4xl md:text-5xl">Flagship Products</h2>
           <p className="mt-4 text-lg text-muted-foreground">Powering the Ryha Movement</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {products.map((product) => (
            <Card key={product.slug} className="hologram-effect flex flex-col overflow-hidden">
                <Link href={`/products/${product.slug}`} className="group flex h-full flex-col">
                  <CardHeader className="p-0 overflow-hidden">
                    <Image
                        src={product.image}
                        alt={product.title}
                        width={600}
                        height={400}
                        className="rounded-t-lg object-cover aspect-[3/2] transition-transform duration-500 group-hover:scale-105"
                        data-ai-hint={product.aiHint}
                      />
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3">
                      <product.icon className="h-6 w-6 text-primary" />
                      <CardTitle className="font-headline text-xl">{product.title}</CardTitle>
                    </div>

                    <Badge
                      variant={product.status === 'Planned' ? 'secondary' : 'default'}
                      className="mt-4 w-fit"
                    >
                      {product.status}
                    </Badge>

                    <ul className="mt-4 flex-1 space-y-3 text-sm text-muted-foreground">
                        {product.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-auto pt-4 text-center">
                      <p className="border-t border-border/50 pt-4 text-xs italic text-muted-foreground/80">
                        {product.note}
                      </p>
                      <Button variant="link" className="mt-2">Learn More</Button>
                    </div>
                  </CardContent>
                </Link>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
