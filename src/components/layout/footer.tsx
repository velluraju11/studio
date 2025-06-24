import Link from "next/link";
import { BrainCircuit } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/20 bg-transparent py-12">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 text-center text-muted-foreground md:flex-row md:px-6">
         <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <BrainCircuit className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-bold text-primary">
            Ryha
          </span>
        </Link>
        <p className="text-sm">© {new Date().getFullYear()} Ryha. All rights reserved.</p>
        <nav className="flex items-center gap-4 text-sm">
            <Link href="/" className="hover:text-primary transition-colors" prefetch={false}>Home</Link>
            <Link href="/mission" className="hover:text-primary transition-colors" prefetch={false}>Mission</Link>
            <Link href="/products" className="hover:text-primary transition-colors" prefetch={false}>Products</Link>
            <Link href="/blog" className="hover:text-primary transition-colors" prefetch={false}>Blog</Link>
            <Link href="/about" className="hover:text-primary transition-colors" prefetch={false}>About</Link>
            <Link href="/contact" className="hover:text-primary transition-colors" prefetch={false}>Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
