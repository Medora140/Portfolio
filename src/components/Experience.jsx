import React from 'react';

export default function Experience() {
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
    <section className="relative max-w-[1536px] w-full mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-20 lg:py-24 scroll-mt-24" id="experience">
      <div className="reveal-init reveal-in flex flex-col gap-2 mb-12">
        <span className="font-mono text-[11px] sm:text-[12px] font-semibold uppercase text-primary tracking-widest">
          Career Trajectory
        </span>
        <h2 className="font-headline text-[32px] sm:text-[40px] text-on-surface font-bold">
          Experience &amp; Academic Rigor
        </h2>
        <p className="font-body text-[16px] sm:text-[17px] text-on-surface-variant max-w-2xl">
          Bridging production frontend engineering in agile engineering teams with rigorous AI &amp; deep learning university curriculum.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-10">
        {/* Experience Column */}
        <div className="reveal-init reveal-in delay-100 flex flex-col gap-6">
          <div className="flex items-center gap-3 pb-3.5 border-b border-white/[0.06]">
            <span className="material-symbols-outlined text-primary text-[28px]">terminal</span>
            <h3 className="font-headline text-[24px] sm:text-[26px] text-on-surface font-bold">
              Work Experience
            </h3>
          </div>

          {/* Experience Card: Zarthi with Tilt */}
          <div
            onMouseMove={handleTiltMouseMove}
            onMouseLeave={handleTiltMouseLeave}
            className="tilt-card interactive-card relative bg-surface-container-low rounded-2xl p-7 sm:p-8 shadow-lg border border-white/[0.05]"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-4 border-b border-white/[0.04]">
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-mono text-[11px] sm:text-[12px] font-semibold uppercase mb-1 border border-primary/20">
                  Current Role
                </span>
                <h4 className="font-headline text-[20px] sm:text-[22px] text-on-surface font-bold">
                  Frontend Developer Intern
                </h4>
                <p className="font-body text-[15px] sm:text-[16px] text-secondary font-medium">
                  Zarthi Pvt Ltd · Engineering Team
                </p>
              </div>
              <div className="text-left sm:text-right">
                <span className="font-mono text-[12px] sm:text-[13px] text-outline">
                  Present / Ongoing
                </span>
                <p className="font-mono text-[12px] sm:text-[13px] text-on-surface-variant">
                  Bangalore, IN
                </p>
              </div>
            </div>

            {/* Bulleted Contributions */}
            <ul className="flex flex-col gap-3.5 pt-5 font-body text-[15px] sm:text-[16px] text-on-surface-variant">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span>
                  Architected modular, component-driven client interfaces in React and TypeScript, adhering to high-velocity design systems and state hygiene.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span>
                  Streamlined end-to-end API integration pipelines with Node.js backend microservices, reducing asynchronous request overhead by 28%.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span>
                  Enhanced cross-browser rendering speed and responsive layout reliability across complex enterprise dashboards utilizing Tailwind CSS.
                </span>
              </li>
            </ul>

            {/* Tech Stack Pills */}
            <div className="mt-7 pt-4 border-t border-white/[0.04] flex flex-wrap gap-2.5">
              {['React', 'TypeScript', 'Node.js', 'REST APIs', 'Tailwind CSS'].map((tech) => (
                <span
                  key={tech}
                  className="tag-pill bg-surface-container border border-white/[0.04] px-3 py-1.5 rounded-lg font-mono text-[12px] sm:text-[13px] text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Education Column */}
        <div className="reveal-init reveal-in delay-200 flex flex-col gap-6">
          <div className="flex items-center gap-3 pb-3.5 border-b border-white/[0.06]">
            <span className="material-symbols-outlined text-secondary text-[28px]">school</span>
            <h3 className="font-headline text-[24px] sm:text-[26px] text-on-surface font-bold">
              Academic Foundation
            </h3>
          </div>

          {/* Education Card with Tilt */}
          <div
            onMouseMove={handleTiltMouseMove}
            onMouseLeave={handleTiltMouseLeave}
            className="tilt-card interactive-card relative bg-surface-container-low rounded-2xl p-7 sm:p-8 shadow-lg border border-white/[0.05]"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-4 border-b border-white/[0.04]">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/40 text-secondary font-mono text-[12px] sm:text-[13px] font-bold shadow-[0_0_12px_rgba(87,27,193,0.3)] mb-1 border border-secondary/30">
                  <span className="material-symbols-outlined text-[15px]">star</span>
                  <span>9.41 Cumulative CGPA</span>
                </div>
                <h4 className="font-headline text-[20px] sm:text-[22px] text-on-surface font-bold">
                  B.E. in Artificial Intelligence &amp; Machine Learning
                </h4>
                <p className="font-body text-[15px] sm:text-[16px] text-tertiary">
                  BMS Institute of Technology and Management
                </p>
              </div>
              <div className="text-left sm:text-right">
                <span className="font-mono text-[12px] sm:text-[13px] text-outline">
                  2021 – 2025
                </span>
                <p className="font-mono text-[12px] sm:text-[13px] text-on-surface-variant">
                  Bangalore, IN
                </p>
              </div>
            </div>

            {/* Deep Core Disciplines */}
            <div className="flex flex-col gap-3.5 pt-5">
              <span className="font-mono text-[11px] sm:text-[12px] font-semibold text-outline uppercase tracking-wider">
                Advanced Coursework &amp; Research Focus:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-body text-[13px] sm:text-[14px] text-on-surface-variant">
                <div className="flex items-center gap-2.5 bg-surface-container px-3.5 py-2.5 rounded-lg border border-white/[0.03]">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                  <span>Deep Learning Architectures</span>
                </div>
                <div className="flex items-center gap-2.5 bg-surface-container px-3.5 py-2.5 rounded-lg border border-white/[0.03]">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                  <span>Computer Vision &amp; Image Proc.</span>
                </div>
                <div className="flex items-center gap-2.5 bg-surface-container px-3.5 py-2.5 rounded-lg border border-white/[0.03]">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                  <span>Audio &amp; Speech Signal Proc.</span>
                </div>
                <div className="flex items-center gap-2.5 bg-surface-container px-3.5 py-2.5 rounded-lg border border-white/[0.03]">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                  <span>Natural Language Processing</span>
                </div>
                <div className="flex items-center gap-2.5 bg-surface-container px-3.5 py-2.5 rounded-lg sm:col-span-2 border border-white/[0.03]">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary shrink-0"></span>
                  <span>Data Structures, Algorithms &amp; Computational Complexity</span>
                </div>
              </div>
            </div>

            {/* Honor Footnote */}
            <div className="mt-7 pt-4 border-t border-white/[0.04] flex items-center justify-between text-on-surface-variant font-mono text-[12px] sm:text-[13px]">
              <span className="text-secondary font-mono">Dean's Honor Roll · Consecutive Semesters</span>
              <span className="material-symbols-outlined text-secondary text-[20px]">verified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
