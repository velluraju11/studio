import Link from 'next/link';
import { Cpu } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Cpu className="h-8 w-8 text-primary text-glow-primary" />
          <span className="font-headline text-2xl font-bold text-glow-primary">
            Ryha
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link href="#products" className="hover:text-primary transition-colors" prefetch={false}>Products</Link>
          <Link href="#values" className="hover:text-primary transition-colors" prefetch={false}>Values</Link>
          <Link href="#founder" className="hover:text-primary transition-colors" prefetch={false}>Founder</Link>
          <Link href="#ai-tool" className="hover:text-primary transition-colors" prefetch={false}>AI Tool</Link>
        </nav>
      </div>
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary to-transparent"></div>
    </header>
  );
}
