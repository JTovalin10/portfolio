import { createElement, isMobile } from '../utils/dom';
import { theme } from '../config/theme';
import { CONFIG } from '../config/config';
import { highlightCpp, highlightMarkdown, highlightPlainText } from './highlighters';
import { ContactLine } from '../types';
import { createIconElement } from '../utils/icons';

export function createEditorPane(activeFile: string): HTMLElement {
  const mobile = isMobile();

  const container = createElement('div', {
    className: theme.editorBg,
    style: {
      flex: '1',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      minHeight: '0',
      position: 'relative',
    }
  });

  const scrollContainer = createElement('div', {
    style: {
      overflowY: 'auto',
      overflowX: 'auto',
      flex: '1 1 0',
      minHeight: '0',
      WebkitOverflowScrolling: 'touch',
      scrollBehavior: 'smooth',
    }
  });

  const contentDiv = createElement('div', {
    style: {
      padding: '12px',
      paddingBottom: mobile ? '12px' : '200px',
    }
  });

  const contentLines = getContentLines(activeFile);

  contentLines.forEach((line, index) => {
    const lineNumber = index + 1;

    const lineDiv = createElement('div', {
      className: 'd-flex',
      style: {
        minHeight: '1.5em',
        lineHeight: '1.5',
      }
    });

    const lineNumSpan = createElement('span', {
      className: `${theme.lineNum} text-end`,
      textContent: lineNumber.toString(),
      style: {
        width: '50px',
        minWidth: '50px',
        paddingRight: '16px',
        userSelect: 'none',
        flexShrink: '0',
        fontFamily: 'monospace',
        fontSize: '14px',
      }
    });

    const lineContentDiv = createElement('div', {
      className: 'flex-grow-1',
      style: {
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
        overflowWrap: 'break-word',
        minWidth: '0',
      }
    });

    if (typeof line === 'object' && 'icon' in line) {
      // Contact line
      const contactLine = line as ContactLine;
      const contactDiv = createElement('div', {
        className: 'd-flex align-items-center gap-3',
        style: { flexWrap: 'wrap' }
      });

      const icon = createIconElement(contactLine.icon, 16, 16, theme.textAccent);
      const label = createElement('span', {
        textContent: `${contactLine.label}:`,
        style: { width: '128px', minWidth: '128px' }
      });

      const link = createElement('a', {
        textContent: contactLine.value,
        className: `d-inline-block px-2 py-1 rounded ${theme.link}`,
        attributes: {
          href: contactLine.href,
          target: '_blank',
          rel: 'noopener noreferrer'
        },
        style: {
          marginLeft: '-4px',
          marginRight: '-4px',
          textDecoration: 'underline',
          textDecorationColor: 'var(--nord-primary)',
          textUnderlineOffset: '2px',
          textDecorationThickness: '1.5px',
          transition: 'all 0.2s ease',
          backgroundColor: 'transparent',
        },
        onMouseEnter: (e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.backgroundColor = 'rgba(136, 192, 208, 0.15)';
          el.style.textDecorationColor = 'var(--nord-link)';
          el.style.textDecorationThickness = '2px';
        },
        onMouseLeave: (e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.backgroundColor = 'transparent';
          el.style.textDecorationColor = 'var(--nord-primary)';
          el.style.textDecorationThickness = '1.5px';
        }
      });

      contactDiv.appendChild(icon);
      contactDiv.appendChild(label);
      contactDiv.appendChild(link);
      lineContentDiv.appendChild(contactDiv);
    } else {
      // Regular text line
      const text = line as string;
      let highlightedHTML = '';

      if (activeFile.endsWith('.cpp')) {
        highlightedHTML = highlightCpp(text || '');
      } else if (activeFile.endsWith('.md')) {
        highlightedHTML = highlightMarkdown(text || '');
      } else {
        highlightedHTML = highlightPlainText(text || '');
      }

      lineContentDiv.innerHTML = highlightedHTML;
    }

    lineDiv.appendChild(lineNumSpan);
    lineDiv.appendChild(lineContentDiv);
    contentDiv.appendChild(lineDiv);
  });

  // Mobile spacer
  if (mobile) {
    const spacer = createElement('div', {
      style: { height: '150px', width: '100%' }
    });
    contentDiv.appendChild(spacer);
  }

  scrollContainer.appendChild(contentDiv);
  container.appendChild(scrollContainer);

  return container;
}

function getContentLines(activeFile: string): (string | ContactLine)[] {
  switch (activeFile) {
    case 'about.md':
      return [
        CONFIG.about.title,
        "",
        ...CONFIG.about.lines,
      ];

    case 'projects.cpp':
      const imports = [
        "#include <absl/container/flat_hash_map.h>",
        ""
      ];

      const typeAliases = [
        "using string = std::string;",
        "using map = absl::flat_hash_map;",
        ""
      ];

      const projectLines = CONFIG.projects.flatMap(p => {
        const lines = [
          p.title,
          p.classDef,
          ...p.public.map(line => `    ${line}`),
        ];

        if (p.links && (p.links.source_code || p.links.live_demo)) {
          lines.push(`    map<string, string> links = {`);
          if (p.links.source_code) {
            lines.push(`        { "source_code", "${p.links.source_code}" },`);
          }
          if (p.links.live_demo) {
            lines.push(`        { "live_demo", "${p.links.live_demo}" },`);
          }
          lines.push(`    };`);
        }

        lines.push(p.closeBrace, "");
        return lines;
      });

      return [
        ...imports,
        ...typeAliases,
        ...projectLines,
      ];

    case 'hobbies.md':
      return [
        CONFIG.hobbies.title,
        "",
        ...CONFIG.hobbies.lines,
      ];

    case 'technical-skills.md':
      return [
        CONFIG.technicalSkills.title,
        "",
        ...CONFIG.technicalSkills.lines,
      ];

    case 'extras.md':
      return [
        CONFIG.extras.title,
        "",
        ...CONFIG.extras.lines,
      ];

    case 'contact.txt':
      return [
        CONFIG.contact.title,
        "",
        ...CONFIG.contact.lines,
      ];

    default:
      return ["// File not found"];
  }
}
