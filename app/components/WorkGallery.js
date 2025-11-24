// app/components/WorkGallery.js
"use client";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCcw,
} from "lucide-react";
import Image from "next/image";

const galleryItems = [
  {
    id: 1,
    title: "ARDHI GALLERY",
    category: "DIGITAL ART",
    date: "NOV 2023",
    description:
      "Showcased two pieces in abstract and digital artists exhibition",
    images: ["/gallery/ardhi1.png", "/gallery/ardhi2.png"],
  },
  {
    id: 2,
    title: "TYPOGRAPHY PROJECT",
    category: "TYPOGRAPHY DESIGN",
    date: "2025",
    description: "Exploration of typography in modern design",
    images: [
      "/gallery/type2.jpg",
      "/gallery/type.jpg",
      "/gallery/type3.jpg",
      "/gallery/type4.png",
      "/gallery/type5.jpg",
    ],
  },
  {
    id: 3,
    title: "JOAN OF ARC",
    category: "DIGITAL DESIGN",
    date: "2024",
    description:
      "A project exploring Joan of Arc (a historical figure) in modern art",
    images: [
      "/gallery/joan1.png",
      "/gallery/joan2.png",
      "/gallery/joan3.png",
      "/gallery/joan4.png",
      "/gallery/joan5.png",
      "/gallery/joan6.png",
    ],
  },
  {
    id: 4,
    title: "SWAP CIRCLE",
    category: "POSTER DESIGN",
    date: "2025",
    description: "Poster for the swap circle event at Chimek Restaurant",
    images: ["/gallery/korea_swap.png"],
  },
  {
    id: 5,
    title: "SWAP CIRCLE",
    category: "POSTER DESIGN",
    date: "2022",
    description: "Promotional poster for swap circle kisumu",
    images: ["/gallery/swp_kisumu.png"],
  },
  {
    id: 6,
    title: "PHOTO MANIPULATION",
    category: "DIGITAL ART",
    date: "2025",
    description: "Advanced photo editing and retouching projects",
    images: ["/gallery/ECLIPSE_.jpg", "/gallery/godfaces.png"],
  },
  {
    id: 7,
    title: "COLLAGE ART",
    category: "DIGITAL COLLAGE DESIGN",
    date: "2022",
    description: "Using mixed media to create unique visual stories",
    images: ["/gallery/ardhi2.png"],
  },
  {
    id: 8,
    title: "DIGITAL ILLUSTRATION",
    category: "ART",
    date: "2025",
    description: "Self-initiated illustration projects",
    images: ["/gallery/PRELUDE_1_.jpg", "/gallery/sky_.png"],
  },
  {
    id: 9,
    title: "HIERARCHY PROJECT",
    category: "HIERARCHY DESIGN",
    date: "2025",
    description: "A project showcasing design hierarchy principles",
    images: [
      "/gallery/hierachy2.png",
      "/gallery/hierachy.png",
      "/gallery/hierachy3.png",
      "/gallery/hierachy4.png",
      "/gallery/hierachy5.png",
    ],
  },
  {
    id: 10,
    title: "PAWA254 EXHIBITION",
    category: "CONTEMPORARY ART",
    date: "AUG 2024",
    description: "Presented work in curated showcase of Kenyan artists",
    images: ["/gallery/pawa254.png"],
  },
  {
    id: 11,
    title: "MOCKUPS",
    category: "DESIGN",
    date: "2024",
    description: "Various branding and product mockups",
    images: ["/gallery/mockup.png"],
  },
  {
    id: 12,
    title: "RUAKA SHOPING MALL BRANDING",
    category: "BRANDING AND LOGO DESIGN",
    date: "2025",
    description:
      "Concept mockups, brand guideline and logo design for the proposed mall",
    images: [
      "/gallery/1.png",
      "/gallery/2.png",
      "/gallery/3.png",
      "/gallery/4.png",
      "/gallery/5.png",
      "/gallery/6.png",
      "/gallery/7.png",
      "/gallery/8.png",
      "/gallery/9.png",
      "/gallery/10.png",
      "/gallery/11.png",
      "/gallery/12.png",
      "/gallery/13.png",
      "/gallery/14.png",
      "/gallery/15.png",
      "/gallery/16.png",
    ],
  },
  {
    id: 13,
    title: "CONCEPT ART",
    category: "DIGITAL ART",
    date: "2025",
    description: "Concept art pieces for various projects",
    images: ["/gallery/perfect.jpg"],
  },
];

export default function WorkGallery() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  const openModal = (index) => {
    setSelectedItem(galleryItems[index]);
    setCurrentIndex(index);
    setCurrentImageIndex(0);
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  const closeModal = () => setSelectedItem(null);

  const nextItem = () => {
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    setCurrentIndex(nextIndex);
    setSelectedItem(galleryItems[nextIndex]);
    setCurrentImageIndex(0);
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  const prevItem = () => {
    const prevIndex =
      (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setCurrentIndex(prevIndex);
    setSelectedItem(galleryItems[prevIndex]);
    setCurrentImageIndex(0);
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  const nextImage = () => {
    if (selectedItem) {
      const nextIndex = (currentImageIndex + 1) % selectedItem.images.length;
      setCurrentImageIndex(nextIndex);
      setZoomLevel(1);
      setPosition({ x: 0, y: 0 });
    }
  };

  const prevImage = () => {
    if (selectedItem) {
      const prevIndex =
        (currentImageIndex - 1 + selectedItem.images.length) %
        selectedItem.images.length;
      setCurrentImageIndex(prevIndex);
      setZoomLevel(1);
      setPosition({ x: 0, y: 0 });
    }
  };

  const zoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.5, 3));
  };

  const zoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.5, 1));
    if (zoomLevel <= 1) {
      setPosition({ x: 0, y: 0 });
    }
  };

  const resetZoom = () => {
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setStartPosition({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && zoomLevel > 1) {
      const newX = e.clientX - startPosition.x;
      const newY = e.clientY - startPosition.y;

      const container = imageRef.current?.parentElement;
      if (container) {
        const containerRect = container.getBoundingClientRect();
        const maxX = (containerRect.width * (zoomLevel - 1)) / 2;
        const maxY = (containerRect.height * (zoomLevel - 1)) / 2;

        setPosition({
          x: Math.max(Math.min(newX, maxX), -maxX),
          y: Math.max(Math.min(newY, maxY), -maxY),
        });
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const selectImage = (index) => {
    setCurrentImageIndex(index);
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
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
                    {/* Actual Image - Show first image as thumbnail */}
                    <div className="w-full h-64 relative border border-gray-400">
                      <Image
                        src={item.images[0]}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {/* Multiple Images Badge */}
                      {item.images.length > 1 && (
                        <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 font-tech">
                          +{item.images.length - 1}
                        </div>
                      )}
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
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-6"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white terminal-border max-w-5xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-1">
                <div className="border-2 border-black bg-white">
                  {/* Header with Description */}
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1 max-w-2xl">
                        <h3 className="text-2xl font-tech font-bold mb-2 text-black">
                          {selectedItem.title}
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                          <p className="text-gray-600 font-tech">
                            {selectedItem.category}
                          </p>
                          <span className="font-tech text-sm bg-black text-white px-3 py-1">
                            {selectedItem.date}
                          </span>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          {selectedItem.description}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2 flex-shrink-0">
                        {/* Zoom Controls */}
                        <div className="flex items-center space-x-1 mr-4">
                          <button
                            onClick={zoomOut}
                            disabled={zoomLevel <= 1}
                            className="p-2 border border-black hover:bg-black hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            title="Zoom Out"
                          >
                            <ZoomOut size={16} />
                          </button>
                          <button
                            onClick={resetZoom}
                            className="p-2 border border-black hover:bg-black hover:text-white transition-colors"
                            title="Reset Zoom"
                          >
                            <RotateCcw size={16} />
                          </button>
                          <button
                            onClick={zoomIn}
                            disabled={zoomLevel >= 3}
                            className="p-2 border border-black hover:bg-black hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            title="Zoom In"
                          >
                            <ZoomIn size={16} />
                          </button>
                        </div>
                        <button
                          onClick={closeModal}
                          className="p-2 hover:bg-black hover:text-white transition-colors border border-black"
                        >
                          <X size={20} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Image Container with Zoom */}
                  <div
                    className="relative h-96 bg-gray-100 border-b border-gray-400 overflow-hidden cursor-move"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                  >
                    <div
                      ref={imageRef}
                      className="w-full h-full flex items-center justify-center"
                      style={{
                        transform: `scale(${zoomLevel}) translate(${position.x}px, ${position.y}px)`,
                        transition: isDragging ? "none" : "transform 0.2s ease",
                        cursor:
                          zoomLevel > 1
                            ? isDragging
                              ? "grabbing"
                              : "grab"
                            : "default",
                      }}
                    >
                      <Image
                        src={selectedItem.images[currentImageIndex]}
                        alt={`${selectedItem.title} - Image ${
                          currentImageIndex + 1
                        }`}
                        width={800}
                        height={600}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>

                    {/* Image Navigation Arrows */}
                    {selectedItem.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white hover:bg-opacity-75 transition-all border border-white"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white hover:bg-opacity-75 transition-all border border-white"
                        >
                          <ChevronRight size={20} />
                        </button>
                      </>
                    )}

                    {/* Image Counter */}
                    {selectedItem.images.length > 1 && (
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-75 text-white text-sm px-3 py-1 font-tech border border-white">
                        {currentImageIndex + 1} / {selectedItem.images.length}
                      </div>
                    )}
                  </div>

                  {/* Thumbnail Gallery */}
                  {selectedItem.images.length > 1 && (
                    <div className="p-4 border-b border-gray-200 bg-gray-50">
                      <div className="flex space-x-2 overflow-x-auto pb-2">
                        {selectedItem.images.map((image, index) => (
                          <button
                            key={index}
                            onClick={() => selectImage(index)}
                            className={`flex-shrink-0 w-16 h-16 relative border-2 transition-all ${
                              index === currentImageIndex
                                ? "border-black bg-black"
                                : "border-gray-300 hover:border-gray-600"
                            }`}
                          >
                            <Image
                              src={image}
                              alt={`Thumbnail ${index + 1}`}
                              fill
                              className="object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Footer */}
                  <div className="p-4 bg-gray-50">
                    <div className="flex justify-between items-center">
                      <div className="text-xs text-gray-500 font-tech">
                        {selectedItem.images.length > 1 && (
                          <span className="mr-4">
                            Images: {currentImageIndex + 1}/
                            {selectedItem.images.length}
                          </span>
                        )}
                        Zoom: {Math.round(zoomLevel * 100)}%{" "}
                        {zoomLevel > 1 && "• Drag to pan"}
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={prevItem}
                          className="p-2 border border-black hover:bg-black hover:text-white transition-colors"
                          title="Previous Project"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button
                          onClick={nextItem}
                          className="p-2 border border-black hover:bg-black hover:text-white transition-colors"
                          title="Next Project"
                        >
                          <ChevronRight size={20} />
                        </button>
                      </div>
                    </div>
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
