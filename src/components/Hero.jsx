import React, { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const canvasRef = useRef(null);
  const heroSectionRef = useRef(null);
  const [decodedName, setDecodedName] = useState('Medora Gomes');

  // Interactive Alphanumeric Cyberpunk Text Scrambler
  const triggerScramble = () => {
    const originalText = 'Medora Gomes';
    const glyphs = '01#@$%&*<>~/[]+=_ABCDEFXYZ';
    let iteration = 0;
    const interval = setInterval(() => {
      setDecodedName(
        originalText
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) {
              return originalText[index];
            }
            return glyphs[Math.floor(Math.random() * glyphs.length)];
          })
          .join('')
      );

      if (iteration >= originalText.length) {
        clearInterval(interval);
      }
      iteration += 1 / 2.5;
    }, 35);
  };

  useEffect(() => {
    triggerScramble();
  }, []);

  // Dynamic Neural Particle Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const heroSection = heroSectionRef.current;
    if (!canvas || !heroSection) return;

    const ctx = canvas.getContext('2d');
    let width = (canvas.width = heroSection.offsetWidth);
    let height = (canvas.height = heroSection.offsetHeight);
    let particles = [];
    let mouse = { x: null, y: null, radius: 140 };
    let animationFrameId;

    const initParticles = () => {
      particles = [];
      const count = Math.min(Math.floor((width * height) / 9500), 75);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          size: Math.random() * 2 + 1.2,
          color: Math.random() > 0.4 ? '#3b82f6' : '#8b5cf6',
        });
      }
    };

    const handleResize = () => {
      if (!heroSection || !canvas) return;
      width = canvas.width = heroSection.offsetWidth;
      height = canvas.height = heroSection.offsetHeight;
      initParticles();
    };

    const handleMouseMove = (e) => {
      const rect = heroSection.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('resize', handleResize);
    heroSection.addEventListener('mousemove', handleMouseMove);
    heroSection.addEventListener('mouseleave', handleMouseLeave);
    initParticles();

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect nodes
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 125) {
            const alpha = (1 - dist / 125) * 0.28;
            ctx.beginPath();
            ctx.strokeStyle =
              particles[i].color === '#3b82f6'
                ? `rgba(59, 130, 246, ${alpha})`
                : `rgba(139, 92, 246, ${alpha})`;
            ctx.lineWidth = 0.9;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw and update node positions
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            p.x -= (dx / dist) * force * 2.2;
            p.y -= (dy / dist) * force * 2.2;
          }
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (heroSection) {
        heroSection.removeEventListener('mousemove', handleMouseMove);
        heroSection.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  // 3D Perspective Card Tilt
  const handleTiltMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6.5;
    const rotateY = ((x - centerX) / centerX) * 6.5;

    card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleTiltMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  };

  return (
    <section
      ref={heroSectionRef}
      id="hero-section"
      className="relative max-w-7xl mx-auto px-5 md:px-12 pt-12 pb-20 md:pt-20 md:pb-24"
    >
      {/* Dynamic Neural Particle Canvas */}
      <canvas
        ref={canvasRef}
        id="hero-particles"
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      ></canvas>

      {/* Ambient Glow Orbs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-40 right-10 w-[420px] h-[420px] bg-secondary-container/20 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
        {/* Hero Left Column: Narrative & Links */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Availability & Field Tag */}
          <div className="reveal-init reveal-in inline-flex items-center gap-2 self-start bg-surface-container-low px-3 py-1.5 rounded-full shadow-[0_0_20px_rgba(77,142,255,0.12)] border border-primary/20 hover:border-primary/50 transition-colors">
            <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
            <span className="w-2 h-2 rounded-full bg-primary -ml-2.5"></span>
            <span className="font-mono text-[12px] text-primary uppercase tracking-wider font-semibold">
              AI &amp; ML Undergraduate · Frontend Developer
            </span>
          </div>

          {/* Dynamic Headline */}
          <div className="reveal-init reveal-in delay-100 flex flex-col gap-3">
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

          {/* Primary Actions with Magnetic Buttons */}
          <div className="reveal-init reveal-in delay-200 flex flex-wrap items-center gap-4 pt-1">
            <a
              href="#projects"
              className="magnetic-btn shimmer-btn inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-mono text-[14px] font-semibold bg-gradient-to-r from-primary-container via-primary-container to-secondary-container text-on-primary-container hover:brightness-110 shadow-[0_0_24px_rgba(77,142,255,0.4)]"
            >
              <span>Explore Projects</span>
              <span className="material-symbols-outlined text-[18px]">terminal</span>
            </a>
            <a
              href="#contact"
              className="magnetic-btn inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-mono text-[14px] font-semibold bg-surface-container-high text-on-surface hover:bg-surface-bright hover:text-primary transition-all duration-200 border border-white/[0.04] hover:border-primary/40 shadow-sm"
            >
              <span>View Resume &amp; Connect</span>
              <span className="material-symbols-outlined text-[18px]">north_east</span>
            </a>
          </div>

          {/* Social & Verification Badges with Staggered Entrance */}
          <div className="reveal-init reveal-in delay-300 pt-3 flex flex-col gap-2">
            <span className="font-mono text-[11px] font-semibold uppercase text-outline tracking-widest">
              Connect &amp; Verification Badges
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/medora-gomes-1a97a0329/"
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-btn tag-pill group flex items-center gap-2 bg-surface-container-low hover:bg-surface-container-high border border-white/[0.05] px-3 py-1.5 rounded-lg shadow-sm"
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
                className="magnetic-btn tag-pill group flex items-center gap-2 bg-surface-container-low hover:bg-surface-container-high border border-white/[0.05] px-3 py-1.5 rounded-lg shadow-sm"
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
                className="magnetic-btn tag-pill group flex items-center gap-2 bg-surface-container-low hover:bg-surface-container-high border border-white/[0.05] px-3 py-1.5 rounded-lg shadow-sm"
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
                className="magnetic-btn tag-pill group flex items-center gap-2 bg-surface-container-low hover:bg-surface-container-high border border-white/[0.05] px-3 py-1.5 rounded-lg shadow-sm"
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
        <div className="reveal-init reveal-in delay-200 lg:col-span-5 relative">
          {/* Glassmorphic Terminal Card with 3D Tilt */}
          <div
            onMouseMove={handleTiltMouseMove}
            onMouseLeave={handleTiltMouseLeave}
            className="tilt-card interactive-card relative bg-surface-container-low/90 backdrop-blur-2xl rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/[0.06]"
          >
            {/* Window Bar */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-error-container/80"></span>
                <span className="w-3 h-3 rounded-full bg-secondary-container/80"></span>
                <span className="w-3 h-3 rounded-full bg-primary/80"></span>
              </div>
              <span className="font-mono text-[12px] text-outline">
                medora_runtime_v2.5.py
              </span>
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            </div>

            {/* Profile & Active Specs Overlay with Cyberpunk Decoder on Name */}
            <div
              className="flex items-center gap-4 bg-surface-container p-4 rounded-xl mb-4 shadow-inner border border-white/[0.04] cursor-pointer"
              onClick={triggerScramble}
              title="Click to scramble decoder"
            >
              <img
                alt="Medora Gomes Cybernetic Portrait"
                className="w-16 h-16 rounded-xl object-cover shadow-lg ring-1 ring-primary/30"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyl00KUFUZ6ZvIO8Yo8YaT1c5U2hnBDPbdEwg0OML6MJ18GsBnI1hoUshCSH-egdp3jCF7QqsTVKDkn1VL7dHMp8CofUmC5WGRqVxcBZY7h4gjykpHBgcF6QpztS7M48Yecq0J3vesu_ezo2APbIpeq28DL_ArZAWg0LVTAcFYq8woSZN-lPP-LLIrYJxGceRglIr5jAX8JCIEmyvTQI4qk5dTko08e9j1c-w04mYr3z_YnjDvowGhX6sYRv58xhHkcxI"
              />
              <div className="flex flex-col">
                <span className="font-headline text-[18px] text-on-surface font-semibold flex items-center">
                  {decodedName}
                  <span className="decode-cursor"></span>
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
      <div className="reveal-init reveal-in delay-300 mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Metric 1 */}
        <div
          onMouseMove={handleTiltMouseMove}
          onMouseLeave={handleTiltMouseLeave}
          className="tilt-card interactive-card bg-surface-container-low/70 backdrop-blur-md p-4 rounded-xl flex flex-col gap-1 border border-white/[0.05]"
        >
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
        <div
          onMouseMove={handleTiltMouseMove}
          onMouseLeave={handleTiltMouseLeave}
          className="tilt-card interactive-card bg-surface-container-low/70 backdrop-blur-md p-4 rounded-xl flex flex-col gap-1 border border-white/[0.05]"
        >
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
        <div
          onMouseMove={handleTiltMouseMove}
          onMouseLeave={handleTiltMouseLeave}
          className="tilt-card interactive-card bg-surface-container-low/70 backdrop-blur-md p-4 rounded-xl flex flex-col gap-1 border border-white/[0.05]"
        >
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
        <div
          onMouseMove={handleTiltMouseMove}
          onMouseLeave={handleTiltMouseLeave}
          className="tilt-card interactive-card bg-surface-container-low/70 backdrop-blur-md p-4 rounded-xl flex flex-col gap-1 border border-white/[0.05]"
        >
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
