import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { AnimatedSection } from '@/components/animated-section';
import { products } from '@/lib/products';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Glow } from '@/components/ui/glow';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <AnimatedSection as="div" className="relative overflow-hidden pt-24 pb-12 md:pt-32 md:pb-20">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-20 hero-grid-bg"
          />
          <Glow />
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <div className="mb-8">
                <Button asChild variant="outline">
                    <Link href="/#products">
                        <ArrowLeft className="mr-2" />
                        Back to Products
                    </Link>
                </Button>
              </div>

              <Card className="hologram-effect overflow-hidden">
                <CardHeader className="p-0">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={1200}
                    height={600}
                    className="object-cover w-full h-auto aspect-[2/1]"
                    data-ai-hint={product.aiHint}
                  />
                </CardHeader>
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8">
                      <div className="rounded-lg bg-primary/10 p-4 border border-primary/20 flex-shrink-0">
                          <product.icon className="h-10 w-10 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="font-headline text-3xl text-primary">{product.title}</CardTitle>
                        <Badge
                          variant={product.status === 'Planned' ? 'secondary' : 'default'}
                          className="mt-4"
                        >
                          {product.status}
                        </Badge>
                      </div>
                  </div>

                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-border pt-8">
                      <div>
                          <h3 className="text-xl font-bold text-accent mb-4">Key Features</h3>
                          <ul className="space-y-3 text-muted-foreground">
                            {product.features.map((feature, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                      </div>
                       <div>
                          <h3 className="text-xl font-bold text-accent mb-4">Our Commitment</h3>
                          <p className="text-muted-foreground italic">
                            "{product.note}"
                          </p>
                      </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
    return products.map((product) => ({
      slug: product.slug,
    }));
}
