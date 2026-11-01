import React from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/common/PageTransition';
import { Hero } from '../components/hero/Hero';
import { FlyingCardsSection } from '../components/home/FlyingCardsSection';
import { OperationalSkillsSection } from '../components/sections/OperationalSkillsSection';
import { VisitorTelemetrySection } from '../components/sections/VisitorTelemetrySection';
import { useTelemetry } from '../context/TelemetryContext';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES } from '../data/content';
import { 
  ArrowRight, 
  Crosshair, 
  Activity, 
  ExternalLink, 
  Shield, 
  Radio, 
  Cpu, 
  Zap, 
  Sparkles
} from 'lucide-react';

export const Home: React.FC = () => {
  const { frequency, frequencyMode, setFrequencyMode } = useTelemetry();

  return (
    <PageTransition>
      <div className="space-y-16 sm:space-y-24 pb-16 sm:pb-24 overflow-hidden">
        {/* 1. Full-Screen 3D Hero with Morphing Purple Sphere & Tilted Analyst Console */}
        <Hero />

        {/* 2. Interactive Bento Grid (Inspired by Superconscious Aesthetic) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 text-purple-300 text-xs font-mono border border-purple-500/30">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              INTELLIGENCE ARCHITECTURE
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight">
              Behavioral Telemetry & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-300 to-cyan-400">
                Threat Vibrations
              </span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base font-sans">
              Moving beyond static signatures: separating routine user activity from stealthy adversary behavior using flow statistics and machine learning.
            </p>
          </div>

          {/* Superconscious Bento Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            {/* Bento Card 1: Waveform / Flow Intelligence */}
            <div className="glass-panel p-6 rounded-3xl border border-purple-500/20 bg-gradient-to-b from-purple-950/20 to-black/40 flex flex-col justify-between space-y-6 relative overflow-hidden group hover:border-purple-400/50 transition-all duration-300">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-display font-bold text-white">
                  Flow-Level Vibrational Waveform
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  Dynamic analysis of packet cadence, burst intervals, and directional entropy in TLS sessions.
                </p>
              </div>

              {/* Animated SVG Waveform (Frequency Wave from reference screenshot) */}
              <div className="h-28 w-full relative flex items-center justify-center bg-black/40 rounded-2xl border border-white/5 p-2 overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 300 100" fill="none">
                  {/* Wave 1 - Purple Glow */}
                  <path
                    d="M 0 50 Q 30 10, 60 50 T 120 50 T 180 50 T 240 50 T 300 50"
                    stroke="#A855F7"
                    strokeWidth="2.5"
                    fill="none"
                    className="drop-shadow-[0_0_8px_#A855F7]"
                  />
                  {/* Wave 2 - Cyan Accent */}
                  <path
                    d="M 0 50 Q 40 85, 80 50 T 160 50 T 240 50 T 300 50"
                    stroke="#00F0FF"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    fill="none"
                    opacity="0.7"
                  />
                  {/* Node Point */}
                  <circle cx="180" cy="50" r="4.5" fill="#00F0FF" className="animate-ping" />
                  <circle cx="180" cy="50" r="3.5" fill="#00F0FF" />
                </svg>
                <div className="absolute bottom-2 right-3 text-[10px] font-mono text-cyan-600 dark:text-cyan-300 font-bold">
                  Cadence: {frequency} Hz ({frequencyMode})
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-2 border-t border-white/5">
                <span>Model Recall:</span>
                <span className="text-emerald-400 font-bold">92-95% Accuracy</span>
              </div>
            </div>

            {/* Bento Card 2: Interactive Incident Triage Arc Path (Superconscious Track Style) */}
            <div className="glass-panel p-6 rounded-3xl border border-violet-500/20 bg-gradient-to-b from-violet-950/20 to-black/40 flex flex-col justify-between space-y-6 relative overflow-hidden group hover:border-violet-400/50 transition-all duration-300">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-display font-bold text-white">
                  Autonomous Triage Pipeline
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  From initial telemetry ingestion to automated MITRE ATT&CK tagging and analyst escalation.
                </p>
              </div>

              {/* Concentric Rounded Track Pill (Direct Inspiration from Superconscious "Start Transformation" pill) */}
              <div className="relative py-4 flex items-center justify-center">
                <div className="w-full py-4 px-6 rounded-full border border-purple-500/40 bg-purple-950/30 backdrop-blur-md shadow-[0_0_25px_rgba(168,85,247,0.25)] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-cyan-400/20 border border-cyan-400 flex items-center justify-center text-cyan-300">
                      <Shield className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-white">
                      Initiate Incident Triage
                    </span>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-purple-500/30 border border-purple-400 flex items-center justify-center text-purple-200">
                    <span className="text-xs font-mono">&gt;</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-2 border-t border-white/5">
                <span>False-Positive Reduction:</span>
                <span className="text-cyan-300 font-bold">~20% Cut</span>
              </div>
            </div>

            {/* Bento Card 3: Real-Time Frequency Selector & Lab Intelligence */}
            <div className="glass-panel p-6 rounded-3xl border border-purple-500/20 bg-gradient-to-b from-purple-950/20 to-black/40 flex flex-col justify-between space-y-6 relative overflow-hidden group hover:border-purple-400/50 transition-all duration-300">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center text-indigo-300">
                  <Radio className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-display font-bold text-white">
                  SOC Learning & Lab Milestones
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  20+ TryHackMe rooms across SOC Level 1 and DFIR paths, verified with hands-on challenge rooms.
                </p>
              </div>

              {/* Frequency Band Selector Chips */}
              <div className="space-y-2">
                <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase font-semibold">
                  Detection Mode (Synced to Hero HUD):
                </div>
                <div className="flex gap-2">
                  {(['350Hz', '432Hz', '540Hz'] as const).map((band) => (
                    <button
                      key={band}
                      onClick={() => setFrequencyMode(band)}
                      className={`flex-1 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                        frequencyMode === band
                          ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white border border-purple-400 shadow-md shadow-purple-950/60 font-bold scale-[1.02]'
                          : 'bg-white/80 dark:bg-white/5 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/5'
                      }`}
                      title={`Switch SOC telemetry rate to ${band}`}
                    >
                      {band}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-2 border-t border-white/5">
                <span>TryHackMe Profile:</span>
                <a
                  href={PERSONAL_INFO.links.tryhackme}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:underline flex items-center gap-1 font-semibold"
                >
                  kumarkishan22595 &gt;
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Superconscious-Style 'Upgrade Your Defense' Flying Cards Section */}
        <FlyingCardsSection />

        {/* 3. Flagship Detection Projects */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <div className="text-xs font-mono text-purple-400 uppercase tracking-widest flex items-center gap-2">
                <Crosshair className="w-4 h-4" />
                FLAGSHIP DETECTIONS
              </div>
              <h2 className="text-xl sm:text-2xl md:text-4xl font-display font-extrabold text-white mt-1">
                Engineered for High-Fidelity Triage
              </h2>
            </div>
            <Link
              to="/projects"
              className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group"
            >
              <span>View All 5 Projects</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECTS.filter((p) => p.featured).map((proj) => (
              <div
                key={proj.id}
                className="glass-panel p-6 rounded-3xl flex flex-col justify-between group hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-950/40 transition-all duration-300 border border-white/10"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-purple-950/60 text-purple-300 border border-purple-500/30 font-semibold">
                      {proj.category}
                    </span>
                    <span className="text-xs font-mono text-slate-500">{proj.date}</span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-white group-hover:text-purple-300 transition-colors">
                    {proj.title}
                  </h3>

                  <p className="text-sm text-slate-400 font-sans line-clamp-3">
                    {proj.summary}
                  </p>

                  {/* MITRE Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {proj.mitreAttack.slice(0, 2).map((m, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-950/40 text-violet-300 border border-violet-500/20"
                      >
                        {m.code}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                  <Link
                    to={`/projects/${proj.id}`}
                    className="text-xs font-mono text-cyan-400 hover:text-white flex items-center gap-1 font-semibold"
                  >
                    <span>Full Architecture</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>

                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                    title="GitHub Repository"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Operational Skill Readiness */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <div className="text-xs font-mono text-purple-400 uppercase tracking-widest flex items-center justify-center gap-2">
              <Cpu className="w-4 h-4" />
              OPERATIONAL READINESS
            </div>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-display font-extrabold text-white">
              Tools & Frameworks in the SOC
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {SKILL_CATEGORIES.map((cat, i) => (
              <div key={i} className="glass-panel p-5 rounded-2xl border border-white/10 space-y-4 hover:border-purple-500/30 transition-colors">
                <div className="text-sm font-mono font-bold text-purple-300 border-b border-white/5 pb-2">
                  {cat.category}
                </div>
                <div className="space-y-2.5">
                  {cat.skills.map((s, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-300">{s.name}</span>
                      <span className="text-[10px] text-slate-400 px-1.5 py-0.5 rounded bg-white/5 border border-white/5">
                        {s.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Operational Skills & Role Fit */}
        <OperationalSkillsSection />

        {/* 6. Live Visitor Telemetry & Access History */}
        <VisitorTelemetrySection />

        {/* 6. Bottom Callout */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-14 border border-purple-500/30 text-center relative overflow-hidden bg-gradient-to-b from-purple-950/30 via-black/40 to-black/60 shadow-2xl shadow-purple-950/50">
            <div className="absolute inset-0 bg-radial from-violet-600/20 via-transparent to-transparent pointer-events-none" />
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-display font-extrabold text-white">
                Looking for a Vigilant SOC Analyst L1?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base font-sans">
                Based in Bareilly, Uttar Pradesh, open to relocating to Bengaluru from January 2027. Ready to contribute to incident response, threat hunting, and 24/7 security monitoring.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-mono font-bold text-xs sm:text-sm shadow-lg shadow-purple-900/60 transition-all hover:scale-105 w-full sm:w-auto text-center"
                >
                  Initiate Contact
                </Link>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-mono text-xs sm:text-sm border border-white/10 transition-all w-full sm:w-auto text-center break-all sm:break-normal"
                >
                  Direct: {PERSONAL_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};
