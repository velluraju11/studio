import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <span className="font-headline text-2xl font-bold">
            John Doe
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link href="#work" className="hover:text-primary/80 transition-colors" prefetch={false}>Work</Link>
          <Link href="#services" className="hover:text-primary/80 transition-colors" prefetch={false}>Services</Link>
          <Link href="#about" className="hover:text-primary/80 transition-colors" prefetch={false}>About</Link>
          <Link href="#contact" className="hover:text-primary/80 transition-colors" prefetch={false}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
