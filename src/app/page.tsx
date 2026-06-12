import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import AIInnovation from "@/components/sections/AIInnovation";
import Certifications from "@/components/sections/Certifications";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="relative w-full">
      {/* 1. Hero Section (Typing titles, canvas particles, cursor glows) */}
      <Hero />

      {/* 2. About Me Section (Bio journey and count-up stats counters) */}
      <About />

      {/* 3. Skills Section (Interactive meters and category filters) */}
      <Skills />

      {/* 4. Experience Section (Scroll-triggered vertical drawing timeline) */}
      <Experience />

      {/* 5. Featured Projects Section (Hover zooms, tilt highlight cards) */}
      <Projects />

      {/* 6. AI & Innovation Section (Autonomous Agent, RAG, and LangGraph loops) */}
      <AIInnovation />

      {/* 7. Certifications Section (Verify links grid) */}
      <Certifications />

      {/* 8. Testimonials Section (Drag/Swipe Autoplay Client Endorsements) */}
      <Testimonials />

      {/* 9. Contact Section (react-hook-form validation & success confetti) */}
      <Contact />
    </div>
  );
}
