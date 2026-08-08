"use client";

import { useEffect, useRef, useState } from "react";

const skills = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    category: "Backend",
    items: ["PHP", "Laravel", "REST API", "Authentication","Code Igniter"],
  },
  {
    category: "Database",
    items: ["MySQL", "Database Design", "ERD"],
  },
  {
    category: "Tools & Others",
    items: ["Git", "GitHub", "Tailwind CSS", "Figma", "Vercel"],
  },
];

// Hook agar animasi berjalan sekali saat elemen di-scroll ke layar
function useAnimateOnScroll() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return { ref, isVisible };
}

export default function Skills() {
  const headerAnimation = useAnimateOnScroll();
  const gridAnimation = useAnimateOnScroll();

  return (
    <section id="skills" className="bg-slate-950 py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header Section */}
        <div
          ref={headerAnimation.ref}
          className={`mb-14 transition-opacity duration-300 ${
            headerAnimation.isVisible
              ? "animate__animated animate__fadeInDown opacity-100"
              : "opacity-0"
          }`}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Skills
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Technologies I work with
          </h2>
        </div>

        {/* Grid Card Skills */}
        <div ref={gridAnimation.ref} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              style={{
                animationDelay: gridAnimation.isVisible ? `${index * 0.15}s` : "0s",
              }}
              className={`rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-cyan-400/40 ${
                gridAnimation.isVisible
                  ? "animate__animated animate__fadeInUp opacity-100"
                  : "opacity-0"
              }`}
            >
              <h3 className="mb-5 text-lg font-semibold text-white">
                {skill.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg bg-slate-800 px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-700 hover:text-cyan-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}