import React, { useState } from 'react';
import Landing from './pages/Landing';
import Creative from './pages/Creative';
import Logical from './pages/Logical';
// 🕵️‍♂️ Import the secret Admin component
import Admin from './pages/Admin';

export default function App() {
  const [currentWorld, setCurrentWorld] = useState('landing');

  return (
    <div className="relative min-h-screen w-screen select-none overflow-x-hidden bg-[#09090b] text-white antialiased">
      
      {/* Global Dynamic Ambient Glow */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className={`ambient-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-70 h-70 sm:w-137.5 sm:h-137.5 rounded-full transition-all duration-1000 ease-out blur-[100px] ${
            currentWorld === 'creative' ? 'bg-creative-orange opacity-15 scale-125' :
            currentWorld === 'logical' ? 'bg-logical-blue opacity-10 scale-125' :
            currentWorld === 'admin' ? 'bg-red-600 opacity-20 scale-150 animate-pulse' :
            'bg-zinc-800 opacity-5'
          }`} 
        />
      </div>

      {/* Navigation Layer */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-6 sm:p-8">
        <button 
          onClick={() => setCurrentWorld('landing')}
          className="text-[10px] font-black tracking-[0.3em] uppercase hover:opacity-70 transition-opacity font-satoshi"
        >
          DUALITY
        </button>
        
        {/* 🕵️‍♂️ THE SECRET TRIGGER: Double click this text to open Admin panel */}
        <div 
          onDoubleClick={() => setCurrentWorld('admin')}
          className="text-[9px] uppercase tracking-[0.2em] font-medium text-zinc-500 font-satoshi cursor-crosshair hover:text-zinc-400 transition-colors"
          title="System Status"
        >
          {currentWorld === 'landing' ? 'IDENTITY SYNCED' : 
           currentWorld === 'admin' ? 'SYSTEM OVERRIDE ACTIVE' : 
           `${currentWorld} mode`}
        </div>
      </nav>

      {/* Context Viewer */}
      <main className="relative z-10 min-h-screen w-full">
        {currentWorld === 'landing' && (
          <Landing onChoose={setCurrentWorld} />
        )}

        {currentWorld === 'creative' && (
          <Creative onBack={() => setCurrentWorld('landing')} />
        )}

        {currentWorld === 'logical' && (
          <Logical onBack={() => setCurrentWorld('landing')} />
        )}

        {/* 🛑 Admin Render */}
        {currentWorld === 'admin' && (
          <Admin onBack={() => setCurrentWorld('landing')} />
        )}
      </main>

    </div>
  );
}
