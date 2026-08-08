"use client";

import { useEffect, useRef, useState } from "react";

// Hook agar animasi berjalan sekali saat elemen masuk ke viewport
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

export default function About() {
  const leftCol = useAnimateOnScroll();
  const rightCol = useAnimateOnScroll();

  return (
    <section id="about" className="bg-slate-900 py-24 overflow-hidden md:px-12 sm:px-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Left Column - Fade In Left */}
          <div
            ref={leftCol.ref}
            className={`transition-opacity duration-300 ${
              leftCol.isVisible
                ? "animate__animated animate__fadeInLeft opacity-100"
                : "opacity-0"
            }`}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              About Me
            </p>

            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Turning ideas into digital experiences.
            </h2>
          </div>

          {/* Right Column - Fade In Right */}
          <div
            ref={rightCol.ref}
            className={`space-y-5 text-slate-400 leading-8 transition-opacity duration-300 ${
              rightCol.isVisible
                ? "animate__animated animate__fadeInRight opacity-100"
                : "opacity-0"
            }`}
          >
            <p>
              I'm a developer passionate about building web applications that
              are functional, intuitive, and visually engaging.
            </p>

            <p>
              I enjoy working across both frontend and backend development,
              from designing user interfaces to building APIs, databases, and
              authentication systems.
            </p>

            <p>
              Currently, I'm focusing on improving my skills in modern web
              technologies such as Next.js, React, Laravel, and Tailwind CSS.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}