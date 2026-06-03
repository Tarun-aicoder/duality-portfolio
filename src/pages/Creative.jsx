import React, { useState, useEffect } from 'react';
import UnifiedContact from '../components/UnifiedContact';
import { motion, AnimatePresence } from 'framer-motion';
// 🔌 Connecting to your client file
import { supabase } from '../supabaseClient';

export default function Creative({ onBack }) {
  // 🗂️ Category State Management
  const [activeCategory, setActiveCategory] = useState('ALL');
  
  // 🎬 Active Selected Project State
  const [selectedProjectId, setSelectedProjectId] = useState('01');

  // 💬 Global Cloud Storage State
  const [reviews, setReviews] = useState({});
  const [loadingComments, setLoadingComments] = useState(true);
  const [reviewerName, setReviewerName] = useState('');
  const [reviewerComment, setReviewerComment] = useState('');

  // 📝 Ultimate Creative Project Database (Perfect 3 Short + 3 Long Split)
  const projects = [
    { 
      id: '01', 
      category: 'SHORT FORM',
      title: 'Phone Overheat Issue', 
      desc: 'Reasons for phone overheating , short form edit', 
      duration: '0:30',
      videoUrl: 'https://res.cloudinary.com/dm9acfgjp/video/upload/v1780490578/phoneHeat_compressed_rkzozs.mp4',
      retention: '75%',
      software: 'Premiere Pro',
      client: 'Influencer Tech Channel'
    },
    { 
      id: '02', 
      category: 'SHORT FORM',
      title: 'Legacy Funded Futures', 
      desc: 'about the legacy funded futures project, short form edit', 
      duration: '0:22',
      videoUrl: 'https://res.cloudinary.com/dm9acfgjp/video/upload/v1780490549/legacy_funded_futures_tpj8lf.mp4',
      retention: '30%',
      software: 'Capcut Pc',
      client: 'Influencer Finance Channel'
    },
    { 
      id: '03', 
      category: 'SHORT FORM',
      title: 'Edmund Burke', 
      desc: 'His thoughts about the French Revolution, short form edit', 
      duration: '0:18',
      videoUrl: 'https://res.cloudinary.com/dm9acfgjp/video/upload/v1780490544/Edmund_Burke_compressed_nj9nwh.mp4',
      retention: '33%',
      software: 'CapCut Pc',
      client: 'US Content Agency'
    },
    { 
      id: '04', 
      category: 'LONG FORM',
      title: '1031 EXCHANGE', 
      desc: 'About 1031 exchange, long form edit', 
      duration: '0:39',
      videoUrl: 'https://res.cloudinary.com/dm9acfgjp/video/upload/v1780490582/1031_EXCHANGE_nsiuao.mp4',
      retention: '38%',
      software: 'Premiere Pro',
      client: 'Independent Submission'
    },
    { 
      id: '05', 
      category: 'LONG FORM',
      title: 'Crime Story Hindi', 
      desc: 'jennette de palma, long form edit', 
      duration: '3:28',
      videoUrl: 'https://res.cloudinary.com/dm9acfgjp/video/upload/v1780490578/jennette_de_palma_sample_compressed_slb2y2.mp4',
      retention: '55%',
      software: 'Premiere Pro',
      client: 'Documentary Project'
    },
    { 
      id: '06', 
      category: 'LONG FORM',
      title: 'Pahalgram Attack', 
      desc: 'Pahalgram attack in kashmir, long form edit', 
      duration: '0:37',
      videoUrl: 'https://res.cloudinary.com/dm9acfgjp/video/upload/v1780490458/Pahalgram_Attack_compresses_svdg5d.mp4',
      retention: '42%',
      software: 'Capcut Pc',
      client: 'Influencer History Channel'
    },
  ];

  const activeProject = projects.find(p => p.id === selectedProjectId) || projects[0];
  const filteredProjects = activeCategory === 'ALL' ? projects : projects.filter(p => p.category === activeCategory);

  // 🔑 Helper to generate a unique string key based directly on the video details
  const getProjectStorageKey = (project) => {
    return `track_${project.id}_${project.title.replace(/[^a-zA-Z0-9]/g, '')}`;
  };

  const currentProjectKey = getProjectStorageKey(activeProject);

  // ==========================================
  // 💾 SUPABASE CENTRAL STORAGE HUB PIPELINE
  // ==========================================

  // 📥 Fetch stream from the live global database
  const fetchGlobalComments = async () => {
    setLoadingComments(true);
    try {
      const { data, error } = await supabase
        .from('comments')
        .select('*')
        .eq('project_id', currentProjectKey)
        .order('created_at', { ascending: false });

      if (!error && data) {
        const formattedReviews = [];
        for (let i = 0; i < data.length; i++) {
          formattedReviews.push({
            name: data[i].user_name,
            comment: data[i].text,
            timestamp: new Date(data[i].created_at).toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric' 
            })
          });
        }

        setReviews((prevReviews) => {
          return {
            ...prevReviews,
            [currentProjectKey]: formattedReviews
          };
        });
      }
    } catch (err) {
      console.log('Error establishing global cloud handle:', err);
    } finally {
      setLoadingComments(false);
    }
  };

  useEffect(() => {
    fetchGlobalComments();
  }, [currentProjectKey]);

  // 🚀 Post a comment globally to the cloud database
  const handleAddReview = async (e) => {
    e.preventDefault();
    if (!reviewerName.trim() || !reviewerComment.trim()) return;

    const databasePayload = {
      project_id: currentProjectKey,
      user_name: reviewerName.trim(),
      text: reviewerComment.trim()
    };

    try {
      const { error } = await supabase
        .from('comments')
        .insert([databasePayload]);

      if (!error) {
        setReviewerName('');
        setReviewerComment('');
        fetchGlobalComments();
      }
    } catch (err) {
      console.error('Cloud synchronization error:', err);
    }
  };

  return (
    <div className="relative w-full bg-creative-dark text-white overflow-x-hidden selection:bg-creative-orange selection:text-black">
      
      {/* 🎬 HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-between p-6 sm:p-12">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-62.5 h-62.5 sm:w-150 sm:h-150 rounded-full bg-creative-orange/20 filter blur-[120px] animate-pulse-slow" />
          <div className="absolute inset-x-0 top-1/4 h-px bg-white/2" />
          <div className="absolute inset-x-0 bottom-1/4 h-px bg-white/2" />
        </div>

        <header className="relative z-20 flex justify-between items-start w-full font-satoshi mt-16 md:mt-12">
          <div>
            <p className="text-[9px] uppercase tracking-[0.3em] text-creative-orange font-bold">Creative Sector</p>
            <p className="text-xs text-zinc-500 mt-1">©2026 Portfolio Core</p>
          </div>
          <button onClick={onBack} className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold border border-white/10 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full transition-all">
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Disconnect
          </button>
        </header>

        <div className="relative w-full my-auto flex flex-col items-center justify-center z-10">
          <h2 className="absolute font-clash text-[13vw] font-black uppercase text-white/2 tracking-tighter leading-none select-none pointer-events-none text-center w-full z-0">
            I CREATE MOTION
          </h2>
          
          <motion.div 
            className="relative w-64 h-72 sm:w-80 sm:h-105 rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] z-10"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute inset-0 bg-[#0c0c0e]">
              <img src="/creative-face.png" alt="Tarun Kumar Portrait" className="w-full h-full object-cover object-center" />
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-80 pointer-events-none" />
          </motion.div>

          <div className="absolute -bottom-15 sm:-bottom-7.5 text-center z-20 pointer-events-none">
            <motion.h1 className="font-clash text-4xl sm:text-6xl font-bold uppercase tracking-tight text-white drop-shadow-xl leading-[0.9]" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              EMOTION THROUGH MOTION
            </motion.h1>
          </div>
        </div>

        <footer className="relative z-20 flex justify-between items-center w-full border-t border-white/3 pt-6 font-inter">
          <p className="text-xs text-zinc-400 max-w-sm hidden sm:block">Blending aesthetic high-cut sequencing, sound design, and custom graphic transitions to form stories that loop inside the viewer's mind.</p>
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-bold text-creative-peach animate-bounce">Scroll to explore <span className="text-xs">↓</span></div>
        </footer>
      </section>

      {/* 🎰 PRODUCTION WORKSPACE SHOWCASE */}
      <section className="relative min-h-screen w-full px-6 py-24 sm:p-24 flex flex-col z-10 bg-[#09090b]">
        
        {/* 📑 COMPACT TAB FILTER BAR */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-white/5 pb-6">
          {['ALL', 'SHORT FORM', 'LONG FORM'].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveCategory(tab);
                const matched = tab === 'ALL' ? projects : projects.filter(p => p.category === tab);
                if (matched.length > 0) setSelectedProjectId(matched[0].id);
              }}
              className={`text-[10px] uppercase tracking-[0.20em] font-bold px-6 py-2.5 rounded-md border font-satoshi transition-all duration-300 ${
                activeCategory === tab 
                  ? 'bg-creative-orange border-creative-orange text-black' 
                  : 'bg-white/5 border-white/10 text-zinc-400 hover:text-white hover:border-white/20'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* MAIN DISPLAY HUB */}
        <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
          
          {/* Left Panel: Video Engine & Comments Panel */}
          <div className="w-full lg:w-3/5 flex flex-col gap-6">
            
            {/* 📱 DYNAMIC PLAYER FRAME */}
            <div className={`bg-zinc-950 border border-white/10 relative overflow-hidden group shadow-2xl transition-all duration-500 ease-out rounded-2xl ${
              activeProject.category === 'SHORT FORM'
                ? 'aspect-9/16 max-w-77.5 mx-auto w-full'
                : 'aspect-video w-full'
            }`}>
              <AnimatePresence mode="wait">
                <motion.video
                  key={activeProject.id}
                  src={activeProject.videoUrl}
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </AnimatePresence>
            </div>

            {/* Performance Analytics metrics */}
            <motion.div 
              key={`meta-${activeProject.id}`}
              className="grid grid-cols-3 gap-4 bg-white/5 border border-white/5 rounded-xl p-6 font-satoshi"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div>
                <p className="text-zinc-500 text-[9px] uppercase tracking-wider">Avg Retention</p>
                <p className="text-xl font-bold font-clash text-creative-peach mt-1">{activeProject.retention}</p>
              </div>
              <div>
                <p className="text-zinc-500 text-[9px] uppercase tracking-wider">Tech Stack</p>
                <p className="text-xs font-medium text-white/90 mt-2 truncate">{activeProject.software}</p>
              </div>
              <div>
                <p className="text-zinc-500 text-[9px] uppercase tracking-wider">Client Base</p>
                <p className="text-xs font-medium text-white/90 mt-2 truncate">{activeProject.client}</p>
              </div>
            </motion.div>

            {/* 💬 GLOBAL LIVE REVIEW PANEL */}
            <div className="bg-white/2 border border-white/5 rounded-2xl p-6 sm:p-8 mt-4 font-satoshi">
              <h4 className="font-clash text-lg font-bold uppercase tracking-wide text-white mb-1">
                Project Review Board
              </h4>
              <p className="text-xs text-zinc-500 mb-6">Drop your feedback or structural notes on this production cut.</p>

              {/* Public Form */}
              <form onSubmit={handleAddReview} className="flex flex-col gap-4 mb-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    value={reviewerName}
                    onChange={(e) => setReviewerName(e.target.value)}
                    className="sm:col-span-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-creative-orange/40 font-inter"
                  />
                  <input 
                    type="text" 
                    placeholder="Share your thoughts on the edit..."
                    value={reviewerComment}
                    onChange={(e) => setReviewerComment(e.target.value)}
                    className="sm:col-span-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-creative-orange/40 font-inter"
                  />
                </div>
                <button type="submit" className="self-end bg-white text-black hover:bg-creative-peach transition-colors font-bold text-[10px] uppercase tracking-widest px-5 py-2.5 rounded-lg">
                  Post Review
                </button>
              </form>

              {/* Dynamic Global Feed Rendering */}
              <div className="flex flex-col gap-4 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                {loadingComments ? (
                  <p className="text-xs text-zinc-500 italic py-4 animate-pulse">Establishing global comment feed connection...</p>
                ) : !(reviews[currentProjectKey]) || reviews[currentProjectKey].length === 0 ? (
                  <p className="text-xs text-zinc-600 italic py-4">No reviews posted yet for this asset. Be the first to add yours.</p>
                ) : (
                  reviews[currentProjectKey].map((rev, index) => (
                    <div key={index} className="bg-white/5 border border-white/5 rounded-xl p-4 flex flex-col gap-1.5 animate-fade-in">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-creative-orange font-inter">{rev.name}</span>
                        <span className="text-[10px] text-zinc-600 font-mono">{rev.timestamp}</span>
                      </div>
                      <p className="text-xs text-zinc-300 font-inter leading-relaxed">{rev.comment}</p>
                    </div>
                  ))
                )}
              </div>
            </div>

          </div>

          {/* Right Panel: Interactive Tracklist Selector */}
          <div className="w-full lg:w-2/5 flex flex-col gap-4">
            <h4 className="font-satoshi text-xs uppercase tracking-[0.3em] text-creative-orange font-bold mb-2">Select Production Track</h4>
            
            <div className="flex flex-col gap-3">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => {
                  const isSelected = project.id === selectedProjectId;
                  return (
                    <motion.div 
                      key={project.id} 
                      onClick={() => {
                        setSelectedProjectId(project.id);
                        setReviewerName('');
                        setReviewerComment('');
                      }}
                      className={`flex gap-5 items-center group cursor-pointer p-5 rounded-xl border transition-all duration-300 ${
                        isSelected 
                          ? 'bg-white/10 border-creative-orange/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' 
                          : 'bg-white/2 border-white/5 hover:bg-white/5'
                      }`}
                      layout
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className={`font-clash text-2xl font-bold transition-colors ${
                        isSelected ? 'text-creative-orange' : 'text-white/20 group-hover:text-creative-peach'
                      }`}>
                        {project.id}
                      </span>
                      <div className="flex-1">
                        <h5 className="font-inter text-sm font-semibold text-white">{project.title}</h5>
                        <p className="font-inter text-xs text-zinc-500 mt-1 line-clamp-1 group-hover:text-zinc-400 transition-colors">{project.desc}</p>
                      </div>
                      <span className="font-mono text-xs text-zinc-600 bg-white/5 px-2.5 py-1 rounded border border-white/5">
                        {project.duration}
                      </span>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </section>
      
      {/* 🚀 THE MERGE */}
      <UnifiedContact />

    </div>
  );
}
