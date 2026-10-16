import React from 'react';

export default function Projects() {
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

  const projects = [
    {
      id: 1,
      title: 'AI Voice Clone Detection System',
      category: 'Audio AI & Deep Learning',
      accentColor: 'primary',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA35G521zBTew3I0w73lJgRb9ZYnWLlQN_mpeWyn2CfI3zmxQRJrLv47dq_NQQgYHGCQIV_wsib956vaUlH3_nsr4srGYoQBuFpZ-eulBWZVqMjFlm7OTZGRfgVIeXCyTbR07OSsBZr7Ts_TiWhnGx2VkR-6vqu5u6mq_TwhS8PIrBraw2wntzYBcm7WS9gSdyIB3kk5Y00MDAf6ite6WGcjzgwu-lrjyfpKxYVpFVh',
      description: 'Real-time neural acoustic classifier designed to identify synthetic, deepfaked, and cloned human speech using deep temporal feature embeddings, mel-spectrogram extraction, and spectral anomaly scoring.',
      tags: ['WavLM', 'PyTorch', 'Librosa', 'Python', 'Flask'],
      github: 'https://github.com/Medora140',
      demo: '#',
      demoLabel: 'Live Demo / Research'
    },
    {
      id: 2,
      title: 'AI Resume ATS Scorer',
      category: 'Generative AI & NLP',
      accentColor: 'secondary',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBv8mY_Bbq6vmO9ATHZaX1q-VVZeUjvSuQaTaz1jKCnjZC_79tyNCRd361GR5WmOFdomtNmj99JkxMhN0WXXYMRvzKB-IpQ1-aIzyCt8xKxhaS-eTQzo6mnAB59jqpSt76_JrJa_F9cwcqui9yffxQx5zVnmRUZbtrVradm22XJ7hovphmO12vP88z_S9asC01ckm1cG5Lyf-KNLf1jz633Ne60XcfSml2WzXYztGgX',
      description: 'Intelligent candidate resume parsing and ATS matching platform leveraging Large Language Models to compute semantic vector similarity, identify skill gaps, and provide contextual rewrite suggestions.',
      tags: ['LLMs (LangChain)', 'FastAPI', 'React', 'TypeScript'],
      github: 'https://github.com/Medora140',
      demo: '#',
      demoLabel: 'Architecture Spec'
    },
    {
      id: 3,
      title: 'PulmoX Clinical Assistant',
      category: 'Medical Computer Vision',
      accentColor: 'primary',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNYNo9fVGIT_86uIP7rSTZp3s76opmJqVjwynBl-ZKSO7P4FTtpMVDQl12GE9GviV_KZpLutE2kaj2yWIp9Av9kyl7y4reHS4u0tT4XJuunV0iFNruz27pDGorXGwFUVKcjqH2zoUFTme_YRKP6wTyXCDApG-NSEbR7zoj0EfNObo6KOzSU13Qr_92gJkew4UH31mKtZsPdfhIkCXzP_9qSuhzXEf92S7dNkW4EsPk',
      description: 'Computer-aided diagnostic decision support tool analyzing thoracic CT scans to assist radiologists in early-stage pulmonary nodule detection with localized Class Activation Mapping (Grad-CAM).',
      tags: ['CNNs', 'TensorFlow', 'OpenCV', 'Python', 'Streamlit'],
      github: 'https://github.com/Medora140',
      demo: '#',
      demoLabel: 'Clinical Case Study'
    },
    {
      id: 4,
      title: 'ExploreMe Intelligent Video QA',
      category: 'Multimodal Video Intelligence',
      accentColor: 'tertiary',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1fTts9RuoGppxzA31WoFIVPYutrDNrc22uUsDgaCLRt2XcGIn0BF43ux_eQZ5m11CZU2W924kO6uA1-K_5tLKsCoLzIbYlz-YJp2X0E2j1NeR_ZqNSuMmt1-uLMKoDn1mAK-BdwMOAA2NZm9qFC-W0QeCq-IFAtykFIYrWJsVoReyVm0W1CT1q7aIerSV1JZCVvf1Mf6VfhDbgfr90HE7s84iYKxIRfwTSt2Oc1t9',
      description: 'Interactive conversational multimodal framework extracting synchronized temporal video frames and Whisper audio transcripts to enable grounded, context-aware queries across lengthy educational lectures.',
      tags: ['Multimodal Transformers', 'Whisper', 'PyTorch', 'React', 'Node.js'],
      github: 'https://github.com/Medora140',
      demo: '#',
      demoLabel: 'View Code & Demo'
    }
  ];

  return (
    <section className="relative max-w-[1536px] w-full mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-20 lg:py-24 scroll-mt-24" id="projects">
      <div className="reveal-init reveal-in flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div className="flex flex-col gap-2">
          <span className="font-mono text-[11px] sm:text-[12px] font-semibold uppercase text-primary tracking-widest">
            Engineered Work
          </span>
          <h2 className="font-headline text-[32px] sm:text-[40px] text-on-surface font-bold">
            Featured AI &amp; Software Projects
          </h2>
          <p className="font-body text-[16px] sm:text-[17px] text-on-surface-variant max-w-2xl">
            Selected repositories demonstrating deep neural network training, inference optimization, and modern production web user experiences.
          </p>
        </div>
        <div className="flex items-center gap-2 font-mono text-[13px] text-outline">
          <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
          <span>All 4 Systems Production-Grade</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-10">
        {projects.map((proj, idx) => (
          <div 
            key={proj.id}
            onMouseMove={handleTiltMouseMove}
            onMouseLeave={handleTiltMouseLeave}
            className={`reveal-init reveal-in ${idx % 2 === 0 ? 'delay-100' : 'delay-200'} tilt-card interactive-card group relative bg-surface-container-low rounded-2xl overflow-hidden shadow-lg border border-white/[0.05] flex flex-col justify-between`}
          >
            {/* Immersive Card Thumbnail */}
            <div className="relative w-full h-64 sm:h-72 lg:h-80 overflow-hidden bg-surface-container-lowest">
              <img 
                alt={proj.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                src={proj.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-surface-container-low/40 to-transparent"></div>
              <div className="absolute top-4 left-4 bg-surface-container-lowest/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/[0.1]">
                <span className={`font-mono text-[12px] sm:text-[13px] font-semibold ${
                  proj.accentColor === 'secondary' ? 'text-secondary' : proj.accentColor === 'tertiary' ? 'text-tertiary' : 'text-primary'
                }`}>
                  {proj.category}
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 sm:p-8 flex flex-col gap-4 flex-grow">
              <div className="flex flex-col gap-2">
                <h3 className={`font-headline text-[22px] sm:text-[24px] text-on-surface font-bold transition-colors ${
                  proj.accentColor === 'secondary' ? 'group-hover:text-secondary' : proj.accentColor === 'tertiary' ? 'group-hover:text-tertiary' : 'group-hover:text-primary'
                }`}>
                  {proj.title}
                </h3>
                <p className="font-body text-[15px] sm:text-[16px] text-on-surface-variant leading-relaxed">
                  {proj.description}
                </p>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2.5 mt-auto pt-2">
                {proj.tags.map((tag) => (
                  <span 
                    key={tag}
                    className={`tag-pill bg-surface-container border border-white/[0.04] px-3 py-1.5 rounded-md font-mono text-[12px] sm:text-[13px] ${
                      proj.accentColor === 'secondary' ? 'text-secondary' : proj.accentColor === 'tertiary' ? 'text-tertiary' : 'text-primary'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Footer */}
              <div className="pt-5 border-t border-white/[0.06] flex items-center justify-between">
                <a 
                  href={proj.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="magnetic-btn inline-flex items-center gap-1.5 font-mono text-[14px] text-on-surface hover:text-primary transition-colors duration-200"
                >
                  <span className="material-symbols-outlined text-[20px]">code</span>
                  <span>GitHub Repo</span>
                </a>
                <a 
                  href={proj.demo}
                  className={`magnetic-btn inline-flex items-center gap-1 font-mono text-[14px] font-semibold hover:underline group-hover:translate-x-1 transition-transform ${
                    proj.accentColor === 'secondary' ? 'text-secondary' : proj.accentColor === 'tertiary' ? 'text-tertiary' : 'text-primary'
                  }`}
                >
                  <span>{proj.demoLabel}</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
