// app/components/Contact.js
"use client";
import { motion } from "framer-motion";
import { Mail, Phone, Instagram, ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-center mb-16 gradient-text"
        >
          LET'S CREATE
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>

            <div className="creative-border rounded-xl p-1">
              <div className="bg-dark rounded-xl p-6 flex items-center space-x-4 hover:bg-white/5 transition-colors">
                <Mail className="text-primary" size={24} />
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href="mailto:albertkaimenyi254@gmail.com"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    albertkaimenyi254@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="creative-border rounded-xl p-1">
              <div className="bg-dark rounded-xl p-6 flex items-center space-x-4 hover:bg-white/5 transition-colors">
                <Phone className="text-secondary" size={24} />
                <div>
                  <p className="font-semibold">Phone</p>
                  <a
                    href="tel:+254702519938"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    +254 702 519 938
                  </a>
                </div>
              </div>
            </div>

            <div className="creative-border rounded-xl p-1">
              <div className="bg-dark rounded-xl p-6 flex items-center space-x-4 hover:bg-white/5 transition-colors">
                <Instagram className="text-accent" size={24} />
                <div>
                  <p className="font-semibold">Portfolio</p>
                  <a
                    href="https://www.instagram.com/lucid.craft"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2"
                  >
                    <span>@lucid.craft</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>

            <div className="creative-border rounded-xl p-1">
              <div className="bg-dark rounded-xl p-6 flex items-center space-x-4 hover:bg-white/5 transition-colors">
                <ExternalLink className="text-primary" size={24} />
                <div>
                  <p className="font-semibold">Kaleido Portfolio</p>
                  <a
                    href="https://www.kaleido.art/links/alberKay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2"
                  >
                    <span>View on Kaleido</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="creative-border rounded-2xl p-1"
          >
            <div className="bg-dark rounded-2xl p-8">
              <h3 className="text-3xl font-bold mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-white/10 rounded-xl px-4 py-3 border border-white/20 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-white/10 rounded-xl px-4 py-3 border border-white/20 focus:border-secondary focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows="5"
                    className="w-full bg-white/10 rounded-xl px-4 py-3 border border-white/20 focus:border-accent focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  SEND MESSAGE
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
