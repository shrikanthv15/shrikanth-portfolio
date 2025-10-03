import React from "react";
import { motion } from "framer-motion";

const education = [
  {
    degree: "Master of Science in Data Science",
    institution: "University of Maryland, College Park",
    period: "August 2024 -  May 2026",
    gpa: "4.0/4.0",
    location: "College Park, MD, USA",
    achievements: [
      "Member of Code: Black at University of Maryland-College Park, fostering a culture of coding and collaboration"
    ]
  },
  {
    degree: "Bachelor of Science in Data Science and Programming",
    institution: "Indian Institute of Technology (IIT) - Madras",
    period: "Jan 2021 - Dec 2024",
    gpa: "3.5/4",
    location: "Chennai, India",
    achievements: [
      "Python, DSA Competition Rank 5 in Programming Competition conducted by IITM Madras BSc Programming, Data Structures And Algorithms using Python course.",
      "NumPy Library Successfully completed Online Proctored Exam for Machine Learning Techniques and Displaying Proficiency in NumPy Library",
      "Core member of the Discourse Forum and Discord Help Team at IIT Madras, providing guidance to peers and enhancing community engagement",
    ]
  },
  {
    degree: "Bachelor Of Engineering in Electronics and Communication",
    institution: "Vishwakarma Government Engineering College",
    period: "September 2020 -  June 2024",
    gpa: "3.5/4.0",
    location: "Ahmedabad, India",
    achievements: [
      "Core Media Team Member Co-led the creation and editorial process of college and departmental newspapers, resulting in improved content quality and increased readership",
      
    ]
  }
];

export default function Education() {
  return (
    <section id="education" className="py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold">Education</h2>
        <div className="mt-6 space-y-6">
          {education.map((edu, i) => (
            <div key={i} className="p-6 bg-[rgba(255,255,255,0.02)] rounded-lg border border-white/6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-primary">{edu.degree}</h3>
                  <p className="text-slate-300 font-medium">{edu.institution}</p>
                  <p className="text-sm text-slate-400">{edu.location}</p>
                </div>
                <div className="mt-2 md:mt-0 md:text-right">
                  <div className="text-sm text-slate-400">{edu.period}</div>
                  <div className="text-sm font-medium text-primary">GPA: {edu.gpa}</div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-1 gap-4 mt-4">
               
                
                <div>
                  <h4 className="text-sm font-semibold text-slate-200 mb-2">Achievements</h4>
                  <ul className="space-y-1">
                    {edu.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-xs text-slate-300 flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
