import { createElement, isMobile, clearElement } from '../utils/dom';
import { createIconElement } from '../utils/icons';
import { theme } from '../config/theme';
import { CONFIG } from '../config/config';
import { fileSystem, icons } from '../config/fileSystem';

export function createFileTree(
  activeFile: string,
  setActiveFile: (file: string) => void,
  onBackToHome: () => void
): HTMLElement {
  const mobile = isMobile();

  if (mobile) {
    return createMobileFileTree(activeFile, setActiveFile, onBackToHome);
  }

  return createDesktopFileTree(activeFile, setActiveFile, onBackToHome);
}

function createDesktopFileTree(
  activeFile: string,
  setActiveFile: (file: string) => void,
  onBackToHome: () => void
): HTMLElement {
  const container = createElement('div', {
    className: `${theme.sidebarBg} d-flex flex-column`,
    style: {
      width: '100%',
      minWidth: '240px',
      maxWidth: '288px',
      flexShrink: '0',
      borderRight: '1px solid var(--nord-border)',
      alignSelf: 'stretch',
    }
  });

  // Header
  const header = createElement('div', {
    className: 'd-flex align-items-center gap-2 p-3 border-bottom',
    style: {
      borderBottom: '1px solid var(--nord-border)',
      cursor: 'pointer',
      flexShrink: '0',
      transition: 'background-color 0.2s ease',
      backgroundColor: 'transparent',
    },
    onClick: onBackToHome,
    onMouseEnter: (e) => {
      (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(136, 192, 208, 0.15)';
    },
    onMouseLeave: (e) => {
      (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
    }
  });

  const folderIcon = createIconElement(icons.Folder, 18, 18, theme.primary);
  const headerText = createElement('span', {
    className: 'fw-bold',
    textContent: CONFIG.name,
    style: { color: 'var(--nord-text)' }
  });

  header.appendChild(folderIcon);
  header.appendChild(headerText);

  // File list
  const fileList = createElement('div', {
    className: 'p-3 overflow-auto',
    style: { flex: '1', minHeight: '0', overflowY: 'auto' }
  });

  const ul = createElement('ul', { className: 'list-unstyled mb-0' });

  fileSystem.forEach(file => {
    const isActive = activeFile === file.name;
    const li = createElement('li');

    const button = createElement('button', {
      className: `d-flex align-items-center gap-2 w-100 text-start p-2 rounded border-0 ${theme.text} ${isActive ? theme.activeFileBg : theme.textDim}`,
      style: {
        transition: 'all 0.1s',
        backgroundColor: isActive ? 'var(--nord-active-bg)' : 'transparent',
        minHeight: '44px',
        fontSize: '15px',
      },
      onClick: () => setActiveFile(file.name),
      onMouseEnter: !isActive ? (e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.backgroundColor = 'rgba(136, 192, 208, 0.15)';
        el.style.color = 'var(--nord-text)';
      } : undefined,
      onMouseLeave: !isActive ? (e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.backgroundColor = 'transparent';
        el.style.color = 'var(--nord-text-dim)';
      } : undefined,
    });

    const icon = createIconElement(file.icon, 16, 16);
    const text = createElement('span', { textContent: file.name });

    button.appendChild(icon);
    button.appendChild(text);
    li.appendChild(button);
    ul.appendChild(li);
  });

  fileList.appendChild(ul);
  container.appendChild(header);
  container.appendChild(fileList);

  return container;
}

function createMobileFileTree(
  activeFile: string,
  setActiveFile: (file: string) => void,
  onBackToHome: () => void
): HTMLElement {
  const wrapper = createElement('div');
  let isOpen = false;

  const render = () => {
    clearElement(wrapper);

    if (!isOpen) {
      const toggleBtn = createElement('button', {
        className: `${theme.sidebarBg} border-0 d-flex align-items-center justify-content-center`,
        innerHTML: createIconElement(icons.NavArrowRight, 20, 20).outerHTML,
        style: {
          position: 'fixed',
          left: '0',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: '1000',
          width: '32px',
          height: '64px',
          borderTopRightRadius: '8px',
          borderBottomRightRadius: '8px',
          borderRight: '1px solid var(--nord-border)',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          color: 'var(--nord-primary)',
        },
        onClick: () => {
          isOpen = true;
          render();
        }
      });

      wrapper.appendChild(toggleBtn);
    } else {
      // Backdrop
      const backdrop = createElement('div', {
        style: {
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: '999',
        },
        onClick: () => {
          isOpen = false;
          render();
        }
      });

      // Sidebar
      const sidebar = createElement('div', {
        className: `${theme.sidebarBg} d-flex flex-column`,
        style: {
          position: 'fixed',
          left: '0',
          top: '0',
          bottom: '0',
          width: '280px',
          maxWidth: '80%',
          zIndex: '1000',
          borderRight: '1px solid var(--nord-border)',
          boxShadow: '2px 0 8px rgba(0, 0, 0, 0.3)',
        }
      });

      // Header with close
      const header = createElement('div', {
        className: 'd-flex align-items-center justify-content-between gap-2 p-3 border-bottom',
        style: { borderBottom: '1px solid var(--nord-border)', flexShrink: '0' }
      });

      const leftSection = createElement('div', {
        className: 'd-flex align-items-center gap-2',
        style: { cursor: 'pointer', flex: '1' },
        onClick: () => {
          onBackToHome();
          isOpen = false;
          render();
        }
      });

      const folderIcon = createIconElement(icons.Folder, 18, 18, theme.primary);
      const headerText = createElement('span', {
        className: 'fw-bold',
        textContent: CONFIG.name,
        style: { color: 'var(--nord-text)' }
      });

      leftSection.appendChild(folderIcon);
      leftSection.appendChild(headerText);

      const closeBtn = createElement('button', {
        className: 'border-0 bg-transparent',
        innerHTML: createIconElement(icons.NavArrowLeft, 20, 20).outerHTML,
        style: {
          color: 'var(--nord-text)',
          cursor: 'pointer',
          padding: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minWidth: '44px',
          minHeight: '44px',
        },
        onClick: () => {
          isOpen = false;
          render();
        }
      });

      header.appendChild(leftSection);
      header.appendChild(closeBtn);

      // File list
      const fileList = createElement('div', {
        className: 'p-3 overflow-auto',
        style: { flex: '1', minHeight: '0', overflowY: 'auto' }
      });

      const ul = createElement('ul', { className: 'list-unstyled mb-0' });

      fileSystem.forEach(file => {
        const isActive = activeFile === file.name;
        const li = createElement('li');

        const button = createElement('button', {
          className: `d-flex align-items-center gap-2 w-100 text-start p-2 rounded border-0 ${theme.text} ${isActive ? theme.activeFileBg : theme.textDim}`,
          style: {
            transition: 'all 0.1s',
            backgroundColor: isActive ? 'var(--nord-active-bg)' : 'transparent',
            minHeight: '44px',
            fontSize: '15px',
          },
          onClick: () => {
            setActiveFile(file.name);
            isOpen = false;
            render();
          }
        });

        const icon = createIconElement(file.icon, 16, 16);
        const text = createElement('span', { textContent: file.name });

        button.appendChild(icon);
        button.appendChild(text);
        li.appendChild(button);
        ul.appendChild(li);
      });

      fileList.appendChild(ul);
      sidebar.appendChild(header);
      sidebar.appendChild(fileList);

      wrapper.appendChild(backdrop);
      wrapper.appendChild(sidebar);
    }
  };

  render();
  return wrapper;
}
