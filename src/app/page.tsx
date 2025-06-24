import { Header } from '@/components/layout/header';
import { Hero } from '@/components/sections/hero';
import { Products } from '@/components/sections/products';
import { WhatWeBuild } from '@/components/sections/what-we-build';
import { Founder } from '@/components/sections/founder';
import { Footer } from '@/components/layout/footer';
import { WhoWeServe } from '@/components/sections/who-we-serve';
import { CoreValues } from '@/components/sections/core-values';
import { OurMission } from '@/components/sections/mission';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <OurMission />
        <WhatWeBuild />
        <Products />
        <WhoWeServe />
        <CoreValues />
        <Founder />
      </main>
      <Footer />
    </div>
  );
}
