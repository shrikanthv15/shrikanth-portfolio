import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "AI Technical Intern",
    org: "NV Rad Imaging",
    location: "Tampa, Florida, US",
    period: "May 2025 - August 2025",
    desc: "Developed a radiology assistant using LLMs (Ollama, LangChain, Flask) to analyze diagnostic PDFs. Enhanced interpretability with AI-driven highlighting and explanations, reducing manual parsing time by ~40%.",
  },
  {
    role: "AI Research Intern",
    org: "AI Himalaya Labs",
    location: "Remote, India",
    period: "Feb 2024 - April 2024",
    desc: "Designed and deployed full-stack AI products (React, Flask, SQL) and contributed to generative AI solutions. Gained exposure to scaling AI systems in production.",
  },
  {
    role: "Python Developer",
    org: "Fx31 Labs (Formerly Fractal31)",
    location: "Ahmedabad, India",
    period: "March 2023 - August 2023",
    desc: "Built robotic simulations using Godot, Blender, and Python for prototyping robotic hardware. Developed middleware to integrate user input with robotic actuators.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Professional Experience
          </span>
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500/50 to-purple-500/50" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full border-4 border-darkbg z-10 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />

                {/* Content Card */}
                <div className="ml-6 md:ml-0 md:w-1/2">
                  <div className={`p-6 bg-slate-900/50 border border-white/10 rounded-2xl hover:border-cyan-500/30 transition-all duration-300 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}>
                    <div className="flex items-center gap-2 text-cyan-400 mb-2">
                      <Briefcase size={16} />
                      <span className="text-sm font-semibold tracking-wide uppercase">
                        {exp.org}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>

                    <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                      <span className="mx-1">•</span>
                      <span>{exp.location}</span>
                    </div>

                    <p className="text-slate-300 leading-relaxed text-sm">
                      {exp.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
