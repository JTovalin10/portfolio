import { createElement, isMobile } from '../utils/dom';
import { createIconElement } from '../utils/icons';
import { theme } from '../config/theme';
import { fileSystem } from '../config/fileSystem';

const SparkIcon = `<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12C6.6 12 12 17.4 12 21C12 17.4 17.4 12 21 12C17.4 12 12 6.6 12 3C12 6.6 6.6 12 3 12Z" stroke="currentColor" stroke-linejoin="round"/></svg>`;

export function createSplashScreen(onNavigate: (file: string) => void): HTMLElement {
  const mobile = isMobile();

  const container = createElement('div', {
    className: `${theme.editorBg} d-flex flex-column align-items-center justify-content-center position-relative`,
    style: {
      flex: '1',
      padding: mobile ? '20px 10px' : '40px',
      userSelect: 'none',
      overflowY: 'auto',
      overflowX: 'hidden',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
    }
  });

  // Get page load time
  let pageLoadTime = '~??';
  if (performance && performance.getEntriesByType) {
    const navTiming = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
    if (navTiming) {
      const loadTime = navTiming.domContentLoadedEventEnd - navTiming.startTime;
      pageLoadTime = loadTime.toFixed(2);
    }
  }

  // ASCII Art
  const asciiArt = `██████╗ ██╗   ██╗███████╗████████╗██╗███╗   ██╗██╗   ██╗██╗███╗   ███╗
╚════██║██║   ██║██╔════╝╚══██╔══╝██║████╗  ██║██║   ██║██║████╗ ████║
     ██║██║   ██║███████╗   ██║   ██║██╔██╗ ██║██║   ██║██║██╔████╔██║
██   ██║██║   ██║╚════██║   ██║   ██║██║╚██╗██║╚██╗ ██╔╝██║██║╚██╔╝██║
╚█████╔╝╚██████╔╝███████║   ██║   ██║██║ ╚████║ ╚████╔╝ ██║██║ ╚═╝ ██║
 ╚════╝  ╚═════╝ ╚══════╝   ╚═╝   ╚═╝╚═╝  ╚═══╝  ╚═══╝  ╚═╝╚═╝     ╚═╝`;

  const asciiContainer = createElement('div', {
    className: 'mb-4 d-flex justify-content-center',
    style: {
      width: '100%',
      maxWidth: '100%',
      padding: mobile ? '10px' : '0',
      overflow: 'hidden',
      position: 'relative',
    }
  });

  const pre = createElement('pre', {
    className: `fw-bold ${theme.primary} monospace`,
    textContent: asciiArt,
    style: {
      lineHeight: '1.1',
      letterSpacing: '0',
      fontSize: mobile ? 'clamp(6px, 2.2vw, 11px)' : 'clamp(9px, 1.6vw, 13px)',
      whiteSpace: 'pre',
      margin: '0',
      padding: '0',
      width: 'fit-content',
      maxWidth: '100%',
      transform: mobile ? 'scale(0.95)' : 'scale(1)',
      transformOrigin: 'center',
      overflow: 'visible',
      display: 'inline-block',
    }
  });

  asciiContainer.appendChild(pre);
  container.appendChild(asciiContainer);

  // Menu items
  const menuContainer = createElement('div', {
    className: mobile ? "d-flex flex-column gap-3 w-100" : "row g-3",
    style: {
      maxWidth: mobile ? '100%' : '448px',
      width: '100%',
      padding: mobile ? '0 20px 60px 20px' : '0',
      marginBottom: mobile ? '20px' : '0',
    }
  });

  fileSystem.forEach(item => {
    const menuItem = createElement('div', {
      className: mobile ? "d-flex align-items-center justify-content-between w-100" : "col-6 d-flex align-items-center justify-content-between",
      style: {
        fontSize: mobile ? '17px' : '18px',
        cursor: 'pointer',
        padding: mobile ? '16px' : '0',
        borderRadius: mobile ? '8px' : '0',
        transition: 'background-color 0.15s ease',
        gap: mobile ? '12px' : '16px',
        minHeight: mobile ? '56px' : 'auto',
        backgroundColor: 'transparent',
      },
      onClick: () => onNavigate(item.name),
      onTouchStart: mobile ? (e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(136, 192, 208, 0.2)';
      } : undefined,
      onTouchEnd: mobile ? (e) => {
        setTimeout(() => {
          (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
        }, 100);
      } : undefined,
      onMouseEnter: !mobile ? (e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(136, 192, 208, 0.1)';
      } : undefined,
      onMouseLeave: !mobile ? (e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
      } : undefined,
    });

    const leftSection = createElement('div', {
      className: 'd-flex align-items-center',
      style: { flex: '1', minWidth: '0', gap: '16px' }
    });

    const icon = createIconElement(item.icon, mobile ? 16 : 18, mobile ? 16 : 18, theme.primary);
    icon.style.flexShrink = '0';
    icon.style.marginRight = '4px';

    const label = createElement('span', {
      className: theme.text,
      textContent: item.label,
      style: {
        textDecoration: 'underline',
        textDecorationColor: 'var(--nord-primary)',
        textUnderlineOffset: '3px',
        textDecorationThickness: '2px',
      }
    });

    leftSection.appendChild(icon);
    leftSection.appendChild(label);

    const keyBadge = createElement('span', {
      className: `px-2 py-1 rounded ${theme.sidebarBg} ${theme.textAccent} fw-bold`,
      textContent: item.key,
      style: {
        flexShrink: '0',
        marginLeft: mobile ? '16px' : '20px',
      }
    });

    menuItem.appendChild(leftSection);
    menuItem.appendChild(keyBadge);
    menuContainer.appendChild(menuItem);
  });

  container.appendChild(menuContainer);

  // Status bar at bottom
  const statusBar = createElement('div', {
    className: `${theme.lualineBg} position-absolute bottom-0 start-0 end-0 px-3 py-1 d-flex align-items-center gap-2`,
    style: {
      fontSize: mobile ? '12px' : '14px',
      paddingBottom: mobile ? 'env(safe-area-inset-bottom, 8px)' : '4px',
    }
  });

  const sparkIcon = createIconElement(SparkIcon, mobile ? 14 : 16, mobile ? 14 : 16, theme.tertiary);
  statusBar.appendChild(sparkIcon);

  const loadText = createElement('span', {
    className: theme.text,
    textContent: `JustinVim loaded in ${pageLoadTime}ms`,
    style: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    }
  });

  statusBar.appendChild(loadText);
  container.appendChild(statusBar);

  return container;
}
