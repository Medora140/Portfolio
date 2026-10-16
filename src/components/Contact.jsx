import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 5000);
  };

  return (
    <section className="relative max-w-[1536px] w-full mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-20 pb-32 scroll-mt-24" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
        {/* Contact Narrative */}
        <div className="reveal-init reveal-in delay-100 lg:col-span-5 flex flex-col gap-6">
          <div className="flex flex-col gap-2.5">
            <span className="font-mono text-[11px] sm:text-[12px] font-semibold uppercase text-primary tracking-widest">
              Let's Connect
            </span>
            <h2 className="font-headline text-[32px] sm:text-[40px] text-on-surface font-bold">
              Ready to build what's next?
            </h2>
            <p className="font-body text-[16px] sm:text-[17px] text-on-surface-variant leading-relaxed">
              Actively seeking full-time and internship opportunities in Artificial Intelligence, Machine Learning Research, and Frontend Engineering. Feel free to reach out directly.
            </p>
          </div>

          {/* Direct Channels */}
          <div className="flex flex-col gap-3.5 pt-2">
            <div className="tag-pill flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-surface-container-low border border-white/[0.04]">
              <span className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[22px]">mail</span>
              </span>
              <div className="flex flex-col">
                <span className="font-mono text-[11px] sm:text-[12px] font-semibold uppercase text-outline">
                  Email Inquiries
                </span>
                <a
                  href="mailto:medora.gomes@bmsit.in"
                  className="font-body text-[15px] sm:text-[16px] text-on-surface hover:text-primary font-medium transition-colors"
                >
                  medora.gomes@bmsit.in
                </a>
              </div>
            </div>

            <div className="tag-pill flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-surface-container-low border border-white/[0.04]">
              <span className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                <span className="material-symbols-outlined text-[22px]">location_on</span>
              </span>
              <div className="flex flex-col">
                <span className="font-mono text-[11px] sm:text-[12px] font-semibold uppercase text-outline">
                  Location
                </span>
                <span className="font-body text-[15px] sm:text-[16px] text-on-surface font-medium">
                  Bangalore, Karnataka, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="reveal-init reveal-in delay-200 lg:col-span-7 bg-surface-container-low rounded-2xl p-7 sm:p-10 shadow-xl border border-white/[0.05]">
          <form className="flex flex-col gap-4 sm:gap-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[12px] sm:text-[13px] text-on-surface-variant" htmlFor="name">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="e.g. Maya Lin"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-surface-container-lowest px-4 py-3.5 rounded-xl text-on-surface placeholder:text-outline font-body text-[15px] focus:outline-none focus:ring-1 focus:ring-primary shadow-inner border border-white/[0.04] transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[12px] sm:text-[13px] text-on-surface-variant" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="maya@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-surface-container-lowest px-4 py-3.5 rounded-xl text-on-surface placeholder:text-outline font-body text-[15px] focus:outline-none focus:ring-1 focus:ring-primary shadow-inner border border-white/[0.04] transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[12px] sm:text-[13px] text-on-surface-variant" htmlFor="subject">
                Project Type / Opportunity
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Frontend Role / AI Research Collaboration / Freelance"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-surface-container-lowest px-4 py-3.5 rounded-xl text-on-surface placeholder:text-outline font-body text-[15px] focus:outline-none focus:ring-1 focus:ring-primary shadow-inner border border-white/[0.04] transition-all"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[12px] sm:text-[13px] text-on-surface-variant" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                required
                placeholder="Tell me about your team or project requirements..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-surface-container-lowest px-4 py-3.5 rounded-xl text-on-surface placeholder:text-outline font-body text-[15px] focus:outline-none focus:ring-1 focus:ring-primary shadow-inner resize-none border border-white/[0.04] transition-all"
              ></textarea>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                type="submit"
                className="magnetic-btn shimmer-btn inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-mono text-[14px] sm:text-[15px] font-semibold bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary shadow-[0_0_20px_rgba(77,142,255,0.35)]"
              >
                <span>Send Message</span>
                <span className="material-symbols-outlined text-[18px]">send</span>
              </button>

              {submitted && (
                <span className="font-mono text-[13px] sm:text-[14px] text-primary animate-pulse font-semibold">
                  Message transmitted successfully!
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
