// app/components/Contact.js
"use client";
import { motion } from "framer-motion";
import { Mail, Phone, Instagram, ExternalLink, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 bg-black text-white">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-tech font-bold text-center mb-12 terminal-glitch"
        >
          LET'S COLLABORATE
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-tech font-bold mb-6 border-b border-white pb-2">
              GET IN TOUCH
            </h3>

            <div className="terminal-border bg-white p-1 hover:translate-x-1 transition-transform">
              <div className="bg-black p-4 flex items-center space-x-3">
                <Mail className="text-white" size={18} />
                <div>
                  <a
                    href="mailto:albertkaimenyi254@gmail.com"
                    className="font-tech text-sm hover:underline transition-all"
                  >
                    albertkaimenyi254@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="terminal-border bg-white p-1 hover:translate-x-1 transition-transform">
              <div className="bg-black p-4 flex items-center space-x-3">
                <Phone className="text-white" size={18} />
                <div>
                  <a
                    href="tel:+254702519938"
                    className="font-tech text-sm hover:underline transition-all"
                  >
                    +254 702 519 938
                  </a>
                </div>
              </div>
            </div>

            {/* <div className="terminal-border bg-white p-1 hover:translate-x-1 transition-transform">
              <div className="bg-black p-4 flex items-center space-x-3">
                <Instagram className="text-white" size={18} />
                <div>
                  <a
                    href="https://www.instagram.com/lucid.craft_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-tech text-sm hover:underline transition-all flex items-center space-x-2"
                  >
                    <span>@lucid.craft</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>

            <div className="terminal-border bg-white p-1 hover:translate-x-1 transition-transform">
              <div className="bg-black p-4 flex items-center space-x-3">
                <ExternalLink className="text-white" size={18} />
                <div>
                  <a
                    href="https://www.kaleido.art/links/alberKay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-tech text-sm hover:underline transition-all flex items-center space-x-2"
                  >
                    <span>Kaleido Portfolio</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div> */}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="terminal-border bg-white p-1"
          >
            <div className="bg-black p-6">
              <h3 className="text-xl font-tech font-bold mb-6 border-b border-white pb-2">
                SEND MESSAGE
              </h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="YOUR NAME"
                    className="w-full bg-white text-black font-tech text-sm px-4 py-3 border border-white focus:outline-none focus:border-gray-400 transition-colors placeholder-gray-600"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="YOUR EMAIL"
                    className="w-full bg-white text-black font-tech text-sm px-4 py-3 border border-white focus:outline-none focus:border-gray-400 transition-colors placeholder-gray-600"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="YOUR MESSAGE"
                    rows="4"
                    className="w-full bg-white text-black font-tech text-sm px-4 py-3 border border-white focus:outline-none focus:border-gray-400 transition-colors resize-none placeholder-gray-600"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white text-black font-tech font-bold py-3 border border-white hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send size={16} />
                  <span>SEND MESSAGE</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Quick Links Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12 pt-8 border-t border-gray-700"
        >
          <div className="flex justify-center space-x-6 text-sm font-tech">
            <a href="#work" className="hover:underline transition-all">
              WORK
            </a>
            <a href="#experience" className="hover:underline transition-all">
              SKILLS
            </a>
            <a href="#contact" className="hover:underline transition-all">
              CONTACT
            </a>
          </div>
          <p className="text-gray-400 text-xs mt-4 font-tech">
            © 2026 ALBERT KAIMENYI. NAIROBI, KENYA
          </p>
        </motion.div>
      </div>
    </section>
  );
}
