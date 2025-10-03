import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <h2 className="text-2xl font-bold">About me</h2>
        <div className="mt-2 max-w-250">
          <p className="text-slate-250">
          I’m an AI/ML Engineer with an MS in Data Science from the University of Maryland. My expertise spans NLP, computer vision, time-series forecasting, and LLM applications. I focus on building production-ready machine learning systems with an emphasis on interpretability, scalability, and real-world impact.
          </p>
          
        </div>
      </motion.div>
    </section>
  );
}
