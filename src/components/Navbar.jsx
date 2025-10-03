import React from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-darkbg/70 backdrop-blur-sm fixed w-full z-40 top-0">
      <div className="container px-6 py-3 flex items-center justify-between">
        <div className="text-xl font-bold">
          Shrikanth<span className="text-primary">.</span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-slate-200 font-semibold text-lg">
          <Link to="home" smooth={true} offset={-70} className="cursor-pointer">
            Home
          </Link>
          <Link to="about" smooth={true} offset={-70} className="cursor-pointer">
            About
          </Link>
          <Link to="projects" smooth={true} offset={-70} className="cursor-pointer">
            Projects
          </Link>
          <Link to="experience" smooth={true} offset={-70} className="cursor-pointer">
            Experience
          </Link>
          <Link to="education" smooth={true} offset={-70} className="cursor-pointer">
            Education
          </Link>
          <Link to="skills" smooth={true} offset={-70} className="cursor-pointer">
            Skills
          </Link>
          <Link to="contact" smooth={true} offset={-70} className="cursor-pointer">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-3 text-slate-200">
          <a href="https://github.com/shrikanthv15" target="_blank" rel="noreferrer" aria-label="github">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/shrikanth-vilvadrinath-949837168/" target="_blank" rel="noreferrer" aria-label="linkedin">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </nav>
  );
}
