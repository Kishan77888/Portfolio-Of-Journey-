import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Terminal, 
  Mail, 
  Radio, 
  Clock, 
  MapPin, 
  RotateCcw,
  CheckCircle2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../../data/content';

interface FooterProps {
  onReplayBoot: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onReplayBoot }) => {
  const [utcTime, setUtcTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setUtcTime(now.toUTCString().replace('GMT', 'UTC'));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative mt-20 border-t border-white/10 bg-[#07080E]/90 backdrop-blur-xl text-slate-400 font-mono text-xs overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Identity & Status */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white">
              <Shield className="w-5 h-5 text-cyan-400" />
              <span className="font-display font-bold text-base tracking-wide">
                {PERSONAL_INFO.name.toUpperCase()}
              </span>
            </div>
            <p className="text-slate-400 font-sans text-sm leading-relaxed">
              SOC Analyst (L1) specializing in SIEM telemetry monitoring, behavioral anomaly classification, and MITRE ATT&CK incident triage.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 text-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>TELEMETRY_PIPELINE: NORMAL (0 BREACHES)</span>
            </div>
          </div>

          {/* Real-Time SOC Diagnostics */}
          <div className="space-y-2 border-l-0 md:border-l border-white/5 pl-0 md:pl-4">
            <div className="text-xs uppercase text-cyan-400 tracking-wider flex items-center gap-1.5 font-bold mb-3">
              <Radio className="w-3.5 h-3.5" />
              SOC METRICS & TELEMETRY
            </div>
            <div className="flex items-center justify-between text-slate-400">
              <span>SIEM Indexer:</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> ONLINE (Splunk/Wazuh)
              </span>
            </div>
            <div className="flex items-center justify-between text-slate-400">
              <span>Detection Rec:</span>
              <span className="text-cyan-300 font-bold">92-95% Accuracy</span>
            </div>
            <div className="flex items-center justify-between text-slate-400">
              <span>Noise Filter:</span>
              <span className="text-violet-400 font-bold">~20% FP Reduced</span>
            </div>
            <div className="flex items-center justify-between text-slate-400">
              <span>Active Lab:</span>
              <span className="text-slate-300">2-VM Kali / Sysmon</span>
            </div>
          </div>

          {/* Quick Access Routes */}
          <div className="space-y-2 border-l-0 md:border-l border-white/5 pl-0 md:pl-4">
            <div className="text-xs uppercase text-cyan-400 tracking-wider font-bold mb-3">
              SECURITY DIRECTORY
            </div>
            <ul className="space-y-1.5">
              <li>
                <Link to="/" className="hover:text-cyan-400 transition-colors">
                  &gt; /home (3D Network Topology)
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-cyan-400 transition-colors">
                  &gt; /about (Credentials & Certifications)
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-cyan-400 transition-colors">
                  &gt; /projects (Detection Repositories)
                </Link>
              </li>
              <li>
                <Link to="/labs" className="hover:text-cyan-400 transition-colors">
                  &gt; /labs (TryHackMe & DFIR Writeups)
                </Link>
              </li>
              <li>
                <Link to="/resume" className="hover:text-cyan-400 transition-colors">
                  &gt; /resume (Verified PDF Viewer)
                </Link>
              </li>
              <li>
                <a 
                  href="#telemetry-history" 
                  onClick={(e) => {
                    const el = document.getElementById('telemetry-history');
                    if (el) {
                      e.preventDefault();
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="hover:text-cyan-400 transition-colors text-cyan-400/90 font-semibold"
                >
                  &gt; /telemetry-history (Visitor Access Log)
                </a>
              </li>
            </ul>
          </div>

          {/* Station Coordinates & Replay */}
          <div className="space-y-3 border-l-0 md:border-l border-white/5 pl-0 md:pl-4">
            <div className="text-xs uppercase text-cyan-400 tracking-wider font-bold mb-3">
              STATION DISPATCH
            </div>
            <div className="flex items-start gap-2 text-slate-300">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>{PERSONAL_INFO.location} <br/><span className="text-slate-500 text-[11px]">→ Bengaluru Ready Jan 2027</span></span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="text-[11px]">{utcTime || 'UTC CLOCK SYNCHRONIZING...'}</span>
            </div>
            <div className="pt-2">
              <button
                onClick={onReplayBoot}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 hover:bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[11px] transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Replay Boot Sequence</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-cyan-400 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.links.tryhackme}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-red-400 transition-colors"
              title="TryHackMe Profile"
            >
              <Terminal className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-emerald-400 transition-colors"
              title="Direct Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <div className="text-[11px] text-slate-500 text-center sm:text-right">
            Designed & Engineered for SOC Operations. Data mapped to MITRE ATT&CK & NIST IR standards.
            <div className="text-slate-600 mt-0.5">
              © {new Date().getFullYear()} Kumar Kishan. All telemetry validated.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
