// app/components/Experience.js
"use client";
import { motion } from "framer-motion";
import { Code, Palette, Database, Smartphone } from "lucide-react";

const skills = [
  { name: "Adobe Photoshop", icon: Palette, level: 90 },
  { name: "Adobe Illustrator", icon: Palette, level: 85 },
  { name: "Figma", icon: Smartphone, level: 88 },
  { name: "UI/UX Design", icon: Smartphone, level: 85 },
  { name: "Front End Development", icon: Code, level: 80 },
  { name: "Database Management", icon: Database, level: 75 },
];

const experiences = [
  {
    year: "2023",
    title: "Web Design & Development Intern",
    company: "CHAK (Christian Health Association of Kenya)",
    description:
      "Developed HMIS system, handled UI/UX design, and created marketing materials",
  },
  {
    year: "2022",
    title: "Graphic Designer",
    company: "SWAP CIRCLE",
    description: "Created promotional graphics and edited event photos",
  },
  {
    year: "2020",
    title: "Independent Projects",
    company: "Freelance",
    description:
      "Self-taught proficiency in design software and initiated various design projects",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-white/5">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-center mb-16 gradient-text"
        >
          SKILLS & EXPERIENCE
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skills */}
          <div>
            <h3 className="text-3xl font-bold mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="creative-border rounded-xl p-1"
                >
                  <div className="bg-dark rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <skill.icon className="text-primary" size={24} />
                        <span className="font-semibold text-lg">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-primary font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-3xl font-bold mb-8">Professional Journey</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="creative-border rounded-xl p-1"
                >
                  <div className="bg-dark rounded-xl p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-xl font-bold text-primary">
                          {exp.year}
                        </h4>
                        <h5 className="text-lg font-semibold">{exp.title}</h5>
                        <p className="text-secondary font-medium">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-300">{exp.description}</p>
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
