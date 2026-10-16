import React from 'react';

export default function Skills() {
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
      <div className="reveal-in flex flex-col gap-2 mb-12">
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((cat, idx) => (
          <div 
            key={idx}
            className="reveal-in interactive-card bg-surface-container-low rounded-2xl p-6 shadow-md flex flex-col gap-4 border border-white/[0.05]"
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
