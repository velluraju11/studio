import Link from 'next/link';
import { BrainCircuit } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <BrainCircuit className="h-7 w-7 text-primary" />
          <span className="font-headline text-2xl font-bold text-primary">
            Ryha
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <Link href="/#mission" className="hover:text-primary transition-colors" prefetch={false}>Mission</Link>
            <Link href="/#products" className="hover:text-primary transition-colors" prefetch={false}>Products</Link>
            <Link href="/#values" className="hover:text-primary transition-colors" prefetch={false}>Values</Link>
            <Link href="/#founder" className="hover:text-primary transition-colors" prefetch={false}>Founder</Link>
        </nav>
        <Button asChild className="hidden md:flex">
            <Link href="/#products">Get Started</Link>
        </Button>
      </div>
    </header>
  );
}
