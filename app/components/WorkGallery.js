// app/components/WorkGallery.js
"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    title: "ARDHI GALLERY",
    category: "DIGITAL ART",
    date: "NOV 2023",
    description:
      "Showcased two pieces in abstract and digital artists exhibition",
  },
  {
    id: 2,
    title: "PAWA254 EXHIBITION",
    category: "CONTEMPORARY ART",
    date: "AUG 2024",
    description: "Presented work in curated showcase of Kenyan artists",
  },
  {
    id: 3,
    title: "HMIS SYSTEM",
    category: "UI/UX DESIGN",
    date: "2023",
    description: "Hospital Management Information System interface design",
  },
  {
    id: 4,
    title: "BRAND IDENTITY",
    category: "LOGO DESIGN",
    date: "2023",
    description: "Modern typography and brand identity projects",
  },
  {
    id: 5,
    title: "EVENT POSTERS",
    category: "GRAPHIC DESIGN",
    date: "2022",
    description: "Promotional materials for SWAP CIRCLE events",
  },
  {
    id: 6,
    title: "PHOTO MANIPULATION",
    category: "DIGITAL ART",
    date: "2022",
    description: "Advanced photo editing and retouching projects",
  },
  {
    id: 7,
    title: "SOCIAL MEDIA",
    category: "DIGITAL DESIGN",
    date: "2023",
    description: "Vibrant graphics for online presence",
  },
  {
    id: 8,
    title: "DIGITAL ILLUSTRATION",
    category: "ART",
    date: "2023",
    description: "Self-initiated illustration projects",
  },
  {
    id: 9,
    title: "WEB COMPONENTS",
    category: "FRONTEND",
    date: "2023",
    description: "UI components and web interfaces",
  },
  {
    id: 10,
    title: "MARKETING MATERIALS",
    category: "PRINT DESIGN",
    date: "2023",
    description: "Posters, banners and pamphlets for CHAK",
  },
  {
    id: 11,
    title: "TYPOGRAPHY",
    category: "DESIGN",
    date: "2023",
    description: "Modern font and type design exploration",
  },
  {
    id: 12,
    title: "PORTFOLIO WORK",
    category: "MIXED MEDIA",
    date: "2024",
    description: "Various personal and client projects",
  },
];

export default function WorkGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setSelectedImage(galleryItems[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => setSelectedImage(null);

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryItems[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex =
      (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryItems[prevIndex]);
  };

  return (
    <section id="work" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-tech font-bold text-center mb-16 text-black terminal-glitch"
        >
          MY WORK
        </motion.h2>

        {/* 4 rows of 3 items each */}
        <div className="space-y-8">
          {[0, 1, 2, 3].map((row) => (
            <motion.div
              key={row}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: row * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {galleryItems.slice(row * 3, row * 3 + 3).map((item, index) => (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="terminal-border bg-white cursor-pointer group"
                  onClick={() => openModal(row * 3 + index)}
                >
                  <div className="p-1 border-2 border-white group-hover:border-black transition-colors">
                    {/* Image Placeholder */}
                    <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center border border-gray-400">
                      <div className="text-center">
                        <div className="text-black font-tech text-lg mb-2">
                          {item.title}
                        </div>
                        <div className="text-gray-600 text-sm">
                          {item.category}
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border-t border-gray-200">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-tech font-bold text-black">
                          {item.title}
                        </h3>
                        <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1">
                          {item.date}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700">{item.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-6"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white terminal-border max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-1">
                <div className="border-2 border-black bg-white p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-tech font-bold mb-2 text-black">
                        {selectedImage.title}
                      </h3>
                      <p className="text-gray-600 font-tech">
                        {selectedImage.category}
                      </p>
                    </div>
                    <button
                      onClick={closeModal}
                      className="p-2 hover:bg-black hover:text-white transition-colors border border-black"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  <div className="bg-gray-100 border border-gray-400 h-96 mb-6 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-tech text-black mb-4">
                        {selectedImage.title}
                      </div>
                      <div className="text-gray-600">
                        {selectedImage.description}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <p className="text-gray-700">{selectedImage.description}</p>
                    <span className="font-tech text-sm bg-black text-white px-3 py-1">
                      {selectedImage.date}
                    </span>
                  </div>

                  <div className="flex justify-between mt-6">
                    <button
                      onClick={prevImage}
                      className="p-2 border border-black hover:bg-black hover:text-white transition-colors"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="p-2 border border-black hover:bg-black hover:text-white transition-colors"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
