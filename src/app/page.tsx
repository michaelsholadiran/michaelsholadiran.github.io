"use client";

import { Navbar } from "@/components/navbar";
import { MapPin, Phone, Mail, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/project-card";
import {
  SKILLS,
  PROJECTS,
  EXPERIENCES,
  EDUCATION,
  CONTACT_INFO,
} from "@/constants/data";
import { fadeInUp, scaleIn, staggerContainer } from "@/utils/motion";

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
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center"
          >
            <motion.div variants={scaleIn} className="mb-8">
              <img
                src={`${
                  process.env.NEXT_PUBLIC_BASE_PATH || ""
                }/images/profile-picture.jpeg`}
                alt="Michael Sholadiran"
                className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-blue-600 shadow-lg"
              />
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Michael Sholadiran
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
            >
              Full Stack Developer | Laravel • React.js • Next.js
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center gap-4 mb-8"
            >
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <MapPin className="h-5 w-5" />
                <span>{CONTACT_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Phone className="h-5 w-5" />
                <span>{CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Mail className="h-5 w-5" />
                <span>{CONTACT_INFO.email}</span>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="flex justify-center gap-4"
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
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
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
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Technical Skills
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {SKILLS.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
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
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Work Experience
          </motion.h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {EXPERIENCES.map((experience, index) => (
              <motion.div
                key={experience.title}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md"
              >
                <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-2">
                  {experience.company}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {experience.period}
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  {experience.responsibilities.map((responsibility, i) => (
                    <li key={i}>{responsibility}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Education
          </motion.h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {EDUCATION.map((education, index) => (
              <motion.div
                key={education.degree}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md"
              >
                <h3 className="text-xl font-bold mb-2">{education.degree}</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-2">
                  {education.institution}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {education.period}
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  {education.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Featured Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Get in Touch
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <p className="text-lg mb-8">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>
            <div className="flex flex-col items-center gap-4">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Mail className="h-5 w-5" />
                Contact Me
              </a>
              <p className="text-gray-600 dark:text-gray-300">
                {CONTACT_INFO.address}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
