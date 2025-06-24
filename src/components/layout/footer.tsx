export function Footer() {
  return (
    <footer className="border-t border-border/20 bg-transparent py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 text-center md:flex-row md:px-6">
        <div className="flex items-center gap-2">
          <span className="font-headline text-lg font-bold">Ryha Group of Companies</span>
        </div>
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Ryha. The Future, Engineered for Everyone.</p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>Built from the ground up.</span>
        </div>
      </div>
    </footer>
  );
}
