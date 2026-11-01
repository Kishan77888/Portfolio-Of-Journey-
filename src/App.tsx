import React, { useState } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { TelemetryProvider } from './context/TelemetryContext';
import { Preloader } from './components/preloader/Preloader';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { CustomCursor } from './components/common/CustomCursor';
import { CommandPalette } from './components/common/CommandPalette';
import { TerminalModal } from './components/common/TerminalModal';

// Route Pages: Home loaded eagerly for instant FCP; secondary pages code-split
import { Home } from './pages/Home';

const About = React.lazy(() => import('./pages/About').then((m) => ({ default: m.About })));
const Projects = React.lazy(() => import('./pages/Projects').then((m) => ({ default: m.Projects })));
const ProjectDetail = React.lazy(() => import('./pages/ProjectDetail').then((m) => ({ default: m.ProjectDetail })));
const Labs = React.lazy(() => import('./pages/Labs').then((m) => ({ default: m.Labs })));
const Resume = React.lazy(() => import('./pages/Resume').then((m) => ({ default: m.Resume })));
const Contact = React.lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })));
const NotFound = React.lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFound })));

const RouteLoadingFallback: React.FC = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-8 h-8 rounded-full border-2 border-purple-500/20 border-t-purple-400 animate-spin" />
  </div>
);

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <React.Suspense fallback={<RouteLoadingFallback />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </React.Suspense>
  );
};

export const AppContent: React.FC = () => {
  const [preloaderKey, setPreloaderKey] = useState(1);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);

  // Global Ctrl+K keyboard shortcut
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
      // Backtick or tilde opens terminal easter egg
      if (e.key === '`' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleReplayBoot = () => {
    setPreloaderKey((prev) => prev + 1);
  };

  React.useEffect(() => {
    (window as any).__replayIntro = handleReplayBoot;
  }, []);

  return (
    <div className="relative min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)] transition-colors duration-300 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Scanline CRT Grain Overlay */}
      <div className="scanline-overlay" />

      {/* Custom Tactical Cursor */}
      <CustomCursor />

      {/* SOC Boot Preloader with key for clean remount on replay */}
      <Preloader
        key={preloaderKey}
        onComplete={() => {}}
      />

      {/* Command Palette (Ctrl+K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenTerminal={() => setTerminalOpen(true)}
        onReplayBoot={handleReplayBoot}
      />

      {/* Terminal Easter Egg (~ or button) */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onReplayBoot={handleReplayBoot}
      />

      {/* Primary Layout */}
      <div className="flex flex-col min-h-screen">
        <Navbar
          onOpenCommandPalette={() => setCommandPaletteOpen(true)}
          onOpenTerminal={() => setTerminalOpen(true)}
          onReplayBoot={handleReplayBoot}
        />

        <main className="flex-1">
          <AnimatedRoutes />
        </main>

        <Footer onReplayBoot={handleReplayBoot} />
      </div>
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <TelemetryProvider>
        <HashRouter>
          <AppContent />
        </HashRouter>
      </TelemetryProvider>
    </ThemeProvider>
  );
}
