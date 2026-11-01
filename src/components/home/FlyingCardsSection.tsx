import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Hexagon, Crosshair, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FlyingCardsSection: React.FC = () => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientWidth, clientHeight } = e.currentTarget;
    const x = (e.clientX / clientWidth) * 2 - 1;
    const y = (e.clientY / clientHeight) * 2 - 1;
    setMouseOffset({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[70vh] sm:min-h-[95vh] flex flex-col justify-center items-center overflow-hidden py-16 sm:py-24 select-none"
    >
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-radial from-violet-950/20 via-transparent to-transparent pointer-events-none" />

      {/* 1. Giant Background Typography (Directly from Screenshot: 'Upgrade Your Reality') */}
      <div className="relative w-full max-w-7xl mx-auto text-center pointer-events-none z-0">
        <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[13rem] font-display font-extrabold tracking-tighter text-white/90 leading-none select-none drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]">
          Upgrade Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-300 to-purple-900/40">
            Defense
          </span>
        </h2>
      </div>

      {/* 2. Flying Glass Cards Overlaying the Giant Text (Exactly matching Superconscious positions) */}
      <div className="absolute inset-0 max-w-7xl mx-auto pointer-events-none hidden sm:block">
        
        {/* CARD 1: Top-Left +95% Results Circular Gauge Card (Image Top-Left) */}
        <motion.div
          animate={{
            x: mouseOffset.x * -25,
            y: mouseOffset.y * -20 + [0, -10, 0][1],
            rotate: [-1, 2, -1],
          }}
          transition={{
            x: { type: 'spring', damping: 25, stiffness: 150 },
            y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="absolute top-[8%] sm:top-[12%] left-[6%] sm:left-[10%] z-20 pointer-events-auto"
        >
          <div className="glass-panel w-40 sm:w-48 h-40 sm:h-48 rounded-3xl p-4 border border-white/15 bg-[#12101F]/80 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col items-center justify-center relative group hover:border-purple-400 transition-colors">
            {/* Top-Left Arrow Pill */}
            <div className="absolute top-3 left-3 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-slate-300">
              <span className="text-xs">↑</span>
            </div>

            {/* Circular Progress Gauge */}
            <div className="relative w-24 h-24 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.1)" strokeWidth="6" fill="none" />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#A855F7"
                  strokeWidth="6"
                  strokeDasharray="251"
                  strokeDashoffset="25"
                  strokeLinecap="round"
                  fill="none"
                  className="drop-shadow-[0_0_10px_#A855F7]"
                />
              </svg>
              {/* Checkmark inside circle */}
              <div className="absolute top-4 w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center text-white shadow-md">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <div className="absolute text-center mt-3">
                <div className="text-lg font-mono font-bold text-white tracking-tight">+95%</div>
                <div className="text-[10px] font-mono text-slate-400 uppercase">Recall</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CARD 2: Center Lavender Pill Badge (Image Center-Top) */}
        <motion.div
          animate={{
            x: mouseOffset.x * 20,
            y: mouseOffset.y * -15,
          }}
          transition={{ type: 'spring', damping: 20, stiffness: 120 }}
          className="absolute top-[28%] sm:top-[32%] left-[46%] sm:left-[48%] -translate-x-1/2 z-20 pointer-events-auto"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-purple-500 to-indigo-400 p-0.5 shadow-[0_15px_35px_rgba(168,85,247,0.4)] flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-transform">
            <div className="w-full h-full rounded-2xl bg-purple-400/90 backdrop-blur-md flex flex-col items-center justify-center text-black">
              <div className="w-8 h-8 rounded-full bg-black/80 flex items-center justify-center text-purple-200 mb-1">
                <Crosshair className="w-4 h-4 animate-spin" style={{ animationDuration: '10s' }} />
              </div>
              <span className="px-2 py-0.5 rounded-full bg-black/70 text-[9px] font-mono font-bold text-white uppercase tracking-wider">
                SOC L1 BOT
              </span>
            </div>
          </div>
        </motion.div>

        {/* CARD 3: Foreground Left 'Input Telemetry & Reality' Glass Card (Image Foreground Left) */}
        <motion.div
          animate={{
            x: mouseOffset.x * -18,
            y: mouseOffset.y * 18 + [0, 8, 0][1],
          }}
          transition={{
            x: { type: 'spring', damping: 20, stiffness: 100 },
            y: { duration: 6.5, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="absolute top-[48%] sm:top-[50%] left-[8%] sm:left-[14%] z-30 pointer-events-auto"
        >
          <div className="glass-panel w-72 sm:w-84 rounded-3xl p-6 border border-white/15 bg-gradient-to-b from-[#161226]/90 to-[#0A0714]/90 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.7)] space-y-3 group hover:border-purple-400 transition-colors relative overflow-hidden">
            {/* Background geometric line art */}
            <div className="absolute right-0 bottom-0 opacity-15 pointer-events-none">
              <svg width="140" height="140" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="#A855F7" strokeWidth="1" fill="none" />
                <circle cx="70" cy="50" r="30" stroke="#00F0FF" strokeWidth="1" fill="none" />
              </svg>
            </div>

            {/* Sparkle Icon Circle */}
            <div className="w-10 h-10 rounded-2xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300">
              <Sparkles className="w-5 h-5" />
            </div>

            <div className="space-y-1">
              <h3 className="text-base sm:text-lg font-display font-bold text-white group-hover:text-purple-300 transition-colors">
                Ingest Active Telemetry & Threat Vectors
              </h3>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                Stream Sysmon Event IDs, Windows authentication bursts, and TLS flow packet intervals in real time.
              </p>
            </div>

            <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-cyan-400">
              <span>Status: Calibrated</span>
              <span>Splunk Forwarded &gt;</span>
            </div>
          </div>
        </motion.div>

        {/* CARD 4: Foreground Right 'SentinelAI Analyzes Patterns' Glass Card (Image Foreground Right) */}
        <motion.div
          animate={{
            x: mouseOffset.x * 22,
            y: mouseOffset.y * 22 + [0, -12, 0][1],
          }}
          transition={{
            x: { type: 'spring', damping: 20, stiffness: 100 },
            y: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="absolute top-[60%] sm:top-[62%] right-[6%] sm:right-[12%] z-30 pointer-events-auto"
        >
          <div className="glass-panel w-72 sm:w-88 rounded-3xl p-6 border border-white/15 bg-gradient-to-b from-[#18112C]/90 to-[#0A0716]/90 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.7)] space-y-3 group hover:border-violet-400 transition-colors relative overflow-hidden">
            {/* Hexagon Geometric Icon */}
            <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center text-indigo-300">
              <Hexagon className="w-5 h-5" />
            </div>

            <div className="space-y-1">
              <h3 className="text-base sm:text-lg font-display font-bold text-white group-hover:text-violet-300 transition-colors">
                SentinelAI Behavioral Model Analyzes TTPs
              </h3>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                Isolates credential dumping, C2 periodic beaconing, and anomalous exfiltration before lateral movement.
              </p>
            </div>

            <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-purple-300">
              <span>MITRE ATT&CK Mapped</span>
              <span className="text-emerald-400 font-bold">~20% FP Reduction</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Action Navigation */}
      <div className="relative z-20 mt-6 sm:mt-16 text-center px-4">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-purple-600/20 text-white font-mono text-xs border border-white/15 hover:border-purple-400 transition-all hover:scale-105"
        >
          <span>Explore Verified Anomaly Detections</span>
          <ArrowRight className="w-3.5 h-3.5 text-purple-400" />
        </Link>
      </div>
    </section>
  );
};
