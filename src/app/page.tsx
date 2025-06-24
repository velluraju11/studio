import { Header } from '@/components/layout/header';
import { Hero } from '@/components/sections/hero';
import { SelectedWorks } from '@/components/sections/products';
import { Services } from '@/components/sections/what-we-build';
import { About } from '@/components/sections/founder';
import { Contact } from '@/components/sections/mission';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <SelectedWorks />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
