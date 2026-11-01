import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, CornerDownLeft } from 'lucide-react';
import { SOC_TERMINAL_COMMANDS } from '../../data/content';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReplayBoot?: () => void;
}

interface CommandHistoryItem {
  command: string;
  output: string;
  timestamp: string;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose, onReplayBoot }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      command: 'init',
      output: 'SOC TACTICAL TERMINAL [Kumar Kishan - SOC Analyst L1]\nType "help" for available commands, "projects" to view repositories, or "boot" to replay cosmic opening.',
      timestamp: 'NOW'
    }
  ]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [cmdList, setCmdList] = useState<string[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = inputVal.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      setCmdList((prev) => [...prev, trimmed]);
      return;
    }

    if (['boot', 'intro', 'preloader'].includes(trimmed)) {
      if (onReplayBoot) onReplayBoot();
      onClose();
      return;
    }

    const output = SOC_TERMINAL_COMMANDS[trimmed] || `Command not recognized: "${trimmed}". Type "help" for available security commands or "boot" to replay cosmic intro.`;

    setHistory((prev) => [
      ...prev,
      {
        command: trimmed,
        output,
        timestamp: new Date().toLocaleTimeString([], { hour12: false })
      }
    ]);

    setCmdList((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdList.length > 0) {
        const newIndex = historyIndex === -1 ? cmdList.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInputVal(cmdList[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= cmdList.length) {
          setHistoryIndex(-1);
          setInputVal('');
        } else {
          setHistoryIndex(newIndex);
          setInputVal(cmdList[newIndex]);
        }
      }
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9995] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Terminal Box */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-3xl rounded-xl border border-cyan-500/40 bg-[#090A13] shadow-2xl shadow-cyan-500/20 overflow-hidden font-mono text-xs sm:text-sm text-slate-200 z-10 flex flex-col h-[82vh] sm:h-[520px] max-h-[580px]"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-3.5 sm:px-4 py-2.5 sm:py-3 bg-black/60 border-b border-white/10 shrink-0">
            <div className="flex items-center gap-2">
              <TerminalIcon className="w-4 h-4 text-cyan-400" />
              <span className="text-[11px] sm:text-xs text-slate-300 font-semibold tracking-wide truncate">
                kishan@soc-telemetry-console: ~
              </span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-[9px] sm:text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                ACTIVE_SHELL
              </span>
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-white p-1 transition-colors"
                title="Close Terminal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Command Action Pills for Mobile / Fast Interaction */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-black/40 border-b border-white/5 overflow-x-auto no-scrollbar shrink-0">
            <span className="text-[10px] font-mono text-slate-500 shrink-0">QUICK:</span>
            {['whoami', 'skills', 'projects', 'history', 'ip', 'certs', 'threats', 'clear'].map((cmd) => (
              <button
                key={cmd}
                type="button"
                onClick={() => {
                  setInputVal(cmd);
                  // Auto submit
                  const trimmed = cmd.toLowerCase();
                  if (trimmed === 'clear') {
                    setHistory([]);
                    setInputVal('');
                    setCmdList((prev) => [...prev, trimmed]);
                    return;
                  }
                  const output = SOC_TERMINAL_COMMANDS[trimmed] || `Command: ${trimmed}`;
                  setHistory((prev) => [
                    ...prev,
                    {
                      command: trimmed,
                      output,
                      timestamp: new Date().toLocaleTimeString([], { hour12: false })
                    }
                  ]);
                  setCmdList((prev) => [...prev, trimmed]);
                  setInputVal('');
                }}
                className="px-2 py-0.5 rounded bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 text-[10px] font-mono border border-white/10 shrink-0 transition-colors cursor-pointer"
              >
                {cmd}
              </button>
            ))}
          </div>

          {/* Terminal Logs & Output */}
          <div className="p-3 sm:p-4 flex-1 overflow-y-auto space-y-3 sm:space-y-4 text-[11px] sm:text-xs">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-1.5 sm:gap-2 text-cyan-400 flex-wrap">
                  <span className="text-slate-500 font-mono text-[10px] sm:text-xs">[{item.timestamp}]</span>
                  <span className="text-emerald-400">kishan@soc:~$</span>
                  <span className="text-white font-bold">{item.command}</span>
                </div>
                <pre className="text-slate-300 whitespace-pre-wrap pl-3 sm:pl-4 font-mono leading-relaxed bg-white/[0.02] p-2 rounded border-l-2 border-cyan-500/40 text-[10px] sm:text-xs">
                  {item.output}
                </pre>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input Prompt Form */}
          <form
            onSubmit={handleCommand}
            className="flex items-center gap-1.5 sm:gap-2 p-2.5 sm:p-3 bg-black/70 border-t border-white/10 shrink-0"
          >
            <span className="text-emerald-400 pl-1 sm:pl-2 text-[11px] sm:text-xs shrink-0">kishan@soc:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type command..."
              className="flex-1 bg-transparent text-cyan-300 placeholder-slate-600 focus:outline-none font-mono text-xs sm:text-sm min-w-0"
            />
            <button
              type="submit"
              className="px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 hover:bg-cyan-500/30 transition-all flex items-center gap-1 text-[11px] sm:text-xs shrink-0"
            >
              <span>EXEC</span>
              <CornerDownLeft className="w-3 h-3" />
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
