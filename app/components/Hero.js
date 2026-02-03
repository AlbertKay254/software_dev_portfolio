// app/components/Hero.js
"use client";
import { motion } from "framer-motion";
import { ChevronDown, Mail, Instagram, CameraIcon } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen bg-white pixel-grid">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20">
          {/* Left Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 mb-12 lg:mb-0"
          >
            <div className="terminal-border bg-white p-4 max-w-md mx-auto">
              <div className="border-2 border-black p-2 bg-gray-100">
                {/* Profile Image Placeholder - Replace with actual image */}
                <div className="w-full h-96 bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center border border-black">
                  <img
                    src="/portfolio.jpg"
                    alt="Albert Kaimenyi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-2 p-2 bg-black text-white text-center text-sm">
                  SOFTWARE DEVELOPER | GRAPHIC DESIGNER
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Brief */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 lg:pl-12"
          >
            <div className="terminal-border bg-white p-8 max-w-lg">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-5xl font-tech font-bold mb-6 text-black terminal-glitch"
              >
                ALBERT
                <br />
                KAIMENYI
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="space-y-4 text-black"
              >
                <p className="text-lg leading-relaxed border-l-4 border-black pl-4">
                  As a software developer, I specialize in modern full-stack
                  development, creating both web and mobile platforms for
                  healthcare management. I bring ideas to life with robust,
                  user-centered solutions.
                </p>

                <p className="text-sm text-gray-700">
                  BSc. Computer Science • Kenyatta University 2019-2024
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  <span className="px-3 py-1 bg-black text-white text-xs border border-black">
                    FULLSTACK
                  </span>
                  <span className="px-3 py-1 bg-black text-white text-xs border border-black">
                    JAVASCRIPT
                  </span>
                  <span className="px-3 py-1 bg-black text-white text-xs border border-black">
                    FLUTTER
                  </span>
                  <span className="px-3 py-1 bg-black text-white text-xs border border-black">
                    UI/UX
                  </span>
                  <span className="px-3 py-1 bg-black text-white text-xs border border-black">
                    DATABASE
                  </span>
                </div>
              </motion.div>

              {/* Contact Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex space-x-4 mt-8 pt-6 border-t border-black"
              >
                <a
                  href="mailto:albertkaimenyi254@gmail.com"
                  className="flex items-center space-x-2 text-sm hover:underline"
                >
                  <Mail size={16} />
                  <span>EMAIL</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/albert-kaimenyi-98197326b/"
                  className="flex items-center space-x-2 text-sm hover:underline"
                >
                  <Instagram size={16} />
                  <span>linkedin</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="animate-bounce w-6 h-6 text-black" />
        </motion.div>
      </div>
    </section>
  );
}
