
"use client";

import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    year: "2025",
    role: "Full Stack Web Developer (Internship)",
    company: "Tanjung Mulia Informatika",
    description:
      "Developed SIKOTAMA, a full-stack web application using Laravel, JavaScript, and Bootstrap, serving over 5,000 campus users. Configured and deployed web applications to hosting and VM servers, including domain pointing and production setup. Developed backend authentication and MySQL database integration using native PHP for internal web applications.",
  },
];

// Custom Hook agar animasi hanya dipicu 1x saat di-scroll
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

export default function Experience() {
  const headerAnimation = useAnimateOnScroll();
  const timelineAnimation = useAnimateOnScroll();

  return (
    <section id="experience" className="bg-slate-950 py-24 overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">

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
            Experience
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            My professional journey
          </h2>
        </div>

        {/* Timeline Container */}
        <div ref={timelineAnimation.ref} className="space-y-10">
          {experiences.map((experience, index) => (
            <div
              key={experience.year}
              style={{
                animationDelay: timelineAnimation.isVisible
                  ? `${index * 0.25}s`
                  : "0s",
              }}
              className={`grid gap-4 border-l border-slate-700 pl-6 md:grid-cols-[180px_1fr] md:border-l-0 md:pl-0 transition-opacity duration-300 ${
                timelineAnimation.isVisible
                  ? "animate__animated animate__fadeInLeft opacity-100"
                  : "opacity-0"
              }`}
            >
              <div className="text-sm font-medium text-cyan-400">
                {experience.year}
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 hidden h-3 w-3 rounded-full bg-cyan-400 md:block" />

                <h3 className="text-xl font-bold text-white">
                  {experience.role}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {experience.company}
                </p>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
                  {experience.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
