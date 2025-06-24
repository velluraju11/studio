
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { AnimatedSection } from '@/components/animated-section';
import { Newspaper, ArrowRight } from 'lucide-react';
import { Glow } from '@/components/ui/glow';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function BlogPage() {
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
                        <Newspaper className="h-10 w-10 text-primary" />
                    </div>
                    <h1 className="font-headline text-4xl font-black tracking-tighter text-primary sm:text-5xl md:text-6xl">
                        Ryha Blog
                    </h1>
                    <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                        News, updates, and insights from the Ryha team.
                    </p>
                </div>
            </div>
        </AnimatedSection>
        <AnimatedSection>
            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="text-center">
                    <h2 className="text-2xl font-bold">Welcome to Our Official Blog</h2>
                    <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
                        Our official blog is now live. Click the button below to explore our latest articles, news, and insights into the world of Ryha.
                    </p>
                    <Button asChild size="lg" className="mt-8">
                        <Link href="#" target="_blank" rel="noopener noreferrer">
                            Visit Official Blog <ArrowRight className="ml-2"/>
                        </Link>
                    </Button>
                </div>
            </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
