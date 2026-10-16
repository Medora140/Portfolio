import React from 'react';

export default function Hero() {
  return (
    <section className="relative max-w-7xl mx-auto px-5 md:px-12 pt-12 pb-20 md:pt-20 md:pb-24">
      {/* Ambient Glow Orbs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-40 right-10 w-[420px] h-[420px] bg-secondary-container/20 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Hero Left Column: Narrative & Links */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Availability & Field Tag */}
          <div className="reveal-in inline-flex items-center gap-2 self-start bg-surface-container-low px-3 py-1.5 rounded-full shadow-[0_0_20px_rgba(77,142,255,0.12)] border border-primary/20 hover:border-primary/50 transition-colors">
            <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
            <span className="w-2 h-2 rounded-full bg-primary -ml-3"></span>
            <span className="font-mono text-[12px] text-primary uppercase tracking-wider font-semibold">
              AI &amp; ML Undergraduate · Frontend Developer
            </span>
          </div>

          {/* Dynamic Headline */}
          <div className="reveal-in flex flex-col gap-3">
            <h1 className="font-headline text-[38px] md:text-[56px] font-extrabold tracking-tight text-on-surface leading-[1.14]">
              Building intelligent{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-tertiary-container bg-clip-text text-transparent">
                systems &amp; seamless
              </span>{' '}
              interfaces.
            </h1>
            <p className="font-body text-[17px] md:text-[18px] text-on-surface-variant max-w-2xl mt-2 leading-relaxed">
              Synthesizing deep neural architectures with responsive frontend engineering. Specializing in real-time acoustic AI, computer vision inference, and high-performance Web interfaces.
            </p>
          </div>

          {/* Primary Actions */}
          <div className="reveal-in flex flex-wrap items-center gap-4 pt-1">
            <a
              href="#projects"
              className="shimmer-btn inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-mono text-[14px] font-semibold bg-gradient-to-r from-primary-container via-primary-container to-secondary-container text-on-primary-container hover:brightness-110 shadow-[0_0_24px_rgba(77,142,255,0.4)]"
            >
              <span>Explore Projects</span>
              <span className="material-symbols-outlined text-[18px]">terminal</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-mono text-[14px] font-semibold bg-surface-container-high text-on-surface hover:bg-surface-bright hover:text-primary transition-all duration-200 border border-white/[0.04] hover:border-primary/40 shadow-sm"
            >
              <span>View Resume &amp; Connect</span>
              <span className="material-symbols-outlined text-[18px]">north_east</span>
            </a>
          </div>

          {/* Social & Verification Badges */}
          <div className="reveal-in pt-3 flex flex-col gap-2">
            <span className="font-mono text-[11px] font-semibold uppercase text-outline tracking-widest">
              Connect &amp; Verification Badges
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/medora-gomes-1a97a0329/"
                target="_blank"
                rel="noopener noreferrer"
                className="tag-pill group flex items-center gap-2 bg-surface-container-low hover:bg-surface-container-high border border-white/[0.05] px-3 py-1.5 rounded-lg shadow-sm"
              >
                <svg className="w-4 h-4 text-primary fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.8v8.37H6.46v-8.37M7.86 6.57a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z"></path>
                </svg>
                <span className="font-mono text-[12px] text-on-surface group-hover:text-primary transition-colors">
                  LinkedIn
                </span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Medora140"
                target="_blank"
                rel="noopener noreferrer"
                className="tag-pill group flex items-center gap-2 bg-surface-container-low hover:bg-surface-container-high border border-white/[0.05] px-3 py-1.5 rounded-lg shadow-sm"
              >
                <svg className="w-4 h-4 text-on-surface fill-current group-hover:text-primary transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"></path>
                </svg>
                <span className="font-mono text-[12px] text-on-surface group-hover:text-primary transition-colors">
                  GitHub
                </span>
              </a>

              {/* LeetCode */}
              <a
                href="https://leetcode.com/u/MedoraC/"
                target="_blank"
                rel="noopener noreferrer"
                className="tag-pill group flex items-center gap-2 bg-surface-container-low hover:bg-surface-container-high border border-white/[0.05] px-3 py-1.5 rounded-lg shadow-sm"
              >
                <span className="w-4 h-4 rounded bg-tertiary-container/30 flex items-center justify-center font-mono font-bold text-tertiary text-[10px]">
                  LC
                </span>
                <span className="font-mono text-[12px] text-on-surface group-hover:text-primary transition-colors">
                  LeetCode
                </span>
              </a>

              {/* GeeksforGeeks */}
              <a
                href="https://www.geeksforgeeks.org/profile/medorago5em2"
                target="_blank"
                rel="noopener noreferrer"
                className="tag-pill group flex items-center gap-2 bg-surface-container-low hover:bg-surface-container-high border border-white/[0.05] px-3 py-1.5 rounded-lg shadow-sm"
              >
                <span className="w-4 h-4 rounded bg-primary/20 flex items-center justify-center font-mono font-bold text-primary text-[10px]">
                  GFG
                </span>
                <span className="font-mono text-[12px] text-on-surface group-hover:text-primary transition-colors">
                  GeeksforGeeks
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Hero Right Column: Developer Radar & Architecture Visualizer */}
        <div className="reveal-in lg:col-span-5 relative">
          {/* Glassmorphic Terminal Card */}
          <div className="interactive-card relative bg-surface-container-low/90 backdrop-blur-2xl rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/[0.06]">
            {/* Window Bar */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ffb4ab]"></span>
                <span className="w-3 h-3 rounded-full bg-[#d0bcff]"></span>
                <span className="w-3 h-3 rounded-full bg-[#adc6ff]"></span>
              </div>
              <span className="font-mono text-[12px] text-outline">
                medora_runtime_v2.5.py
              </span>
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            </div>

            {/* Profile & Active Specs Overlay */}
            <div className="flex items-center gap-4 bg-surface-container p-4 rounded-xl mb-4 shadow-inner border border-white/[0.04]">
              <img
                alt="Medora Gomes Cybernetic Studio Portrait"
                className="w-16 h-16 rounded-xl object-cover shadow-lg ring-1 ring-primary/30"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8EMcYZ9FpuuWLlc7FVMg7gQ1FZVtLv14DgNkHWyfqvAKhgsAOvDEgzVgP5TsJqU1LwKoAz-cklU5_poq-uFjhqCHa0GKK947go-zbceNBbH5DHOUkwVNgK8DALHIF4g_vQGEoCMTJAEF7KkAkHRKK4X6FHMK7vf9TTb721awVb-cVk3yOjo_guHSvfZO6uRoIGRprW0gjGwLmUxjTNq5WIVzoimLjFxB33rdSR4Q5Lq7czRgXg8zdVnyow9YSebDW-h8"
              />
              <div className="flex flex-col">
                <span className="font-headline text-[18px] text-on-surface font-semibold">
                  Medora Gomes
                </span>
                <span className="font-mono text-[12px] text-primary">
                  Status: Deploying Neural Workflows
                </span>
                <span className="font-body text-[12px] text-on-surface-variant">
                  B.E. AI &amp; ML · CGPA: 9.41
                </span>
              </div>
            </div>

            {/* Code Execution Block */}
            <div className="bg-surface-container-lowest p-4 rounded-xl font-mono text-[12px] text-on-surface-variant flex flex-col gap-2.5 border border-white/[0.03]">
              <div className="flex items-center justify-between">
                <span className="text-secondary">&gt; torch.cuda.is_available()</span>
                <span className="text-primary font-semibold">True [A100 Tensor]</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-secondary">&gt; acoustic_pipeline.eval()</span>
                <span className="text-tertiary">98.4% Acc (WavLM)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-secondary">&gt; frontend_bundle.status</span>
                <span className="text-primary">Hydrated in 118ms</span>
              </div>
            </div>

            {/* Performance Sparkline Visual */}
            <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-mono text-[11px] font-semibold text-outline uppercase tracking-wider">
                  Inference Velocity
                </span>
                <span className="font-headline text-[18px] text-on-surface font-bold">
                  14.2 ms / sample
                </span>
              </div>
              <svg className="w-32 h-10 text-primary" fill="none" viewBox="0 0 120 30">
                <path
                  d="M0 25L15 22L30 26L45 14L60 18L75 8L90 12L105 4L120 7"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                />
                <path
                  d="M0 25L15 22L30 26L45 14L60 18L75 8L90 12L105 4L120 7V30H0Z"
                  fill="currentColor"
                  fillOpacity="0.1"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Key Metrics Ribbon */}
      <div className="reveal-in mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Metric 1 */}
        <div className="interactive-card bg-surface-container-low/70 backdrop-blur-md p-4 rounded-xl flex flex-col gap-1 border border-white/[0.05]">
          <span className="font-mono text-[11px] font-semibold uppercase text-primary tracking-wider">
            Academic Excellence
          </span>
          <span className="font-headline text-[32px] md:text-[36px] text-on-surface font-extrabold tracking-tight">
            9.41 <span className="text-[18px] text-secondary font-semibold">CGPA</span>
          </span>
          <span className="font-body text-[13px] text-on-surface-variant">
            BMSIT&amp;M Dept. Rank Top 1%
          </span>
        </div>

        {/* Metric 2 */}
        <div className="interactive-card bg-surface-container-low/70 backdrop-blur-md p-4 rounded-xl flex flex-col gap-1 border border-white/[0.05]">
          <span className="font-mono text-[11px] font-semibold uppercase text-secondary tracking-wider">
            Hackathon Rank
          </span>
          <span className="font-headline text-[32px] md:text-[36px] text-on-surface font-extrabold tracking-tight">
            Top 10
          </span>
          <span className="font-body text-[13px] text-on-surface-variant">
            Paytm Build for India Finalist
          </span>
        </div>

        {/* Metric 3 */}
        <div className="interactive-card bg-surface-container-low/70 backdrop-blur-md p-4 rounded-xl flex flex-col gap-1 border border-white/[0.05]">
          <span className="font-mono text-[11px] font-semibold uppercase text-tertiary tracking-wider">
            Shipped Prototypes
          </span>
          <span className="font-headline text-[32px] md:text-[36px] text-on-surface font-extrabold tracking-tight">
            4+ <span className="text-[18px] text-tertiary font-semibold">End-to-End</span>
          </span>
          <span className="font-body text-[13px] text-on-surface-variant">
            Deep Learning &amp; Web Systems
          </span>
        </div>

        {/* Metric 4 */}
        <div className="interactive-card bg-surface-container-low/70 backdrop-blur-md p-4 rounded-xl flex flex-col gap-1 border border-white/[0.05]">
          <span className="font-mono text-[11px] font-semibold uppercase text-primary tracking-wider">
            Industry Experience
          </span>
          <span className="font-headline text-[32px] md:text-[36px] text-on-surface font-extrabold tracking-tight">
            Zarthi
          </span>
          <span className="font-body text-[13px] text-on-surface-variant">
            Frontend Developer Intern
          </span>
        </div>
      </div>
    </section>
  );
}
