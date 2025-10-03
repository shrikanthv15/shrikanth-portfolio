import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-darkbg">
      <Navbar />
      <main className="container px-6 py-12">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
