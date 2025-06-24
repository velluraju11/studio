import Link from 'next/link';
import { BrainCircuit } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="container relative mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <BrainCircuit className="h-7 w-7 text-primary" />
          <span className="font-headline text-2xl font-bold text-primary">
            Ryha
          </span>
        </Link>
        <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-6 text-sm font-medium md:flex">
            <Link href="/" className="hover:text-primary transition-colors" prefetch={false}>Home</Link>
            <Link href="/about" className="hover:text-primary transition-colors" prefetch={false}>About</Link>
            <Link href="/mission" className="hover:text-primary transition-colors" prefetch={false}>Mission</Link>
            <Link href="/#products" className="hover:text-primary transition-colors" prefetch={false}>Products</Link>
            <Link href="/blog" className="hover:text-primary transition-colors" prefetch={false}>Blog</Link>
            <Link href="/contact" className="hover:text-primary transition-colors" prefetch={false}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
