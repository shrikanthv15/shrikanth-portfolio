import React from "react";

const experiences = [
  {
    role: "AI Technical Intern",
    org: "NV Rad Imaging - Tampa, Florida, US",
    period: "May, 2025 - August, 2025",
    desc: "Developed a radiology assistant using LLMs (Ollama, LangChain, Flask) to analyze diagnostic PDFs. Enhanced interpretability with AI-driven highlighting and explanations, reducing manual parsing time by ~40%.",
  },
  {
    role: "AI Research Intern",
    org: "AI Himalaya Labs - Remote, India",
    period: "Feb, 2024 - April, 2024",
    desc: "Designed and deployed full-stack AI products (React, Flask, SQL) and contributed to generative AI solutions under the guidance of Ethereum Partner Arifa Khan. Gained exposure to scaling AI systems in production..",
  },
  {
    role: "Python developer",
    org: "Fx31 Labs (Formerly Fractal31) - Ahmedabad, India",
    period: "March, 2023 - August, 2023",
    desc: "Built robotic simulations using Godot, Blender, and Python for prototyping robotic hardware. Developed middleware to integrate user input with robotic actuators, improving simulation-to-hardware integration."  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-12">
      <h2 className="text-2xl font-bold">Experience</h2>
      <div className="mt-6 space-y-4">
        {experiences.map((e, i) => (
          <div key={i} className="p-4 bg-[rgba(255,255,255,0.02)] rounded-lg border border-white/6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">{e.role}</h3>
                <p className="text-sm text-slate-400">{e.org}</p>
              </div>
              <div className="text-sm text-slate-400">{e.period}</div>
            </div>
            <p className="mt-3 text-slate-300 text-sm">{e.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
