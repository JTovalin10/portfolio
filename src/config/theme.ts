import { ThemeColors } from '../types';

// --- Theme Colors (Nord) - Bootstrap CSS Classes ---
export const theme: ThemeColors = {
  bg: "nord-bg",
  text: "nord-text",
  textDim: "nord-text-dim",
  textAccent: "nord-text-accent",
  primary: "nord-primary",
  secondary: "nord-secondary",
  tertiary: "nord-tertiary",
  string: "nord-string",
  keyword: "nord-keyword",
  type: "nord-type",
  comment: "nord-comment",
  number: "nord-number",
  operator: "nord-operator",
  link: "nord-link",
  linkHover: "nord-link", // Handled in CSS

  // Theme colors for LazyVim aesthetic
  sidebarBg: "nord-sidebar-bg",
  editorBg: "nord-bg",
  statusAccent: "nord-status-accent",
  statusAccentText: "nord-status-accent",
  activeFileBg: "nord-active-bg",
  lineNum: "nord-text-dim",

  // New colors for Bufferline and Lualine
  bufferBg: "nord-buffer-bg",
  bufferActiveBg: "nord-buffer-active",
  bufferActiveText: "nord-buffer-active",
  bufferInactiveText: "nord-buffer-inactive",

  lualineMode: "nord-status-accent",
  lualineModeText: "nord-status-accent",
  lualineBg: "nord-lualine-bg",
  lualineText: "nord-text",
  lualineSection: "nord-lualine-section",
  lualineSectionText: "nord-lualine-section",
};
