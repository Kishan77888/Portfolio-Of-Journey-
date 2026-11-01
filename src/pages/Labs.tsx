import React, { useState } from 'react';
import { PageTransition } from '../components/common/PageTransition';
import { LAB_WRITEUPS, PERSONAL_INFO } from '../data/content';
import { Terminal, ExternalLink, Filter, ChevronRight } from 'lucide-react';

export const Labs: React.FC = () => {
  const [selectedPath, setSelectedPath] = useState<string>('ALL');

  const paths = ['ALL', 'SOC Level 1', 'DFIR', 'Job Simulation'];

  const filteredLabs = selectedPath === 'ALL'
    ? LAB_WRITEUPS
    : LAB_WRITEUPS.filter((l) => l.path === selectedPath);

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12 pb-16 sm:pb-20">
        {/* Header */}
        <div className="space-y-3 sm:space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 text-cyan-400 text-xs font-mono border border-cyan-500/30">
            <Terminal className="w-3.5 h-3.5" />
            OPERATIONAL LAB WRITEUPS & THM LOGS
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-display font-extrabold text-white">
            Hands-on SOC & DFIR Labs
          </h1>
          <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed">
            Practical writeups and methodology logs from 20+ completed TryHackMe rooms (SOC Level 1 and DFIR paths) and enterprise job simulations. Demonstrating artifact handling, packet inspection, and event log forensics.
          </p>

          <div className="pt-1">
            <a
              href={PERSONAL_INFO.links.tryhackme}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-950/40 hover:bg-red-900/40 text-red-300 border border-red-500/30 text-xs font-mono transition-all"
            >
              <span>View TryHackMe Profile: kumarkishan22595</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Path Filter */}
        <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-4">
          <span className="text-xs font-mono text-slate-500 mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            PATH:
          </span>
          {paths.map((p) => (
            <button
              key={p}
              onClick={() => setSelectedPath(p)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                selectedPath === p
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-sm'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-transparent'
              }`}
            >
              {p}
            </button>
          ))}
        </div>

        {/* Labs List */}
        <div className="space-y-4 sm:space-y-6">
          {filteredLabs.map((lab) => (
            <div
              key={lab.id}
              className="glass-panel p-4 sm:p-6 rounded-2xl border border-white/10 space-y-3 sm:space-y-4 hover:border-cyan-500/40 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-cyan-950/60 text-cyan-400 border border-cyan-500/30">
                    {lab.platform}
                  </span>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-violet-950/60 text-violet-300 border border-violet-500/30">
                    {lab.path}
                  </span>
                </div>
                <span className="text-[11px] sm:text-xs font-mono text-slate-500">{lab.completedDate}</span>
              </div>

              <h3 className="text-lg sm:text-xl font-display font-bold text-white">
                {lab.title}
              </h3>

              <p className="text-sm text-slate-300 font-sans leading-relaxed">
                {lab.description}
              </p>

              {/* Key Takeaways */}
              <div className="space-y-2 pt-1">
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  Investigative Execution & Methodology:
                </div>
                <div className="space-y-1.5">
                  {lab.keyTakeaways.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs font-sans text-slate-300">
                      <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* MITRE Mapping & Tags */}
              <div className="pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {lab.mitreMapping.map((m, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 text-violet-300 border border-violet-500/20"
                    >
                      {m}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {lab.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};
