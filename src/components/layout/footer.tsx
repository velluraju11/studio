import { Github, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-8 md:flex-row md:px-6">
        <div className="flex items-center gap-2">
          <span className="font-headline text-xl font-bold">John Doe</span>
        </div>
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} John Doe. All Rights Reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="#" aria-label="Twitter"><Twitter className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" /></Link>
          <Link href="#" aria-label="GitHub"><Github className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" /></Link>
          <Link href="#" aria-label="LinkedIn"><Linkedin className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" /></Link>
        </div>
      </div>
    </footer>
  );
}
