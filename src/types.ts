// TypeScript types and interfaces for the portfolio application

export interface FileItem {
  name: string;
  key: string;
  label: string;
  icon: string; // SVG string from iconoir
}

export interface ProjectLink {
  source_code?: string;
  live_demo?: string;
}

export interface Project {
  title: string;
  classDef: string;
  public: string[];
  links?: ProjectLink;
  closeBrace: string;
}

export interface ContactLine {
  icon: string;
  label: string;
  value: string;
  href: string;
}

export interface PortfolioSection {
  title: string;
  lines: (string | ContactLine)[];
}

export interface PortfolioConfig {
  name: string;
  host: string;
  about: PortfolioSection;
  projects: Project[];
  hobbies: PortfolioSection;
  technicalSkills: PortfolioSection;
  contact: {
    title: string;
    lines: ContactLine[];
  };
}

export interface ThemeColors {
  bg: string;
  text: string;
  textDim: string;
  textAccent: string;
  primary: string;
  secondary: string;
  tertiary: string;
  string: string;
  keyword: string;
  type: string;
  comment: string;
  number: string;
  operator: string;
  link: string;
  linkHover: string;
  sidebarBg: string;
  editorBg: string;
  statusAccent: string;
  statusAccentText: string;
  activeFileBg: string;
  lineNum: string;
  bufferBg: string;
  bufferActiveBg: string;
  bufferActiveText: string;
  bufferInactiveText: string;
  lualineMode: string;
  lualineModeText: string;
  lualineBg: string;
  lualineText: string;
  lualineSection: string;
  lualineSectionText: string;
}

export type ViewType = 'splash' | 'editor';

export interface AppState {
  view: ViewType;
  activeFile: string;
}
