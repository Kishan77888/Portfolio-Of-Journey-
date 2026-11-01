import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/common/PageTransition';
import { PROJECTS } from '../data/content';
import { FolderGit2, ArrowRight, ExternalLink, Filter } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');

  const filters = ['ALL', 'ML / Detection', 'Detection', 'Network', 'Product'];

  const filteredProjects = selectedFilter === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedFilter);

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12 pb-16 sm:pb-20">
        {/* Header */}
        <div className="space-y-3 sm:space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 text-cyan-400 text-xs font-mono border border-cyan-500/30">
            <FolderGit2 className="w-3.5 h-3.5" />
            ENGINEERED DEFENSIVE SYSTEMS
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-display font-extrabold text-white">
            Security Projects & Detection Tooling
          </h1>
          <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed">
            Independent security research, behavioral anomaly detection pipelines, and SaaS platforms built with Python, scikit-learn, Splunk, and Wireshark. Mapped to MITRE ATT&CK enterprise tactics.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-4">
          <span className="text-xs font-mono text-slate-500 mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            FILTER:
          </span>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setSelectedFilter(f)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                selectedFilter === f
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-sm'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-transparent'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="glass-panel rounded-2xl p-4 sm:p-6 flex flex-col justify-between border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-cyan-950/60 text-cyan-400 border border-cyan-500/30">
                    {proj.category}
                  </span>
                  <span className="text-xs font-mono text-slate-500">{proj.date}</span>
                </div>

                <div>
                  <h3 className="text-lg font-display font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-1">
                    {proj.tagline}
                  </p>
                </div>

                <p className="text-sm text-slate-300 font-sans line-clamp-3">
                  {proj.problem}
                </p>

                {/* Key Metrics */}
                <div className="space-y-1.5 pt-2">
                  {proj.metrics.slice(0, 2).map((m, mIdx) => (
                    <div key={mIdx} className="text-xs font-mono text-cyan-300/90 flex items-start gap-1.5">
                      <span className="text-cyan-400 select-none">▸</span>
                      <span>{m}</span>
                    </div>
                  ))}
                </div>

                {/* MITRE ATT&CK Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {proj.mitreAttack.map((m, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-950/40 text-violet-300 border border-violet-500/20"
                    >
                      {m.code}: {m.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action link */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <Link
                  to={`/projects/${proj.id}`}
                  className="text-xs font-mono text-cyan-400 hover:text-white flex items-center gap-1.5 font-semibold group/link"
                >
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>

                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                  title="GitHub Repository"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};
