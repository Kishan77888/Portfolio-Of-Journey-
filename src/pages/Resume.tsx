import React from 'react';
import { PageTransition } from '../components/common/PageTransition';
import { PERSONAL_INFO } from '../data/content';
import { FileText, Download, ExternalLink, Shield } from 'lucide-react';

export const Resume: React.FC = () => {
  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 pb-20">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 text-cyan-400 text-xs font-mono border border-cyan-500/30">
              <FileText className="w-3.5 h-3.5" />
              OFFICIAL CURRICULUM VITAE
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white">
              Resume Verification & PDF
            </h1>
            <p className="text-slate-400 text-sm font-sans">
              SOC Analyst (L1) • Threat Detection & Incident Response • Fresh Graduate
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.links.resumePdf}
              download="Kumar_Kishan_Resume_SOC_Analyst.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-mono font-bold text-xs transition-all shadow-lg shadow-cyan-950/50 hover:scale-105"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
            <a
              href={PERSONAL_INFO.links.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition-colors"
              title="Open Raw PDF in New Tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Highlights Summary Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="glass-panel p-4 rounded-xl border border-white/10 text-xs font-mono space-y-1">
            <div className="text-slate-500 uppercase">Degree</div>
            <div className="text-white font-bold">B.E. InfoSec (7.39 CGPA)</div>
            <div className="text-cyan-400">Chandigarh University (2026)</div>
          </div>
          <div className="glass-panel p-4 rounded-xl border border-white/10 text-xs font-mono space-y-1">
            <div className="text-slate-500 uppercase">Primary Focus</div>
            <div className="text-white font-bold">SOC L1 / SIEM Monitoring</div>
            <div className="text-violet-400">Splunk • Wazuh • Sysmon</div>
          </div>
          <div className="glass-panel p-4 rounded-xl border border-white/10 text-xs font-mono space-y-1">
            <div className="text-slate-500 uppercase">Location & Mobility</div>
            <div className="text-white font-bold">Bareilly, UP, India</div>
            <div className="text-emerald-400">Bengaluru Ready Jan 2027</div>
          </div>
          <div className="glass-panel p-4 rounded-xl border border-white/10 text-xs font-mono space-y-1">
            <div className="text-slate-500 uppercase">Direct Dispatch</div>
            <div className="text-white font-bold">{PERSONAL_INFO.email}</div>
            <div className="text-slate-400">{PERSONAL_INFO.phone}</div>
          </div>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="glass-panel rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl">
          <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-black/60 border-b border-white/10 text-xs font-mono">
            <span className="flex items-center gap-2 text-cyan-400 min-w-0 truncate">
              <Shield className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">Kumar_Kishan_Resume_SOC_Analyst.pdf</span>
            </span>
            <span className="text-slate-400 text-[10px] sm:text-[11px] shrink-0 ml-2">PDF EMBED</span>
          </div>

          <div className="w-full h-[500px] sm:h-[650px] md:h-[800px] bg-slate-900 relative">
            <object
              data={PERSONAL_INFO.links.resumePdf}
              type="application/pdf"
              className="w-full h-full"
            >
              <div className="p-12 text-center space-y-4">
                <FileText className="w-12 h-12 text-cyan-400 mx-auto" />
                <h3 className="text-lg font-bold text-white">PDF Viewer Preview</h3>
                <p className="text-slate-400 text-sm max-w-md mx-auto">
                  Your browser does not support inline PDF frames. You can directly view or download Kumar Kishan's official verified resume below.
                </p>
                <a
                  href={PERSONAL_INFO.links.resumePdf}
                  download="Kumar_Kishan_Resume_SOC_Analyst.pdf"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 text-black font-mono font-bold text-xs"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume PDF</span>
                </a>
              </div>
            </object>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
