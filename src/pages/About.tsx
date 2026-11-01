import React from 'react';
import { PageTransition } from '../components/common/PageTransition';
import { PERSONAL_INFO, CERTIFICATIONS, EDUCATION } from '../data/content';
import { Award, GraduationCap, MapPin, Terminal, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { OperationalSkillsSection } from '../components/sections/OperationalSkillsSection';

export const About: React.FC = () => {
  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-16 pb-16 sm:pb-20">
        {/* Header Profile Header with Genuine Operator Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center border-b border-white/10 pb-10">
          <div className="lg:col-span-2 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 text-cyan-400 text-xs font-mono border border-cyan-500/30">
              <Shield className="w-3.5 h-3.5" />
              OPERATOR DOSSIER // ANALYST IDENTITY
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-display font-extrabold text-white">
              Kumar Kishan
            </h1>
            <p className="text-slate-300 font-sans text-base sm:text-lg max-w-2xl leading-relaxed">
              Cybersecurity fresher & Information Security graduate with hands-on, lab-validated experience in SIEM monitoring, behavioral threat detection, and incident response mapped to MITRE ATT&CK.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-2">
              <span className="flex items-center gap-1.5 text-cyan-300">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {PERSONAL_INFO.location}
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-violet-300">
                {PERSONAL_INFO.relocationTarget}
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-emerald-400">
                {PERSONAL_INFO.availability}
              </span>
            </div>
          </div>

          {/* Genuine Operator Photo Holographic Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group p-1.5 rounded-3xl bg-gradient-to-tr from-cyan-500/40 via-purple-600/40 to-violet-500/30 border border-white/20 shadow-2xl shadow-purple-950/50 backdrop-blur-xl">
              <div className="w-44 h-52 sm:w-56 sm:h-64 md:w-60 md:h-72 rounded-[22px] overflow-hidden relative bg-[#0D091B]">
                <img
                  src={PERSONAL_INFO.photo}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-white font-bold">{PERSONAL_INFO.callsign}</span>
                  <span className="flex items-center gap-1 text-emerald-400 font-semibold px-2 py-0.5 rounded bg-black/60 border border-emerald-500/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    ONLINE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative & Target Roles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4 glass-panel p-6 rounded-2xl border border-white/10 text-sm leading-relaxed text-slate-300 font-sans">
            <h2 className="text-lg font-display font-bold text-white flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400" />
              Background & Operational Focus
            </h2>
            <p>
              I recently graduated with a B.E. in Computer Science & Engineering (Information Security) from Chandigarh University with a 7.39 CGPA. Throughout my academic tenure and independent research, I dedicated myself to understanding how modern threat actors infiltrate systems and how detection engineers can intercept them at the earliest stages of the Cyber Kill Chain.
            </p>
            <p>
              Rather than theoretical study alone, I invested hundreds of hours building hands-on virtual security labs—deploying Splunk Enterprise on Kali Linux alongside Windows VMs instrumented with Microsoft Sysmon and Universal Forwarders. I completed over 20 TryHackMe rooms across the SOC Level 1 and DFIR learning paths, and developed full-stack security tools like SentinelAI and AegisSec.
            </p>
            <p>
              I am actively seeking an entry-level **SOC Analyst (L1)**, **Junior Pentester**, or **Cybersecurity Analyst** position where I can bring vigilance, rigorous analytical thinking, and immediate lab-tested familiarity with SIEM, Wireshark, and MITRE ATT&CK to a production security operations center.
            </p>
          </div>

          <div className="space-y-4 glass-panel p-6 rounded-2xl border border-white/10">
            <h2 className="text-sm font-mono uppercase text-cyan-400 tracking-wider font-bold">
              Targeted Roles
            </h2>
            <div className="space-y-2 font-mono text-xs">
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-slate-200">
                <div className="font-bold text-cyan-300">SOC Analyst (Tier 1)</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Alert triage, ticket escalation, SIEM monitoring, PCAP analysis</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-slate-200">
                <div className="font-bold text-violet-300">Threat Detection Engineer</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Custom SPL / Sigma rules, behavioral analytics, baseline modeling</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-slate-200">
                <div className="font-bold text-emerald-300">Junior Pentester / VAPT</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Network recon, Nmap, vulnerability scanning, remediation planning</div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Matrix */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                <Award className="w-4 h-4" />
                VERIFIED CREDENTIALS
              </div>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-white mt-1">
                Certifications & Badges
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="glass-panel p-5 rounded-2xl border border-white/10 space-y-3 hover:border-cyan-500/40 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base font-display font-bold text-white">
                      {cert.title}
                    </h3>
                    <div className="text-xs font-mono text-cyan-400 mt-0.5">
                      {cert.issuer} • {cert.issueDate}
                    </div>
                  </div>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${cert.badgeColor}`}>
                    VERIFIED
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  {cert.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cert.skills.map((s, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div className="space-y-6">
          <div className="border-b border-white/10 pb-4">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              ACADEMIC FOUNDATION
            </div>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-white mt-1">
              Education & Security Specialization
            </h2>
          </div>

          <div className="space-y-4">
            {EDUCATION.map((edu, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-display font-bold text-white">
                      {edu.degree}
                    </h3>
                    <div className="text-xs font-mono text-cyan-400">
                      {edu.institution}
                    </div>
                  </div>
                  <div className="text-xs font-mono text-slate-400 text-left sm:text-right">
                    <div>{edu.period}</div>
                    <div className="text-emerald-400 font-semibold">{edu.score}</div>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="text-xs font-mono text-slate-500 mb-1.5 uppercase">Relevant Coursework & Studies:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Operational Skills & Role Fit */}
        <OperationalSkillsSection />

        {/* CTA Banner */}
        <div className="glass-panel rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-cyan-500/30">
          <div>
            <h3 className="text-lg font-display font-bold text-white">Need verified references or official PDF resume?</h3>
            <p className="text-xs text-slate-400 font-sans mt-0.5">Explore the embedded PDF viewer or trigger an immediate download.</p>
          </div>
          <Link
            to="/resume"
            className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-mono font-bold text-xs shrink-0 flex items-center gap-1.5 transition-all"
          >
            <span>Go to Resume Viewer</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </PageTransition>
  );
};
