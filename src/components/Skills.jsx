import React from "react";

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
    <section id="skills" className="py-12">
      <h2 className="text-2xl font-bold">Skills</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {skills.map((s) => (
          <div key={s.category} className="p-4 bg-[rgba(255,255,255,0.02)] rounded-lg">
            <h4 className="font-semibold">{s.category}</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {s.items.map((i) => (
                <span key={i} className="text-xs px-2 py-1 bg-white/3 rounded">
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
