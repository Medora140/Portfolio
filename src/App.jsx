import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [curtainHidden, setCurtainHidden] = useState(false);
  const [curtainMounted, setCurtainMounted] = useState(true);

  // Initial Cybernetic Curtain Reveal Animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurtainHidden(true);
      const removeTimer = setTimeout(() => {
        setCurtainMounted(false);
      }, 950);
      return () => clearTimeout(removeTimer);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Scroll Spy for Navigation Highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'skills', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-background text-on-surface min-h-screen relative overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container">
      {/* Initial Cybernetic Curtain Overlay */}
      {curtainMounted && (
        <div id="cyber-curtain" className={curtainHidden ? 'curtain-hidden' : ''}>
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-primary animate-ping"></span>
              <span className="font-mono text-primary tracking-widest uppercase text-sm font-semibold">
                INITIALIZING CYBERNETIC ENVIRONMENT
              </span>
            </div>
            <span className="font-mono text-outline text-xs tracking-wider">
              MEDORA GOMES · AI &amp; FRONTEND RUNTIME v2.5
            </span>
          </div>
          <div className="curtain-line"></div>
        </div>
      )}

      {/* Ambient Lighting Orbs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 w-[600px] h-[500px] bg-primary/10 rounded-full blur-[140px]"></div>
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-secondary-container/20 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 left-1/3 w-[700px] h-[400px] bg-tertiary-container/10 rounded-full blur-[160px]"></div>
      </div>

      {/* Header */}
      <Header activeSection={activeSection} />

      {/* Main Content Area */}
      <main className="relative z-10 w-full pt-20 bg-background">
        <div className="flex flex-col w-full">
          {/* Ambient Cybernetic Grid Pattern */}
          <div className="relative w-full overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:48px_48px]"></div>

            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Achievements />
            <Contact />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
