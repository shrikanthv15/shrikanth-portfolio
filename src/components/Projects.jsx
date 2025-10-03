import React from "react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-12">
      <h2 className="text-2xl font-bold">Projects</h2>
      <p className="mt-2 text-slate-400">A selection of projects showcasing my AI/ML and full-stack work.</p>

      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
