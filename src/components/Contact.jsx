import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mqaybvdl", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("Thank you! I'll get back to you soon.");
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setStatus("Sorry, there was an error. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold">Get In Touch</h2>
        <p className="mt-2 text-slate-400 max-w-2xl">
          I'm always open to discussing new opportunities, interesting projects, or just having a chat about AI/ML. 
          Feel free to reach out!
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="p-4 bg-[rgba(255,255,255,0.02)] rounded-lg border border-white/6">
              <h3 className="text-lg font-semibold text-primary mb-3">Let's Connect</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-slate-400">📧</span>
                  <a 
                    href="mailto:shri.vilvadrinath@gmail.com" 
                    className="text-slate-300 hover:text-primary transition-colors"
                  >
                    shri.vilvadrinath@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-400">📍</span>
                  <span className="text-slate-300">College Park, MD, USA</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-400">💼</span>
                  <span className="text-slate-300">Open to AI/ML opportunities</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[rgba(255,255,255,0.02)] rounded-lg border border-white/6">
              <h3 className="text-lg font-semibold text-primary mb-3">Quick Links</h3>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/shrikanthv15" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-primary transition-colors"
                >
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/shrikanth-vilvadrinath-949837168/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
                <a 
                  href="/shrikanth_resume.pdf" 
                  className="text-slate-300 hover:text-primary transition-colors"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input 
                  name="name" 
                  placeholder="Your Name" 
                  className="w-full p-3 rounded bg-white/3 border border-white/10 focus:border-primary focus:outline-none text-slate-200 placeholder-slate-400" 
                  required 
                />
              </div>
              <div>
                <input 
                  name="email" 
                  placeholder="Your Email" 
                  type="email" 
                  className="w-full p-3 rounded bg-white/3 border border-white/10 focus:border-primary focus:outline-none text-slate-200 placeholder-slate-400" 
                  required 
                />
              </div>
              <div>
                <input 
                  name="subject" 
                  placeholder="Subject" 
                  className="w-full p-3 rounded bg-white/3 border border-white/10 focus:border-primary focus:outline-none text-slate-200 placeholder-slate-400" 
                  required 
                />
              </div>
              <div>
                <textarea 
                  name="message" 
                  placeholder="Your Message" 
                  rows={5} 
                  className="w-full p-3 rounded bg-white/3 border border-white/10 focus:border-primary focus:outline-none text-slate-200 placeholder-slate-400 resize-none" 
                  required 
                />
              </div>
              
              {/* Honeypot field for spam protection */}
              <input type="text" name="_gotcha" style={{ display: 'none' }} />
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full px-6 py-3 rounded-md font-medium transition-all ${
                  isSubmitting 
                    ? 'bg-slate-600 cursor-not-allowed' 
                    : 'bg-primary hover:bg-primary/80 active:scale-95'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {status && (
                <div className={`text-sm p-3 rounded ${
                  status.includes('Thank you') 
                    ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                    : 'bg-red-500/20 text-red-300 border border-red-500/30'
                }`}>
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
