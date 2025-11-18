// app/components/Experience.js
"use client";
import { motion } from "framer-motion";
import { Palette, Film, Smartphone } from "lucide-react";

const skills = [
  { name: "Adobe Photoshop", icon: Palette, level: 90 },
  { name: "Adobe Illustrator", icon: Palette, level: 85 },
  { name: "Premier Pro", icon: Film, level: 80 },
  { name: "Lightroom", icon: Palette, level: 88 },
  { name: "Figma", icon: Smartphone, level: 85 },
  { name: "UI/UX Design", icon: Smartphone, level: 85 },
];

const experiences = [
  {
    year: "2023 - Present",
    title: "Web Design & Development ",
    company: "CHAK",
    description: "Developed HMIS system UI/UX and marketing materials",
  },
  {
    year: "2022 - Present",
    title: "Graphic Designer",
    company: "SWAP CIRCLE",
    description:
      "Created promotional graphics and posters for the swap circle events",
  },
  {
    year: "2020 - Present",
    title: "Independent Projects",
    company: "Freelance",
    description: "Self-taught design software and personal projects",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-tech font-bold text-center mb-12 text-black terminal-glitch"
        >
          SKILLS & EXPERIENCE
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Skills */}
          <div>
            <h3 className="text-xl font-tech font-bold mb-6 text-black border-b border-black pb-2">
              TECHNICAL SKILLS
            </h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{
                    scale: 1.02,
                    y: -2,
                    transition: { duration: 0.2 },
                  }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="terminal-border bg-white p-1 cursor-pointer group"
                >
                  <div className="bg-white p-3 group-hover:bg-gray-50 transition-colors duration-200">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <skill.icon
                          className="text-black group-hover:scale-110 transition-transform duration-200"
                          size={18}
                        />
                        <span className="font-tech text-sm text-black group-hover:font-bold transition-all duration-200">
                          {skill.name}
                        </span>
                      </div>
                      <span className="font-tech text-xs bg-black text-white px-2 py-1 group-hover:bg-gray-800 transition-colors duration-200">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 group-hover:bg-gray-300 transition-colors duration-200">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        className="bg-black h-2 rounded-full group-hover:bg-gray-800 transition-colors duration-200"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-xl font-tech font-bold mb-6 text-black border-b border-black pb-2">
              EXPERIENCE
            </h3>
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{
                    scale: 1.02,
                    y: -2,
                    transition: { duration: 0.2 },
                  }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="terminal-border bg-white p-1 cursor-pointer group"
                >
                  <div className="bg-white p-4 group-hover:bg-gray-50 transition-colors duration-200">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-tech font-bold text-black text-sm group-hover:text-gray-800 transition-colors duration-200">
                          {exp.year}
                        </h4>
                        <h5 className="font-tech text-black text-base mb-1 group-hover:font-bold transition-all duration-200">
                          {exp.title}
                        </h5>
                        <p className="font-tech text-gray-600 text-xs group-hover:text-gray-700 transition-colors duration-200">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-200">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
