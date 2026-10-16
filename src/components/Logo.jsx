import React from 'react';

export default function Logo({ className = "w-9 h-9" }) {
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className} group`}>
      <svg
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_12px_rgba(77,142,255,0.45)] transition-transform duration-300 group-hover:scale-105"
      >
        <defs>
          <linearGradient id="mgBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e2742" />
            <stop offset="100%" stopColor="#0b0e15" />
          </linearGradient>
          <linearGradient id="mgBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
          <linearGradient id="mgTextGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="40%" stopColor="#adc6ff" />
            <stop offset="100%" stopColor="#d0bcff" />
          </linearGradient>
          <filter id="mgGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Rounded Container with Luminous Hairstyle Border */}
        <rect
          x="1"
          y="1"
          width="42"
          height="42"
          rx="11"
          fill="url(#mgBgGrad)"
          stroke="url(#mgBorderGrad)"
          strokeWidth="1.5"
        />

        {/* Cybernetic Corner Accent Marks */}
        <circle cx="7" cy="7" r="1.5" fill="#60a5fa" opacity="0.8" />
        <circle cx="37" cy="37" r="1.5" fill="#a855f7" opacity="0.8" />

        {/* Stylized Interlocking Geometric "MG" Monogram */}
        <g filter="url(#mgGlow)">
          {/* Letter M */}
          <path
            d="M 10 31 L 10 13 L 17 23 L 23 13 L 23 31"
            stroke="url(#mgTextGrad)"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Letter G - Harmoniously interlinked on right */}
          <path
            d="M 34 17.5 C 32.5 14.5 28.5 13 25 14.5 M 24 23 C 24 27.5 27 31 31.5 31 C 34.5 31 36.5 29 36.5 25 L 30 25"
            stroke="#60a5fa"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Cross Vector Connector */}
          <line
            x1="18.5"
            y1="25"
            x2="23.5"
            y2="25"
            stroke="#a855f7"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
}
