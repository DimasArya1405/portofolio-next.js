"use client";

import { useEffect, useRef, useState } from "react";
import { GraduationCap } from "lucide-react";

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

export default function Education() {
  const headerAnimation = useAnimateOnScroll();
  const cardAnimation = useAnimateOnScroll();

  return (
    <section id="education" className="bg-slate-900 py-24 overflow-hidden">
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
            Education
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Academic background
          </h2>
        </div>

        {/* Education Card */}
        <div
          ref={cardAnimation.ref}
          className={`max-w-3xl rounded-2xl border border-slate-800 bg-slate-950 p-7 transition-opacity duration-300 ${
            cardAnimation.isVisible
              ? "animate__animated animate__zoomIn opacity-100"
              : "opacity-0"
          }`}
        >
          <div className="flex gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
              <GraduationCap size={24} />
            </div>

            <div>
              <p className="text-sm font-medium text-cyan-400">
                Diploma Program
              </p>

              <h3 className="mt-1 text-xl font-bold text-white">
                D3 Teknik Informatika
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Politeknik Negeri Cilacap
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Focused on software development, web programming, database
                systems, system analysis, and information technology.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}