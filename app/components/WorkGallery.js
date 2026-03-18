// app/components/WorkGallery.js
"use client";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Smartphone,
  Globe,
  Database,
  Code2,
  Server,
} from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "CHMIS Hospital Management System",
    category: "FULL-STACK DEVELOPMENT",
    date: "Jan 2024 - Present",
    description:
      "Healthcare management system built with Next.js, TailwindCSS, and MongoDB. Features patient records, appointment scheduling, and telemedicine integration.",
    technologies: [
      "Next.js",
      "TailwindCSS",
      "Node.js",
      "MongoDB",
      "TypeScript",
    ],
    images: ["/chmis-landing.png", "/chmis-dashboard.png"],
    github: "https://github.com/AlbertKay254/chmis-landing-page",
    live: "https://chmis.chak.or.ke",
    role: "Lead Developer & UI/UX Designer",
  },
  {
    id: 2,
    title: "CHMIS Mobile Application",
    category: "MOBILE DEVELOPMENT",
    date: "Jan 2025 - Present",
    description:
      "Flutter-based mobile application extending the CHMIS platform to mobile devices. Features patient record management and secure medical data access.",
    technologies: ["Flutter", "Dart", "REST API", "Firebase", "Provider"],
    images: [
      // "/Screenshot 2026-03-03 104030.jpg",
      // "/Screenshot 2026-03-03 104634.jpg",
    ],
    github: "https://github.com/AlbertKay254/CHMIS_Mobile",
    live: null,
    role: "Lead Mobile Developer",
  },
  {
    id: 3,
    title: "Find n Dine Restaurant Locator",
    category: "FULL-STACK WEB APP",
    date: "Jan 2023 - Jun 2023",
    description:
      "Restaurant discovery platform with GPS location and user-submitted restaurant features. Built as a personal project.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Map API"],
    images: [
      "/findndine-home.jpg",
      "/findndine-map.jpg",
      "/findndine-details.jpg",
    ],
    github: "https://github.com/AlbertKay254/find-n-dine",
    live: null,
    role: "Full-Stack Developer",
  },
  {
    id: 4,
    title: "Music Streaming Web Application",
    category: "FRONTEND DEVELOPMENT",
    date: "Jun 2022 - Jul 2022",
    description:
      "Web-based music player that streams music from user's device. Features custom player controls and playlist management.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Web Audio API"],
    images: ["/Screenshot 2026-03-03 105258.jpg"],
    github: "https://github.com/AlbertKay254/kay-movies",
    live: null,
    role: "Frontend Developer",
  },
  {
    id: 5,
    title: "Real-Time Chatroom Application",
    category: "REAL-TIME WEB APP",
    date: "Feb 2022 - May 2022",
    description:
      "Collaborative project building a real-time chat application with bad-word filtering and user authentication.",
    technologies: ["Node.js", "Socket.io", "Express", "MongoDB", "JavaScript"],
    images: ["/Screenshot 2026-03-03 111458.jpg"],
    github: "https://github.com/ngareleo/chatroom-app",
    live: null,
    role: "Backend Developer & Team Member",
  },
  {
    id: 6,
    title: "Personal Portfolio Website",
    category: "REACT APPLICATION",
    date: "Ongoing",
    description:
      "This portfolio website showcasing my projects and skills. Built with Next.js and TailwindCSS.",
    technologies: ["Next.js", "TailwindCSS", "Framer Motion", "React"],
    images: ["/portfolio.jpg", "/Screenshot 2026-03-03 105943.jpg"],
    github: "https://github.com/AlbertKay254/graphic_design_portfolio",
    live: "https://albert-graphic-design-portfolio.vercel.app/",
    role: "Full-Stack Developer",
  },
  {
    id: 7,
    title: "E-commerce Dashboard Concept",
    category: "UI/UX DESIGN & DEVELOPMENT",
    date: "2023",
    description:
      "Admin dashboard concept for e-commerce management with analytics and order processing.",
    technologies: ["React", "Chart.js", "TailwindCSS", "Mock API"],
    images: [
      // "/Screenshot 2026-03-03 110001.jpg",
      // "/Screenshot 2026-03-03 111458.jpg",
    ],
    github: null,
    live: null,
    role: "UI/UX Designer & Developer",
  },
  {
    id: 8,
    title: "API Integration Middleware",
    category: "BACKEND DEVELOPMENT",
    date: "2023",
    description:
      "Custom middleware for integrating third-party APIs with healthcare systems at CHAK.",
    technologies: ["Node.js", "Express", "REST API", "JWT", "Redis"],
    images: ["/chmis-dashboard.png"],
    github: null,
    live: "https://chmis.cbslkenya.co.ke",
    role: "Backend Developer",
  },
  {
    id: 9,
    title: "CHAK Website with WordPress Custom Theme",
    category: "WORDPRESS DEVELOPMENT",
    date: "2022",
    description:
      "Custom WordPress theme developed for the CHAK website with SEO optimization.",
    technologies: ["WordPress", "PHP", "JavaScript", "CSS", "SEO"],
    images: [
      "/Screenshot 2026-03-12 125558.jpg",
      "/Screenshot 2026-03-12 125540.jpg",
    ],
    github: null,
    live: "https://chak.or.ke",
    role: "WordPress Developer",
  },
];

export default function WorkGallery() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  const openModal = (index) => {
    setSelectedProject(projects[index]);
    setCurrentIndex(index);
    setCurrentImageIndex(0);
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  const closeModal = () => setSelectedProject(null);

  const nextProject = () => {
    const nextIndex = (currentIndex + 1) % projects.length;
    setCurrentIndex(nextIndex);
    setSelectedProject(projects[nextIndex]);
    setCurrentImageIndex(0);
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  const prevProject = () => {
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setCurrentIndex(prevIndex);
    setSelectedProject(projects[prevIndex]);
    setCurrentImageIndex(0);
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  const nextImage = () => {
    if (selectedProject) {
      const nextIndex = (currentImageIndex + 1) % selectedProject.images.length;
      setCurrentImageIndex(nextIndex);
      setZoomLevel(1);
      setPosition({ x: 0, y: 0 });
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      const prevIndex =
        (currentImageIndex - 1 + selectedProject.images.length) %
        selectedProject.images.length;
      setCurrentImageIndex(prevIndex);
      setZoomLevel(1);
      setPosition({ x: 0, y: 0 });
    }
  };

  const selectImage = (index) => {
    setCurrentImageIndex(index);
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  // Get icon based on project category
  const getCategoryIcon = (category) => {
    if (category.includes("MOBILE")) return <Smartphone size={16} />;
    if (category.includes("FRONTEND") || category.includes("REACT"))
      return <Globe size={16} />;
    if (category.includes("BACKEND") || category.includes("API"))
      return <Server size={16} />;
    if (category.includes("FULL-STACK")) return <Code2 size={16} />;
    if (category.includes("DATABASE") || category.includes("MONGODB"))
      return <Database size={16} />;
    return <Code2 size={16} />;
  };

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-tech font-bold text-center mb-16 text-black terminal-glitch"
        >
          PROJECT PORTFOLIO
        </motion.h2>

        {/* 3x3 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="terminal-border bg-white cursor-pointer group"
              onClick={() => openModal(index)}
            >
              <div className="p-1 border-2 border-white group-hover:border-black transition-colors h-full flex flex-col">
                {/* Project Thumbnail - Shows actual image */}
                <div className="w-full h-48 relative border border-gray-300 bg-gray-900 overflow-hidden">
                  {project.images && project.images.length > 0 ? (
                    <>
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                        onError={(e) => {
                          console.error(
                            `Failed to load image: ${project.images[0]}`,
                          );
                          // Fallback to a placeholder
                          e.target.style.display = "none";
                        }}
                      />
                      {/* Dark overlay for better text visibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                      {/* Category Badge */}
                      <div className="absolute top-2 left-2 bg-black bg-opacity-75 text-white px-2 py-1 text-xs font-tech rounded">
                        {project.category}
                      </div>

                      {/* Multiple Images Badge */}
                      {project.images.length > 1 && (
                        <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 font-tech rounded">
                          +{project.images.length}
                        </div>
                      )}

                      {/* Project Title Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <h3 className="font-tech font-bold text-white text-sm">
                          {project.title.length > 40
                            ? `${project.title.substring(0, 40)}...`
                            : project.title}
                        </h3>
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full p-4 bg-gray-200">
                      {getCategoryIcon(project.category)}
                      <h3 className="font-tech font-bold text-lg text-black mt-2 text-center">
                        {project.title}
                      </h3>
                    </div>
                  )}
                </div>

                <div className="p-4 border-t border-gray-200 flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1">
                      {project.date.includes("Present")
                        ? "Ongoing"
                        : project.date.split(" ")[2]}
                    </span>
                    <span className="text-xs font-tech text-gray-700">
                      {project.role}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for Project Details */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 md:p-6"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white terminal-border max-w-6xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-1">
                <div className="border-2 border-black bg-white">
                  {/* Header */}
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="p-2 bg-black text-white rounded">
                            {getCategoryIcon(selectedProject.category)}
                          </div>
                          <div>
                            <h3 className="text-2xl font-tech font-bold text-black">
                              {selectedProject.title}
                            </h3>
                            <div className="flex flex-wrap items-center gap-2 mt-1">
                              <p className="text-gray-600 font-tech">
                                {selectedProject.category}
                              </p>
                              <span className="font-tech text-sm bg-black text-white px-3 py-1">
                                {selectedProject.date}
                              </span>
                              <span className="font-tech text-sm bg-gray-100 text-gray-800 px-3 py-1">
                                {selectedProject.role}
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-700 mt-3 leading-relaxed">
                          {selectedProject.description}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2 flex-shrink-0 ml-4">
                        {/* External Links */}
                        <div className="flex space-x-2 mr-4">
                          {selectedProject.github && (
                            <a
                              href={selectedProject.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 border border-black hover:bg-black hover:text-white transition-colors"
                              title="View on GitHub"
                            >
                              <Github size={18} />
                            </a>
                          )}
                          {selectedProject.live && (
                            <a
                              href={selectedProject.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 border border-black hover:bg-black hover:text-white transition-colors"
                              title="View Live Demo"
                            >
                              <ExternalLink size={18} />
                            </a>
                          )}
                        </div>
                        <button
                          onClick={closeModal}
                          className="p-2 hover:bg-black hover:text-white transition-colors border border-black"
                        >
                          <X size={20} />
                        </button>
                      </div>
                    </div>

                    {/* Technology Stack */}
                    <div className="mt-4">
                      <h4 className="font-tech font-bold text-black mb-2">
                        Technology Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-sm bg-gray-100 text-gray-800 px-3 py-1 border border-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Image Gallery - Shows actual images */}
                  {selectedProject.images &&
                    selectedProject.images.length > 0 && (
                      <div className="p-6 border-b border-gray-200">
                        <div className="relative h-96 md:h-[500px] bg-gray-900 border border-gray-300 overflow-hidden">
                          {/* Main Image */}
                          <Image
                            src={selectedProject.images[currentImageIndex]}
                            alt={selectedProject.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                            className="object-contain"
                            priority
                            onError={(e) => {
                              console.error(
                                `Failed to load image: ${selectedProject.images[currentImageIndex]}`,
                              );
                            }}
                          />

                          {/* Image Navigation */}
                          {selectedProject.images.length > 1 && (
                            <>
                              <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-black bg-opacity-75 text-white hover:bg-opacity-90 transition-all rounded-full z-20"
                              >
                                <ChevronLeft size={24} />
                              </button>
                              <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black bg-opacity-75 text-white hover:bg-opacity-90 transition-all rounded-full z-20"
                              >
                                <ChevronRight size={24} />
                              </button>
                            </>
                          )}

                          {/* Image Counter */}
                          {selectedProject.images.length > 1 && (
                            <div className="absolute top-4 left-4 bg-black text-white text-sm px-3 py-1 font-tech z-20 rounded">
                              {currentImageIndex + 1} /{" "}
                              {selectedProject.images.length}
                            </div>
                          )}
                        </div>

                        {/* Thumbnails */}
                        {selectedProject.images.length > 1 && (
                          <div className="mt-4">
                            <div className="flex space-x-2 overflow-x-auto pb-2">
                              {selectedProject.images.map((image, index) => (
                                <button
                                  key={index}
                                  onClick={() => selectImage(index)}
                                  className={`flex-shrink-0 w-20 h-20 relative border-2 transition-all overflow-hidden ${
                                    index === currentImageIndex
                                      ? "border-black"
                                      : "border-gray-300 hover:border-gray-600"
                                  }`}
                                >
                                  <Image
                                    src={image}
                                    alt={`Thumbnail ${index + 1}`}
                                    fill
                                    sizes="80px"
                                    className="object-cover"
                                  />
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                  {/* Footer */}
                  <div className="p-4 bg-gray-50">
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-600 font-tech">
                        {selectedProject.images &&
                          selectedProject.images.length > 0 && (
                            <span className="mr-4">
                              {selectedProject.images.length} image
                              {selectedProject.images.length !== 1 ? "s" : ""}
                            </span>
                          )}
                        <span className="text-black font-bold">
                          {selectedProject.role}
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={prevProject}
                          className="p-2 border border-black hover:bg-black hover:text-white transition-colors"
                          title="Previous Project"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button
                          onClick={nextProject}
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
