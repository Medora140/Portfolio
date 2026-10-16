import React, { useState } from 'react';
import Logo from './Logo';

export default function Header({ activeSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Achievements', href: '#achievements', id: 'achievements' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_16px_rgba(0,0,0,0.4)] border-b border-white/[0.05]">
      <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10 h-20 flex items-center justify-between gap-3 sm:gap-6">
        
        {/* Left: Brand Identity & Available Badge */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <a href="#" className="flex items-center gap-3 group">
            <Logo className="w-9 h-9" />
            <div className="flex flex-col">
              <span className="font-headline text-[18px] sm:text-[20px] text-on-surface tracking-tight leading-none group-hover:text-primary transition-colors font-bold whitespace-nowrap">
                Medora Gomes
              </span>
              <span className="font-mono text-[11px] sm:text-[12px] text-on-surface-variant mt-1 whitespace-nowrap">
                AI &amp; ML · Frontend Dev
              </span>
            </div>
          </a>

          {/* Availability Pill (Displayed on extra wide displays to prevent crowding) */}
          <div className="hidden 2xl:flex items-center gap-2 bg-surface-container-low px-3 py-1 rounded-full shadow-[0_0_12px_rgba(77,142,255,0.08)] border border-primary/20 shrink-0">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-mono text-[11px] font-semibold text-primary uppercase tracking-wider whitespace-nowrap">
              Available for Summer/Fall Roles
            </span>
          </div>
        </div>

        {/* Center: Desktop Navigation Bar */}
        <nav className="hidden lg:flex items-center gap-1 bg-surface-container-lowest/80 px-2 py-1.5 rounded-full shadow-[0_1px_8px_rgba(0,0,0,0.25)] border border-white/[0.06] shrink-0">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`font-body text-[13px] px-3.5 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'bg-surface-container-high text-primary font-semibold shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right: Social Links, CTA Button & Profile Avatar */}
        <div className="flex items-center gap-2.5 sm:gap-3.5 shrink-0">
          {/* Social Icons Container */}
          <div className="hidden xl:flex items-center gap-1 bg-surface-container-low px-1.5 py-1 rounded-full border border-white/[0.05] shrink-0">
            <a
              className="magnetic-btn w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all duration-200"
              href="https://github.com/Medora140"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Profile"
            >
              <span className="material-symbols-outlined text-[18px]">code</span>
            </a>
            <a
              className="magnetic-btn w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all duration-200"
              href="https://www.linkedin.com/in/medora-gomes-1a97a0329/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile"
            >
              <span className="material-symbols-outlined text-[18px]">share</span>
            </a>
            <a
              className="magnetic-btn w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all duration-200"
              href="https://leetcode.com/u/MedoraC/"
              target="_blank"
              rel="noopener noreferrer"
              title="LeetCode Handle"
            >
              <span className="material-symbols-outlined text-[18px]">terminal</span>
            </a>
            <a
              className="magnetic-btn w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all duration-200"
              href="https://www.geeksforgeeks.org/profile/medorago5em2"
              target="_blank"
              rel="noopener noreferrer"
              title="GeeksforGeeks Stats"
            >
              <span className="material-symbols-outlined text-[18px]">data_object</span>
            </a>
          </div>

          {/* Shimmer CTA Button */}
          <a
            href="#contact"
            className="magnetic-btn shimmer-btn hidden sm:inline-flex items-center justify-center gap-2 font-mono text-[13px] sm:text-[14px] font-semibold bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary px-3.5 sm:px-4 py-2 rounded-lg shadow-[0_0_20px_rgba(77,142,255,0.35)] shrink-0 whitespace-nowrap"
          >
            <span>Get in Touch</span>
            <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-0.5">
              north_east
            </span>
          </a>

          {/* Profile Thumbnail */}
          <div className="flex items-center pl-0.5 shrink-0">
            <img
              alt="Medora Gomes"
              className="w-8 h-8 rounded-full object-cover shadow-[0_0_12px_rgba(173,198,255,0.3)] ring-1 ring-primary/40 hover:ring-primary transition-all duration-300"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyl00KUFUZ6ZvIO8Yo8YaT1c5U2hnBDPbdEwg0OML6MJ18GsBnI1hoUshCSH-egdp3jCF7QqsTVKDkn1VL7dHMp8CofUmC5WGRqVxcBZY7h4gjykpHBgcF6QpztS7M48Yecq0J3vesu_ezo2APbIpeq28DL_ArZAWg0LVTAcFYq8woSZN-lPP-LLIrYJxGceRglIr5jAX8JCIEmyvTQI4qk5dTko08e9j1c-w04mYr3z_YnjDvowGhX6sYRv58xhHkcxI"
            />
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-surface-container text-on-surface hover:text-primary transition-colors shrink-0"
            aria-label="Toggle mobile menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-low/95 backdrop-blur-2xl border-b border-white/[0.08] px-5 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-2.5 rounded-xl font-body text-[14px] transition-colors ${
                activeSection === link.id
                  ? 'bg-surface-container-high text-primary font-semibold'
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] mt-1">
            <div className="flex items-center gap-2">
              <a
                className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary bg-surface-container"
                href="https://github.com/Medora140"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[16px]">code</span>
              </a>
              <a
                className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary bg-surface-container"
                href="https://www.linkedin.com/in/medora-gomes-1a97a0329/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[16px]">share</span>
              </a>
              <a
                className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary bg-surface-container"
                href="https://leetcode.com/u/MedoraC/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[16px]">terminal</span>
              </a>
              <a
                className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary bg-surface-container"
                href="https://www.geeksforgeeks.org/profile/medorago5em2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[16px]">data_object</span>
              </a>
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="shimmer-btn inline-flex items-center gap-1.5 font-mono text-[13px] font-semibold bg-primary-container text-on-primary-container px-3.5 py-1.5 rounded-lg shadow-md"
            >
              <span>Get in Touch</span>
              <span className="material-symbols-outlined text-[14px]">north_east</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
