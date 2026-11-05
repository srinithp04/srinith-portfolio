
import { useRef, useState, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  Code2,
  Menu,
  X,
  FileText,
  Download,
} from "lucide-react";

// ==========================================
// NAVIGATION
// ==========================================

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Documents", href: "#documents" },
  { label: "Contact", href: "#contact" },
];

// ==========================================
// SKILLS
// ==========================================



const skills = [
  {
    category: "Languages",
    items: ["Java", "Python"],
  },
  {
    category: "Frameworks",
    items: ["Spring Boot", "Django", "React Native", "Flutter", "Streamlit"],
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB", "ChromaDB"],
  },
  {
    category: "AI & GenAI",
    items: ["RAG", "LLMs", "Vector Databases", "Embeddings"],
  },
  {
    category: "Other Skills",
    items: [
      "REST APIs",
      "Postman",
      "Git",
      "GitHub",
      "Docker",
      "SQL",
      "WordPress",
      "DSA",
      "Problem Solving",
    ],
  },
];



// ==========================================
// PROJECTS
// ==========================================

const projects = [
  {
    number: "01",
    name: "InfraWatch",
    type: "Infrastructure Monitoring Platform",
    description:
        "An agentless infrastructure monitoring platform providing centralised visibility of servers, VMs and containers through SSH, with a Flutter dashboard for system-health monitoring.",
    highlights: [
      "Built a Spring Boot backend with MongoDB and JWT authentication.",
      "Implemented WebSocket-based monitoring and interactive terminal access.",
      "Reduced command execution latency by approximately 42% through shell forwarding.",
    ],
    technologies: [
      "Spring Boot",
      "Flutter",
      "MongoDB",
      "SSH",
      "WebSocket",
      "JWT",
    ],
    github: "",
    live: "",
  },
  {
    number: "02",
    name: "BoltMart",
    type: "NFC-Powered Mobile Commerce",
    description:
        "A mobile commerce application using NFC technology to make product selection and checkout faster and more convenient.",
    highlights: [
      "Developed 10+ Spring Boot REST API endpoints.",
      "Implemented catalogue, cart and order management with JWT authentication.",
      "Integrated Flutter with NFC hardware for sub-second scan-to-cart response.",
      "Reduced average transaction time by approximately 35%.",
    ],
    technologies: [
      "Spring Boot",
      "Flutter",
      "MongoDB",
      "NFC",
      "REST API",
      "JWT",
    ],
    github: "",
    live: "",
  },
  {
    number: "03",
    name: "Eezy Token",
    type: "Digital Token & Food Booking System",
    description:
        "A digital token system designed to replace manual paper-based food booking and billing for hostel residents.",
    highlights: [
      "Developed a Django REST backend with MySQL.",
      "Built a React Native application with role-based access.",
      "Eliminated billing discrepancies for 200+ hostel residents.",
      "Reduced manual paperwork processing time by approximately 50%.",
    ],
    technologies: ["Django", "MySQL", "React Native", "REST API"],
    github: "",
    live: "",
  },
  {
    number: "04",
    name: "PDF RAG Chatbot",
    type: "AI-Powered Document Question Answering",
    description:
        "A Retrieval-Augmented Generation application that lets users upload PDF documents and ask questions, retrieving relevant document content to generate context-aware answers.",
    highlights: [
      "Built a Python application with Streamlit.",
      "Implemented PDF processing, text chunking and semantic search.",
      "Used sentence-transformer embeddings and vector retrieval.",
      "Added conversational question handling and document-grounded answers.",
    ],
    technologies: [
      "Python",
      "Streamlit",
      "RAG",
      "Embeddings",
      "Semantic Search",
      "Vector Database",
    ],
    github: "https://github.com/srinithp04/pdf-rag-chatbot",
    live: "https://ask-your-pdf-rag.streamlit.app/",
  },
];

// ==========================================
// REUSABLE SCROLL REVEAL ANIMATION
// ==========================================

function Reveal({
                  children,
                  delay = 0,
                  className = "",
                }: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
      <motion.div
          initial={{
            opacity: 0,
            y: 85,
            scale: 0.94,
            filter: "blur(12px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
            amount: 0.18,
          }}
          transition={{
            duration: 1,
            delay,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={className}
      >
        {children}
      </motion.div>
  );
}

// ==========================================
// MAIN APP
// ==========================================

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Hero scroll animation
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
      <div className="min-h-screen overflow-hidden bg-[#090909] text-[#F2EDEF]">

        {/* ========================================
          NAVIGATION
      ======================================== */}

        <header className="fixed top-0 z-50 w-full border-b border-white/[0.06] bg-[#090909]/85 backdrop-blur-xl">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
            <a href="#home" className="text-2xl font-bold tracking-tight">
              Sri<span className="text-[#A33B55]">.</span>
            </a>

            <div className="hidden items-center gap-6 lg:flex">
              {navigation.map((item) => (
                  <a
                      key={item.label}
                      href={item.href}
                      className="text-sm text-gray-400 transition-colors duration-300 hover:text-[#C66A80]"
                  >
                    {item.label}
                  </a>
              ))}
            </div>

            <a
                href="mailto:srinithp04@gmail.com"
                className="hidden rounded-full border border-[#641E32] px-5 py-2.5 text-sm transition-all duration-300 hover:bg-[#641E32] md:block"
            >
              Let's Talk <ArrowUpRight className="ml-1 inline" size={15} />
            </a>

            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white lg:hidden"
                aria-label="Toggle navigation"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>

          {menuOpen && (
              <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-white/10 bg-[#111] px-6 py-5 lg:hidden"
              >
                {navigation.map((item, index) => (
                    <motion.a
                        key={item.label}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="block py-3 text-sm text-gray-300 transition-colors hover:text-[#C66A80]"
                    >
                      {item.label}
                    </motion.a>
                ))}
              </motion.div>
          )}
        </header>

        <main>

          {/* ========================================
            HERO
        ======================================== */}

          <section
              id="home"
              ref={heroRef}
              className="relative flex min-h-screen items-center px-6 pt-28 lg:px-10"
          >
            <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">

              {/* HERO TEXT */}

              <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
              >
                <p className="mb-6 flex items-center gap-3 text-sm tracking-[0.25em] text-[#C66A80] uppercase">
                  <span className="h-px w-9 bg-[#A33B55]" />
                  Hello, I'm
                </p>

                <h1 className="text-6xl leading-[1.05] font-bold tracking-tight sm:text-7xl lg:text-8xl">
                  Srinith<span className="text-[#A33B55]">.</span>
                </h1>

                <h2 className="mt-6 text-xl text-gray-300 sm:text-2xl">
                  Software Engineer
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-gray-400">
                  A Computer Science graduate passionate about building
                  practical software solutions, backend systems and
                  full-stack applications. I enjoy turning ideas into
                  functional products and continuously learning new
                  technologies.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                      href="#projects"
                      className="rounded-full bg-[#641E32] px-7 py-3.5 text-sm font-medium transition-all duration-300 hover:scale-105 hover:bg-[#87334B]"
                  >
                    Explore My Work{" "}
                    <ArrowUpRight className="ml-2 inline" size={16} />
                  </a>

                  <a
                      href="#documents"
                      className="rounded-full border border-white/20 px-7 py-3.5 text-sm transition-all duration-300 hover:border-[#A33B55] hover:text-[#C66A80]"
                  >
                    View Resume
                  </a>
                </div>

                <div className="mt-12 flex flex-wrap gap-7 text-sm text-gray-400">
                  <a
                      href="https://github.com/srinithp04"
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors hover:text-white"
                  >
                    GitHub <ArrowUpRight className="ml-1 inline" size={13} />
                  </a>

                  <a
                      href="https://linkedin.com/in/srinith-p"
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors hover:text-white"
                  >
                    LinkedIn <ArrowUpRight className="ml-1 inline" size={13} />
                  </a>

                  <a
                      href="mailto:srinithp04@gmail.com"
                      className="transition-colors hover:text-white"
                  >
                    Email <ArrowUpRight className="ml-1 inline" size={13} />
                  </a>
                </div>
              </motion.div>

              {/* HERO VISUAL WITH PARALLAX */}

              <motion.div
                  style={{
                    y: heroY,
                    opacity: heroOpacity,
                  }}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 1.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative mx-auto flex aspect-square w-full max-w-[440px] items-center justify-center"
              >
                <div className="absolute inset-8 rounded-full border border-[#641E32]/40" />

                <div className="absolute inset-14 rounded-full border border-dashed border-[#A33B55]/30" />

                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 35,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-5 rounded-full border border-[#A33B55]/20"
                />

                <div className="absolute h-64 w-64 rounded-full bg-[#641E32]/20 blur-[90px]" />

                <motion.div
                    animate={{
                      scale: [1, 1.04, 1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative flex h-64 w-64 items-center justify-center rounded-full border border-[#A33B55]/30 bg-gradient-to-br from-[#35101E] via-[#1B1015] to-[#090909] shadow-[0_0_100px_rgba(100,30,50,0.25)] sm:h-72 sm:w-72"
                >
                <span className="text-8xl font-bold tracking-tighter text-[#E8C6D0]">
                  SP<span className="text-[#A33B55]">.</span>
                </span>
                </motion.div>

                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-12 right-0 rounded-xl border border-white/10 bg-[#171315] px-4 py-3 shadow-xl"
                >
                  <Code2 className="mb-2 text-[#C66A80]" size={20} />
                  <p className="text-xs font-medium">Backend Development</p>
                  <p className="mt-1 text-[10px] text-gray-500">
                    Java · Spring Boot · Python
                  </p>
                </motion.div>

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute bottom-12 left-0 rounded-xl border border-white/10 bg-[#171315] px-4 py-3 shadow-xl"
                >
                  <p className="text-xs font-medium">Building & Learning</p>
                  <p className="mt-1 text-[10px] text-gray-500">
                    One project at a time.
                  </p>
                </motion.div>
              </motion.div>
            </div>

            <motion.a
                href="#about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs tracking-widest text-gray-500"
            >
              SCROLL TO EXPLORE
              <motion.span
                  animate={{ y: [0, 7, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
              >
                <ArrowDown size={16} />
              </motion.span>
            </motion.a>
          </section>

          {/* ========================================
            ABOUT
        ======================================== */}

          <section
              id="about"
              className="scroll-mt-24 border-t border-white/[0.06] px-6 py-28 lg:px-10"
          >
            <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">

              <Reveal>
                <p className="mb-4 text-sm tracking-[0.25em] text-[#C66A80] uppercase">
                  01 / About Me
                </p>

                <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
                  A little about
                  <br />
                  <span className="text-[#A33B55]">my journey.</span>
                </h2>
              </Reveal>

              <Reveal delay={0.15}>
                <p className="text-lg leading-9 text-gray-300">
                  I'm a recent Computer Science and Business Systems graduate
                  from PSG Institute of Technology and Applied Research.
                  My interests lie in backend development, application
                  development and building software that solves practical
                  problems.
                </p>

                <p className="mt-6 leading-8 text-gray-400">
                  Through academic projects and an internship, I've gained
                  hands-on experience working with Java, Spring Boot, Python,
                  databases and mobile application technologies. I enjoy
                  understanding how systems work, experimenting with ideas
                  and improving my development skills through building.
                </p>

                <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
                  <div>
                    <p className="text-3xl font-semibold text-[#C66A80]">8.1</p>
                    <p className="mt-2 text-sm text-gray-500">CGPA / 10</p>
                  </div>

                  <div>
                    <p className="text-3xl font-semibold text-[#C66A80]">4</p>
                    <p className="mt-2 text-sm text-gray-500">
                      Featured projects
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          {/* ========================================
            SKILLS
        ======================================== */}

          <section
              id="skills"
              className="scroll-mt-24 bg-[#110D0F] px-6 py-28 lg:px-10"
          >
            <div className="mx-auto max-w-7xl">

              <Reveal className="mb-16">
                <p className="mb-4 text-sm tracking-[0.25em] text-[#C66A80] uppercase">
                  02 / Technical Skills
                </p>

                <h2 className="text-4xl font-semibold sm:text-5xl">
                  Tools of my <span className="text-[#A33B55]">trade.</span>
                </h2>

                <p className="mt-5 max-w-xl leading-7 text-gray-400">
                  Technologies and tools I've worked with across my projects
                  and development experience.
                </p>
              </Reveal>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {skills.map((group, index) => (
                    <Reveal key={group.category} delay={index * 0.1}>
                      <motion.div
                          whileHover={{
                            y: -6,
                            borderColor: "rgba(100,30,50,0.9)",
                          }}
                          transition={{ duration: 0.25 }}
                          className="h-full rounded-2xl border border-white/[0.07] bg-[#171315] p-7"
                      >
                        <p className="mb-6 text-sm font-medium text-[#C66A80]">
                          {group.category}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {group.items.map((item) => (
                              <span
                                  key={item}
                                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-gray-300 transition-colors duration-300 hover:border-[#641E32] hover:text-[#E8C6D0]"
                              >
                          {item}
                        </span>
                          ))}
                        </div>
                      </motion.div>
                    </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* ========================================
            PROJECTS
        ======================================== */}

          <section
              id="projects"
              className="scroll-mt-24 px-6 py-28 lg:px-10"
          >
            <div className="mx-auto max-w-7xl">

              <Reveal className="mb-16">
                <p className="mb-4 text-sm tracking-[0.25em] text-[#C66A80] uppercase">
                  03 / Selected Work
                </p>

                <h2 className="text-4xl font-semibold sm:text-5xl">
                  Things I've <span className="text-[#A33B55]">built.</span>
                </h2>

                <p className="mt-5 max-w-xl leading-7 text-gray-400">
                  A few projects where I explored ideas, worked with different
                  technologies and built practical applications.
                </p>
              </Reveal>

              <div className="space-y-6">
                {projects.map((project, index) => (
                    <Reveal key={project.number} delay={index * 0.08}>
                      <motion.article
                          whileHover={{
                            y: -4,
                            borderColor: "rgba(100,30,50,0.9)",
                          }}
                          transition={{ duration: 0.25 }}
                          className="grid gap-8 rounded-2xl border border-white/[0.08] bg-[#110D0F] p-7 sm:p-10 lg:grid-cols-[0.8fr_1.2fr]"
                      >
                        <div>
                          <p className="mb-8 text-sm tracking-widest text-[#A33B55]">
                            PROJECT / {project.number}
                          </p>

                          <h3 className="text-3xl font-semibold">
                            {project.name}
                          </h3>

                          <p className="mt-3 text-sm text-[#C66A80]">
                            {project.type}
                          </p>

                          <div className="mt-8 flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-400"
                                >
                            {tech}
                          </span>
                            ))}
                          </div>

                          {(project.github || project.live) && (
                              <div className="mt-7 flex flex-wrap gap-5">
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-sm text-[#C66A80] transition-colors hover:text-white"
                                    >
                                      Live Demo{" "}
                                      <ArrowUpRight className="ml-1 inline" size={15} />
                                    </a>
                                )}

                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-sm text-gray-400 transition-colors hover:text-white"
                                    >
                                      GitHub Repository{" "}
                                      <ArrowUpRight className="ml-1 inline" size={15} />
                                    </a>
                                )}
                              </div>
                          )}
                        </div>

                        <div>
                          <p className="leading-8 text-gray-300">
                            {project.description}
                          </p>

                          <ul className="mt-7 space-y-4">
                            {project.highlights.map((highlight) => (
                                <li
                                    key={highlight}
                                    className="flex gap-3 text-sm leading-7 text-gray-400"
                                >
                                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#A33B55]" />
                                  {highlight}
                                </li>
                            ))}
                          </ul>
                        </div>
                      </motion.article>
                    </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* ========================================
            EXPERIENCE & EDUCATION
        ======================================== */}

          <section
              id="experience"
              className="scroll-mt-24 border-t border-white/[0.06] bg-[#110D0F] px-6 py-28 lg:px-10"
          >
            <div className="mx-auto max-w-7xl">

              <Reveal>
                <p className="mb-4 text-sm tracking-[0.25em] text-[#C66A80] uppercase">
                  04 / My Background
                </p>

                <h2 className="mb-16 text-4xl font-semibold sm:text-5xl">
                  Experience & <span className="text-[#A33B55]">Education.</span>
                </h2>
              </Reveal>

              <div className="grid gap-16 lg:grid-cols-2">

                {/* EXPERIENCE */}

                <Reveal>
                  <div>
                    <h3 className="mb-8 text-xl font-medium">Experience</h3>

                    <div className="border-l border-[#641E32] pl-7">
                      <p className="text-sm text-[#C66A80]">
                        AUG 2024 — OCT 2024
                      </p>

                      <h4 className="mt-3 text-xl font-semibold">
                        Web Development Intern
                      </h4>

                      <p className="mt-2 text-gray-400">
                        Forest College and Research Institute
                      </p>

                      <ul className="mt-6 space-y-3 text-sm leading-7 text-gray-400">
                        <li>
                          Designed web pages for the institute's private
                          agricultural incubator using WordPress.
                        </li>
                        <li>
                          Worked on the digital presence for seed, fertilizer
                          and farmer knowledge programmes.
                        </li>
                        <li>
                          Collaborated with stakeholders to gather requirements
                          and refine page designs based on feedback.
                        </li>
                      </ul>
                    </div>
                  </div>
                </Reveal>

                {/* EDUCATION */}

                <Reveal delay={0.15}>
                  <div>
                    <h3 className="mb-8 text-xl font-medium">Education</h3>

                    <div className="space-y-10">
                      <div className="border-l border-[#641E32] pl-7">
                        <p className="text-sm text-[#C66A80]">2022 — 2026</p>

                        <h4 className="mt-3 text-xl font-semibold">
                          B.Tech — Computer Science and Business Systems
                        </h4>

                        <p className="mt-2 text-gray-400">
                          PSG Institute of Technology and Applied Research,
                          Coimbatore
                        </p>

                        <p className="mt-3 text-sm text-gray-500">
                          CGPA: 8.1 / 10
                        </p>
                      </div>

                      <div className="border-l border-[#641E32] pl-7">
                        <p className="text-sm text-[#C66A80]">2020 — 2022</p>

                        <h4 className="mt-3 text-xl font-semibold">
                          Higher Secondary — Computer Science
                        </h4>

                        <p className="mt-2 text-gray-400">
                          Sri Ramakrishna Vidhyalaya Matric. Hr. Sec. School,
                          Tiruppur
                        </p>

                        <p className="mt-3 text-sm text-gray-500">
                          HSC: 92.3% · SSLC: 79.6%
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* ACHIEVEMENTS */}

              <div className="mt-20 border-t border-white/10 pt-12">
                <Reveal>
                  <h3 className="mb-8 text-xl font-medium">
                    Achievements & Leadership
                  </h3>
                </Reveal>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    "Placement Coordinator, Batch 2022–2026",
                    "District-level Basketball Player — Team Captain",
                    "Organised a Spring Boot workshop at college culturals",
                    "2nd Place — InfraWatch, Project Expo 2024",
                    "3rd Place — Eezy Token, Project Expo 2023",
                  ].map((achievement, index) => (
                      <Reveal key={achievement} delay={index * 0.08}>
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="h-full rounded-xl border border-white/[0.07] bg-[#171315] p-5 text-sm leading-7 text-gray-300 transition-colors hover:border-[#641E32]"
                        >
                          <span className="mb-4 block text-[#A33B55]">✳</span>
                          {achievement}
                        </motion.div>
                      </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ========================================
            DOCUMENTS
        ======================================== */}

          <section
              id="documents"
              className="scroll-mt-24 border-t border-white/[0.06] bg-[#090909] px-6 py-28 lg:px-10"
          >
            <div className="mx-auto max-w-7xl">

              <Reveal className="mb-14">
                <p className="mb-4 text-sm tracking-[0.25em] text-[#C66A80] uppercase">
                  05 / Documents
                </p>

                <h2 className="text-4xl font-semibold sm:text-5xl">
                  A closer look at{" "}
                  <span className="text-[#A33B55]">my profile.</span>
                </h2>

                <p className="mt-5 max-w-xl leading-7 text-gray-400">
                  Explore my professional resume and cover letter.
                  Both documents are available to view or download.
                </p>
              </Reveal>

              <div className="grid gap-6 md:grid-cols-2">

                {/* RESUME CARD */}

                <Reveal>
                  <motion.div
                      whileHover={{ y: -5 }}
                      className="h-full rounded-2xl border border-white/10 bg-[#171315] p-8 transition-colors hover:border-[#641E32] sm:p-10"
                  >
                    <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-xl bg-[#641E32]/30 text-[#C66A80]">
                      <FileText size={27} />
                    </div>

                    <p className="mb-4 text-sm tracking-widest text-[#C66A80]">
                      DOCUMENT / 01
                    </p>

                    <h3 className="text-2xl font-semibold">My Resume</h3>

                    <p className="mt-3 text-sm leading-7 text-gray-400">
                      Education, technical skills, internship experience,
                      projects and achievements.
                    </p>

                    <div className="mt-9 flex flex-wrap gap-3">
                      <a
                          href="/srinith_p_resume.pdf"
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full border border-[#641E32] px-5 py-3 text-sm transition-colors hover:bg-[#641E32]"
                      >
                        View Resume{" "}
                        <ArrowUpRight className="ml-1 inline" size={15} />
                      </a>

                      <a
                          href="/srinith_p_resume.pdf"
                          download="Srinith_P_Resume.pdf"
                          className="rounded-full bg-[#641E32] px-5 py-3 text-sm transition-colors hover:bg-[#87334B]"
                      >
                        <Download className="mr-2 inline" size={15} />
                        Download
                      </a>
                    </div>
                  </motion.div>
                </Reveal>

                {/* COVER LETTER CARD */}

                <Reveal delay={0.15}>
                  <motion.div
                      whileHover={{ y: -5 }}
                      className="h-full rounded-2xl border border-white/10 bg-[#171315] p-8 transition-colors hover:border-[#641E32] sm:p-10"
                  >
                    <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-xl bg-[#641E32]/30 text-[#C66A80]">
                      <Mail size={27} />
                    </div>

                    <p className="mb-4 text-sm tracking-widest text-[#C66A80]">
                      DOCUMENT / 02
                    </p>

                    <h3 className="text-2xl font-semibold">Cover Letter</h3>

                    <p className="mt-3 text-sm leading-7 text-gray-400">
                      An introduction to my background, development experience
                      and interest in software engineering opportunities.
                    </p>

                    <div className="mt-9 flex flex-wrap gap-3">
                      <a
                          href="/srinith_p_cover_letter.pdf"
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full border border-[#641E32] px-5 py-3 text-sm transition-colors hover:bg-[#641E32]"
                      >
                        View Cover Letter{" "}
                        <ArrowUpRight className="ml-1 inline" size={15} />
                      </a>

                      <a
                          href="/srinith_p_cover_letter.pdf"
                          download="srinith_p_cover_letter.pdf"
                          className="rounded-full bg-[#641E32] px-5 py-3 text-sm transition-colors hover:bg-[#87334B]"
                      >
                        <Download className="mr-2 inline" size={15} />
                        Download
                      </a>
                    </div>
                  </motion.div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* ========================================
            CONTACT
        ======================================== */}

          <section
              id="contact"
              className="scroll-mt-24 px-6 py-32 lg:px-10"
          >
            <Reveal>
              <div className="mx-auto max-w-5xl text-center">

                <p className="mb-5 text-sm tracking-[0.25em] text-[#C66A80] uppercase">
                  06 / Get In Touch
                </p>

                <h2 className="text-5xl leading-tight font-semibold sm:text-7xl">
                  Let's build something
                  <br />
                  <span className="text-[#A33B55]">meaningful.</span>
                </h2>

                <p className="mx-auto mt-8 max-w-xl leading-8 text-gray-400">
                  I'm open to opportunities in software engineering and
                  development. If you have an opportunity or would like to
                  connect, feel free to reach out.
                </p>

                <motion.a
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.97 }}
                    href="mailto:srinithp04@gmail.com"
                    className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#641E32] px-8 py-4 text-sm font-medium transition-colors hover:bg-[#87334B]"
                >
                  <Mail size={17} />
                  Say Hello
                  <ArrowUpRight size={16} />
                </motion.a>

                <div className="mt-14 flex flex-wrap justify-center gap-8 text-sm text-gray-400">

                  <a
                      href="tel:+918940808830"
                      className="flex items-center gap-3 text-gray-300 transition-colors hover:text-[#A33B55]"
                  >
                    <span className="text-[#A33B55]"></span>
                    +91 89408 80830
                  </a>

                  <a
                      href="https://github.com/srinithp04"
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors hover:text-white"
                  >
                    GitHub <ArrowUpRight className="ml-1 inline" size={13} />
                  </a>

                  <a
                      href="https://linkedin.com/in/srinith-p"
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors hover:text-white"
                  >
                    LinkedIn <ArrowUpRight className="ml-1 inline" size={13} />
                  </a>

                  <a
                      href="mailto:srinithp04@gmail.com"
                      className="transition-colors hover:text-white"
                  >
                    Email <ArrowUpRight className="ml-1 inline" size={13} />
                  </a>
                </div>
              </div>
            </Reveal>
          </section>
        </main>

        {/* ========================================
          FOOTER
      ======================================== */}

        <footer className="border-t border-white/[0.07] px-6 py-8 lg:px-10">
          <div className="flex flex-col items-center justify-center gap-3 text-center ...">
            <p>© 2026 Srinith P. Built with purpose.</p>

            <a
                href="#home"
                className="transition-colors hover:text-[#C66A80]"
            >
              Back to top ↑
            </a>
          </div>
        </footer>
      </div>
  );
}

export default App;
