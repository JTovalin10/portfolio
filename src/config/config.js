import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

// Icon mapping for JSON data
const iconMap = {
  Github: Github,
  Linkedin: Linkedin,
  Mail: Mail,
  FileText: FileText,
};

// Transform contact lines to include icon components
const transformContactLines = (lines) => {
  return lines.map(line => {
    if (typeof line === 'object' && line.icon) {
      return {
        ...line,
        icon: iconMap[line.icon] || Mail, // Default to Mail if icon not found
      };
    }
    return line;
  });
};

// --- Configuration ---
// Data is loaded from portfolio.json for easy editing
export const CONFIG = {
  // Your name or handle
  name: portfolioData.name,

  // The "host" for the terminal prompt
  host: portfolioData.host,

  // "About Me" content (Markdown-style)
  about: {
    title: portfolioData.about.title,
    lines: portfolioData.about.lines,
  },

  // Projects (C++ / Code-style)
  projects: portfolioData.projects,

  // Hobbies & Interests
  hobbies: {
    title: portfolioData.hobbies.title,
    lines: portfolioData.hobbies.lines,
  },

  // Technical Skills
  technicalSkills: {
    title: portfolioData.technicalSkills.title,
    lines: portfolioData.technicalSkills.lines,
  },

  // Contact Info
  contact: {
    title: portfolioData.contact.title,
    lines: transformContactLines(portfolioData.contact.lines),
  },
};
