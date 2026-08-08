"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Code2, ChevronDown } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "SI-AMI PNC",
    description:
      "SI-AMI PNC is a web-based application that I developed to streamline and support the Internal Quality Audit (AMI) business processes at Politeknik Negeri Cilacap.",
    technologies: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    image: "/img/projects/siami.png", // Tambahkan path gambar di sini
    github: "https://github.com/DimasArya1405/SI-AMI-PNC",
    demo: "probowdwi.my.id",
  },
  {
    title: "REDEVELOPMENT SIKOTAMA",
    description:
      "SIKOTAMA is a web-based system designed to manage and streamline administrative processes for final-year students at Universitas Islam Indonesia Yogyakarta.",
    technologies: ["Laravel","MySQL", "JavaScript", "Bootstrap"],
    image: "/img/projects/sikotama.png",
    github: "https://github.com/budi1104/sikotama",
    demo: "#",
  },
  {
    title: "SIMPEG PCNU",
    description:
      "SIMPEG-PCNU is a web-based personnel management system developed to manage employee records and streamline the issuance of official decision letters at PCNU Cilacap.",
    technologies: ["Laravel", "MySQL","React","Tailwind CSS"],
    image: "/img/projects/pcnu.png",
    github: "https://github.com/Arya0D/simpeg-pcnu-frontend",
    demo: "#",
  },
  {
    title: "KUBE",
    description:
      "KUBE is a web-based system that I developed to streamline and manage the workflow of the Joint Business Group (KUBE) program at the Social Services Office.",
    technologies: ["Laravel", "Tailwind CSS", "Bootsrap", "MySQL"],
    image: "/img/projects/kube.png",
    github: "https://github.com/DimasArya1405/kube",
    demo: "#",
  },
  {
    title: "WEDDING INVITATION",
    description:
      "Wedding Invitation is a web-based platform that enables couples to create and share personalized digital wedding invitations with ease.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: "/img/projects/wedding.png",
    github: "https://github.com/DimasArya1405/Wedding-Invitation",
    demo: "#",
  },
  {
    title: "SIPTERA",
    description:
      "SIPTERA is a web-based information system developed to simplify the management and administration of population data.",
    technologies: ["C","MySQL", "C#"],
    image: "/img/projects/siptera.png",
    github: "https://github.com/DimasArya1405/sistem-kependudukan-tes-magang-",
    demo: "#",
  },
];

// Custom Hook agar animasi hanya muncul SEKALI saat di-scroll
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

export default function Projects() {
  const headerAnimation = useAnimateOnScroll();
  const gridAnimation = useAnimateOnScroll();

  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="bg-slate-900 py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header Section */}
        <div
          ref={headerAnimation.ref}
          className={`mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end transition-opacity duration-300 ${
            headerAnimation.isVisible
              ? "animate__animated animate__fadeInDown opacity-100"
              : "opacity-0"
          }`}
        >
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Projects
            </p>

            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Featured Projects
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-400">
            A selection of projects I've built while developing my skills in
            web development.
          </p>
        </div>

        {/* Grid Card Projects */}
        <div ref={gridAnimation.ref} className="grid gap-6 lg:grid-cols-3">
          {displayedProjects.map((project, index) => (
            <article
              key={project.title}
              style={{
                animationDelay: gridAnimation.isVisible ? `${(index % 3) * 0.15}s` : "0s",
              }}
              className={`group flex flex-col rounded-2xl border border-slate-800 bg-slate-950 p-6 transition hover:-translate-y-2 hover:border-cyan-400/40 ${
                gridAnimation.isVisible
                  ? "animate__animated animate__fadeInDown opacity-100"
                  : "opacity-0"
              }`}
            >
              {/* Bagian Pemanggilan Gambar */}
              <div className="relative mb-6 aspect-video overflow-hidden rounded-xl bg-slate-900">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <span className="text-sm text-slate-600">
                      Project Preview
                    </span>
                  </div>
                )}
              </div>

              <h3 className="text-xl font-bold text-white">
                {project.title}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md bg-cyan-400/10 px-2.5 py-1.5 text-xs font-medium text-cyan-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-4 border-t border-slate-800 pt-5">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
                >
                  <Code2 size={17} />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-400"
                >
                  Live Demo
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Tombol Lihat Selengkapnya / Lebih Sedikit */}
        {projects.length > 3 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950 px-6 py-3 text-sm font-medium text-slate-300 transition hover:border-cyan-400/50 hover:bg-slate-900 hover:text-cyan-400"
            >
              <span>{showAll ? "Lihat Lebih Sedikit" : "Lihat Selengkapnya"}</span>
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  showAll ? "rotate-180 text-cyan-400" : "text-slate-400 group-hover:text-cyan-400"
                }`}
              />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}