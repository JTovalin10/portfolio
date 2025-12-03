import { FileItem } from '../types';

// Import iconoir SVG strings
// Note: iconoir exports SVG strings directly
const PageSearchIcon = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.5 20.5L22 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 11V12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12V11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 17L17 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const CodeIcon = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 6L10 18.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.5 8.5L3 12L6.5 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.5 8.5L21 12L17.5 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const SettingsIcon = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.6224 10.3954L18.5247 7.7448L20 6L18 4L16.2647 5.48295L13.5578 4.36974L12.9353 2H10.981L10.3491 4.40113L7.70441 5.51596L6 4L4 6L5.45337 7.78885L4.3725 10.4463L2 11V13L4.40111 13.6555L5.51575 16.2997L4 18L6 20L7.79116 18.5403L10.397 19.6123L11 22H13L13.6045 19.6132L16.2551 18.5155C16.6969 18.8313 18 20 18 20L20 18L18.5159 16.2494L19.6139 13.598L21.9999 12.9772L22 11L19.6224 10.3954Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const HeartIcon = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 8.86222C22 10.4087 21.4062 11.8941 20.3458 12.9929L12 21.5L3.65418 12.9929C2.59378 11.8941 2 10.4087 2 8.86222C2 5.76842 4.51472 3.23628 7.58734 3.23628C9.21511 3.23628 10.7017 3.93713 11.7226 5.05025L12 5.34876L12.2774 5.05025C13.2983 3.93713 14.7849 3.23628 16.4127 3.23628C19.4853 3.23628 22 5.76842 22 8.86222Z" stroke="currentColor" stroke-linejoin="round"/></svg>`;

const MailIcon = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 9L12 12.5L17 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 17V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17Z" stroke="currentColor" stroke-width="1.5"/></svg>`;

const FolderIcon = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 11V4.6C2 4.26863 2.26863 4 2.6 4H8.77805C8.92127 4 9.05977 4.05124 9.16852 4.14445L12.3315 6.85555C12.4402 6.94876 12.5787 7 12.722 7H21.4C21.7314 7 22 7.26863 22 7.6V11M2 11V19.4C2 19.7314 2.26863 20 2.6 20H21.4C21.7314 20 22 19.7314 22 19.4V11M2 11H22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const NavArrowRightIcon = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 6L15 12L9 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const NavArrowLeftIcon = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 6L9 12L15 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

// --- Static File System ---
export const fileSystem: FileItem[] = [
  { name: "about.md", icon: PageSearchIcon, key: 'a', label: "About Me" },
  { name: "projects.cpp", icon: CodeIcon, key: 'p', label: "Projects" },
  { name: "technical-skills.md", icon: SettingsIcon, key: 't', label: "Technical Skills" },
  { name: "hobbies.md", icon: HeartIcon, key: 'h', label: "Hobbies & Interests" },
  { name: "contact.txt", icon: MailIcon, key: 'c', label: "Contact" },
];

// Export navigation icons
export const icons = {
  Folder: FolderIcon,
  NavArrowRight: NavArrowRightIcon,
  NavArrowLeft: NavArrowLeftIcon,
  PageSearch: PageSearchIcon,
  Code: CodeIcon,
  Settings: SettingsIcon,
  Heart: HeartIcon,
  Mail: MailIcon,
};
