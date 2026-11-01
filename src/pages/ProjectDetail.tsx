import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PageTransition } from '../components/common/PageTransition';
import { PROJECTS } from '../data/content';
import { 
  ArrowLeft, 
  ExternalLink, 
  ShieldAlert, 
  Crosshair, 
  CheckCircle2, 
  Play, 
  Layers, 
  Activity
} from 'lucide-react';
import { GithubIcon } from '../components/common/Icons';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find((p) => p.id === id);

  const [activeChapter, setActiveChapter] = useState<number>(0);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-16 pb-16 sm:pb-24">
        {/* Breadcrumb / Back button */}
        <div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>&lt; Back to All Detection Projects</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/60 text-cyan-400 border border-cyan-500/30">
              {project.category}
            </span>
            <span className="text-xs font-mono text-slate-500">{project.date}</span>
            <span className="text-xs font-mono text-violet-400">Role: {project.role}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-display font-extrabold text-white">
            {project.title}
          </h1>

          <p className="text-base sm:text-xl text-slate-300 font-sans leading-relaxed max-w-3xl">
            {project.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-mono font-bold text-xs transition-all shadow-md shadow-cyan-500/20"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View Source on GitHub</span>
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </div>
        </div>

        {/* Key Metrics Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {project.metrics.map((metric, i) => (
            <div key={i} className="glass-panel p-4 rounded-xl border border-white/10 text-center">
              <div className="text-xs font-mono text-cyan-400 mb-1">METRIC {i + 1}</div>
              <div className="text-sm sm:text-base font-mono font-bold text-white">{metric}</div>
            </div>
          ))}
        </div>

        {/* Problem & Approach */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          <div className="glass-panel p-4 sm:p-6 rounded-2xl border border-white/10 space-y-2.5 sm:space-y-3">
            <div className="text-xs font-mono text-red-400 uppercase tracking-widest flex items-center gap-1.5 font-bold">
              <ShieldAlert className="w-4 h-4" />
              THE SECURITY PROBLEM
            </div>
            <h3 className="text-lg sm:text-xl font-display font-bold text-white">Why Static Signatures Fail</h3>
            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="glass-panel p-4 sm:p-6 rounded-2xl border border-white/10 space-y-2.5 sm:space-y-3">
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest flex items-center gap-1.5 font-bold">
              <Activity className="w-4 h-4" />
              THE DEFENSIVE APPROACH
            </div>
            <h3 className="text-lg sm:text-xl font-display font-bold text-white">Engineering the Solution</h3>
            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
              {project.approach}
            </p>
          </div>
        </div>

        {/* Architecture Pipeline Diagram */}
        <div className="space-y-6">
          <div className="border-b border-white/10 pb-4">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-1.5 font-bold">
              <Layers className="w-4 h-4" />
              SYSTEM ARCHITECTURE
            </div>
            <h2 className="text-2xl font-display font-bold text-white mt-1">
              End-to-End Telemetry Pipeline
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {project.architectureNodes.map((node, idx) => (
              <div
                key={node.id}
                className="glass-panel p-5 rounded-2xl border border-white/10 relative overflow-hidden flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                    <span>STAGE 0{idx + 1}</span>
                    <span className="text-[10px] uppercase text-cyan-400 px-1.5 py-0.5 rounded bg-cyan-950/40 border border-cyan-500/20">
                      {node.type}
                    </span>
                  </div>
                  <div className="text-sm font-display font-bold text-white">
                    {node.label}
                  </div>
                  <div className="text-xs text-slate-400 font-sans">
                    {node.desc}
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 text-[10px] font-mono text-cyan-400/80">
                  STATUS: VERIFIED
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MITRE ATT&CK Mapping */}
        <div className="space-y-4">
          <div className="border-b border-white/10 pb-4">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-1.5 font-bold">
              <Crosshair className="w-4 h-4" />
              MITRE ATT&CK MAPPING
            </div>
            <h2 className="text-2xl font-display font-bold text-white mt-1">
              Enterprise Adversary Techniques
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.mitreAttack.map((m, idx) => (
              <div
                key={idx}
                className="glass-panel p-4 rounded-xl border border-violet-500/20 bg-violet-950/10 flex items-center justify-between"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-cyan-400 px-2 py-0.5 rounded bg-black/40 border border-cyan-500/30">
                      {m.code}
                    </span>
                    <span className="text-sm font-display font-semibold text-white">
                      {m.name}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-slate-400 mt-1 pl-1">
                    Tactic: {m.tactic}
                  </div>
                </div>
                <a
                  href={`https://attack.mitre.org/techniques/${m.code.replace('.', '/')}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
                  title="View on MITRE ATT&CK"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Project Video Section (Custom Player Placeholder) */}
        {project.demoVideo && (
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-4">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-1.5 font-bold">
                <Play className="w-4 h-4" />
                TECHNICAL DEMO & WALKTHROUGH
              </div>
              <h2 className="text-2xl font-display font-bold text-white mt-1">
                Walkthrough Recording
              </h2>
            </div>

            <div className="glass-panel rounded-2xl overflow-hidden border border-cyan-500/30">
              {/* Video Player Display */}
              <div className="relative aspect-video w-full bg-black/80 flex items-center justify-center group overflow-hidden">
                <div className="absolute inset-0 bg-radar-grid opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

                <div className="relative z-10 text-center space-y-3 p-6">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center mx-auto text-cyan-400 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform cursor-pointer">
                    <Play className="w-6 h-6 ml-1 fill-cyan-400" />
                  </div>
                  <div className="font-mono text-xs text-cyan-300">
                    Chapter: {project.demoVideo.chapters[activeChapter]?.title}
                  </div>
                  <div className="text-xs text-slate-500 font-mono">
                    [DEMO VIDEO RECORDING READY - CONFIGURE IN DATA FILE]
                  </div>
                </div>
              </div>

              {/* Chapter Timeline Navigation */}
              <div className="p-4 bg-black/40 border-t border-white/10">
                <div className="text-xs font-mono text-slate-400 mb-2 uppercase">Jump to Chapter:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                  {project.demoVideo.chapters.map((ch, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveChapter(idx)}
                      className={`p-2.5 rounded-lg text-left text-xs font-mono transition-all cursor-pointer ${
                        activeChapter === idx
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                          : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-transparent'
                      }`}
                    >
                      <div className="text-[10px] text-cyan-400/80">{ch.timestamp}</div>
                      <div className="font-semibold truncate">{ch.title}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Results & Verification */}
        <div className="space-y-4">
          <div className="border-b border-white/10 pb-4">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-1.5 font-bold">
              <CheckCircle2 className="w-4 h-4" />
              VALIDATED RESULTS & IMPACT
            </div>
            <h2 className="text-2xl font-display font-bold text-white mt-1">
              Lab & Metric Outcomes
            </h2>
          </div>

          <div className="space-y-3">
            {project.results.map((res, idx) => (
              <div
                key={idx}
                className="glass-panel p-4 rounded-xl border border-white/10 flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-sm font-sans text-slate-200">{res}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Chips */}
        <div className="space-y-3">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
            Technology Stack:
          </div>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 text-slate-200 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
