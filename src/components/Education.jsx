import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const education = [
  {
    degree: "Master of Science in Data Science",
    institution: "University of Maryland, College Park",
    period: "August 2024 - May 2026",
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
      "Rank 5 in Programming Competition (DSA using Python)",
      "Successfully completed Online Proctored Exam for Machine Learning Techniques",
      "Core member of the Discourse Forum and Discord Help Team"
    ]
  },
  {
    degree: "Bachelor Of Engineering in Electronics and Communication",
    institution: "Vishwakarma Government Engineering College",
    period: "September 2020 - June 2024",
    gpa: "3.5/4.0",
    location: "Ahmedabad, India",
    achievements: [
      "Co-led the creation and editorial process of college and departmental newspapers"
    ]
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Education
          </span>
        </h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-slate-900/50 border border-white/10 rounded-2xl hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <GraduationCap className="text-cyan-400" size={24} />
                    <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  </div>
                  <p className="text-lg text-slate-300 font-medium pl-9">{edu.institution}</p>
                </div>

                <div className="flex flex-col md:items-end gap-1 text-slate-400 text-sm pl-9 md:pl-0">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} />
                    <span>{edu.location}</span>
                  </div>
                  <div className="text-cyan-400 font-semibold mt-1">GPA: {edu.gpa}</div>
                </div>
              </div>

              <div className="pl-9">
                <h4 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wider">Achievements</h4>
                <ul className="space-y-2">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-300 text-sm leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-cyan-500 rounded-full flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
