import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cyber3DScene } from './Cyber3DScene';
import { PERSONAL_INFO } from '../../data/content';
import { useTelemetry } from '../../context/TelemetryContext';
import { 
  ArrowRight, 
  Radio, 
  Activity, 
  Crosshair, 
  FileText, 
  Zap, 
  Bell, 
  CheckCircle2 
} from 'lucide-react';

export const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { frequency, frequencyMode, cycleFrequency } = useTelemetry();

  const rafId = React.useRef<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    
    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() => {
      setMousePos({ x, y });
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative min-h-[80vh] sm:min-h-[92vh] flex flex-col justify-center items-center overflow-hidden pt-20 sm:pt-8 pb-10 sm:pb-16 px-2 sm:px-0"
    >
      {/* 1. Deep Cosmic Purple Atmosphere */}
      <div className="absolute inset-0 bg-radial from-violet-900/35 via-[#130924]/50 to-[#080811] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[750px] sm:h-[750px] bg-gradient-to-tr from-purple-600/25 via-indigo-600/20 to-cyan-400/10 blur-[80px] sm:blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-radar-grid opacity-25 pointer-events-none" />

      {/* 2. Three.js 3D Morphing Purple Sphere & Starfield */}
      <Cyber3DScene mousePos={mousePos} />

      {/* 3. Floating Glassmorphism Telemetry Cards (At different depths and bobbing speeds) */}
      
      {/* Floating Card Top-Left: Splunk Ingestion */}
      <motion.div
        animate={{
          y: [-8, 8, -8],
          x: mousePos.x * -15,
          rotate: [-1, 2, -1],
        }}
        transition={{ y: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
        className="hidden md:flex absolute top-24 left-[3%] lg:left-[7%] z-20 glass-panel p-3 lg:p-4 rounded-2xl border border-violet-500/30 shadow-xl shadow-purple-950/40 backdrop-blur-xl w-52 lg:w-60 flex-col gap-2 pointer-events-auto group hover:border-cyan-400 transition-colors"
      >
        <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
          <span className="flex items-center gap-1.5 font-bold">
            <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            SPLUNK SIEM
          </span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30">
            PORT 9997
          </span>
        </div>
        <div className="text-sm font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
          Log Stream Forwarding
        </div>
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-white/5 pt-2">
          <span>Sysmon Ingest</span>
          <span className="text-emerald-400 font-semibold">NORMAL (0 DROPS)</span>
        </div>
      </motion.div>

      {/* Floating Card Top-Right: MITRE ATT&CK Precision */}
      <motion.div
        animate={{
          y: [10, -10, 10],
          x: mousePos.x * 20,
          rotate: [2, -2, 2],
        }}
        transition={{ y: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
        className="hidden md:flex absolute top-28 right-[3%] lg:right-[7%] z-20 glass-panel p-3 lg:p-4 rounded-2xl border border-purple-500/30 shadow-xl shadow-purple-950/40 backdrop-blur-xl w-56 lg:w-64 flex-col gap-2 pointer-events-auto group hover:border-violet-400 transition-colors"
      >
        <div className="flex items-center justify-between text-xs font-mono text-violet-400">
          <span className="flex items-center gap-1.5 font-bold">
            <Crosshair className="w-3.5 h-3.5 text-violet-400" />
            MITRE ATT&CK
          </span>
          <span className="text-[10px] text-emerald-400 font-semibold px-1.5 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30">
            92-95% RECALL
          </span>
        </div>
        <div className="text-sm font-display font-bold text-white group-hover:text-violet-300 transition-colors">
          Behavioral Anomaly Triage
        </div>
        <div className="flex flex-wrap gap-1 text-[10px] font-mono pt-1">
          <span className="px-1.5 py-0.5 rounded bg-black/40 text-cyan-300 border border-cyan-500/20">T1078</span>
          <span className="px-1.5 py-0.5 rounded bg-black/40 text-violet-300 border border-violet-500/20">T1071</span>
          <span className="px-1.5 py-0.5 rounded bg-black/40 text-purple-300 border border-purple-500/20">T1567</span>
        </div>
      </motion.div>

      {/* Floating Card Bottom-Left: Wireshark PCAP */}
      <motion.div
        animate={{
          y: [6, -8, 6],
          x: mousePos.x * -18,
          rotate: [-2, 1, -2],
        }}
        transition={{ y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut' } }}
        className="hidden xl:flex absolute bottom-24 left-[9%] z-20 glass-panel p-4 rounded-2xl border border-white/10 shadow-xl backdrop-blur-xl w-60 flex-col gap-1.5 pointer-events-auto group hover:border-cyan-400 transition-colors"
      >
        <div className="flex items-center justify-between text-xs font-mono text-slate-400">
          <span className="flex items-center gap-1.5 font-bold text-cyan-400">
            <Activity className="w-3.5 h-3.5" />
            WIRESHARK TLS
          </span>
          <span className="text-[10px] text-slate-500 font-mono">FLOW PCAP</span>
        </div>
        <div className="text-sm font-display font-bold text-white">
          Encrypted C2 Classifier
        </div>
        <div className="text-[11px] font-mono text-slate-400">
          Zero Payload Decryption Needed
        </div>
      </motion.div>

      {/* Floating Card Bottom-Right: SentinelAI Engine */}
      <motion.div
        animate={{
          y: [-10, 8, -10],
          x: mousePos.x * 16,
          rotate: [1, -2, 1],
        }}
        transition={{ y: { duration: 6.5, repeat: Infinity, ease: 'easeInOut' } }}
        className="hidden xl:flex absolute bottom-24 right-[9%] z-20 glass-panel p-4 rounded-2xl border border-white/10 shadow-xl backdrop-blur-xl w-64 flex-col gap-1.5 pointer-events-auto group hover:border-violet-400 transition-colors"
      >
        <div className="flex items-center justify-between text-xs font-mono text-violet-400">
          <span className="flex items-center gap-1.5 font-bold">
            <Zap className="w-3.5 h-3.5" />
            SENTINEL_AI CORE
          </span>
          <span className="text-[10px] text-cyan-400 font-bold">~20% FP CUT</span>
        </div>
        <div className="text-sm font-display font-bold text-white">
          User Baseline Modeling
        </div>
        <div className="text-[11px] font-mono text-slate-400">
          FastAPI • Scikit-Learn Engine
        </div>
      </motion.div>

      {/* 4. Main Foreground Hero Content */}
      <div className="relative z-30 max-w-5xl mx-auto px-3 sm:px-4 text-center space-y-4 sm:space-y-6">
        {/* Status Callout Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-violet-950/60 border border-violet-500/40 text-violet-300 text-[10px] sm:text-xs font-mono shadow-lg shadow-purple-950/40 backdrop-blur-md max-w-full"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
          </span>
          <span className="tracking-wide text-center leading-tight">SOC ANALYST L1 // THREAT DETECTION & INCIDENT RESPONSE</span>
        </motion.div>

        {/* Cinematic Headline with Masked Gradient Reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="space-y-3 pt-2"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
            Defending Networks with <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-300 to-violet-400 drop-shadow-[0_0_40px_rgba(168,85,247,0.6)]">
              Data-Driven Precision
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-sm sm:text-base md:text-lg text-slate-800 dark:text-slate-100 font-sans leading-relaxed px-4 sm:px-6 py-2 sm:py-2.5 rounded-2xl bg-white/90 dark:bg-black/60 border border-slate-200/80 dark:border-white/15 backdrop-blur-xl shadow-md dark:shadow-xl shadow-slate-200/50 dark:shadow-black/50">
            {PERSONAL_INFO.subheadline}
          </p>
        </motion.div>

        {/* 5. Tilted 3D Analyst Telemetry Device (The Centerpiece Phone/HUD Console) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          style={{
            transform: `perspective(1200px) rotateX(${12 - mousePos.y * 8}deg) rotateY(${mousePos.x * 12}deg)`,
            transformStyle: 'preserve-3d',
          }}
          className="relative max-w-[280px] sm:max-w-sm md:max-w-md mx-auto mt-6 sm:mt-10 mb-6 sm:mb-8 p-1 sm:p-1.5 rounded-[32px] sm:rounded-[40px] bg-gradient-to-b from-violet-500/50 via-purple-900/25 to-cyan-500/35 shadow-[0_15px_50px_rgba(109,40,217,0.4)] sm:shadow-[0_25px_80px_rgba(109,40,217,0.5)] border border-white/20 backdrop-blur-2xl transition-transform duration-200"
        >
          <div className="rounded-[28px] sm:rounded-[32px] bg-[#0C091A]/95 p-3.5 sm:p-5 text-left border border-white/10 space-y-3 sm:space-y-4 overflow-hidden relative">
            {/* Top Phone / Console Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full p-0.5 bg-gradient-to-tr from-cyan-400 via-purple-500 to-violet-500 shadow-md">
                  <img
                    src={PERSONAL_INFO.photo}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full rounded-full object-cover object-top"
                  />
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#0C091A] animate-pulse" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-purple-700 dark:text-purple-300 font-semibold">Welcome Back</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white font-display tracking-tight">Kumar Kishan</div>
                </div>
              </div>
              <div 
                onClick={cycleFrequency}
                className="flex items-center gap-1.5 p-2 rounded-full bg-white/10 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-cyan-600 dark:text-cyan-400 hover:scale-105 transition-all cursor-pointer"
                title={`Telemetry Mode: ${frequencyMode} (Click to toggle)`}
              >
                <Bell className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Glowing Frequency / Telemetry Gauge */}
            <div className="relative py-3 flex flex-col items-center justify-center">
              {/* Outer Glowing Rings */}
              <div className="absolute w-36 h-36 sm:w-48 sm:h-48 rounded-full border border-purple-500/20 animate-spin" style={{ animationDuration: '28s' }} />
              <div className="absolute w-28 h-28 sm:w-40 sm:h-40 rounded-full border border-cyan-400/30 animate-pulse" />
              <div 
                onClick={cycleFrequency}
                title="Click dial to toggle detection Hz: 350Hz -> 432Hz -> 540Hz"
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-violet-100 dark:from-violet-950/80 via-purple-200/50 dark:via-purple-700/35 to-cyan-100 dark:to-cyan-500/20 border-2 border-violet-500/60 dark:border-violet-400/80 shadow-[0_0_35px_rgba(168,85,247,0.3)] dark:shadow-[0_0_35px_rgba(168,85,247,0.6)] flex flex-col items-center justify-center relative cursor-pointer group hover:scale-105 transition-transform"
              >
                <div className="text-[9px] font-mono text-purple-800 dark:text-purple-200 uppercase tracking-widest font-bold">Telemetry Rate</div>
                <div className="text-xl sm:text-2xl font-mono font-black text-slate-900 dark:text-white drop-shadow-sm">{frequency} Hz</div>
                
                {/* Micro Action Pill */}
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    cycleFrequency();
                  }}
                  className="mt-1 px-3 py-0.5 rounded-full bg-purple-600/10 dark:bg-purple-500/30 hover:bg-purple-600/20 dark:hover:bg-purple-500/50 text-[9px] font-mono font-bold text-purple-700 dark:text-cyan-300 border border-purple-400/50 transition-all cursor-pointer"
                >
                  Triage Live: {frequencyMode}
                </button>
              </div>

              {/* Status Action Pill */}
              <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/80 border border-purple-300 dark:border-purple-500/40 text-[11px] font-mono text-purple-800 dark:text-purple-200 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Telemetry Ingestion Active ({frequencyMode})
              </div>
            </div>

            {/* Bottom Sub-Card */}
            <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-between text-xs font-mono">
              <div className="space-y-0.5">
                <div className="text-[10px] uppercase font-mono text-purple-700 dark:text-purple-300 font-bold">Daily SOC Calibration</div>
                <div className="text-slate-900 dark:text-white font-bold text-xs sm:text-sm">SentinelAI Anomaly Baseline</div>
                <div className="text-slate-600 dark:text-slate-400 text-[11px]">MITRE ATT&CK Mapped • 92-95% Recall</div>
              </div>
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 ml-2" />
            </div>
          </div>
        </motion.div>

        {/* 6. Primary Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2 px-2 sm:px-0"
        >
          <Link
            to="/projects"
            className="flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-mono text-xs sm:text-sm font-semibold shadow-lg shadow-purple-900/50 hover:shadow-cyan-500/40 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
          >
            <span>Explore Detection Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/resume"
            className="flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-white/90 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-white/15 hover:border-purple-500/50 font-mono text-xs sm:text-sm transition-all hover:scale-105 active:scale-95 w-full sm:w-auto justify-center shadow-sm"
          >
            <FileText className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span>Verified Resume (PDF)</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
