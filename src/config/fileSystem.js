import { 
  PageSearch, 
  Code, 
  Settings, 
  Heart, 
  Mail,
  Folder,
  NavArrowRight,
  NavArrowLeft
} from 'iconoir-react';

// --- Static File System ---
// Icons from Iconoir (open source, MIT licensed)
export const fileSystem = [
  { name: "about.md", icon: PageSearch, key: 'a', label: "About Me" },
  { name: "projects.cpp", icon: Code, key: 'p', label: "Projects" },
  { name: "technical-skills.md", icon: Settings, key: 't', label: "Technical Skills" },
  { name: "hobbies.md", icon: Heart, key: 'h', label: "Hobbies & Interests" },
  { name: "contact.txt", icon: Mail, key: 'c', label: "Contact" },
];

// Export folder and navigation icons for use in components
export { Folder, NavArrowRight, NavArrowLeft };

