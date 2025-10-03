import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-12">
      <div className="grid md:grid-cols-1 gap-8 items-center">
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-primary font-medium">Hi, I'm</p>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-2">Shrikanth Vilvadrinath</h1>

          <div className="mt-4 text-lg md:text-2xl font-medium"><p>- <tab></tab> 
            <Typewriter
              words={["AI / ML Engineer", "Data Scientist", "Data Analyst", "Vibe Coder", "Music Fanatic", "Gamer"]}
              loop={0}
              typeSpeed={80}
              deleteSpeed={80}
              delaySpeed={1200}
            />
            </p>
          </div>

          <p className="mt-6 text-slate-300 max-w-xl">
            MS in Data Science (University of Maryland). I specialize in building scalable AI/ML solutions, from data pipelines and model development to deployment and interpretability.
          </p>

          <div className="mt-6 flex gap-4">
            <a href="#projects" className="px-5 py-2 bg-primary/90 rounded-md font-medium">
              View Projects
            </a>
            <a href="/shrikanth_resume.pdf" className="px-5 py-2 border rounded-md">
              Download Resume
            </a>
          </div>
        </motion.div>

      
      </div>
    </section>
  );
}
