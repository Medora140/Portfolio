import React from 'react';

export default function Experience() {
  return (
    <section className="relative max-w-7xl mx-auto px-5 md:px-12 py-20 scroll-mt-24" id="experience">
      <div className="reveal-in flex flex-col gap-2 mb-12">
        <span className="font-mono text-[11px] font-semibold uppercase text-primary tracking-widest">
          Career Trajectory
        </span>
        <h2 className="font-headline text-[32px] md:text-[36px] text-on-surface font-bold">
          Experience &amp; Academic Rigor
        </h2>
        <p className="font-body text-[15px] text-on-surface-variant max-w-2xl">
          Bridging production frontend engineering in agile engineering teams with rigorous AI &amp; deep learning university curriculum.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Experience Column */}
        <div className="reveal-in flex flex-col gap-6">
          <div className="flex items-center gap-3 pb-3 border-b border-white/[0.06]">
            <span className="material-symbols-outlined text-primary text-[28px]">terminal</span>
            <h3 className="font-headline text-[24px] text-on-surface font-bold">
              Work Experience
            </h3>
          </div>

          {/* Experience Card: Zarthi */}
          <div className="interactive-card relative bg-surface-container-low rounded-2xl p-6 shadow-lg border border-white/[0.05]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/[0.04]">
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-mono text-[11px] font-semibold uppercase mb-1 border border-primary/20">
                  Current Role
                </span>
                <h4 className="font-headline text-[20px] text-on-surface font-bold">
                  Frontend Developer Intern
                </h4>
                <p className="font-body text-[15px] text-secondary font-medium">
                  Zarthi Pvt Ltd · Engineering Team
                </p>
              </div>
              <div className="text-left sm:text-right">
                <span className="font-mono text-[12px] text-outline">
                  Present / Ongoing
                </span>
                <p className="font-mono text-[12px] text-on-surface-variant">
                  Bangalore, IN
                </p>
              </div>
            </div>

            {/* Bulleted Contributions */}
            <ul className="flex flex-col gap-3 pt-4 font-body text-[15px] text-on-surface-variant">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span>
                  Architected modular, component-driven client interfaces in React and TypeScript, adhering to high-velocity design systems and state hygiene.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span>
                  Streamlined end-to-end API integration pipelines with Node.js backend microservices, reducing asynchronous request overhead by 28%.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span>
                  Enhanced cross-browser rendering speed and responsive layout reliability across complex enterprise dashboards utilizing Tailwind CSS.
                </span>
              </li>
            </ul>

            {/* Tech Stack Pills */}
            <div className="mt-6 pt-4 border-t border-white/[0.04] flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Node.js', 'REST APIs', 'Tailwind CSS'].map((tech) => (
                <span
                  key={tech}
                  className="tag-pill bg-surface-container border border-white/[0.04] px-2.5 py-1 rounded-md font-mono text-[12px] text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Education Column */}
        <div className="reveal-in flex flex-col gap-6">
          <div className="flex items-center gap-3 pb-3 border-b border-white/[0.06]">
            <span className="material-symbols-outlined text-secondary text-[28px]">school</span>
            <h3 className="font-headline text-[24px] text-on-surface font-bold">
              Academic Foundation
            </h3>
          </div>

          {/* Education Card */}
          <div className="interactive-card relative bg-surface-container-low rounded-2xl p-6 shadow-lg border border-white/[0.05]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/[0.04]">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/40 text-secondary font-mono text-[12px] font-bold shadow-[0_0_12px_rgba(87,27,193,0.3)] mb-1 border border-secondary/30">
                  <span className="material-symbols-outlined text-[14px]">star</span>
                  <span>9.41 Cumulative CGPA</span>
                </div>
                <h4 className="font-headline text-[20px] text-on-surface font-bold">
                  B.E. in Artificial Intelligence &amp; Machine Learning
                </h4>
                <p className="font-body text-[15px] text-tertiary">
                  BMS Institute of Technology and Management
                </p>
              </div>
              <div className="text-left sm:text-right">
                <span className="font-mono text-[12px] text-outline">
                  2024 – 2028
                </span>
                <p className="font-mono text-[12px] text-on-surface-variant">
                  Bangalore, IN
                </p>
              </div>
            </div>

            {/* Coursework Grid */}
            <div className="flex flex-col gap-3 pt-4">
              <span className="font-mono text-[11px] font-semibold text-outline uppercase tracking-wider">
                Advanced Coursework &amp; Research Focus:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-body text-[13px] text-on-surface-variant">
                <div className="flex items-center gap-2 bg-surface-container px-3 py-2 rounded-lg border border-white/[0.03]">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                  <span>Deep Learning Architectures</span>
                </div>
                <div className="flex items-center gap-2 bg-surface-container px-3 py-2 rounded-lg border border-white/[0.03]">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                  <span>Computer Vision &amp; Image Proc.</span>
                </div>
                <div className="flex items-center gap-2 bg-surface-container px-3 py-2 rounded-lg border border-white/[0.03]">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                  <span>Audio &amp; Speech Signal Proc.</span>
                </div>
                <div className="flex items-center gap-2 bg-surface-container px-3 py-2 rounded-lg border border-white/[0.03]">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                  <span>Natural Language Processing</span>
                </div>
                <div className="flex items-center gap-2 bg-surface-container px-3 py-2 rounded-lg sm:col-span-2 border border-white/[0.03]">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary shrink-0"></span>
                  <span>Data Structures, Algorithms &amp; Computational Complexity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
