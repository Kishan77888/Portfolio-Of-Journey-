import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/common/PageTransition';
import { ShieldAlert, RefreshCw, Terminal, Home } from 'lucide-react';

export const NotFound: React.FC = () => {
  const [pingLog, setPingLog] = useState<string[]>([]);
  const [pinging, setPinging] = useState(false);

  const runTraceroute = () => {
    setPinging(true);
    setPingLog([
      'TRACEROUTE: Resolving origin perimeter...',
      'HOP 1: 192.168.1.1 (Gateway) - 1.2ms',
      'HOP 2: 10.254.0.1 (SOC Firewall) - 4.1ms',
      'HOP 3: DESTINATION DROPPED: 404 UNROUTABLE_ENDPOINT',
      'RE-ROUTING TO SAFE NODE: /home'
    ]);
    setTimeout(() => {
      setPinging(false);
    }, 1500);
  };

  return (
    <PageTransition>
      <div className="max-w-2xl mx-auto px-4 py-20 text-center space-y-8 font-mono">
        <div className="w-20 h-20 rounded-2xl bg-red-950/40 border border-red-500/40 flex items-center justify-center mx-auto text-red-400 shadow-2xl shadow-red-950/80">
          <ShieldAlert className="w-10 h-10 animate-pulse" />
        </div>

        <div className="space-y-2">
          <div className="text-xs text-red-400 uppercase tracking-widest">
            ERROR 404 // NETWORK EXCEPTION
          </div>
          <h1 className="text-4xl font-display font-extrabold text-white">
            Unroutable Packet
          </h1>
          <p className="text-slate-400 text-sm font-sans max-w-md mx-auto">
            The requested URI does not exist within the current security perimeter. Telemetry firewall has dropped the packet.
          </p>
        </div>

        {/* Interactive Traceroute Widget */}
        <div className="glass-panel p-4 rounded-xl border border-white/10 text-left max-w-md mx-auto text-xs space-y-2">
          <div className="flex items-center justify-between pb-2 border-b border-white/5 text-slate-400">
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              Diagnostics Terminal
            </span>
            <button
              onClick={runTraceroute}
              disabled={pinging}
              className="text-cyan-400 hover:underline flex items-center gap-1"
            >
              <RefreshCw className={`w-3 h-3 ${pinging ? 'animate-spin' : ''}`} />
              Run Traceroute
            </button>
          </div>
          <div className="space-y-1 text-slate-300 font-mono text-[11px] min-h-[70px]">
            {pingLog.length === 0 ? (
              <span className="text-slate-500">&gt; Click "Run Traceroute" to diagnose dropped packets...</span>
            ) : (
              pingLog.map((log, i) => (
                <div key={i} className={i === pingLog.length - 1 ? 'text-cyan-400 font-bold' : ''}>
                  &gt; {log}
                </div>
              ))
            )}
          </div>
        </div>

        <div className="pt-4 flex items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all hover:scale-105"
          >
            <Home className="w-4 h-4" />
            <span>Return to SOC Base</span>
          </Link>
        </div>
      </div>
    </PageTransition>
  );
};
