import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-[90vh] flex items-center pt-20">
      <div className="grid md:grid-cols-1 gap-8 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-cyan-400 uppercase bg-cyan-500/10 rounded-full border border-cyan-500/20">
            Available for Hire
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-white">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Shrikanth Vilvadrinath
            </span>
          </h1>

          <div className="mt-6 text-xl md:text-2xl text-slate-400 font-light h-[40px]">
            <span>I am a </span>
            <span className="text-slate-100 font-semibold">
              <Typewriter
                words={["AI / ML Engineer", "Data Scientist", "Data Analyst", "Vibe Coder", "Music Fanatic", "Gamer"]}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </div>

          <p className="mt-8 text-lg text-slate-400 max-w-2xl leading-relaxed">
            MS in Data Science (University of Maryland). I specialize in building scalable AI/ML solutions,
            transforming complex data into actionable insights, and crafting intelligent systems that drive real-world impact.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-full transition-all transform hover:scale-105"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/shrikanth_resume.pdf"
              target="_blank"
              className="flex items-center gap-2 px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-full transition-all"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-1/2 bg-gradient-to-b from-cyan-500/20 to-purple-500/20 blur-[100px] -z-10" />
    </section>
  );
}
