import { LucideIcon } from "lucide-react";

export interface Skill {
  name: string;
  icon: LucideIcon;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  achievements: string[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  address: string;
}

export interface NavItem {
  name: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}
