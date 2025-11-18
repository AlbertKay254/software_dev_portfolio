// app/page.js
"use client";
import Hero from "./components/Hero";
import WorkGallery from "./components/WorkGallery";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <Experience />
      <WorkGallery />
      <Contact />
    </main>
  );
}
