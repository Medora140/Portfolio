import React from 'react';

export default function Achievements() {
  const handleTiltMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;

    card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleTiltMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  };

  return (
    <section className="relative max-w-[1536px] w-full mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-20 lg:py-24 scroll-mt-24" id="achievements">
      {/* Highlight Banner with Tilt & Glow */}
      <div 
        onMouseMove={handleTiltMouseMove}
        onMouseLeave={handleTiltMouseLeave}
        className="reveal-init reveal-in tilt-card interactive-card relative rounded-3xl overflow-hidden bg-gradient-to-br from-surface-container via-surface-container-low to-surface-container-lowest p-7 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-white/[0.08]"
      >
        {/* Ambient Radial Lights */}
        <div className="absolute -top-24 -right-24 w-[450px] h-[450px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-[450px] h-[450px] bg-secondary-container/30 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 xl:gap-14">
          {/* Left Trophy & Narrative */}
          <div className="flex flex-col gap-5 max-w-4xl">
            <div className="inline-flex items-center gap-2 self-start bg-secondary-container/30 border border-secondary/30 px-3.5 py-1.5 rounded-full text-secondary font-mono text-[12px] sm:text-[13px] font-semibold">
              <span className="material-symbols-outlined text-[18px]">emoji_events</span>
              <span>National Hackathon Distinction</span>
            </div>

            <h2 className="font-headline text-[28px] sm:text-[38px] xl:text-[42px] text-on-surface font-extrabold tracking-tight leading-tight">
              Top 10 Finalist — Paytm Build for India Hackathon
            </h2>

            <p className="font-body text-[16px] sm:text-[18px] xl:text-[19px] text-on-surface-variant leading-relaxed">
              Selected among top 10 finalists nationwide out of thousands of participating university teams. Engineered an innovative AI-driven financial assistance prototype designed to prevent transactional fraud through contextual audio biometric verification and real-time inference.
            </p>

            {/* Accolade Micro Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              <div className="tag-pill bg-surface-container-high/60 p-3.5 sm:p-4 rounded-xl flex items-center gap-3.5 border border-white/[0.04]">
                <span className="material-symbols-outlined text-primary text-[26px]">verified</span>
                <div className="flex flex-col">
                  <span className="font-headline text-[16px] sm:text-[18px] text-on-surface font-bold">Top 1%</span>
                </div>
              </div>

              <div className="tag-pill bg-surface-container-high/60 p-3.5 sm:p-4 rounded-xl flex items-center gap-3.5 border border-white/[0.04]">
                <span className="material-symbols-outlined text-secondary text-[26px]">military_tech</span>
                <div className="flex flex-col">
                  <span className="font-headline text-[16px] sm:text-[18px] text-on-surface font-bold">9.41 CGPA</span>
                  <span className="font-body text-[12px] sm:text-[13px] text-on-surface-variant">Academic Excellence</span>
                </div>
              </div>

              <div className="tag-pill bg-surface-container-high/60 p-3.5 sm:p-4 rounded-xl flex items-center gap-3.5 border border-white/[0.04]">
                <span className="material-symbols-outlined text-tertiary text-[26px]">hub</span>
                <div className="flex flex-col">
                  <span className="font-headline text-[16px] sm:text-[18px] text-on-surface font-bold">Open Source</span>
                  <span className="font-body text-[12px] sm:text-[13px] text-on-surface-variant">Community Contributor</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Showcase Trophy Graphic */}
          <div className="shrink-0 flex flex-col items-center justify-center p-8 sm:p-10 bg-surface-container-lowest/80 rounded-2xl shadow-inner border border-white/[0.05] text-center w-full lg:w-auto">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center rounded-full bg-gradient-to-tr from-primary to-secondary-container shadow-[0_0_35px_rgba(77,142,255,0.45)] mb-4">
              <span className="material-symbols-outlined text-on-primary-container text-[56px] sm:text-[64px]">
                workspace_premium
              </span>
            </div>
            <span className="font-headline text-[20px] sm:text-[22px] text-on-surface font-bold">
              Paytm Finalist
            </span>
            <span className="font-mono text-[12px] sm:text-[13px] text-primary font-semibold mt-1">
              Nationwide Merit
            </span>
            <span className="font-mono text-[11px] sm:text-[12px] text-outline mt-0.5 uppercase tracking-wider">
              2024 Showcase
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
