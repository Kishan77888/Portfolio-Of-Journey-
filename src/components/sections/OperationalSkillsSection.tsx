import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { operationalSkills } from '../../data/content';
import { 
  ClipboardList, 
  AlertTriangle, 
  Workflow, 
  FileText, 
  Users, 
  Wrench, 
  Compass, 
  MapPin, 
  CheckCircle2,
  Layers,
  Sparkles
} from 'lucide-react';

interface OperationalSkillsSectionProps {
  id?: string;
  className?: string;
}

// Icon mapper for operational skills
const getSkillIcon = (id: string) => {
  switch (id) {
    case 'ticketing-doc':
      return <ClipboardList className="w-4 h-4 text-cyan-400 shrink-0" />;
    case 'escalation-sla':
      return <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />;
    case 'shift-workflows':
      return <Workflow className="w-4 h-4 text-purple-400 shrink-0" />;
    case 'written-comm':
      return <FileText className="w-4 h-4 text-indigo-400 shrink-0" />;
    case 'stakeholder-comm':
      return <Users className="w-4 h-4 text-emerald-400 shrink-0" />;
    case 'it-troubleshooting':
      return <Wrench className="w-4 h-4 text-sky-400 shrink-0" />;
    default:
      return <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />;
  }
};

export const OperationalSkillsSection: React.FC<OperationalSkillsSectionProps> = ({ 
  id = 'operational-skills', 
  className = '' 
}) => {
  const shouldReduceMotion = useReducedMotion();

  // Scroll reveal animation matching the portfolio's standard motion language
  const containerVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 24 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: shouldReduceMotion ? 0 : 0.6, 
        ease: [0.16, 1, 0.3, 1] as const,
        staggerChildren: shouldReduceMotion ? 0 : 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 16 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  // Determine if optional ticketing tool placeholder is filled in and valid
  const hasCustomTicketingTool = Boolean(
    operationalSkills.toolsBlock.ticketingTool &&
    operationalSkills.toolsBlock.ticketingTool.trim().length > 0 &&
    !operationalSkills.toolsBlock.ticketingTool.includes('[ADD')
  );

  return (
    <section 
      id={id} 
      aria-label={operationalSkills.title}
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 ${className}`}
    >
      {/* Section Header */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="text-center max-w-2xl mx-auto space-y-2.5 sm:space-y-3"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 text-purple-300 text-xs font-mono border border-purple-500/30">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>{operationalSkills.badge}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight">
          {operationalSkills.title}
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm font-sans leading-relaxed">
          {operationalSkills.subtitle}
        </p>
      </motion.div>

      {/* Main Glass Panel wrapping the 3 cohesive blocks */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="space-y-8"
      >
        {/* BLOCK 1: Operational Skills (grid of glass chips/cards) */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 px-1">
            <Layers className="w-4 h-4 text-purple-400" />
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-purple-300">
              {operationalSkills.operationalSkillsBlock.title}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {operationalSkills.operationalSkillsBlock.skills.map((skill) => (
              <motion.div
                key={skill.id}
                variants={itemVariants}
                tabIndex={0}
                className="glass-panel p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border border-white/10 hover:border-purple-500/40 hover:bg-white/[0.04] transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 flex flex-col justify-between space-y-3"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-white/[0.04] border border-white/10 group-hover:scale-105 transition-transform">
                    {getSkillIcon(skill.id)}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-display font-bold text-white group-hover:text-purple-300 transition-colors">
                      {skill.title}
                    </h4>
                    {skill.detail && (
                      <p className="text-xs text-slate-400 font-sans leading-relaxed">
                        {skill.detail}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2-Column Split for Blocks 2 & 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* BLOCK 2: Environments I'm Targeting (horizontal row of tags + relocation notice) */}
          <motion.div 
            variants={itemVariants}
            className="glass-panel p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between space-y-4 sm:space-y-5"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-cyan-400" />
                <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-cyan-300">
                  {operationalSkills.environmentsBlock.title}
                </h3>
              </div>

              {/* Horizontal Row of Target Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {operationalSkills.environmentsBlock.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium bg-cyan-950/40 text-cyan-200 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-950/60 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Relocation Notice Line */}
            <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>{operationalSkills.environmentsBlock.relocationNotice}</span>
            </div>
          </motion.div>

          {/* BLOCK 3: Tools I've Worked With (compact list, existing chip style) */}
          <motion.div 
            variants={itemVariants}
            className="glass-panel p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/10 hover:border-violet-500/30 transition-all flex flex-col justify-between space-y-4 sm:space-y-5"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-violet-400" />
                <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-violet-300">
                  {operationalSkills.toolsBlock.title}
                </h3>
              </div>

              {/* Compact Tool Chips List */}
              <div className="flex flex-wrap gap-2 pt-1">
                {operationalSkills.toolsBlock.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl text-xs font-mono bg-white/[0.04] text-slate-200 border border-white/10 hover:border-purple-500/40 hover:bg-white/[0.08] transition-colors"
                  >
                    {tool}
                  </span>
                ))}

                {/* Conditional Ticketing Tool chip (shown only if filled in; otherwise hidden) */}
                {hasCustomTicketingTool && (
                  <span className="px-3 py-1.5 rounded-xl text-xs font-mono bg-purple-950/50 text-purple-200 border border-purple-500/40 shadow-sm shadow-purple-900/30">
                    {operationalSkills.toolsBlock.ticketingTool}
                  </span>
                )}
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 text-[11px] font-mono text-slate-400">
              Lab-validated in live triage scenarios, SIEM pipelines & packet captures
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
