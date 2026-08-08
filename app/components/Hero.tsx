import { ArrowDown, ArrowUpRight, Code2, Briefcase } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950"
    >
      {/* Background Glow dengan Efek Smooth Fade In */}
      <div className="animate__animated animate__fadeIn animate__slower absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="animate__animated animate__fadeIn animate__slower animate__delay-1s absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-blue-500/20 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-32 lg:px-8">
        <div className="max-w-4xl">
          {/* Subtitle - Muncul Pertama */}
          <p className="animate__animated animate__fadeInUp mb-5 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Hello, I'm
          </p>

          {/* Nama Utama - Muncul dengan Delay Sedikit */}
          <h1 
            style={{ animationDelay: "0.2s" }}
            className="animate__animated animate__fadeInUp text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-6xl"
          >
            Dimas Arya Nugraha
          </h1>

          {/* Role / Job Title */}
          <h2 
            style={{ animationDelay: "0.4s" }}
            className="animate__animated animate__fadeInUp mt-5 text-2xl font-semibold text-slate-300 sm:text-3xl lg:text-4xl"
          >
            Full Stack Web Developer
          </h2>

          {/* Deskripsi Singkat */}
          <p 
            style={{ animationDelay: "0.6s" }}
            className="animate__animated animate__fadeInUp mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg"
          >
            I build modern, responsive, and scalable web applications with
            clean interfaces and reliable backend systems.
          </p>

          {/* Tombol CTA (Call to Action) */}
          <div 
            style={{ animationDelay: "0.8s" }}
            className="animate__animated animate__fadeInUp mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              View My Projects
              <ArrowUpRight
                size={18}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="#contact"
              className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div 
            style={{ animationDelay: "1s" }}
            className="animate__animated animate__fadeInUp mt-10 flex items-center gap-5"
          >
            <a
              href="https://github.com/DimasArya1405"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-slate-400 transition flex gap-2 mr-2 hover:text-white"
            >
              <Code2 size={22} />
              Github
            </a>

            <a
              href="https://www.linkedin.com/in/dimas-arya-nugraha-aab3aa295"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-slate-400 transition flex gap-2 hover:text-cyan-400"
            >
              <Briefcase size={22} />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Scroll Indicator - Ditambahkan FadeIn Lambat */}
        <a
          href="#about"
          style={{ animationDelay: "1.2s" }}
          className="animate__animated animate__fadeIn absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-slate-500 transition hover:text-cyan-400 md:block"
        >
          <ArrowDown className="animate-bounce" size={20} />
        </a>
      </div>
    </section>
  );
}