import React from 'react';
import Logo from './Logo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 w-full bg-surface-container-lowest py-12 shadow-[0_-1px_16px_rgba(0,0,0,0.4)] border-t border-white/[0.04]">
      <div className="max-w-[1536px] w-full mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 mb-8 border-b border-white/[0.06]">
          {/* Logo & Subtitle */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-3">
              <Logo className="w-8 h-8" />
              <span className="font-headline text-[19px] sm:text-[20px] text-on-surface font-bold tracking-tight">
                Medora Gomes
              </span>
            </div>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
            <p className="font-body text-[13px] sm:text-[14px] text-on-surface-variant text-center sm:text-left">
              AI &amp; ML Researcher · Frontend Engineer · UI Systems
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2.5">
            <a
              className="magnetic-btn w-9 h-9 rounded-xl bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all duration-200 border border-white/[0.04]"
              href="https://github.com/Medora140"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Profile"
            >
              <span className="material-symbols-outlined text-[20px]">code</span>
            </a>
            <a
              className="magnetic-btn w-9 h-9 rounded-xl bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all duration-200 border border-white/[0.04]"
              href="https://www.linkedin.com/in/medora-gomes-1a97a0329/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile"
            >
              <span className="material-symbols-outlined text-[20px]">share</span>
            </a>
            <a
              className="magnetic-btn w-9 h-9 rounded-xl bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all duration-200 border border-white/[0.04]"
              href="https://leetcode.com/u/MedoraC/"
              target="_blank"
              rel="noopener noreferrer"
              title="LeetCode Handle"
            >
              <span className="material-symbols-outlined text-[20px]">terminal</span>
            </a>
            <a
              className="magnetic-btn w-9 h-9 rounded-xl bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all duration-200 border border-white/[0.04]"
              href="https://www.geeksforgeeks.org/profile/medorago5em2"
              target="_blank"
              rel="noopener noreferrer"
              title="GeeksforGeeks Stats"
            >
              <span className="material-symbols-outlined text-[20px]">data_object</span>
            </a>
          </div>
        </div>

        {/* Bottom Details */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[12px] sm:text-[13px] text-outline">
          <p>© 2026 Medora Gomes. Built with technical precision and design systems.</p>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-2 text-on-surface">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Available for Opportunities
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="hover:text-primary transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span>Back to top</span>
              <span className="material-symbols-outlined text-[16px]">arrow_upward</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
