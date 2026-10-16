import React, { useState } from 'react';

export default function Header({ activeSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience & Education', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Achievements', href: '#achievements', id: 'achievements' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_12px_rgba(0,0,0,0.35)] border-b border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-5 md:px-12 h-20 flex items-center justify-between gap-4">
        {/* Logo and Brand */}
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center gap-3 group">
            <img 
              alt="MG Monogram Logo" 
              className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-110" 
              src="https://lh3.googleusercontent.com/aida/AEtjO1WaWn9mNngHPSoWjZrmG8k8atI_Hie9bvoKeJ4WRbdJTOmF_0aFU3C4y5ID6l8hYz9Lu71ja_3yqbXA-gLkuRDyuhBO3L6mhtricCmhzVkPxEepJxPPe3DDyNKFEmbuXgOtEcc7NTa9dgrtPC3ENd7pfR4kXyDjKdEXPaKTV4uxH-HzuUB8Of3_z6c991MLK3-0IqtP9oA-if1kkwgwzZvoVSqTlVGUsNKmPJSE5wrz3A" 
            />
            <div className="flex flex-col">
              <span className="font-headline text-[20px] text-on-surface tracking-tight leading-none group-hover:text-primary transition-colors font-semibold">
                Medora Gomes
              </span>
              <span className="font-mono text-[12px] text-on-surface-variant mt-0.5">
                AI &amp; ML · Frontend Dev
              </span>
            </div>
          </a>

          {/* Availability Pill */}
          <div className="hidden xl:flex items-center gap-2 bg-surface-container-low px-3 py-1 rounded-full shadow-[0_0_12px_rgba(77,142,255,0.08)] border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-mono text-[11px] font-semibold text-primary uppercase tracking-wider">
              Available for Summer/Fall Roles
            </span>
          </div>
        </div>

        {/* Center Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-surface-container-lowest/80 px-2 py-1 rounded-full shadow-[0_1px_8px_rgba(0,0,0,0.2)] border border-white/[0.05]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`font-body text-[13px] px-3.5 py-1.5 rounded-full transition-all duration-200 ${
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

        {/* Right CTA and Social Icons */}
        <div className="flex items-center gap-3">
          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-1 bg-surface-container-low px-1.5 py-1 rounded-full border border-white/[0.05]">
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
            className="magnetic-btn shimmer-btn hidden sm:inline-flex items-center justify-center gap-2 font-mono text-[14px] font-semibold bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary px-4 py-2 rounded-lg shadow-[0_0_20px_rgba(77,142,255,0.35)]"
          >
            <span>Get in Touch</span>
            <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-0.5">
              north_east
            </span>
          </a>

          {/* Profile Thumbnail */}
          <div className="flex items-center pl-1">
            <img
              alt="Medora Gomes Profile"
              className="w-8 h-8 rounded-full object-cover shadow-[0_0_12px_rgba(173,198,255,0.3)] ring-1 ring-primary/40 hover:ring-primary transition-all duration-300"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyl00KUFUZ6ZvIO8Yo8YaT1c5U2hnBDPbdEwg0OML6MJ18GsBnI1hoUshCSH-egdp3jCF7QqsTVKDkn1VL7dHMp8CofUmC5WGRqVxcBZY7h4gjykpHBgcF6QpztS7M48Yecq0J3vesu_ezo2APbIpeq28DL_ArZAWg0LVTAcFYq8woSZN-lPP-LLIrYJxGceRglIr5jAX8JCIEmyvTQI4qk5dTko08e9j1c-w04mYr3z_YnjDvowGhX6sYRv58xhHkcxI"
            />
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-surface-container text-on-surface hover:text-primary transition-colors"
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
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="shimmer-btn mt-2 flex items-center justify-center gap-2 font-mono text-[14px] font-semibold bg-primary-container text-on-primary-container px-4 py-2.5 rounded-xl shadow-md"
          >
            <span>Get in Touch</span>
            <span className="material-symbols-outlined text-[16px]">north_east</span>
          </a>
        </div>
      )}
    </header>
  );
}
