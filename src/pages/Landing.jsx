import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Landing({ onChoose }) {
  const [hoveredSide, setHoveredSide] = useState(null);

  // Asset names for the public folder
  const creativeFace = '/creative-face.png';
  const logicalFace = '/logical-face.png';
  const defaultFace = '/default-face.jpg'; // Make sure this exists in public/

  return (
    <div className="relative h-screen w-full bg-[#09090b] overflow-hidden flex flex-col md:flex-row selection:bg-white selection:text-black">
      
      {/* 🏙️ 1. Ultra-Gargantuan Background Watermark */}
      <div className="absolute inset-x-0 top-12 md:top-6 text-center z-0 pointer-events-none select-none">
        <h1 className="font-clash text-[14vw] font-black uppercase text-white/1.5 tracking-tighter leading-none">
          DUAL IDENTITY
        </h1>
      </div>

      {/* 📊 2. Editorial Metrics Overlay */}
      <div className="absolute top-24 left-6 sm:left-12 z-30 pointer-events-none select-none hidden md:flex gap-12 font-satoshi animate-fade-in">
        <div>
          <p className="text-3xl font-light tracking-tight text-white/90 font-clash">+150</p>
          <p className="text-[9px] uppercase tracking-widest text-zinc-500 mt-1">Visual Projects Delivered</p>
        </div>
        <div>
          <p className="text-3xl font-light tracking-tight text-white/90 font-clash">+20</p>
          <p className="text-[9px] uppercase tracking-widest text-zinc-500 mt-1">Automated Systems Built</p>
        </div>
      </div>

      {/* 🎬 LEFT SIDE: CREATIVE MIND ENTRY */}
      <div 
        className="relative flex-1 h-1/2 md:h-full flex flex-col justify-end md:justify-center items-center p-8 pb-12 md:p-12 group cursor-pointer border-b md:border-b-0 md:border-r border-white/5 transition-all duration-700 ease-out"
        onMouseEnter={() => setHoveredSide('creative')}
        onMouseLeave={() => setHoveredSide(null)}
        onClick={() => onChoose('creative')}
      >
        {/* Ambient Hover Fill */}
        <div className="absolute inset-0 bg-linear-to-t md:bg-linear-to-r from-creative-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        
        {/* Massive Background Recessed Title */}
        <div className="absolute top-[42%] md:top-[62%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-behind group-hover:text-creative-orange/5 group-hover:scale-105 transition-all duration-700">
        CREATIVE
        </div>

        {/* Info Card Content */}
        <motion.div 
          className="relative z-10 text-center max-w-xs md:translate-y-12 group-hover:translate-y-0 transition-transform duration-500 ease-out"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-satoshi text-[9px] tracking-[0.3em] text-creative-orange uppercase font-bold block mb-2">
            Identity // 01
          </span>
          <h2 className="font-clash text-2xl sm:text-3xl font-semibold uppercase tracking-tight text-white/40 group-hover:text-white transition-colors duration-300">
            Motion Storyteller
          </h2>
        </motion.div>
      </div>

      {/* 💻 RIGHT SIDE: LOGICAL MIND ENTRY */}
      <div 
        className="relative flex-1 h-1/2 md:h-full flex flex-col justify-start md:justify-center items-center p-8 pt-12 md:p-12 group cursor-pointer transition-all duration-700 ease-out"
        onMouseEnter={() => setHoveredSide('logical')}
        onMouseLeave={() => setHoveredSide(null)}
        onClick={() => onChoose('logical')}
      >
        {/* Ambient Hover Fill */}
        <div className="absolute inset-0 bg-linear-to-b md:bg-linear-to-l from-logical-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        
        {/* Massive Background Recessed Title */}
        <div className="absolute bottom-1/3 md:top-[62%] md:bottom-auto left-1/2 -translate-x-1/2 -translate-y-1/2 text-behind group-hover:text-logical-blue/5 group-hover:scale-105 transition-all duration-700">
         LOGICAL
        </div>

        {/* Info Card Content */}
        <motion.div 
          className="relative z-10 text-center max-w-xs md:translate-y-12 group-hover:translate-y-0 transition-transform duration-500 ease-out"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="font-satoshi text-[9px] tracking-[0.3em] text-logical-sky uppercase font-bold block mb-2">
            Identity // 02
          </span>
          <h2 className="font-clash text-2xl sm:text-3xl font-semibold uppercase tracking-tight text-white/40 group-hover:text-white transition-colors duration-300">
            Systems Architect
          </h2>
        </motion.div>
      </div>

      {/* 🎴 3. Absolute Centered Portrait Frame Overlap */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none flex items-center justify-center">
        
        {/* Editorial Greeting String Box */}
        <div className="absolute -top-24 text-center w-64 hidden md:block">
          <p className="font-clash text-xl tracking-tight text-white">Hello</p>
          <p className="font-satoshi text-[10px] text-zinc-500 uppercase tracking-widest mt-1">
            — Integrated Portfolio Engine
          </p>
        </div>

        {/* Central Graphic Frame Container */}
        <div className={`relative w-28 h-36 sm:w-44 sm:h-56 rounded-xl border transition-all duration-700 bg-[#0c0c0e] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.8)] z-10 ${
          hoveredSide === 'creative' ? 'border-creative-orange/40 -rotate-2 scale-105' :
          hoveredSide === 'logical' ? 'border-logical-blue/40 rotate-2 scale-105' :
          'border-white/10'
        }`}>
          {/* Subtle geometric scanning crosshairs (Always behind everything) */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] bg-size-[12px_12px]" />
          
          {/* 👤 DEFAULT FACE ASSET (Visible when not hovering, fades out on hover) */}
          <img 
            src={defaultFace} 
            alt="Default Profile" 
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              hoveredSide ? 'opacity-0' : 'opacity-100'
            }`}
          />

          {/* 🎬 CREATIVE FACE ASSET (Fades in on Creative hover) */}
          <img 
            src={creativeFace} 
            alt="Creative Profile" 
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              hoveredSide === 'creative' ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* 💻 LOGICAL FACE ASSET (Fades in on Logical hover - added grayscale for tech vibe) */}
          <img 
            src={logicalFace} 
            alt="Logical Profile" 
            className={`absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 transition-opacity duration-700 ease-in-out ${
              hoveredSide === 'logical' ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Color reactive background shadow overlay inside the frame card */}
          <div className={`absolute inset-0 transition-opacity duration-700 mix-blend-color pointer-events-none ${
            hoveredSide === 'creative' ? 'bg-creative-orange/20 opacity-100' :
            hoveredSide === 'logical' ? 'bg-logical-blue/20 opacity-100' :
            'opacity-0'
          }`} />
        </div>

        {/* Removed Floating Tracking Core Seam Dot from this position to clear image view */}
      </div>

      {/* 🧭 4. Bottom Direction Header */}
      <div className="absolute bottom-6 left-6 sm:left-12 z-30 pointer-events-none font-satoshi hidden md:block animate-fade-in">
        <p className="text-[9px] uppercase tracking-[0.25em] text-zinc-500 font-bold">
          Hover either sector to initialize connection
        </p>
      </div>

    </div>
  );
}