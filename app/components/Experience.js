// app/components/Experience.js
"use client";
import { motion } from "framer-motion";
import { Code2, Globe, Smartphone, Database, Palette, Cpu } from "lucide-react";

const skills = [
  {
    name: "Frontend Development",
    icon: Globe,
    level: 90,
    tech: "React, NextJS, HTML/CSS, Tailwind",
  },
  {
    name: "Backend Development",
    icon: Code2,
    level: 85,
    tech: "Node.js, Express, Django, PHP",
  },
  {
    name: "Mobile Development",
    icon: Smartphone,
    level: 85,
    tech: "Flutter, Dart, React Native",
  },
  {
    name: "Database Management",
    icon: Database,
    level: 80,
    tech: "MongoDB, SQL, PostgreSQL",
  },
  {
    name: "Programming Languages",
    icon: Cpu,
    level: 88,
    tech: "JavaScript, TypeScript, Python, Java, C++",
  },
  {
    name: "UI/UX & Design Tools",
    icon: Palette,
    level: 85,
    tech: "Figma, Adobe Suite, Tailwind, ChakraUI",
  },
];

const experiences = [
  {
    year: "Jan 2024 - Present",
    title: "Assistant Developer",
    company: "Christian Health Association of Kenya (CHAK)",
    description:
      "Developing CHMIS (Hospital Management Information System) with Next.js & TailwindCSS. Handling frontend UI/UX design and creating marketing materials. Currently leading mobile app development with Flutter.",
  },
  {
    year: "Jan 2023 - Jun 2023",
    title: "Full-Stack Developer",
    company: "Find n Dine Restaurant App",
    description:
      "Individually built a restaurant locating application using React JS and MongoDB. Implemented GPS functionality and restaurant upload features.",
  },
  {
    year: "Feb 2022 - May 2022",
    title: "Chatroom App Developer",
    company: "Kenyatta University Project",
    description:
      "Collaborated in a team of 3 to develop a real-time chatroom with NodeJS. Implemented bad-word filtering and optimized application performance.",
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
              TECHNICAL EXPERTISE
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
                        <div>
                          <span className="font-tech text-sm text-black group-hover:font-bold transition-all duration-200 block">
                            {skill.name}
                          </span>
                          <span className="font-tech text-xs text-gray-600 group-hover:text-gray-800 transition-colors duration-200">
                            {skill.tech}
                          </span>
                        </div>
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
              DEVELOPMENT EXPERIENCE
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

              {/* Additional Projects */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="terminal-border bg-black p-1 cursor-pointer group"
              >
                <div className="bg-black p-4 group-hover:bg-gray-900 transition-colors duration-200">
                  <h5 className="font-tech text-white text-base mb-2 group-hover:font-bold transition-all duration-200">
                    Additional Personal Projects
                  </h5>
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-200">
                    Music streaming app (JavaScript), Portfolio websites, and
                    multiple open-source contributions on GitHub showcasing
                    expertise in React, Node.js, and full-stack development.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
