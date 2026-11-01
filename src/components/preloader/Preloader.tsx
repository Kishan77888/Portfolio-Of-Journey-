import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
  forceShow?: boolean;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete, forceShow = false }) => {
  // Stages matching the 3 Superconscious reference screenshots:
  // 1. 'ROSETTE_SOLO': Deep cosmic void with solo rotating sacred geometry rosette (Screenshot 2)
  // 2. 'NAME_REVEAL': Typography expands outward with diagonal purple slice underlays (Screenshot 3)
  // 3. 'FULL_TITLE': Locks into crisp white display typography with glowing violet satellite dot above the 'i' (Screenshot 1)
  // 4. 'BLOSSOM_RINGS': Rosette blossoms into 5 orbital rings and transitions into 3D hero
  const [stage, setStage] = useState<'ROSETTE_SOLO' | 'NAME_REVEAL' | 'FULL_TITLE' | 'BLOSSOM_RINGS' | 'DONE'>('ROSETTE_SOLO');
  const [textMode, setTextMode] = useState<'KUMAR' | 'SUPERCONSCIOUS'>('KUMAR');

  useEffect(() => {
    // Reset to ROSETTE_SOLO on trigger
    setStage('ROSETTE_SOLO');

    // 0.0s - 1.8s: Solo rotating rosette in starfield (Screenshot 2)
    // 1.8s - 3.5s: Typography slides out with purple angled slices (Screenshot 3)
    const timer1 = setTimeout(() => {
      setStage('NAME_REVEAL');
    }, 1800);

    // 3.5s - 5.2s: Full crisp white title with violet glowing satellite dot above 'i' (Screenshot 1)
    const timer2 = setTimeout(() => {
      setStage('FULL_TITLE');
    }, 3500);

    // 5.2s - 6.2s: Rosette blossoms into 5 orbital rings
    const timer3 = setTimeout(() => {
      setStage('BLOSSOM_RINGS');
    }, 5200);

    // 6.2s: Complete preloader and reveal interactive hero
    const timer4 = setTimeout(() => {
      setStage('DONE');
      onComplete();
    }, 6200);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        skip();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [forceShow, onComplete]);

  const skip = () => {
    setStage('DONE');
    onComplete();
  };

  if (stage === 'DONE') return null;

  // Mathematical 7 Overlapping Circles for Sacred Flower / Seed of Life
  const radius = 42;
  const surroundingCircles = [0, 1, 2, 3, 4, 5].map((i) => {
    const angle = (i * Math.PI) / 3;
    return {
      cx: 100 + radius * Math.cos(angle),
      cy: 100 + radius * Math.sin(angle),
    };
  });

  // Stardust stars scattered across cosmic background (Screenshot 1 & 2)
  const stars = [
    { top: '8%', left: '12%', size: '1.5px', opacity: 0.6, delay: '0.2s' },
    { top: '14%', left: '78%', size: '2px', opacity: 0.8, delay: '0.8s' },
    { top: '22%', left: '35%', size: '1px', opacity: 0.4, delay: '1.2s' },
    { top: '28%', left: '88%', size: '2.5px', opacity: 0.9, delay: '0.5s' },
    { top: '35%', left: '18%', size: '1.5px', opacity: 0.5, delay: '1.5s' },
    { top: '42%', left: '6%', size: '2px', opacity: 0.7, delay: '0.3s' },
    { top: '48%', left: '92%', size: '1.5px', opacity: 0.6, delay: '1.1s' },
    { top: '55%', left: '28%', size: '2px', opacity: 0.8, delay: '0.7s' },
    { top: '63%', left: '72%', size: '1px', opacity: 0.4, delay: '1.8s' },
    { top: '71%', left: '15%', size: '2px', opacity: 0.7, delay: '0.9s' },
    { top: '78%', left: '85%', size: '1.5px', opacity: 0.5, delay: '1.4s' },
    { top: '84%', left: '42%', size: '2.5px', opacity: 0.9, delay: '0.1s' },
    { top: '89%', left: '62%', size: '1.5px', opacity: 0.6, delay: '1.6s' },
    { top: '92%', left: '22%', size: '1px', opacity: 0.3, delay: '0.4s' },
    { top: '16%', left: '52%', size: '1.5px', opacity: 0.6, delay: '2.0s' },
    { top: '76%', left: '50%', size: '2px', opacity: 0.7, delay: '1.0s' },
    { top: '38%', left: '82%', size: '1px', opacity: 0.4, delay: '0.6s' },
    { top: '65%', left: '9%', size: '2px', opacity: 0.75, delay: '1.3s' },
    { top: '50%', left: '4%', size: '1.5px', opacity: 0.5, delay: '1.7s' },
    { top: '5%', left: '90%', size: '2px', opacity: 0.85, delay: '0.2s' },
  ];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050508] overflow-hidden select-none"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }}
      >
        {/* Deep Cosmic Starfield Gradient */}
        <div className="absolute inset-0 bg-radial from-violet-950/25 via-transparent to-transparent pointer-events-none" />

        {/* Scattered Starlight Particles (Screenshot 1, 2, 3) */}
        <div className="absolute inset-0 pointer-events-none">
          {stars.map((star, idx) => (
            <div
              key={idx}
              className="absolute rounded-full bg-white animate-pulse"
              style={{
                top: star.top,
                left: star.left,
                width: star.size,
                height: star.size,
                opacity: star.opacity,
                animationDuration: '2.5s',
                animationDelay: star.delay,
              }}
            />
          ))}
        </div>

        {/* Top Header Glass Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 flex items-center flex-wrap justify-center gap-2 sm:gap-3 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl text-[10px] sm:text-xs font-mono text-slate-300 z-30 shadow-[0_4px_24px_rgba(0,0,0,0.5)] max-w-[92vw]"
        >
          <div className="w-3.5 h-3.5 rounded-full border border-purple-400 flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          </div>
          <span className="text-white font-semibold">SOC Intel</span>
          <span className="text-slate-600">•</span>
          <span className="text-purple-300">350 Hz Active</span>

          {/* Mode toggle button (Kumar Kishan <-> Superconscious reference) */}
          <button
            onClick={() => setTextMode((prev) => (prev === 'KUMAR' ? 'SUPERCONSCIOUS' : 'KUMAR'))}
            title="Toggle between Kumar Kishan and Superconscious reference mode"
            className="hidden sm:inline ml-2 px-2.5 py-0.5 rounded-full text-[10px] font-mono border border-purple-500/40 bg-purple-500/10 hover:bg-purple-500/25 text-purple-300 transition-colors cursor-pointer"
          >
            {textMode === 'KUMAR' ? 'Mode: kumar' : 'Mode: superconscious'}
          </button>
        </motion.div>

        {/* Top-Right Action Controls */}
        <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-30 flex items-center gap-2">
          <button
            onClick={skip}
            className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-400 hover:text-white border border-white/10 transition-all hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md"
          >
            SKIP [ESC]
          </button>
        </div>

        {/* MAIN STAGE CONTAINER */}
        <div className="relative z-20 flex items-center justify-center w-full px-4">
          {/* ========================================================================= */}
          {/* 1. SOLO ROSETTE STAGE (Screenshot 2: pure centered Flower of Life)       */}
          {/* ========================================================================= */}
          {stage === 'ROSETTE_SOLO' && (
            <motion.div
              key="stage-solo-rosette"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 flex items-center justify-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                className="w-full h-full"
              >
                <svg
                  className="w-full h-full drop-shadow-[0_0_24px_rgba(255,255,255,0.45)]"
                  viewBox="0 0 200 200"
                >
                  {/* Central Circle */}
                  <motion.circle
                    cx="100"
                    cy="100"
                    r={radius}
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="1.6"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.9, ease: 'easeInOut' }}
                  />
                  {/* 6 Surrounding Overlapping Circles */}
                  {surroundingCircles.map((circle, idx) => (
                    <motion.circle
                      key={idx}
                      cx={circle.cx}
                      cy={circle.cy}
                      r={radius}
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="1.6"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.9, delay: idx * 0.08, ease: 'easeInOut' }}
                    />
                  ))}
                </svg>
              </motion.div>
            </motion.div>
          )}

          {/* ========================================================================= */}
          {/* 2. NAME REVEAL WITH PURPLE ANGLED SLICES (Screenshot 3)                   */}
          {/* ========================================================================= */}
          {stage === 'NAME_REVEAL' && (
            <motion.div
              key="stage-name-reveal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center justify-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 select-none px-2"
            >
              {/* Left word: 'kumar' or 'superc' sliding out from behind the rosette */}
              <motion.div
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Purple Underlay Layer (Screenshot 3 diagonal cut drop) */}
                <span
                  aria-hidden="true"
                  className="absolute top-1 left-1 font-['Wix_Madefor_Display'] font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight lowercase select-none text-[#7322F2] blur-[1px] opacity-80"
                >
                  {textMode === 'KUMAR' ? 'kumar' : 'superc'}
                </span>

                {/* Angled Purple Slice Typography */}
                <span
                  className="relative font-['Wix_Madefor_Display'] font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight lowercase select-none"
                  style={{
                    background: 'linear-gradient(135deg, #FFFFFF 63%, #9780FF 63%, #7322F2 92%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: 'drop-shadow(0 0 25px rgba(151,128,255,0.45))',
                  }}
                >
                  {textMode === 'KUMAR' ? 'kumar' : 'superc'}
                </span>
              </motion.div>

              {/* Central Spinning Rosette acting as Emblem / Letter 'o' */}
              <motion.div
                initial={{ scale: 0.75 }}
                animate={{ scale: [0.75, 1.15, 1], rotate: 360 }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                }}
                className="w-10 h-10 sm:w-14 sm:h-14 md:w-24 md:h-24 lg:w-32 lg:h-32 shrink-0 flex items-center justify-center"
              >
                <svg
                  className="w-full h-full drop-shadow-[0_0_28px_rgba(168,85,247,0.85)]"
                  viewBox="0 0 200 200"
                >
                  <circle cx="100" cy="100" r={radius} fill="none" stroke="#FFFFFF" strokeWidth="1.8" />
                  {surroundingCircles.map((circle, idx) => (
                    <circle
                      key={idx}
                      cx={circle.cx}
                      cy={circle.cy}
                      r={radius}
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="1.8"
                    />
                  ))}
                </svg>
              </motion.div>

              {/* Right word: 'kishan' or 'nscious' sliding out from behind the rosette */}
              <motion.div
                initial={{ x: -80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Purple Underlay Layer */}
                <span
                  aria-hidden="true"
                  className="absolute top-1 left-1 font-['Wix_Madefor_Display'] font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight lowercase select-none text-[#7322F2] blur-[1px] opacity-80"
                >
                  {textMode === 'KUMAR' ? 'kishan' : 'nscious'}
                </span>

                {/* Angled Purple Slice Typography */}
                <span
                  className="relative font-['Wix_Madefor_Display'] font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight lowercase select-none"
                  style={{
                    background: 'linear-gradient(135deg, #FFFFFF 63%, #9780FF 63%, #7322F2 92%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: 'drop-shadow(0 0 25px rgba(151,128,255,0.45))',
                  }}
                >
                  {textMode === 'KUMAR' ? 'kishan' : 'nscious'}
                </span>
              </motion.div>
            </motion.div>
          )}

          {/* ========================================================================= */}
          {/* 3. FULL TITLE WITH SATELLITE VIOLET DOT (Screenshot 1)                    */}
          {/* ========================================================================= */}
          {stage === 'FULL_TITLE' && (
            <motion.div
              key="stage-full-title"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.08, opacity: 0, transition: { duration: 0.5 } }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center justify-center select-none"
            >
              <div className="flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2.5 lg:gap-3">
                {/* Left Word in Pure Crisp White */}
                <span className="font-['Wix_Madefor_Display'] font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight text-white lowercase drop-shadow-[0_0_35px_rgba(255,255,255,0.35)]">
                  {textMode === 'KUMAR' ? 'kumar' : 'superc'}
                </span>

                {/* Central Rosette acting as emblem or 'o' */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="w-10 h-10 sm:w-14 sm:h-14 md:w-24 md:h-24 lg:w-32 lg:h-32 shrink-0 flex items-center justify-center"
                >
                  <svg
                    className="w-full h-full drop-shadow-[0_0_30px_rgba(255,255,255,0.6)]"
                    viewBox="0 0 200 200"
                  >
                    <circle cx="100" cy="100" r={radius} fill="none" stroke="#FFFFFF" strokeWidth="1.8" />
                    {surroundingCircles.map((circle, idx) => (
                      <circle
                        key={idx}
                        cx={circle.cx}
                        cy={circle.cy}
                        r={radius}
                        fill="none"
                        stroke="#FFFFFF"
                        strokeWidth="1.8"
                      />
                    ))}
                  </svg>
                </motion.div>

                {/* Right Word with Glowing Purple Satellite Dot on the 'i' (Screenshot 1) */}
                {textMode === 'KUMAR' ? (
                  <span className="font-['Wix_Madefor_Display'] font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight text-white lowercase drop-shadow-[0_0_35px_rgba(255,255,255,0.35)]">
                    k
                    {/* Dotless 'ı' with custom luminous violet satellite dot */}
                    <span className="relative inline-block">
                      ı
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.4, 1] }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="absolute -top-2 sm:-top-3 md:-top-4 left-1/2 -translate-x-1/2 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 rounded-full bg-[#9780FF] shadow-[0_0_15px_#9780FF,0_0_30px_#7322F2] animate-pulse"
                      />
                    </span>
                    shan
                  </span>
                ) : (
                  <span className="font-['Wix_Madefor_Display'] font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight text-white lowercase drop-shadow-[0_0_35px_rgba(255,255,255,0.35)]">
                    nsc
                    {/* Dotless 'ı' with custom luminous violet satellite dot (Screenshot 1) */}
                    <span className="relative inline-block">
                      ı
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.4, 1] }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="absolute -top-2 sm:-top-3 md:-top-4 left-1/2 -translate-x-1/2 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 rounded-full bg-[#9780FF] shadow-[0_0_15px_#9780FF,0_0_30px_#7322F2] animate-pulse"
                      />
                    </span>
                    ous
                  </span>
                )}
              </div>

              {/* Sub-label */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="mt-3 sm:mt-4 md:mt-6 text-[10px] sm:text-xs md:text-sm font-mono tracking-[0.15em] sm:tracking-[0.25em] text-purple-300 uppercase text-center"
              >
                SOC Analyst (L1) • Threat Detection Engineer
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* ========================================================================= */}
        {/* 4. BLOSSOMING INTO 5 ORBITAL RINGS                                       */}
        {/* ========================================================================= */}
        {stage === 'BLOSSOM_RINGS' && (
          <motion.div
            key="stage-blossom-rings"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
            className="absolute inset-0 pointer-events-none"
          >
            {/* Top-Left Orbital Ring */}
            <motion.div
              initial={{ x: '50vw', y: '50vh', scale: 0.2, opacity: 0 }}
              animate={{ x: '22vw', y: '32vh', scale: 1, opacity: 0.9 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -translate-x-1/2 -translate-y-1/2 w-36 h-36 sm:w-48 sm:h-48 rounded-full border border-purple-400/60 shadow-[0_0_40px_rgba(168,85,247,0.4)] flex items-center justify-center"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-ping" />
            </motion.div>

            {/* Top-Right Orbital Ring */}
            <motion.div
              initial={{ x: '50vw', y: '50vh', scale: 0.2, opacity: 0 }}
              animate={{ x: '78vw', y: '32vh', scale: 1, opacity: 0.9 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -translate-x-1/2 -translate-y-1/2 w-36 h-36 sm:w-48 sm:h-48 rounded-full border border-purple-400/60 shadow-[0_0_40px_rgba(168,85,247,0.4)] flex items-center justify-center"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            </motion.div>

            {/* Center Orbital Ring */}
            <motion.div
              initial={{ scale: 0.8, opacity: 1 }}
              animate={{ scale: 1.6, opacity: 0.95 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 rounded-full border-2 border-cyan-400/70 shadow-[0_0_70px_rgba(0,240,255,0.5)] flex items-center justify-center"
            >
              <div className="w-4 h-4 rounded-full bg-white shadow-[0_0_30px_#FFFFFF] animate-pulse" />
            </motion.div>

            {/* Bottom-Left Orbital Ring */}
            <motion.div
              initial={{ x: '50vw', y: '50vh', scale: 0.2, opacity: 0 }}
              animate={{ x: '22vw', y: '80vh', scale: 1, opacity: 0.9 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -translate-x-1/2 -translate-y-1/2 w-36 h-36 sm:w-48 sm:h-48 rounded-full border border-purple-400/60 shadow-[0_0_40px_rgba(168,85,247,0.4)] flex items-center justify-center"
            />

            {/* Bottom-Right Orbital Ring */}
            <motion.div
              initial={{ x: '50vw', y: '50vh', scale: 0.2, opacity: 0 }}
              animate={{ x: '78vw', y: '80vh', scale: 1, opacity: 0.9 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -translate-x-1/2 -translate-y-1/2 w-36 h-36 sm:w-48 sm:h-48 rounded-full border border-purple-400/60 shadow-[0_0_40px_rgba(168,85,247,0.4)] flex items-center justify-center"
            />
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
