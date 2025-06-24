import { Header } from '@/components/layout/header';
import { Hero } from '@/components/sections/hero';
import { Mission } from '@/components/sections/mission';
import { WhatWeBuild } from '@/components/sections/what-we-build';
import { Products } from '@/components/sections/products';
import { WhoWeServe } from '@/components/sections/who-we-serve';
import { CoreValues } from '@/components/sections/core-values';
import { Founder } from '@/components/sections/founder';
import { TaglineGenerator } from '@/components/sections/tagline-generator';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Mission />
        <WhatWeBuild />
        <Products />
        <WhoWeServe />
        <CoreValues />
        <Founder />
        <TaglineGenerator />
      </main>
      <Footer />
    </div>
  );
}
