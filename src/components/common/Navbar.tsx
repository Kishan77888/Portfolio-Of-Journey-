import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Shield, 
  Terminal, 
  Search, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  FileText,
  Radar
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface NavbarProps {
  onOpenCommandPalette: () => void;
  onOpenTerminal: () => void;
  onReplayBoot?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette, onOpenTerminal, onReplayBoot }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Labs & Writeups', path: '/labs' },
    { label: 'Resume', path: '/resume' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#090A12]/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/40 py-2.5'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Callout */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500/20 via-violet-500/20 to-cyan-500/10 border border-cyan-500/40 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)]">
              <div className="absolute inset-0 bg-radial from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <Shield className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span className="sr-only">Kumar Kishan</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-sm tracking-wide text-white group-hover:text-cyan-400 transition-colors">
                  KUMAR KISHAN
                </span>
                <span className="hidden md:inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  SOC ACTIVE
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-400">
                Threat Detection & SIEM
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500/20 to-violet-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Action Tools */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Command Palette Trigger */}
            <button
              onClick={onOpenCommandPalette}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/10 text-xs font-mono text-slate-300 border border-white/10 transition-all hover:border-cyan-500/40 group cursor-pointer"
              title="Open Command Palette (Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden sm:inline-flex px-1.5 py-0.2 rounded bg-black/50 text-[10px] text-slate-400 border border-white/10">
                Ctrl+K
              </kbd>
            </button>

            {/* Terminal Easter Egg Trigger */}
            <button
              onClick={onOpenTerminal}
              className="p-2 rounded-lg bg-white/[0.04] hover:bg-cyan-500/10 text-slate-300 hover:text-cyan-400 border border-white/10 hover:border-cyan-500/30 transition-all cursor-pointer"
              title="Open Interactive SOC Terminal"
            >
              <Terminal className="w-4 h-4" />
            </button>

            {/* Intro Replay Trigger */}
            {onReplayBoot && (
              <button
                onClick={onReplayBoot}
                className="p-2 rounded-lg bg-white/[0.04] hover:bg-purple-500/10 text-slate-300 hover:text-purple-400 border border-white/10 hover:border-purple-500/30 transition-all cursor-pointer"
                title="Replay Opening Cosmic Animation"
              >
                <Radar className="w-4 h-4 animate-spin-slow" />
              </button>
            )}

            {/* Dark/Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/10 text-slate-300 hover:text-amber-300 border border-white/10 transition-all cursor-pointer"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Resume Quick Action */}
            <Link
              to="/resume"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 via-indigo-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white text-xs font-mono font-semibold shadow-md shadow-cyan-900/40 hover:shadow-cyan-500/30 transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/[0.04] text-slate-300 border border-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-lg"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-20 right-4 left-4 p-5 rounded-2xl bg-[#0F101E] border border-cyan-500/30 shadow-2xl space-y-3 z-50">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-cyan-400">
              <span className="flex items-center gap-2">
                <Radar className="w-4 h-4 animate-spin" />
                NAVIGATION RADAR
              </span>
              <span className="text-slate-400">SYS_V2</span>
            </div>
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2.5 rounded-xl text-sm font-mono flex items-center justify-between transition-colors ${
                      isActive
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                        : 'text-slate-300 hover:bg-white/5'
                    }`
                  }
                >
                  <span>{link.label}</span>
                  <span className="text-[10px] text-slate-500">&gt;</span>
                </NavLink>
              ))}
            </div>
            <div className="pt-3 border-t border-white/10 grid grid-cols-3 gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCommandPalette();
                }}
                className="py-2 px-1 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-center text-slate-300 flex items-center justify-center gap-1.5"
              >
                <Search className="w-3.5 h-3.5 text-cyan-400" />
                <span>Search</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTerminal();
                }}
                className="py-2 px-1 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-center text-slate-300 flex items-center justify-center gap-1.5"
              >
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>Terminal</span>
              </button>
              <Link
                to="/resume"
                className="py-2 px-1 rounded-xl bg-cyan-500 text-black font-semibold text-xs font-mono text-center flex items-center justify-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
