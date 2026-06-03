import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

export default function Admin({ onBack }) {
  // Lock States
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinKey, setPinKey] = useState('');
  
  // Data State
  const [allComments, setAllComments] = useState([]);

  // 🔒 Change this to whatever secret PIN you want!
  const SECRET_PASSKEY = import.meta.env.VITE_ADMIN_PIN;

  // ==========================================
  // 🔑 SECURITY GATEWAY
  // ==========================================
  const handleLogin = (e) => {
    e.preventDefault();
    if (pinKey === SECRET_PASSKEY) {
      setIsAuthenticated(true);
      fetchEveryComment(); // Fetch data only after unlock
    } else {
      alert("Access Denied: Incorrect PIN");
      setPinKey('');
    }
  };

  // ==========================================
  // 📥 FETCH ALL DATABASE RECORDS
  // ==========================================
  const fetchEveryComment = async () => {
    try {
      const { data, error } = await supabase
        .from('comments')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data) {
        // Manually looping through data for a clean, readable structure
        let extractedComments = [];
        for (let i = 0; i < data.length; i++) {
          extractedComments.push({
            id: data[i].id,
            project: data[i].project_id,
            name: data[i].user_name,
            text: data[i].text,
            date: new Date(data[i].created_at).toLocaleDateString()
          });
        }
        setAllComments(extractedComments);
      }
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  // ==========================================
  // 🗑️ DELETE FUNCTION
  // ==========================================
  const handleDelete = async (commentId) => {
    // Small confirmation popup before deleting
    const confirmDelete = window.confirm("Are you sure you want to delete this comment forever?");
    
    if (confirmDelete) {
      try {
        const { error } = await supabase
          .from('comments')
          .delete()
          .eq('id', commentId);

        if (!error) {
          // If delete is successful, refresh the list automatically
          fetchEveryComment();
        } else {
          console.error("Delete failed:", error.message);
        }
      } catch (err) {
        console.error("Delete process error:", err);
      }
    }
  };

  // ==========================================
  // 🖥️ UI RENDER
  // ==========================================
  
  // 🛑 1. If not logged in, show only the PIN lock screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-6 text-white font-satoshi">
        <div className="w-full max-w-sm bg-zinc-900 border border-white/10 rounded-xl p-8 shadow-2xl">
          <h2 className="text-xl font-bold font-clash uppercase text-center mb-6 text-creative-orange">
            System Override
          </h2>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input 
              type="password" 
              placeholder="Enter Admin PIN"
              value={pinKey}
              onChange={(e) => setPinKey(e.target.value)}
              className="bg-black border border-white/20 rounded-lg px-4 py-3 text-center text-white focus:outline-none focus:border-creative-orange"
            />
            <button type="submit" className="bg-white text-black font-bold uppercase tracking-widest py-3 rounded-lg hover:bg-creative-peach transition-colors">
              Unlock
            </button>
            <button type="button" onClick={onBack} className="text-zinc-500 text-xs mt-2 hover:text-white transition-colors">
              ← Back to Main Protocol
            </button>
          </form>
        </div>
      </div>
    );
  }

  // 🟢 2. If logged in, show the Admin Dashboard
  return (
    <div className="min-h-screen bg-black text-white p-6 sm:p-12 font-inter">
      <header className="flex justify-between items-center mb-10 border-b border-white/10 pb-6">
        <div>
          <h1 className="font-clash text-2xl font-bold uppercase text-creative-orange">God Mode</h1>
          <p className="text-xs text-zinc-500 mt-1">Database Control Center</p>
        </div>
        <button onClick={onBack} className="text-[10px] uppercase tracking-[0.2em] font-bold border border-white/10 bg-white/5 hover:bg-red-500/20 hover:text-red-400 px-4 py-2 rounded-full transition-all">
          Lock System & Exit
        </button>
      </header>

      <div className="grid grid-cols-1 gap-4 max-w-5xl mx-auto">
        {allComments.length === 0 ? (
          <p className="text-zinc-500 text-center py-10">Database is empty. No comments to review.</p>
        ) : (
          allComments.map((item) => (
            <div key={item.id} className="bg-zinc-900/50 border border-white/5 p-5 rounded-xl flex flex-col sm:flex-row justify-between sm:items-center gap-4 hover:border-white/10 transition-colors">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-bold text-sm text-white">{item.name}</span>
                  <span className="text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 rounded text-zinc-400 font-mono">
                    {item.project.replace('track_', '')}
                  </span>
                  <span className="text-[10px] text-zinc-500">{item.date}</span>
                </div>
                <p className="text-sm text-zinc-300">{item.text}</p>
              </div>
              
              <button 
                onClick={() => handleDelete(item.id)}
                className="bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500 hover:text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors self-start sm:self-auto"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
