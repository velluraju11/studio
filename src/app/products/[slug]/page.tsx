import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { AnimatedSection } from '@/components/animated-section';
import { products } from '@/lib/products';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowLeft, Users } from 'lucide-react';
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
        <AnimatedSection as="div" className="relative overflow-hidden pt-24 pb-12 md:pt-32 md:pb-20 text-center">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-20 hero-grid-bg"
          />
          <Glow />
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-8 flex justify-start">
              <Button asChild variant="outline">
                  <Link href="/#products">
                      <ArrowLeft className="mr-2" />
                      Back to Products
                  </Link>
              </Button>
            </div>
            <div className="mx-auto max-w-4xl">
              <div className="inline-block rounded-full bg-primary/10 p-4 border border-primary/20 mb-6">
                  <product.icon className="h-10 w-10 text-primary" />
              </div>
              <h1 className="font-headline text-4xl font-black tracking-tighter text-primary sm:text-5xl md:text-6xl">
                {product.title}
              </h1>
              <Badge
                variant={product.status === 'Planned' ? 'secondary' : 'default'}
                className="mt-6 text-lg"
              >
                {product.status}
              </Badge>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="pb-20 md:pb-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-5xl space-y-12">
                     <Card className="overflow-hidden hologram-effect">
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
                             <p className="text-lg text-muted-foreground leading-relaxed">{product.description}</p>
                        </CardContent>
                     </Card>

                    <Card className="hologram-effect">
                        <CardHeader>
                            <CardTitle className="text-accent">Key Features</CardTitle>
                        </CardHeader>
                        <CardContent>
                             <ul className="space-y-4 text-muted-foreground">
                                {product.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-md">{feature}</span>
                                </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="hologram-effect">
                            <CardHeader>
                                <CardTitle className="text-accent">Our Commitment</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground italic text-lg">
                                    "{product.note}"
                                </p>
                            </CardContent>
                        </Card>
                         <Card className="hologram-effect">
                            <CardHeader>
                                <CardTitle className="text-accent flex items-center gap-2">
                                     <Users className="h-6 w-6" />
                                     Who It's For
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                {product.targetAudience.map((audience, i) => (
                                    <Badge key={i} variant="secondary" className="text-sm py-1 px-3">
                                    {audience}
                                    </Badge>
                                ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
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
