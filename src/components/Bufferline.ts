import { createElement, isMobile } from '../utils/dom';
import { createIconElement } from '../utils/icons';
import { theme } from '../config/theme';
import { fileSystem } from '../config/fileSystem';

const XmarkIcon = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

export function createBufferline(activeFile: string, setActiveFile: (file: string) => void): HTMLElement | null {
  if (isMobile()) return null;

  const container = createElement('div', {
    className: `${theme.bufferBg} d-flex align-items-center overflow-x-auto`,
    style: {
      flexShrink: '0',
      borderBottom: '1px solid var(--nord-border)',
    }
  });

  fileSystem.forEach(file => {
    const isActive = activeFile === file.name;

    const button = createElement('button', {
      className: `d-flex align-items-center gap-2 px-3 py-2 border-0 ${theme.text}`,
      style: {
        flexShrink: '0',
        fontSize: '14px',
        transition: 'color 0.2s',
        backgroundColor: isActive ? 'var(--nord-buffer-active-bg)' : 'transparent',
        color: isActive ? 'var(--nord-lualine-text)' : 'var(--nord-buffer-inactive-text)',
      },
      onClick: () => setActiveFile(file.name),
      onMouseEnter: !isActive ? (e) => {
        (e.currentTarget as HTMLElement).style.color = 'var(--nord-lualine-text)';
      } : undefined,
      onMouseLeave: !isActive ? (e) => {
        (e.currentTarget as HTMLElement).style.color = 'var(--nord-buffer-inactive-text)';
      } : undefined,
    });

    const icon = createIconElement(file.icon, 15, 15);
    button.appendChild(icon);

    const text = createElement('span', { textContent: file.name });
    button.appendChild(text);

    if (isActive) {
      const xmark = createIconElement(XmarkIcon, 15, 15, 'ms-2');
      button.appendChild(xmark);
    }

    container.appendChild(button);
  });

  return container;
}
