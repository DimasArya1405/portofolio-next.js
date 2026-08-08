// import Navbar from "@/components/navbar";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import Experience from "@/app/components/Experience";
import Education from "@/app/components/Education";
import Contact from "@/app/components/Contact";

export default function Home() {
  return (
    <main className="bg-slate-950 text-white">
      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />

      <footer className="border-t border-slate-800 bg-slate-950 py-8">
        <div className="mx-auto max-w-7xl px-6 text-center text-sm text-slate-500 lg:px-8">
          © {new Date().getFullYear()} Dimas Arya. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
