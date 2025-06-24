export function Footer() {
  return (
    <footer className="border-t border-border/20 bg-transparent py-8">
      <div className="container mx-auto px-4 text-center text-muted-foreground md:px-6">
        <p>© {new Date().getFullYear()} Ryha. All rights reserved.</p>
      </div>
    </footer>
  );
}
