import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Terminal, 
  FileText, 
  ShieldAlert, 
  Cpu, 
  Moon, 
  Sun, 
  ArrowRight, 
  Mail, 
  Home,
  User,
  FolderGit2,
  X
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../../data/content';
import { useTheme } from '../../context/ThemeContext';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTerminal?: () => void;
  onReplayBoot?: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose, onOpenTerminal, onReplayBoot }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const items = [
    // Navigation
    { id: 'nav-home', title: 'Home', category: 'Navigation', icon: Home, action: () => { navigate('/'); onClose(); } },
    { id: 'nav-about', title: 'About & Credentials', category: 'Navigation', icon: User, action: () => { navigate('/about'); onClose(); } },
    { id: 'nav-projects', title: 'Projects (All Detections & Repos)', category: 'Navigation', icon: FolderGit2, action: () => { navigate('/projects'); onClose(); } },
    { id: 'nav-labs', title: 'Labs & Writeups (TryHackMe / DFIR)', category: 'Navigation', icon: Terminal, action: () => { navigate('/labs'); onClose(); } },
    { id: 'nav-resume', title: 'Resume Viewer & Verification', category: 'Navigation', icon: FileText, action: () => { navigate('/resume'); onClose(); } },
    { id: 'nav-contact', title: 'Contact Kumar Kishan', category: 'Navigation', icon: Mail, action: () => { navigate('/contact'); onClose(); } },
    { 
      id: 'nav-telemetry-history', 
      title: 'Visitor Access History & IP Ingress Telemetry', 
      category: 'Telemetry', 
      icon: Terminal, 
      action: () => { 
        navigate('/'); 
        onClose(); 
        setTimeout(() => {
          document.getElementById('telemetry-history')?.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } 
    },

    // Featured Projects
    ...PROJECTS.map((p) => ({
      id: `proj-${p.id}`,
      title: `${p.title} (${p.category})`,
      category: 'Projects',
      icon: Cpu,
      action: () => { navigate(`/projects/${p.id}`); onClose(); }
    })),

    // Quick Actions
    {
      id: 'act-resume-dl',
      title: 'Download Resume (PDF)',
      category: 'Actions',
      icon: FileText,
      action: () => {
        const link = document.createElement('a');
        link.href = PERSONAL_INFO.links.resumePdf;
        link.download = 'Kumar_Kishan_Resume_SOC_Analyst.pdf';
        link.click();
        onClose();
      }
    },
    {
      id: 'act-terminal',
      title: 'Open SOC Interactive Terminal Easter Egg',
      category: 'Actions',
      icon: Terminal,
      action: () => {
        if (onOpenTerminal) onOpenTerminal();
        onClose();
      }
    },
    {
      id: 'act-replay-intro',
      title: 'Replay Opening Cosmic Animation (Sacred Rosette)',
      category: 'Actions',
      icon: ShieldAlert,
      action: () => {
        if (onReplayBoot) onReplayBoot();
        onClose();
      }
    },
    {
      id: 'act-theme',
      title: `Toggle Theme (Current: ${theme.toUpperCase()})`,
      category: 'Actions',
      icon: theme === 'dark' ? Sun : Moon,
      action: () => {
        toggleTheme();
        onClose();
      }
    },
    {
      id: 'act-copy-email',
      title: `Copy Email (${PERSONAL_INFO.email})`,
      category: 'Actions',
      icon: Mail,
      action: () => {
        navigator.clipboard.writeText(PERSONAL_INFO.email);
        alert('Email copied to clipboard: ' + PERSONAL_INFO.email);
        onClose();
      }
    }
  ];

  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9990] flex items-start justify-center pt-10 sm:pt-20 px-3 sm:px-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: -20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: -20 }}
          className="relative w-full max-w-2xl rounded-2xl border border-cyan-500/30 bg-[#0C0D18]/95 text-slate-200 shadow-2xl shadow-cyan-950/60 overflow-hidden backdrop-blur-2xl z-10 max-h-[85vh] flex flex-col"
        >
          {/* Header Search Input */}
          <div className="flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-3 sm:py-3.5 border-b border-white/10 bg-white/[0.02] shrink-0">
            <Search className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search SOC controls, projects..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(0);
              }}
              className="w-full bg-transparent text-xs sm:text-base text-white placeholder-slate-500 focus:outline-none font-mono"
            />
            <kbd className="hidden sm:inline-flex px-2 py-0.5 rounded bg-white/10 text-[11px] font-mono text-slate-400 border border-white/10">
              ESC
            </kbd>
            <button
              onClick={onClose}
              className="sm:hidden p-1.5 text-slate-400 hover:text-white rounded-lg bg-white/5 transition-colors"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Results List */}
          <div className="max-h-[380px] overflow-y-auto p-2 space-y-1">
            {filteredItems.length === 0 ? (
              <div className="py-12 text-center text-sm font-mono text-slate-500">
                <ShieldAlert className="w-8 h-8 text-slate-600 mx-auto mb-2" />
                No matching telemetry records or routes found.
              </div>
            ) : (
              filteredItems.map((item, idx) => {
                const Icon = item.icon;
                const isSelected = idx === selectedIndex;
                return (
                  <div
                    key={item.id}
                    onClick={item.action}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl cursor-pointer transition-colors ${
                      isSelected
                        ? 'bg-gradient-to-r from-cyan-500/20 via-violet-500/15 to-transparent border border-cyan-500/30 text-white'
                        : 'text-slate-300 hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${isSelected ? 'bg-cyan-500/20 text-cyan-400' : 'bg-white/5 text-slate-400'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">{item.title}</div>
                        <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">{item.category}</div>
                      </div>
                    </div>
                    {isSelected && (
                      <ArrowRight className="w-4 h-4 text-cyan-400 shrink-0 animate-pulse" />
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Footer bar */}
          <div className="flex items-center justify-between px-4 py-2 border-t border-white/5 bg-black/40 text-[11px] font-mono text-slate-500">
            <div className="flex items-center gap-4">
              <span>Navigate: <kbd className="text-slate-400">↑↓</kbd></span>
              <span>Select: <kbd className="text-slate-400">↵</kbd></span>
              <span>Close: <kbd className="text-slate-400">ESC</kbd></span>
            </div>
            <div className="flex items-center gap-1.5 text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              SOC HUD v2.6
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
