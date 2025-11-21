import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Programming & Core",
    items: ["Python", "JavaScript", "SQL", "C", "Java"]
  },
  {
    category: "Machine Learning & AI",
    items: ["NLP", "Computer Vision", "Time Series Forecasting", "Model Interpretability", "LLMs", "Fine-Tuning"]
  },
  {
    category: "Frameworks & Libraries",
    items: ["PyTorch", "TensorFlow", "Hugging Face", "LangChain", "Ollama", "scikit-learn"]
  },
  {
    category: "Data Engineering & Tools",
    items: ["Pandas", "NumPy", "Postgres", "FastAPI", "Flask"]
  },
  {
    category: "Cloud & DevOps",
    items: ["Docker", "AWS", "Git", "CI/CD", "Jira"]
  },
  {
    category: "Simulation & Robotics",
    items: ["Godot", "Blender", "Microcontrollers (FeatherS3)"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Technical Skills
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s, index) => (
            <motion.div
              key={s.category}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-slate-900/50 border border-white/10 rounded-2xl hover:border-cyan-500/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]"
            >
              <h4 className="text-lg font-semibold text-cyan-400 mb-4 border-b border-white/5 pb-2">
                {s.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 bg-white/5 text-slate-300 rounded-full border border-white/5 hover:bg-cyan-500/10 hover:text-cyan-300 hover:border-cyan-500/30 transition-all cursor-default"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
