import React, { useState } from 'react';
import UnifiedContact from '../components/UnifiedContact';
import { motion } from 'framer-motion';

export default function Logical({ onBack }) {
  // Explicitly tracking the active project tab by index (0 to 2)
  const [activeProjectTab, setActiveProjectTab] = useState(0);

  const techProjects = [
    { 
      title: 'Real Estate Portfolio', 
      tech: 'HTML + CSS + JS + Tailwind', 
      desc: 'Deployed a multi-page real estate portfolio client sample via GitHub Pages with custom responsive grids.',
      repo: 'https://github.com/Tarun-aicoder/real-estate-sample'
    },
    { 
      title: 'Milk Consumption Tracker', 
      tech: 'Python / Core Logic', 
      desc: 'Custom daily data tracker calculating nutritional intake and macro splits to support hypertrophy goals.',
      repo: 'https://github.com/Tarun-aicoder/milk-tracker'
    },
    { 
      title: 'Automated Video Uploader', 
      tech: 'n8n + Local Secure Webhooks', 
      desc: 'Hands-free local pipeline that automatically detects rendered video content and schedules/publishes it to social platforms.',
      repo: null // Kept offline/null for local machine security
    }
  ];

  return (
    <div className="relative w-full bg-logical-dark text-white overflow-x-hidden selection:bg-logical-blue selection:text-black">
      
      {/* 💻 HERO SECTION (100vh) */}
      <section className="relative min-h-screen flex flex-col justify-between p-6 sm:p-12">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] sm:bg-size-[48px_48px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-75 sm:w-175 sm:h-100 bg-logical-blue/10 filter blur-[120px] rounded-full mix-blend-screen" />
        </div>

        <header className="relative z-20 flex justify-between items-start w-full font-satoshi mt-16 md:mt-12">
          <div>
            <p className="text-[9px] uppercase tracking-[0.3em] text-logical-sky font-bold">Logical Sector</p>
            <p className="text-xs text-zinc-500 mt-1">System Version 2.0.26</p>
          </div>
          <button onClick={onBack} className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold border border-white/10 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full transition-all">
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Terminate
          </button>
        </header>

        <div className="relative w-full my-auto flex flex-col items-center justify-center z-10">
          <h2 className="absolute font-clash text-[13vw] font-black uppercase text-white/2 tracking-tighter leading-none select-none pointer-events-none text-center w-full z-0">
            I ENGINEER LOGIC
          </h2>
          <motion.div 
            className="relative w-full max-w-xl rounded-xl border border-white/10 bg-[#0a0f18]/80 backdrop-blur-xl shadow-[0_25px_60px_-15px_rgba(14,165,233,0.15)] p-6 sm:p-8 z-10 font-mono text-sm sm:text-base overflow-hidden"
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex gap-2 mb-6 border-b border-white/10 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="text-zinc-300 flex flex-col gap-3">
              <p><span className="text-logical-sky">tarun@system</span><span className="text-zinc-500">:~</span>$ whoami</p>
              <p className="text-white ml-4">&gt; CS Student & Systems Integrator</p>
              <p className="mt-2"><span className="text-logical-sky">tarun@system</span><span className="text-zinc-500">:~</span>$ ./execute_learning_loop.sh</p>
              <p className="text-white ml-4 opacity-75">&gt; Compiling web components & arrays...</p>
              <p className="text-white ml-4 opacity-75">&gt; Requesting LLM assistance for syntax optimization...</p>
              <p className="text-logical-blue ml-4 animate-pulse mt-1">&gt; System architecture operational_</p>
            </motion.div>
          </motion.div>
          <div className="absolute -bottom-12.5 sm:-bottom-10 text-center z-20 pointer-events-none w-full px-2">
          <motion.h1 
            className="font-clash text-[9vw] sm:text-6xl font-bold uppercase tracking-tight text-white drop-shadow-xl leading-[0.9]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            BUILDING <br className="sm:hidden" /> ARCHITECTURE
          </motion.h1>
        </div>
        </div>

        <footer className="relative z-20 flex justify-between items-center w-full border-t border-white/3 pt-6 font-inter">
          <p className="text-xs text-zinc-400 max-w-sm hidden sm:block">Actively learning to structure readable component trees, automate APIs, and deploy functional databases.</p>
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-bold text-logical-sky animate-pulse">Initialize scroll <span className="text-xs">↓</span></div>
        </footer>
      </section>

      {/* 🛠️ MODULE 1: THINGS I HAVE MADE (INTERACTIVE ROW ENGINE) */}
      <section className="relative w-full px-6 py-24 sm:px-24 z-10 bg-[#09090b]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs font-mono text-logical-sky">[MODULE_01]</span>
            <h3 className="font-clash text-2xl font-bold uppercase tracking-wider border-l-2 border-logical-blue pl-4">Production Build Log</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Side: Explicit Selector Rows */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              {techProjects.map((proj, index) => (
                <div 
                  key={index}
                  onClick={() => setActiveProjectTab(index)}
                  className={`p-5 rounded-xl border transition-all duration-300 cursor-pointer ${
                    activeProjectTab === index 
                      ? 'bg-logical-blue/10 border-logical-blue/40 shadow-[0_0_20px_rgba(14,165,233,0.1)]' 
                      : 'bg-white/2 border-white/5 hover:bg-white/5'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className={`text-xs font-mono font-bold ${activeProjectTab === index ? 'text-logical-sky' : 'text-zinc-600'}`}>0{index + 1} // GITHUB_REPO</span>
                    <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded border ${
                      index === 0 ? 'text-emerald-400 bg-emerald-500/5 border-emerald-500/10' :
                      index === 1 ? 'text-orange-400 bg-orange-500/5 border-orange-500/10' :
                      'text-logical-sky/80 bg-logical-sky/5 border-logical-sky/10'
                    }`}>
                      {index === 0 ? 'Live Web' : index === 1 ? 'Data Script' : 'Offline Secure'}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold mt-2 text-white">{proj.title}</h4>
                  <p className="text-xs text-zinc-500 mt-1 line-clamp-1">{proj.tech}</p>
                </div>
              ))}
            </div>

            {/* Right Side: Detailed Terminal Monitor Screen */}
            <div className="lg:col-span-7 bg-zinc-950/80 border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(to_right,transparent,rgba(14,165,233,0.3),transparent)]" />
              
              {/* Conditional Display for Project 1: Real Estate */}
              {activeProjectTab === 0 && (
                <div className="animate-fade-in">
                  <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> REPO_STATUS // PRODUCTION_LIVE
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase font-clash tracking-wide">{techProjects[0].title}</h3>
                  <p className="text-sm text-zinc-400 mt-3 leading-relaxed">
                    {techProjects[0].desc}
                  </p>
                  <div className="mt-6 bg-white/2 border border-white/5 p-4 rounded-xl font-mono text-xs text-zinc-400 leading-relaxed">
                    <p className="text-emerald-400 font-semibold mb-2">// Build Environment Breakdown:</p>
                    <p>Engine Base: Native HTML/CSS Architecture</p>
                    <p>Styling: Tailwind CSS Responsive Classes</p>
                    <p>Deployment Hosting: GitHub Pages CDN</p>
                  </div>
                  <a href={techProjects[0].repo} target="_blank" rel="noopener noreferrer" className="inline-flex mt-6 items-center gap-2 text-xs font-bold uppercase tracking-widest text-black bg-emerald-400 hover:bg-emerald-300 px-5 py-2.5 rounded-lg transition-colors cursor-pointer">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    Open Repository
                  </a>
                </div>
              )}

              {/* Conditional Display for Project 2: Milk Consumption */}
              {activeProjectTab === 1 && (
                <div className="animate-fade-in">
                  <div className="flex items-center gap-2 text-xs text-orange-400 font-mono mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" /> TERMINAL_ENV // DATA_TRACKING
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase font-clash tracking-wide">{techProjects[1].title}</h3>
                  <p className="text-sm text-zinc-400 mt-3 leading-relaxed">
                    {techProjects[1].desc}
                  </p>
                  <div className="mt-6 bg-white/2 border border-white/5 p-4 rounded-xl font-mono text-xs text-zinc-400 leading-relaxed">
                    <p className="text-orange-400 font-semibold mb-2">// Logic Execution Script:</p>
                    <p>Input: Daily Volume & Context Tracking</p>
                    <p>Computation: Python Macro Splitting Conditionals</p>
                    <p>Structure: Clean, manually structured iteration loops</p>
                  </div>
                  <a href={techProjects[1].repo} target="_blank" rel="noopener noreferrer" className="inline-flex mt-6 items-center gap-2 text-xs font-bold uppercase tracking-widest text-black bg-orange-400 hover:bg-orange-300 px-5 py-2.5 rounded-lg transition-colors cursor-pointer">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    Open Repository
                  </a>
                </div>
              )}

              {/* Conditional Display for Project 3: Auto Uploader */}
              {activeProjectTab === 2 && (
                <div className="animate-fade-in">
                  <div className="flex items-center gap-2 text-xs text-logical-sky font-mono mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-logical-sky animate-pulse" /> SYSTEM_LOG // SECURE_ARCHITECTURE
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase font-clash tracking-wide">{techProjects[2].title}</h3>
                  <p className="text-sm text-zinc-400 mt-3 leading-relaxed">
                    {techProjects[2].desc}
                  </p>
                  <div className="mt-6 bg-white/2 border border-white/5 p-4 rounded-xl font-mono text-xs text-zinc-400 leading-relaxed">
                    <p className="text-logical-sky font-semibold mb-2">// Conceptual Workflow Blueprint (Offline Secure):</p>
                    <p>1. Local Execution: Script runs isolated to protect machine root access.</p>
                    <p>2. API Handshake: Negotiates private OAuth tokens via n8n endpoints.</p>
                    <p>3. Webhook Delivery: Formats JSON payloads with media metadata to trigger remote publishing arrays without exposing source code online.</p>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 bg-white/5 border border-white/10 px-5 py-2.5 rounded-lg cursor-not-allowed">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                    Code Kept Private For Security
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* 🧠 MODULE 2: KNOWLEDGE BASE */}
      <section className="relative w-full px-6 pb-24 sm:px-24 z-10 bg-[#09090b]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs font-mono text-logical-sky">[MODULE_02]</span>
            <h3 className="font-clash text-2xl font-bold uppercase tracking-wider border-l-2 border-logical-blue pl-4">Continuous Learning Matrix</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Concept Block 01 */}
            <div className="bg-white/2 border border-white/5 p-6 rounded-2xl hover:border-logical-blue/30 transition-all duration-300 group cursor-default">
              <div className="w-8 h-8 rounded-lg bg-logical-blue/10 border border-logical-blue/20 flex items-center justify-center text-logical-sky font-mono text-xs font-bold group-hover:bg-logical-blue/20 transition-colors">
                AI
              </div>
              <h4 className="text-sm font-semibold uppercase font-clash tracking-wide text-white mt-4">AI, LLMs & Automation</h4>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                Actively navigating my B.Tech AI/ML curriculum. I smartly leverage LLMs to debug logic, accelerate my coding workflow, and learn generative prompt structures faster.
              </p>
            </div>

            {/* Concept Block 02 */}
            <div className="bg-white/2 border border-white/5 p-6 rounded-2xl hover:border-logical-blue/30 transition-all duration-300 group cursor-default">
              <div className="w-8 h-8 rounded-lg bg-logical-blue/10 border border-logical-blue/20 flex items-center justify-center text-logical-sky font-mono text-xs font-bold group-hover:bg-logical-blue/20 transition-colors">
                DB
              </div>
              <h4 className="text-sm font-semibold uppercase font-clash tracking-wide text-white mt-4">Data Structures & Databases</h4>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                Building a strong C++ foundation for core array/loop logic. Currently exploring DBMS concepts and implementing MongoDB to handle dynamic project data handling.
              </p>
            </div>

            {/* Concept Block 03 */}
            <div className="bg-white/2 border border-white/5 p-6 rounded-2xl hover:border-logical-blue/30 transition-all duration-300 group cursor-default">
              <div className="w-8 h-8 rounded-lg bg-logical-blue/10 border border-logical-blue/20 flex items-center justify-center text-logical-sky font-mono text-xs font-bold group-hover:bg-logical-blue/20 transition-colors">
                FS
              </div>
              <h4 className="text-sm font-semibold uppercase font-clash tracking-wide text-white mt-4">Full Stack Exploration</h4>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                Learning to connect the dots between modern interfaces (React.js, Tailwind) and logic. Still mastering the full ecosystem, but deeply enjoying building out the components.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 📦 MODULE 3: EXPLICIT STACK CHIPS */}
      <section className="relative w-full px-6 pb-24 sm:px-24 z-10 bg-[#09090b]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs font-mono text-logical-sky">[MODULE_03]</span>
            <h3 className="font-clash text-2xl font-bold uppercase tracking-wider border-l-2 border-logical-blue pl-4">Current Tech Stack</h3>
          </div>

          <div className="bg-[#0a0f18]/80 border border-white/5 p-8 rounded-2xl relative overflow-hidden">
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6">
              
              {/* Stack Item */}
              <div className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-colors">
                <svg className="w-8 h-8 text-cyan-400 mb-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22.61C6.15 22.61 1.39 17.85 1.39 12S6.15 1.39 12 1.39 22.61 6.15 22.61 12 17.85 22.61 12 22.61zM12 2.89c-5.03 0-9.11 4.08-9.11 9.11s4.08 9.11 9.11 9.11 9.11-4.08 9.11-9.11-4.08-9.11-9.11-9.11z"/><path d="M12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zM12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
                <span className="text-xs font-mono font-bold text-zinc-300">React.js</span>
              </div>

              <div className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-colors">
                <svg className="w-8 h-8 text-blue-500 mb-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L24 6V18L12 24L0 18V6L12 0ZM12 13.5L20 8.5L12 3.5L4 8.5L12 13.5ZM4.5 10.5L11 14.5V21.5L4.5 17.5V10.5ZM13 14.5L19.5 10.5V17.5L13 21.5V14.5Z"/></svg>
                <span className="text-xs font-mono font-bold text-zinc-300">C++ Core</span>
              </div>

              <div className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-colors">
                <svg className="w-8 h-8 text-yellow-500 mb-3" viewBox="0 0 24 24" fill="currentColor"><path d="M11.954 1.956c-2.484 0-4.66.196-6.19.49-1.53.294-2.28 1.078-2.28 2.352v4.706h8.47v1.176H3.484v4.706c0 1.274.75 2.058 2.28 2.352 1.53.294 3.706.49 6.19.49s4.66-.196 6.19-.49c1.53-.294 2.28-1.078 2.28-2.352v-4.706h-8.47v-1.176h8.47V4.798c0-1.274-.75-2.058-2.28-2.352-1.53-.294-3.706-.49-6.19-.49z"/></svg>
                <span className="text-xs font-mono font-bold text-zinc-300">Python 3</span>
              </div>

              <div className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-colors">
                <svg className="w-8 h-8 text-yellow-400 mb-3" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
                <span className="text-xs font-mono font-bold text-zinc-300">JS/HTML/CSS</span>
              </div>

              <div className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-colors">
                <svg className="w-8 h-8 text-green-500 mb-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.88 14.88L12 13.12l-3.88 3.76-1.06-1.06L10.94 12 7.06 8.12l1.06-1.06L12 10.94l3.88-3.88 1.06 1.06L13.06 12l3.88 3.88-1.06 1.06z"/></svg>
                <span className="text-xs font-mono font-bold text-zinc-300">MongoDB</span>
              </div>

              <div className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-colors">
                <span className="font-clash text-2xl font-bold text-purple-400 mb-3 tracking-wider">n8n</span>
                <span className="text-xs font-mono font-bold text-zinc-300">Automation</span>
              </div>

              <div className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-colors">
                <svg className="w-8 h-8 text-sky-400 mb-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.1c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm-1-12h2v5h-2zm0 7h2v2h-2z"/></svg>
                <span className="text-xs font-mono font-bold text-zinc-300">Tailwind CSS</span>
              </div>

              <div className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-colors">
                <svg className="w-8 h-8 text-white mb-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm1-13h-2v4H9v2h2v4h2v-4h2v-2h-2V7z"/></svg>
                <span className="text-xs font-mono font-bold text-zinc-300">LLM Prompting</span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 🚀 THE MERGE */}
      <UnifiedContact />

    </div>
  );
}