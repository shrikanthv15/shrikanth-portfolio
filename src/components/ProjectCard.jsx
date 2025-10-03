import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div whileHover={{ y: -6 }} className="p-5 bg-[rgba(255,255,255,0.02)] rounded-xl border border-white/6">
      <h3 className="font-semibold text-lg">{project.title}</h3>
      <p className="mt-2 text-slate-400 text-sm">{project.short}</p>
      <p className="mt-3 text-slate-300 text-sm">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="text-xs px-2 py-1 bg-white/3 rounded">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-3">
        <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm">
          <FaGithub /> GitHub
        </a>
        <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm">
          <FaExternalLinkAlt /> Demo
        </a>
      </div>
    </motion.div>
  );
}
