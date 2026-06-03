import React from 'react';
import { motion } from 'framer-motion';

export default function UnifiedContact() {
  const socials = [
    { name: 'Email', link: 'mailto:buisnesswithtarun.email@gmail.com', color: 'hover:text-white' },
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/tarun-dual-vibe', color: 'hover:text-[#0a66c2]' },
    { name: 'GitHub', link: 'https://github.com/Tarun-aicoder', color: 'hover:text-[#6e5494]' },
    { name: 'Instagram', link: 'https://www.instagram.com/tarun_records/', color: 'hover:text-[#e1306c]' }
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center py-24 px-6 overflow-hidden bg-[#09090b] z-20">
      
      {/* 🌌 Merged Ambient Background */}
      <div className="absolute inset-0 pointer-events-none flex opacity-30">
        <div className="w-1/2 h-full bg-linear-to-r from-creative-orange/10 to-transparent filter blur-[100px]" />
        <div className="w-1/2 h-full bg-linear-to-l from-logical-blue/10 to-transparent filter blur-[100px]" />
      </div>

      {/* 🎭 The Unified Statement */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-24">
        <motion.p 
          className="font-satoshi text-sm md:text-base text-zinc-400 tracking-[0.2em] uppercase font-medium mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Some people choose one path.
        </motion.p>
        
        <motion.h2 
          className="font-clash text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-transparent bg-clip-text bg-linear-to-r from-creative-orange via-white to-logical-blue">
            I Chose Both.
          </span>
        </motion.h2>
      </div>

      {/* 🚀 Mission Control Dashboard (Contact) */}
      <motion.div 
        className="relative z-10 w-full max-w-4xl glass-panel p-8 sm:p-12 flex flex-col items-center border-t border-white/20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 bg-[#09090b] border border-white/10 rounded-full font-satoshi text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-300 shadow-2xl">
          Mission Control
        </div>

        <p className="font-inter text-center text-zinc-400 mb-10 max-w-md">
          Ready to build something extraordinary? Drop a signal into the network and let's collaborate.
        </p>

        <div className="flex flex-wrap justify-center gap-4 w-full">
          {socials.map((social, idx) => (
            <a 
              key={idx}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 min-w-35 px-6 py-4 rounded-xl border border-white/5 bg-white/5 text-center font-clash font-semibold text-lg text-zinc-300 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 ${social.color}`}
            >
              {social.name}
            </a>
          ))}
        </div>
      </motion.div>

      {/* Footer Branding */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-satoshi text-[9px] uppercase tracking-[0.3em] text-zinc-600 font-bold">
        © 2026 Tarun Kumar // Duality Engine
      </div>
      
    </section>
  );
}