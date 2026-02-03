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
    images: [
      "/projects/chmis-landing.png",
      "/projects/chmis-dashboard.png",
      "/projects/chmis-mobile.png",
    ],
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
    images: ["/projects/chmis-mobile-app.png", "/projects/chmis-mobile-ui.png"],
    github: "https://github.com/AlbertKay254/CHMIS-Mobile",
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
      "/projects/findndine-home.png",
      "/projects/findndine-map.png",
      "/projects/findndine-details.png",
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
    images: ["/projects/music-player.png", "/projects/music-player-ui.png"],
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
    images: ["/projects/chatroom.png", "/projects/chatroom-ui.png"],
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
    images: [
      "/projects/portfolio-home.png",
      "/projects/portfolio-projects.png",
    ],
    github: "https://github.com/AlbertKay254/portfolio",
    live: "https://albertkaimenyi.vercel.app",
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
      "/projects/ecommerce-dash.png",
      "/projects/ecommerce-analytics.png",
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
    images: ["/projects/api-middleware.png"],
    github: null,
    live: null,
    role: "Backend Developer",
  },
  {
    id: 9,
    title: "WordPress Custom Theme",
    category: "WORDPRESS DEVELOPMENT",
    date: "2022",
    description:
      "Custom WordPress theme developed for a local business website with SEO optimization.",
    technologies: ["WordPress", "PHP", "JavaScript", "CSS", "SEO"],
    images: ["/projects/wordpress-theme.png"],
    github: null,
    live: "https://example.com",
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
                {/* Project Thumbnail */}
                <div className="w-full h-48 relative border border-gray-300 bg-gray-100 flex items-center justify-center overflow-hidden">
                  {project.images && project.images.length > 0 ? (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300" />
                      <div className="relative z-10 text-center p-4">
                        <div className="flex justify-center mb-3">
                          {getCategoryIcon(project.category)}
                        </div>
                        <h3 className="font-tech font-bold text-lg text-black mb-2">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {project.category}
                        </p>
                      </div>
                      {/* Multiple Images Badge */}
                      {project.images.length > 1 && (
                        <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 font-tech">
                          +{project.images.length - 1}
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center p-4">
                      {getCategoryIcon(project.category)}
                      <h3 className="font-tech font-bold text-lg text-black mt-2 text-center">
                        {project.title}
                      </h3>
                    </div>
                  )}
                </div>

                <div className="p-4 border-t border-gray-200 flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-tech font-bold text-black text-sm">
                      {project.title.length > 30
                        ? `${project.title.substring(0, 30)}...`
                        : project.title}
                    </h3>
                    <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1">
                      {project.date.includes("Present")
                        ? "Ongoing"
                        : project.date.split(" ")[2]}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1">
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
                            <div className="flex items-center space-x-4 mt-1">
                              <p className="text-gray-600 font-tech flex items-center">
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

                  {/* Image Gallery */}
                  {selectedProject.images &&
                    selectedProject.images.length > 0 && (
                      <div className="p-6 border-b border-gray-200">
                        <div className="relative h-64 md:h-80 bg-gray-100 border border-gray-300 overflow-hidden">
                          <div className="w-full h-full flex items-center justify-center p-4">
                            <div className="text-center">
                              <div className="text-4xl mb-4">🚀</div>
                              <p className="font-tech text-gray-600">
                                Project Preview Images
                              </p>
                              <p className="text-sm text-gray-500 mt-2">
                                {selectedProject.images.length} screenshot
                                {selectedProject.images.length !== 1 ? "s" : ""}{" "}
                                available
                              </p>
                            </div>
                          </div>

                          {/* Image Navigation */}
                          {selectedProject.images.length > 1 && (
                            <>
                              <button
                                onClick={prevImage}
                                className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-75 text-white hover:bg-opacity-90 transition-all"
                              >
                                <ChevronLeft size={20} />
                              </button>
                              <button
                                onClick={nextImage}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-75 text-white hover:bg-opacity-90 transition-all"
                              >
                                <ChevronRight size={20} />
                              </button>
                            </>
                          )}

                          {/* Image Counter */}
                          {selectedProject.images.length > 1 && (
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-3 py-1 font-tech">
                              Preview {currentImageIndex + 1} /{" "}
                              {selectedProject.images.length}
                            </div>
                          )}
                        </div>

                        {/* Thumbnails */}
                        {selectedProject.images.length > 1 && (
                          <div className="mt-4">
                            <div className="flex space-x-2 overflow-x-auto pb-2">
                              {selectedProject.images.map((_, index) => (
                                <button
                                  key={index}
                                  onClick={() => selectImage(index)}
                                  className={`flex-shrink-0 w-16 h-16 relative border-2 transition-all ${
                                    index === currentImageIndex
                                      ? "border-black bg-black"
                                      : "border-gray-300 hover:border-gray-600"
                                  }`}
                                >
                                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                    <span className="text-gray-600 text-sm">
                                      {index + 1}
                                    </span>
                                  </div>
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
                          selectedProject.images.length > 1 && (
                            <span className="mr-4">
                              Preview: {currentImageIndex + 1}/
                              {selectedProject.images.length}
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
