import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('Transmitting...');

    // FIXED: Using FormData layout directly from Web3Forms' documentation
    const formPayload = new FormData();
    formPayload.append("access_key", "ee353e02-1a87-4c2b-bae3-1b8d275e07c5");
    formPayload.append("name", formData.name);
    formPayload.append("email", formData.email);
    formPayload.append("subject", formData.subject || "Portfolio Contact Form Submission");
    formPayload.append("message", formData.message);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload // FIXED: Sent as a multi-part form payload instead of a JSON string
      }).then((res) => res.json());

      if (res.success) {
        setStatusMessage('Message transmitted successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatusMessage('Transmission failed. Please try again.');
      }
    } catch (error) {
      setStatusMessage('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatusMessage(''), 5000);
    }
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
                <span className="material-symbols-outlined text-[22px]" aria-hidden="true">mail</span>
              </span>
              <div className="flex flex-col">
                <span className="font-mono text-[11px] sm:text-[12px] font-semibold uppercase text-outline">
                  Email Inquiries
                </span>
                <a
                  href="mailto:medoragomes1402@gmail.com"
                  className="font-body text-[15px] sm:text-[16px] text-on-surface hover:text-primary font-medium transition-colors"
                >
                  medoragomes1402@gmail.com
                </a>
              </div>
            </div>

            <div className="tag-pill flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-surface-container-low border border-white/[0.04]">
              <span className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                <span className="material-symbols-outlined text-[22px]" aria-hidden="true">location_on</span>
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
                  name="name" // FIXED: Added matching explicit name parameter
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
                  name="email" // FIXED: Added matching explicit name parameter
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
                name="subject" // FIXED: Added matching explicit name parameter
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
                name="message" // FIXED: Added matching explicit name parameter
                rows={4}
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
                disabled={isSubmitting}
                className="magnetic-btn shimmer-btn inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-mono text-[14px] sm:text-[15px] font-semibold bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-[0_0_20px_rgba(var(--primary-rgb),0.35)]"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">send</span>
              </button>

              {statusMessage && (
                <span className="font-mono text-[13px] sm:text-[14px] text-primary animate-pulse font-semibold" role="status">
                  {statusMessage}
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
