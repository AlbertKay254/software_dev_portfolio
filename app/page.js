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
      <WorkGallery />

      {/* Simple Footer */}
      <footer className="py-12 px-6 bg-black text-white text-center">
        <div className="container mx-auto">
          <div className="font-tech text-sm space-y-2">
            <p>ALBERT KAIMENYI © 2025</p>
            <p className="text-gray-400">NAIROBI, KENYA</p>
            <div className="flex justify-center space-x-6 mt-4">
              <a
                href="mailto:albertkaimenyi254@gmail.com"
                className="hover:text-gray-400 transition-colors"
              >
                EMAIL
              </a>
              <a
                href="https://www.instagram.com/lucid.craft"
                className="hover:text-gray-400 transition-colors"
              >
                INSTAGRAM
              </a>
              {/* <a
                href="tel:+254702519938"
                className="hover:text-gray-400 transition-colors"
              >
                PHONE
              </a> */}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
