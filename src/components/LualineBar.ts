import { createElement, isMobile } from '../utils/dom';
import { createIconElement } from '../utils/icons';
import { theme } from '../config/theme';
import { CONFIG } from '../config/config';

const GitBranchIcon = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 12L12 12V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const cursorHTML = `<span class="d-inline-block bg-light animate-blink" style="width: 8px; height: 20px;" aria-hidden="true"></span>`;

export function createLualineBar(activeFile: string): HTMLElement {
  const mobile = isMobile();
  const lineCount = activeFile === 'projects.cpp' ? 38 : (activeFile === 'about.md' ? 5 : 8);

  const container = createElement('div', {
    className: `${theme.lualineBg} d-flex justify-content-between align-items-center fw-bold`,
    style: {
      flexShrink: '0',
      height: '28px',
      fontSize: mobile ? '13px' : '14px',
      overflow: 'hidden',
      paddingBottom: mobile ? 'env(safe-area-inset-bottom, 0)' : '0',
    }
  });

  // Left side
  const leftSide = createElement('div', {
    className: 'd-flex align-items-center h-100',
    style: { flex: '1', minWidth: '0', overflow: 'hidden' }
  });

  // Mode segment
  const modeSegment = createElement('div', {
    className: 'd-flex align-items-center px-3 gap-2',
    innerHTML: '<span class="fw-black" style="letter-spacing: 0.1em;">NORMAL</span>',
    style: {
      height: '28px',
      backgroundColor: 'var(--nord-status-accent)',
      color: 'var(--nord-status-text)',
      flexShrink: '0',
    }
  });

  // Arrow after mode
  const arrow1 = createElement('div', {
    style: {
      width: '0',
      height: '0',
      borderTop: '14px solid transparent',
      borderBottom: '14px solid transparent',
      borderLeft: '10px solid var(--nord-status-accent)',
      flexShrink: '0',
    }
  });

  // Git branch segment
  const gitSegment = createElement('div', {
    className: 'd-flex align-items-center px-3 gap-2',
    style: {
      height: '28px',
      backgroundColor: 'var(--nord-lualine-section)',
      color: 'var(--nord-lualine-text)',
      flexShrink: '0',
    }
  });

  const branchIcon = createIconElement(GitBranchIcon, 16, 16);
  const branchText = createElement('span', { textContent: 'main' });
  gitSegment.appendChild(branchIcon);
  gitSegment.appendChild(branchText);

  // Arrow after git
  const arrow2 = createElement('div', {
    style: {
      width: '0',
      height: '0',
      borderTop: '14px solid transparent',
      borderBottom: '14px solid transparent',
      borderLeft: '10px solid var(--nord-lualine-section)',
      flexShrink: '0',
    }
  });

  // Filename
  const fileSection = createElement('div', {
    className: 'px-3 d-flex align-items-center gap-2',
    style: { flexShrink: '0' }
  });

  const filename = createElement('span', {
    className: theme.text,
    textContent: activeFile
  });

  const modified = createElement('span', {
    className: theme.textDim,
    textContent: '[+]'
  });

  fileSection.appendChild(filename);
  fileSection.appendChild(modified);

  // Hint text
  const hintSection = createElement('div', {
    className: 'px-3 d-flex align-items-center',
    style: { flex: '1', minWidth: '0' }
  });

  const hintText = createElement('span', {
    className: theme.textDim,
    textContent: "Press 'q' to return to homepage",
    style: {
      fontSize: '11px',
      opacity: '0.6',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      minWidth: '0',
    },
    attributes: { title: "Press 'q' to return to homepage" }
  });

  hintSection.appendChild(hintText);

  leftSide.appendChild(modeSegment);
  leftSide.appendChild(arrow1);
  leftSide.appendChild(gitSegment);
  leftSide.appendChild(arrow2);
  leftSide.appendChild(fileSection);
  leftSide.appendChild(hintSection);

  // Right side
  const rightSide = createElement('div', {
    className: 'd-flex align-items-center h-100'
  });

  const userSection = createElement('div', {
    className: 'px-3'
  });

  const userText = createElement('span', {
    className: theme.textAccent,
    textContent: `${CONFIG.name}@${CONFIG.host}`
  });

  userSection.appendChild(userText);

  // Arrow before line count
  const arrow3 = createElement('div', {
    style: {
      width: '0',
      height: '0',
      borderTop: '14px solid transparent',
      borderBottom: '14px solid transparent',
      borderRight: '10px solid var(--nord-lualine-section)',
    }
  });

  // Line count segment
  const lineSegment = createElement('div', {
    className: 'd-flex align-items-center px-3 gap-2',
    innerHTML: `<span>${lineCount}L</span>${cursorHTML}`,
    style: {
      height: '28px',
      backgroundColor: 'var(--nord-lualine-section)',
      color: 'var(--nord-lualine-text)',
    }
  });

  rightSide.appendChild(userSection);
  rightSide.appendChild(arrow3);
  rightSide.appendChild(lineSegment);

  container.appendChild(leftSide);
  container.appendChild(rightSide);

  return container;
}
