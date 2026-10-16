import React from 'react';

export default function About() {
  const handleTiltMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleTiltMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  };

  return (
    <section className="relative max-w-7xl mx-auto px-5 md:px-12 py-20 scroll-mt-24" id="about">
      <div className="reveal-init reveal-in flex flex-col gap-2 mb-8">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-secondary"></span>
          <span className="font-mono text-[11px] font-semibold uppercase text-secondary tracking-widest">
            Background &amp; Philosophy
          </span>
        </div>
        <h2 className="font-headline text-[32px] md:text-[36px] text-on-surface font-bold">
          About Me
        </h2>
        <p className="font-body text-[15px] text-on-surface-variant max-w-2xl">
          A look into my technical focus, engineering principles, and approach to modern machine learning.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Narrative Card */}
        <div
          onMouseMove={handleTiltMouseMove}
          onMouseLeave={handleTiltMouseLeave}
          className="reveal-init reveal-in delay-100 lg:col-span-8 relative rounded-3xl bg-surface-container-low/90 backdrop-blur-xl p-6 md:p-8 border border-white/[0.07] shadow-xl overflow-hidden tilt-card interactive-card flex flex-col justify-between"
        >
          {/* Subtle radial glow */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-primary/15 rounded-full blur-[90px] pointer-events-none"></div>

          <div className="relative z-10 flex flex-col gap-4">
            {/* Badge Tags */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary font-mono text-[12px] font-semibold">
                <span className="material-symbols-outlined text-[15px]">psychology</span>
                <span>Full-Stack AI Engineering</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/30 border border-secondary/25 text-secondary font-mono text-[12px] font-semibold">
                <span className="material-symbols-outlined text-[15px]">code</span>
                <span>Human-Centered Interfaces</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-mono text-[12px] border border-white/[0.05]">
                <span>Bengaluru, India</span>
              </span>
            </div>

            {/* Verbatim About Me Statement */}
            <p className="font-body text-slate-200 leading-relaxed text-justify md:text-left text-[17px] md:text-[18px] pt-2 font-normal">
              I am an Artificial Intelligence and Machine Learning undergraduate at BMS Institute of Technology and Management. I specialize in building practical applications that bridge complex machine learning models with intuitive software design. Currently working as a Frontend Developer Intern, I combine my experience in deep learning, LLMs, and computer vision with modern web technologies like React and TypeScript to create end-to-end solutions. Whether it's developing AI voice clone detection systems or intelligent video QA tools, my goal is to make advanced AI accessible and impactful.
            </p>
          </div>

          {/* Accompanying Highlights Footer */}
          <div className="relative z-10 mt-8 pt-6 border-t border-white/[0.06] grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <span className="font-mono text-[11px] font-semibold uppercase text-outline">Core Focus</span>
              <span className="font-headline text-[16px] text-primary font-semibold mt-1">Acoustic &amp; Vision AI</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[11px] font-semibold uppercase text-outline">Interface Stack</span>
              <span className="font-headline text-[16px] text-secondary font-semibold mt-1">React, TS &amp; Tailwind</span>
            </div>
            <div className="flex flex-col col-span-2 sm:col-span-1">
              <span className="font-mono text-[11px] font-semibold uppercase text-outline">Research Mindset</span>
              <span className="font-headline text-[16px] text-tertiary font-semibold mt-1">Empirical &amp; Scalable</span>
            </div>
          </div>
        </div>

        {/* Right Side Visual / Engineering Architecture Box */}
        <div className="reveal-init reveal-in delay-200 lg:col-span-4 flex flex-col gap-4">
          <div
            onMouseMove={handleTiltMouseMove}
            onMouseLeave={handleTiltMouseLeave}
            className="tilt-card interactive-card bg-surface-container-low/90 backdrop-blur-xl p-6 rounded-3xl border border-white/[0.06] shadow-lg flex-1 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
              <span className="font-mono text-[12px] text-primary uppercase tracking-wider font-semibold">
                System Architecture
              </span>
              <span className="material-symbols-outlined text-primary text-[20px]">architecture</span>
            </div>

            <div className="py-4 flex flex-col gap-3">
              <div className="p-3 rounded-xl bg-surface-container border border-white/[0.04] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-mono text-xs font-bold">01</span>
                  <span className="font-mono text-sm text-on-surface">Data &amp; Spectrogram Pipeline</span>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant text-[16px]">graphic_eq</span>
              </div>

              <div className="p-3 rounded-xl bg-surface-container border border-white/[0.04] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-lg bg-secondary/15 text-secondary flex items-center justify-center font-mono text-xs font-bold">02</span>
                  <span className="font-mono text-sm text-on-surface">Deep Model Fine-Tuning</span>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant text-[16px]">tune</span>
              </div>

              <div className="p-3 rounded-xl bg-surface-container border border-white/[0.04] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-lg bg-tertiary-container/30 text-tertiary flex items-center justify-center font-mono text-xs font-bold">03</span>
                  <span className="font-mono text-sm text-on-surface">Interactive UI Delivery</span>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant text-[16px]">devices</span>
              </div>
            </div>

            <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-on-surface-variant font-mono text-[12px]">
              <span className="text-primary">&gt; End-to-end integration ready</span>
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            </div>
          </div>

          <div
            onMouseMove={handleTiltMouseMove}
            onMouseLeave={handleTiltMouseLeave}
            className="tilt-card interactive-card bg-surface-container-high/40 p-4 rounded-2xl border border-white/[0.05] flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[22px]">rocket_launch</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-xs text-on-surface font-semibold">Available for Internships &amp; Roles</span>
              <span className="font-body text-[12px] text-on-surface-variant">Looking forward to high-impact software &amp; AI teams</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
