"use client";

import { BrainCircuit } from 'lucide-react';

export function HeroAnimation() {
  return (
    <div className="relative w-full h-96 flex items-center justify-center [perspective:800px]">
      <div className="absolute w-full h-full max-w-[500px] max-h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />
      
      <div className="absolute w-96 h-96 rounded-full border-2 border-primary/20 animate-subtle-spin" />
      <div className="absolute w-80 h-80 rounded-full border-2 border-primary/30 animate-subtle-spin [animation-direction:reverse] [animation-duration:18s]" />
      <div className="absolute w-64 h-64 rounded-full border-2 border-primary/40 animate-subtle-spin [animation-duration:15s]" />
      <div className="absolute w-56 h-56 rounded-full border-2 border-primary/50 animate-subtle-spin [animation-direction:reverse] [animation-duration:12s]" />
      
      <div 
        className="w-40 h-40 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/30 shadow-lg shadow-primary/20 [transform:rotateX(60deg)] flex items-center justify-center"
      >
        <BrainCircuit className="w-16 h-16 text-primary animate-pulse-slow drop-shadow-[0_0_8px_hsl(var(--primary))]"/>
      </div>
    </div>
  )
}
