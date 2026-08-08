"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";

// Custom Hook agar animasi berjalan sekali saat elemen di-scroll ke layar
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

export default function Contact() {
  const leftCol = useAnimateOnScroll();
  const rightCol = useAnimateOnScroll();

  return (
    <section id="contact" className="bg-slate-950 py-24 overflow-hidden px-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          
          {/* Left Column (Text & Contact Info) - Fade In Left */}
          <div
            ref={leftCol.ref}
            className={`transition-opacity duration-300 ${
              leftCol.isVisible
                ? "animate__animated animate__fadeInLeft opacity-100"
                : "opacity-0"
            }`}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Contact
            </p>

            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Let's build something great together.
            </h2>

            <p className="mt-6 max-w-lg leading-8 text-slate-400">
              Have a project, collaboration, or opportunity in mind? Feel free
              to reach out. I'm always open to discussing new ideas.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-cyan-400">
                  <Mail size={19} />
                </div>

                <div>
                  <p className="text-xs text-slate-500">Email</p>
                  <p className="text-sm text-slate-300">
                    dimasaryad55@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-cyan-400">
                  <MapPin size={19} />
                </div>

                <div>
                  <p className="text-xs text-slate-500">Location</p>
                  <p className="text-sm text-slate-300">Cilacap, Central Java, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Form) - Fade In Right */}
          <form
            ref={rightCol.ref}
            className={`rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8 transition-opacity duration-300 ${
              rightCol.isVisible
                ? "animate__animated animate__fadeInRight opacity-100"
                : "opacity-0"
            }`}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm text-slate-300">
                Message
              </label>

              <textarea
                rows={6}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
              />
            </div>

            <button
              type="submit"
              className="mt-5 flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Send Message
              <Send size={17} />
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}