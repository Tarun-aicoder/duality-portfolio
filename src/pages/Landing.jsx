import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function App() {
  // Sector selection state: 'creative', 'logical', or null
  const [currentSector, setCurrentSector] = useState(null);

  // If a sector is selected, render that page component cleanly
  if (currentSector === 'creative') {
    // return <Creative onBack={() => setCurrentSector(null)} />;
    // (Uncomment your actual component routing here when linking)
  }

  if (currentSector === 'logical') {
    // return <Logical onBack={() => setCurrentSector(null)} />;
    // (Uncomment your actual component routing here when linking)
  }

  return (
    <div className="relative w-full h-screen bg-black text-white font-satoshi overflow-hidden select-none">
      
      {/* ⚡ CENTRAL DUALITY LINE */}
      <div className="absolute inset-y-0 left-1/2 w-px bg-white/10 hidden md:block z-30 pointer-events-none" />

      {/* 🌗 MAIN SPLIT CONTAINER */}
      <div className="flex flex-col md:flex-row w-full h-full">
        
        {/* ================= BACKGROUND 1: CREATIVE SECTOR ================= */}
        <div 
          onClick={() => setCurrentSector('creative')}
          className="relative flex-1 h-1/2 md:h-full group cursor-pointer overflow-hidden transition-all duration-700 border-b border-white/5 md:border-b-0"
        >
          {/* Background Image: Handles fine hover on desktop, defaults to high visibility on touchscreens */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-700 grayscale contrast-125 brightness-50 @media(pointer:fine):group-hover:grayscale-0 @media(pointer:fine):group-hover:scale-105 @media(pointer:fine):group-hover:brightness-90 max-md:grayscale-0 max-md:brightness-70"
            style={{ backgroundImage: `url('/creative-bg.jpg')` }} // Put your creative photo asset here
          />
          
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-90 md:opacity-40" />

          {/* Text/UI Core */}
          <div className="absolute inset-0 flex flex-col justify-end md:justify-center p-8 sm:p-12 md:items-end md:text-right z-20">
            <p className="text-[10px] uppercase tracking-[0.4em] text-orange-400 font-bold mb-2">Sector // 01</p>
            <h2 className="font-clash text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none text-white">
              Creative <br className="hidden md:block" /> Suite
            </h2>
            <p className="text-xs text-zinc-400 font-medium max-w-xs mt-4 font-inter max-md:hidden">
              Cinematic short-form storytelling, premium color grading, and high-retention motion design.
            </p>
            <div className="mt-6 text-[10px] uppercase font-mono tracking-widest text-orange-400/80 bg-orange-500/5 border border-orange-500/10 px-4 py-2 rounded-full @media(pointer:fine):opacity-0 @media(pointer:fine):group-hover:opacity-100 transition-opacity">
              Initialize Stream →
            </div>
          </div>
        </div>

        {/* ================= BACKGROUND 2: LOGICAL SECTOR ================= */}
        <div 
          onClick={() => setCurrentSector('logical')}
          className="relative flex-1 h-1/2 md:h-full group cursor-pointer overflow-hidden transition-all duration-700"
        >
          {/* Background Image: Handles fine hover on desktop, defaults to high visibility on touchscreens */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-700 grayscale contrast-125 brightness-50 @media(pointer:fine):group-hover:grayscale-0 @media(pointer:fine):group-hover:scale-105 @media(pointer:fine):group-hover:brightness-90 max-md:grayscale-0 max-md:brightness-70"
            style={{ backgroundImage: `url('/logical-bg.jpg')` }} // Put your logical/code photo asset here
          />

          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-90 md:opacity-40" />

          {/* Text/UI Core */}
          <div className="absolute inset-0 flex flex-col justify-end md:justify-center p-8 sm:p-12 md:items-start md:text-left z-20">
            <p className="text-[10px] uppercase tracking-[0.4em] text-sky-400 font-bold mb-2">Sector // 02</p>
            <h2 className="font-clash text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none text-white">
              Systems <br className="hidden md:block" /> Engine
            </h2>
            <p className="text-xs text-zinc-400 font-medium max-w-xs mt-4 font-inter max-md:hidden">
              Automated data pipelines, n8n webhook architectures, and clean manual data layouts.
            </p>
            <div className="mt-6 text-[10px] uppercase font-mono tracking-widest text-sky-400/80 bg-sky-500/5 border border-sky-500/10 px-4 py-2 rounded-full @media(pointer:fine):opacity-0 @media(pointer:fine):group-hover:opacity-100 transition-opacity">
              Compile Architecture →
            </div>
          </div>
        </div>

      </div>

      {/* 🎭 CORE CENTER HUD OVERLAY */}
      <div className="absolute top-6 left-6 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 pointer-events-none z-40 text-left md:text-center">
        <h1 className="font-clash font-black text-xl md:text-3xl tracking-widest uppercase bg-black/40 backdrop-blur-md px-6 py-3 border border-white/10 rounded-xl text-white">
          Duality // Engine
        </h1>
      </div>
      
    </div>
  );
}
