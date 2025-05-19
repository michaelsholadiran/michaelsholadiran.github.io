import { Code2, Database, Server, Github, Linkedin, Mail } from "lucide-react";
import {
  Skill,
  Project,
  Experience,
  Education,
  ContactInfo,
  NavItem,
  SocialLink,
} from "@/interfaces";

export const SKILLS: Skill[] = [
  { name: "React.js", icon: Code2 },
  { name: "Next.js", icon: Code2 },
  { name: "Laravel", icon: Server },
  { name: "Redux.js", icon: Code2 },
  { name: "PHP", icon: Server },
  { name: "MySQL", icon: Database },
];

export const PROJECTS: Project[] = [
  {
    title: "Motobills Platform",
    description:
      "Nigeria's number one bill payment platform for hassle-free payment of utility bills, cheap airtime/data purchase, and the best deals on flights and hotels. Built with Next.js and Laravel, featuring real-time transactions and secure payment processing.",
    technologies: ["Next.js", "Laravel", "MySQL", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/motobills",
    liveUrl: "https://www.motobills.com",
    imageUrl: `${
      process.env.NEXT_PUBLIC_BASE_PATH || ""
    }/images/motobills.webp`,
  },
  {
    title: "Sujimoto Real Estate",
    description:
      "Africa's most sophisticated real estate brand and the Rolls Royce of luxury real estate. Specializing in high-end residential, commercial, and hospitality developments with exquisite finishing and innovative designs.",
    technologies: ["React.js", "Next.js", "Tailwind CSS", "REST APIs"],
    githubUrl: "https://github.com/yourusername/sujimoto",
    liveUrl: "https://sujimotonig.com",
    imageUrl: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/sujimoto.png`,
  },
];

export const EXPERIENCES: Experience[] = [
  {
    title: "Full Stack Developer",
    company: "Motobills",
    period: "September 2024 - Present",
    responsibilities: [
      "Designed and developed performant, responsive user interfaces using Next.js, React, and Tailwind CSS",
      "Built and maintained secure, RESTful APIs and backend services using Laravel (PHP) and MySQL",
      "Improved application performance by over 40% through front-end optimization and API restructuring",
      "Spearheaded the development of a real-time dashboard that improved operational efficiency",
    ],
  },
  {
    title: "Frontend Web Developer",
    company: "SUJIMOTO GROUP",
    period: "September 2024 - Present",
    responsibilities: [
      "Developed responsive and high-performance user interfaces for various web platforms",
      "Built reusable and modular components to maintain consistency and improve development efficiency",
      "Optimized frontend performance for speed, responsiveness, and SEO friendliness",
      "Contributed to improving and maintaining the design system to support brand consistency",
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    degree: "BSc in Computer Science",
    institution: "University of Lagos",
    period: "2018 - 2022",
    achievements: [
      "Graduated with First Class Honours",
      "Specialized in Software Engineering and Web Development",
      "Active member of the Computer Science Students Association",
      "Participated in various hackathons and coding competitions",
    ],
  },
];

export const CONTACT_INFO: ContactInfo = {
  email: "sholadiranmichael@gmail.com",
  phone: "08071810339",
  location: "Lagos State, Nigeria",
  address: "16, Bornu Crescent Agbara Estate\nAgbara Ogun State, Nigeria",
};

export const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/michaelsholadiran",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/michaelsholadiran",
    icon: Linkedin,
  },
  {
    name: "Email",
    url: "mailto:sholadiranmichael@gmail.com",
    icon: Mail,
  },
];
