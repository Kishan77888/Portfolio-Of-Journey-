import React, { useState } from 'react';
import { PageTransition } from '../components/common/PageTransition';
import { PERSONAL_INFO } from '../data/content';
import { Mail, Send, Terminal, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/common/Icons';

export const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'IDLE' | 'SUBMITTING' | 'SUCCESS'>('IDLE');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roleOrCompany: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('SUBMITTING');

    // Simulate reliable dispatch or open mailto fallback
    setTimeout(() => {
      setFormStatus('SUCCESS');
      const subject = encodeURIComponent(`SOC Opportunity / Inquiry: ${formData.roleOrCompany}`);
      const body = encodeURIComponent(
        `Hi Kumar Kishan,\n\nName: ${formData.name}\nEmail: ${formData.email}\nOrganization: ${formData.roleOrCompany}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    }, 800);
  };

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12 pb-16 sm:pb-20">
        {/* Header */}
        <div className="space-y-3 sm:space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 text-cyan-400 text-xs font-mono border border-cyan-500/30">
            <Mail className="w-3.5 h-3.5" />
            SECURE CHANNEL // COMMS INITIATION
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-display font-extrabold text-white">
            Initiate Contact
          </h1>
          <p className="text-slate-300 font-sans text-base leading-relaxed">
            Interested in discussing an entry-level SOC Analyst, Threat Detection, or Junior Pentesting role? Drop a message or reach out across direct channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Direct Comms Card */}
          <div className="space-y-4">
            <div className="glass-panel p-4 sm:p-6 rounded-2xl border border-white/10 space-y-5 sm:space-y-6">
              <h2 className="text-base font-display font-bold text-white flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                Direct Signals
              </h2>

              <div className="space-y-4 text-xs font-mono">
                <div className="space-y-1">
                  <div className="text-slate-500 uppercase">Primary Email</div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-cyan-300 hover:underline block break-all font-semibold"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>

                <div className="space-y-1">
                  <div className="text-slate-500 uppercase">Phone & WhatsApp</div>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-white hover:text-cyan-400 block font-semibold"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>

                <div className="space-y-1">
                  <div className="text-slate-500 uppercase">Station Location</div>
                  <div className="text-slate-300">{PERSONAL_INFO.location}</div>
                  <div className="text-emerald-400 text-[11px] mt-0.5">
                    → Relocating to Bengaluru Jan 2027
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <div className="text-[11px] font-mono text-slate-500 uppercase">Adversary & Intel Profiles</div>
                <div className="flex flex-col gap-2">
                  <a
                    href={PERSONAL_INFO.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-cyan-400 flex items-center justify-between text-xs font-mono transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                      LinkedIn
                    </span>
                    <span className="text-slate-500">&gt;</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white flex items-center justify-between text-xs font-mono transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <GithubIcon className="w-4 h-4 text-slate-400" />
                      GitHub
                    </span>
                    <span className="text-slate-500">&gt;</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.links.tryhackme}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-red-400 flex items-center justify-between text-xs font-mono transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-red-400" />
                      TryHackMe
                    </span>
                    <span className="text-slate-500">&gt;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Dispatch Form */}
          <div className="lg:col-span-2">
            <div className="glass-panel p-4 sm:p-8 rounded-2xl border border-cyan-500/30">
              <h2 className="text-base sm:text-lg font-display font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <Send className="w-4 h-4 text-cyan-400" />
                Dispatch Encrypted Inquiry
              </h2>

              {formStatus === 'SUCCESS' ? (
                <div className="p-8 text-center space-y-4 bg-emerald-950/20 border border-emerald-500/30 rounded-xl font-mono">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <div className="text-lg font-bold text-white">Transmission Prepared!</div>
                  <p className="text-xs text-slate-300 font-sans max-w-md mx-auto">
                    Your email client has been summoned with the pre-filled dispatch to {PERSONAL_INFO.email}.
                  </p>
                  <button
                    onClick={() => setFormStatus('IDLE')}
                    className="px-4 py-2 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs"
                  >
                    Send Another Dispatch
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-slate-400">YOUR CALLSIGN / NAME</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins (Lead SecOps)"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 font-mono"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-slate-400">DISPATCH EMAIL</label>
                      <input
                        type="email"
                        required
                        placeholder="sjenkins@enterprise-soc.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 font-mono"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-400">ORGANIZATION / ROLE TITLE</label>
                    <input
                      type="text"
                      placeholder="e.g. SOC Tier-1 Analyst Opening / Bangalore Relocation"
                      value={formData.roleOrCompany}
                      onChange={(e) => setFormData({ ...formData, roleOrCompany: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 font-mono"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-400">BRIEFING MESSAGE</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Hi Kumar, we reviewed your SentinelAI baseline work and home SOC lab. We would like to schedule an introductory conversation..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 font-mono resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'SUBMITTING'}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-cyan-900/40 cursor-pointer transition-all hover:scale-[1.01]"
                  >
                    <Send className="w-4 h-4" />
                    <span>{formStatus === 'SUBMITTING' ? 'TRANSMITTING...' : 'TRANSMIT SIGNAL'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
