"use client";

import { Navbar } from "@/components/navbar";
import {
  Github,
  Linkedin,
  Mail,
  Code2,
  Database,
  Server,
  MapPin,
  Phone,
  Calendar,
  ArrowDown,
} from "lucide-react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/project-card";

const skills = [
  { name: "React.js", icon: Code2 },
  { name: "Next.js", icon: Code2 },
  { name: "Laravel", icon: Server },
  { name: "Redux.js", icon: Code2 },
  { name: "PHP", icon: Server },
  { name: "MySQL", icon: Database },
];

const projects = [
  {
    title: "Motobills Platform",
    description:
      "Nigeria's number one bill payment platform for hassle-free payment of utility bills, cheap airtime/data purchase, and the best deals on flights and hotels. Built with Next.js and Laravel, featuring real-time transactions and secure payment processing.",
    technologies: ["Next.js", "Laravel", "MySQL", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/motobills",
    liveUrl: "https://www.motobills.com",
    imageUrl: "/images/motobills.webp",
  },
  {
    title: "Sujimoto Real Estate",
    description:
      "Africa's most sophisticated real estate brand and the Rolls Royce of luxury real estate. Specializing in high-end residential, commercial, and hospitality developments with exquisite finishing and innovative designs.",
    technologies: ["React.js", "Next.js", "Tailwind CSS", "REST APIs"],
    githubUrl: "https://github.com/yourusername/sujimoto",
    liveUrl: "https://sujimotonig.com",
    imageUrl: "/images/sujimoto.png",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative"
      >
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <img
                src="/images/profile-picture.jpeg"
                alt="Michael Sholadiran"
                className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-blue-600 shadow-lg"
              />
            </motion.div>
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Michael Sholadiran
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Full Stack Developer | Laravel • React.js • Next.js
            </motion.p>
            <motion.div
              className="flex flex-col items-center gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <MapPin className="h-5 w-5" />
                <span>Lagos State, Nigeria</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Phone className="h-5 w-5" />
                <span>08071810339</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Mail className="h-5 w-5" />
                <span>sholadiranmichael@gmail.com</span>
              </div>
            </motion.div>
            <motion.div
              className="flex justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <a
                href="#projects"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="h-6 w-6 text-gray-400" />
        </motion.div>
      </section>

      {/* Summary Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate Full Stack Developer with hands-on experience
              building robust web applications using Laravel, React.js, and
              Next.js. From building scalable backends with Laravel to creating
              sleek, high-performance frontends with React and Next.js, I thrive
              in turning ideas into fully functional products. I focus on clean
              architecture, reusable components, and optimizing performance
              across the stack.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Technical Skills
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <skill.icon className="h-8 w-8 mb-2 text-blue-600" />
                <span className="text-sm font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Work Experience
          </motion.h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md"
            >
              <h3 className="text-xl font-bold mb-2">Full Stack Developer</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-2">Motobills</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                September 2024 - Present
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>
                  Designed and developed performant, responsive user interfaces
                  using Next.js, React, and Tailwind CSS
                </li>
                <li>
                  Built and maintained secure, RESTful APIs and backend services
                  using Laravel (PHP) and MySQL
                </li>
                <li>
                  Improved application performance by over 40% through front-end
                  optimization and API restructuring
                </li>
                <li>
                  Spearheaded the development of a real-time dashboard that
                  improved operational efficiency
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md"
            >
              <h3 className="text-xl font-bold mb-2">Frontend Web Developer</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-2">
                SUJIMOTO GROUP
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                September 2024 - Present
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>
                  Developed responsive and high-performance user interfaces for
                  various web platforms
                </li>
                <li>
                  Built reusable and modular components to maintain consistency
                  and improve development efficiency
                </li>
                <li>
                  Optimized frontend performance for speed, responsiveness, and
                  SEO friendliness
                </li>
                <li>
                  Contributed to improving and maintaining the design system to
                  support brand consistency
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Education
          </motion.h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md"
            >
              <h3 className="text-xl font-bold mb-2">
                BSc in Computer Science
              </h3>
              <p className="text-blue-600 dark:text-blue-400 mb-2">
                University of Lagos
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                2018 - 2022
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Graduated with First Class Honours</li>
                <li>Specialized in Software Engineering and Web Development</li>
                <li>
                  Active member of the Computer Science Students Association
                </li>
                <li>
                  Participated in various hackathons and coding competitions
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Get in Touch
          </motion.h2>
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg mb-8">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>
            <div className="flex flex-col items-center gap-4">
              <a
                href="mailto:sholadiranmichael@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Mail className="h-5 w-5" />
                Contact Me
              </a>
              <p className="text-gray-600 dark:text-gray-300">
                16, Bornu Crescent Agbara Estate
                <br />
                Agbara Ogun State, Nigeria
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
