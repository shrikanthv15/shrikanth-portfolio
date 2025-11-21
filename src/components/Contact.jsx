import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Get In Touch
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <p className="text-slate-300 text-lg leading-relaxed">
              I'm currently looking for full-time opportunities in Data Science and AI/ML.
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-4">
              <a
                href="mailto:shrikanthvilvadrinath@gmail.com"
                className="flex items-center gap-4 p-4 bg-slate-900/50 border border-white/10 rounded-xl hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all group"
              >
                <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <span className="text-slate-200 font-medium">shri15@terpmail.umd.edu</span>
              </a>

              <a
                href="https://www.linkedin.com/in/shrikanth-vilvadrinath-949837168/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 bg-slate-900/50 border border-white/10 rounded-xl hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all group"
              >
                <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400 group-hover:scale-110 transition-transform">
                  <Linkedin size={24} />
                </div>
                <span className="text-slate-200 font-medium">LinkedIn Profile</span>
              </a>

              <a
                href="https://github.com/shrikanthv15"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 bg-slate-900/50 border border-white/10 rounded-xl hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all group"
              >
                <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400 group-hover:scale-110 transition-transform">
                  <Github size={24} />
                </div>
                <span className="text-slate-200 font-medium">GitHub Profile</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6 p-8 bg-slate-900/50 border border-white/10 rounded-2xl backdrop-blur-sm">
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-darkbg border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500 text-slate-200 placeholder-slate-600 transition-colors"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-darkbg border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500 text-slate-200 placeholder-slate-600 transition-colors"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
              <textarea
                rows="4"
                className="w-full px-4 py-3 bg-darkbg border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500 text-slate-200 placeholder-slate-600 transition-colors resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
