import React, { useEffect, useRef } from 'react';

export default function Skills() {
  const sphereCanvasRef = useRef(null);
  const sphereContainerRef = useRef(null);

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

  // 3D Skills Sphere Canvas
  useEffect(() => {
    const canvas = sphereCanvasRef.current;
    const container = sphereContainerRef.current;
    if (!canvas || !container) return;

    const sCtx = canvas.getContext('2d');
    const skillsList = [
      { text: 'Python', color: '#adc6ff' },
      { text: 'PyTorch', color: '#ddb7ff' },
      { text: 'React', color: '#adc6ff' },
      { text: 'TypeScript', color: '#d0bcff' },
      { text: 'C++', color: '#adc6ff' },
      { text: 'WavLM', color: '#38bdf8' },
      { text: 'TensorFlow', color: '#ddb7ff' },
      { text: 'OpenCV', color: '#818cf8' },
      { text: 'Node.js', color: '#a7f3d0' },
      { text: 'Tailwind CSS', color: '#38bdf8' },
      { text: 'Next.js', color: '#e1e2ec' },
      { text: 'Librosa', color: '#c4abff' },
      { text: 'FastAPI', color: '#67e8f9' },
      { text: 'LLMs & LangChain', color: '#f0dbff' }
    ];

    let sphereWidth = (canvas.width = container.offsetWidth);
    let sphereHeight = (canvas.height = container.offsetHeight);
    let sphereRadius = Math.min(sphereWidth, sphereHeight) * 0.38;
    let nodes = [];
    let angleX = 0.003;
    let angleY = 0.003;
    let isDragging = false;
    let lastMouseX = 0;
    let lastMouseY = 0;
    let animId;

    const initNodes = () => {
      nodes = [];
      const phi = Math.PI * (3 - Math.sqrt(5)); // Golden ratio angle
      for (let i = 0; i < skillsList.length; i++) {
        const y = 1 - (i / (skillsList.length - 1)) * 2;
        const radiusAtY = Math.sqrt(1 - y * y);
        const theta = phi * i;

        const x = Math.cos(theta) * radiusAtY;
        const z = Math.sin(theta) * radiusAtY;

        nodes.push({
          x: x * sphereRadius,
          y: y * sphereRadius,
          z: z * sphereRadius,
          text: skillsList[i].text,
          color: skillsList[i].color
        });
      }
    };

    const handleResize = () => {
      if (!container || !canvas) return;
      sphereWidth = canvas.width = container.offsetWidth;
      sphereHeight = canvas.height = container.offsetHeight;
      sphereRadius = Math.min(sphereWidth, sphereHeight) * 0.38;
      initNodes();
    };

    const onMouseDown = (e) => {
      isDragging = true;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onMouseMove = (e) => {
      if (isDragging) {
        const dx = e.clientX - lastMouseX;
        const dy = e.clientY - lastMouseY;
        angleY = dx * 0.0003;
        angleX = -dy * 0.0003;
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
      }
    };

    window.addEventListener('resize', handleResize);
    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    container.addEventListener('mousemove', onMouseMove);

    initNodes();

    const rotateSphere = () => {
      sCtx.clearRect(0, 0, sphereWidth, sphereHeight);
      const cx = sphereWidth / 2;
      const cy = sphereHeight / 2;

      // Slow down auto-spin
      if (!isDragging) {
        angleX *= 0.98;
        angleY *= 0.98;
        if (Math.abs(angleX) < 0.0015) angleX = 0.0015;
        if (Math.abs(angleY) < 0.002) angleY = 0.002;
      }

      // Rotate nodes around X and Y
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      nodes.forEach((node) => {
        // Rotate Y
        const x1 = node.x * cosY - node.z * sinY;
        const z1 = node.z * cosY + node.x * sinY;

        // Rotate X
        const y2 = node.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + node.y * sinX;

        node.x = x1;
        node.y = y2;
        node.z = z2;
      });

      // Sort by depth (z)
      nodes.sort((a, b) => b.z - a.z);

      // Connect inner constellation lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dz = nodes[i].z - nodes[j].z;
          const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (d < sphereRadius * 0.9) {
            const scaleI = 350 / (350 + nodes[i].z);
            const scaleJ = 350 / (350 + nodes[j].z);
            const xi = cx + nodes[i].x * scaleI;
            const yi = cy + nodes[i].y * scaleI;
            const xj = cx + nodes[j].x * scaleJ;
            const yj = cy + nodes[j].y * scaleJ;

            const alpha = (1 - d / (sphereRadius * 0.9)) * 0.18;
            sCtx.beginPath();
            sCtx.strokeStyle = `rgba(173, 198, 255, ${alpha})`;
            sCtx.lineWidth = 0.8;
            sCtx.moveTo(xi, yi);
            sCtx.lineTo(xj, yj);
            sCtx.stroke();
          }
        }
      }

      // Render tags
      nodes.forEach((node) => {
        const scale = 320 / (320 + node.z);
        const px = cx + node.x * scale;
        const py = cy + node.y * scale;
        const alpha = Math.max(0.2, (node.z + sphereRadius) / (sphereRadius * 2));

        sCtx.font = `600 ${Math.max(10, Math.floor(13 * scale))}px "JetBrains Mono", monospace`;
        sCtx.textAlign = 'center';
        sCtx.textBaseline = 'middle';

        // Tag capsule pill
        const metrics = sCtx.measureText(node.text);
        const padX = 10 * scale;
        const padY = 5 * scale;
        const w = metrics.width + padX * 2;
        const h = 20 * scale;

        sCtx.fillStyle = `rgba(29, 31, 39, ${alpha * 0.85})`;
        sCtx.strokeStyle = `rgba(173, 198, 255, ${alpha * 0.4})`;
        sCtx.lineWidth = 1;
        sCtx.beginPath();
        if (sCtx.roundRect) {
          sCtx.roundRect(px - w / 2, py - h / 2, w, h, 6 * scale);
        } else {
          sCtx.rect(px - w / 2, py - h / 2, w, h);
        }
        sCtx.fill();
        sCtx.stroke();

        sCtx.fillStyle = node.color;
        sCtx.globalAlpha = Math.min(1, alpha + 0.2);
        sCtx.fillText(node.text, px, py);
        sCtx.globalAlpha = 1;
      });

      animId = requestAnimationFrame(rotateSphere);
    };

    rotateSphere();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mouseup', onMouseUp);
      if (container) {
        container.removeEventListener('mousedown', onMouseDown);
        container.removeEventListener('mousemove', onMouseMove);
      }
    };
  }, []);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: 'terminal',
      iconColor: 'text-primary',
      skills: [
        { name: 'Python', dotColor: 'bg-primary' },
        { name: 'C++', dotColor: 'bg-primary' },
        { name: 'TypeScript', dotColor: 'bg-secondary' },
        { name: 'JavaScript (ES6+)', dotColor: 'bg-secondary' },
        { name: 'SQL', dotColor: 'bg-primary' },
        { name: 'HTML5 / CSS3', dotColor: 'bg-tertiary' },
      ],
      description: 'Focused on memory-safe algorithmic implementations in C++ and expressive statistical compute in Python.'
    },
    {
      title: 'Machine Learning & AI',
      icon: 'psychology',
      iconColor: 'text-secondary',
      skills: [
        { name: 'PyTorch', dotColor: 'bg-secondary' },
        { name: 'TensorFlow', dotColor: 'bg-secondary' },
        { name: 'LLMs & Prompt Eng.', dotColor: 'bg-primary' },
        { name: 'OpenCV', dotColor: 'bg-tertiary' },
        { name: 'WavLM / Librosa', dotColor: 'bg-primary' },
        { name: 'Hugging Face', dotColor: 'bg-secondary' },
        { name: 'Scikit-Learn', dotColor: 'bg-tertiary' },
      ],
      description: 'Hands-on expertise in fine-tuning audio models, CNN segmentation, and retrieval-augmented pipelines.'
    },
    {
      title: 'Web Development',
      icon: 'web',
      iconColor: 'text-tertiary',
      skills: [
        { name: 'React', dotColor: 'bg-primary' },
        { name: 'Node.js', dotColor: 'bg-primary' },
        { name: 'Tailwind CSS', dotColor: 'bg-secondary' },
        { name: 'Next.js', dotColor: 'bg-tertiary' },
        { name: 'RESTful APIs', dotColor: 'bg-primary' },
        { name: 'Git / GitHub', dotColor: 'bg-secondary' },
        { name: 'Vite & Express', dotColor: 'bg-tertiary' },
      ],
      description: 'Practiced in single-page architecture, bundle splitting, accessible ARIA norms, and clean API consumer patterns.'
    }
  ];

  return (
    <section className="relative max-w-7xl mx-auto px-5 md:px-12 py-20 scroll-mt-24" id="skills">
      <div className="reveal-init reveal-in flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div className="flex flex-col gap-2">
          <span className="font-mono text-[11px] font-semibold uppercase text-secondary tracking-widest">
            Core Capabilities
          </span>
          <h2 className="font-headline text-[32px] md:text-[36px] text-on-surface font-bold">
            Technical Stack &amp; Tooling
          </h2>
          <p className="font-body text-[15px] text-on-surface-variant max-w-2xl">
            Comprehensive inventory of languages, deep learning frameworks, and modern frontend tools leveraged for production delivery.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-surface-container-low px-3 py-1.5 rounded-full border border-secondary/20">
          <span className="material-symbols-outlined text-secondary text-[16px]">3d_rotation</span>
          <span className="font-mono text-[12px] text-secondary">Interactive 3D Constellation</span>
        </div>
      </div>

      {/* 3D Skills Constellation Interactive Canvas Banner */}
      <div className="reveal-init reveal-in delay-100 mb-12 rounded-2xl bg-surface-container-low/80 backdrop-blur-md border border-white/[0.05] p-4 overflow-hidden relative shadow-lg">
        <div className="flex items-center justify-between pb-3 border-b border-white/[0.04] mb-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-mono text-xs text-primary uppercase tracking-wider font-semibold">
              Neural Skills Sphere (Drag to Orbit)
            </span>
          </div>
          <span className="font-mono text-outline text-[11px] uppercase tracking-wider">
            3D PROJECTION SYSTEM
          </span>
        </div>
        <div
          ref={sphereContainerRef}
          id="skills-sphere-container"
          className="relative w-full h-64 md:h-72 flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
        >
          <canvas ref={sphereCanvasRef} id="skills-sphere-canvas" className="w-full h-full"></canvas>
        </div>
      </div>

      {/* 3 Skill Categorization Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((cat, idx) => (
          <div 
            key={idx}
            onMouseMove={handleTiltMouseMove}
            onMouseLeave={handleTiltMouseLeave}
            className={`reveal-init reveal-in delay-${(idx + 1) * 100} tilt-card interactive-card bg-surface-container-low rounded-2xl p-6 shadow-md flex flex-col gap-4 border border-white/[0.05]`}
          >
            <div className="flex items-center gap-3 pb-3 border-b border-white/[0.06]">
              <span className={`material-symbols-outlined text-[24px] ${cat.iconColor}`}>
                {cat.icon}
              </span>
              <h3 className="font-headline text-[18px] text-on-surface font-bold">
                {cat.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, sIdx) => (
                <span 
                  key={sIdx}
                  className="tag-pill inline-flex items-center gap-2 bg-surface-container-high px-3 py-2 rounded-lg font-mono text-[13px] text-on-surface border border-white/[0.04]"
                >
                  <span className={`w-2 h-2 rounded-full ${skill.dotColor}`}></span>
                  {skill.name}
                </span>
              ))}
            </div>

            <p className="font-body text-[13px] text-on-surface-variant mt-auto pt-2">
              {cat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
