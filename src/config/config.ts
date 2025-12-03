import portfolioData from '../data/portfolio.json';
import { PortfolioConfig, ContactLine } from '../types';

// Icon mapping for JSON data (Iconoir SVG strings)
const GithubIcon = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 22.027V19.5C16 18.5 16.1 18 15 17.5C18.1 17.1 21 15.6 21 11.5C21 10 20.5 9 19.5 8C19.9 7 19.9 5.7 19.5 5C19.5 5 18.5 4.8 16.5 6.2C15.5 6 13.5 5.8 12 6C10.5 5.8 8.5 6 7.5 6.2C5.5 4.8 4.5 5 4.5 5C4.1 5.7 4.1 7 4.5 8C3.5 9 3 10 3 11.5C3 15.6 5.9 17.1 9 17.5C8 18 7.9 18.5 7.9 19.5L8 22.027" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 20C4.9 21 4 17.8 2 17.3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const LinkedinIcon = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 17V13.5V10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 17V13.75M11 10V13.75M11 13.75C11 10 17 10 17 13.75V17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 7.01L7.01 6.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const MailIcon = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 9L12 12.5L17 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 17V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17Z" stroke="currentColor" stroke-width="1.5"/></svg>`;

const PageIcon = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 21.4V2.6C4 2.26863 4.26863 2 4.6 2H16.2515C16.4106 2 16.5632 2.06321 16.6757 2.17574L19.8243 5.32426C19.9368 5.43679 20 5.5894 20 5.74853V21.4C20 21.7314 19.7314 22 19.4 22H4.6C4.26863 22 4 21.7314 4 21.4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 2V5.4C16 5.73137 16.2686 6 16.6 6H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const iconMap: Record<string, string> = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Mail: MailIcon,
  FileText: PageIcon,
};

// Transform contact lines to include icon SVG strings
const transformContactLines = (lines: any[]): ContactLine[] => {
  return lines.map(line => {
    if (typeof line === 'object' && line.icon) {
      return {
        ...line,
        icon: iconMap[line.icon] || MailIcon,
      };
    }
    return line;
  });
};

// --- Configuration ---
// Data is loaded from portfolio.json for easy editing
export const CONFIG: PortfolioConfig = {
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
