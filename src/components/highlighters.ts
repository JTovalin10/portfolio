import { theme } from '../config/theme';

// Plain text renderer - no syntax highlighting
export function highlightPlainText(text: string): string {
  return `<span class="text-break">${escapeHtml(text)}</span>`;
}

// Markdown renderer - renders actual formatted markdown
export function highlightMarkdown(text: string): string {
  if (!text) return '<span class="text-break"></span>';

  // Empty line
  if (text.trim() === '') {
    return '<span class="text-break" style="display: block; height: 1em;"></span>';
  }

  // Handle headers - render as actual large text
  const h1Match = text.match(/^#\s+(.+)$/);
  if (h1Match) {
    return `<h1 class="${theme.primary}" style="font-size: 2em; font-weight: bold; margin: 0.67em 0 0.3em 0; line-height: 1.2;">${escapeHtml(h1Match[1])}</h1>`;
  }

  const h2Match = text.match(/^##\s+(.+)$/);
  if (h2Match) {
    return `<h2 class="${theme.secondary}" style="font-size: 1.5em; font-weight: bold; margin: 0.75em 0 0.3em 0; line-height: 1.3;">${escapeHtml(h2Match[1])}</h2>`;
  }

  const h3Match = text.match(/^###\s+(.+)$/);
  if (h3Match) {
    return `<h3 class="${theme.textAccent}" style="font-size: 1.25em; font-weight: bold; margin: 0.5em 0 0.2em 0; line-height: 1.4;">${escapeHtml(h3Match[1])}</h3>`;
  }

  const h4Match = text.match(/^####\s+(.+)$/);
  if (h4Match) {
    return `<h4 class="${theme.text}" style="font-size: 1.1em; font-weight: bold; margin: 0.4em 0 0.2em 0; line-height: 1.4;">${escapeHtml(h4Match[1])}</h4>`;
  }

  // Handle bold text - render as actual bold
  let processedText = text;

  // Bold text
  processedText = processedText.replace(/\*\*([^*]+)\*\*/g, '<strong class="fw-bold" style="color: var(--nord-primary);">$1</strong>');

  // Italic text
  processedText = processedText.replace(/\*([^*]+)\*/g, '<em style="font-style: italic; color: var(--nord-text-accent);">$1</em>');

  // Inline code
  processedText = processedText.replace(/`([^`]+)`/g, `<code class="${theme.string}" style="background-color: rgba(136, 192, 208, 0.1); padding: 2px 6px; border-radius: 3px; font-family: 'JetBrains Mono', monospace;">$1</code>`);

  return `<span class="text-break" style="line-height: 1.6;">${processedText}</span>`;
}

// C++ syntax highlighter
export function highlightCpp(text: string): string {
  if (!text) return '';

  const cppKeywords = [
    'class', 'public', 'private', 'protected', 'using', 'namespace', 'struct',
    'if', 'else', 'for', 'while', 'do', 'switch', 'case', 'default', 'break', 'continue',
    'return', 'void', 'int', 'char', 'bool', 'float', 'double', 'long', 'short',
    'const', 'static', 'extern', 'inline', 'virtual', 'override', 'final',
    'new', 'delete', 'this', 'nullptr', 'true', 'false',
    'template', 'typename', 'auto', 'decltype'
  ];

  const cppTypes = ['string', 'vector', 'map', 'std::string', 'std::vector', 'std::map'];

  // Handle #include directives
  if (text.trim().startsWith('#include')) {
    const includeMatch = text.match(/^(#include\s*)(<[^>]+>|"[^"]+")/);
    if (includeMatch) {
      return `<span class="${theme.keyword}">${escapeHtml(includeMatch[1])}</span><span class="${theme.string}">${escapeHtml(includeMatch[2])}</span>`;
    }
  }

  // Handle comments
  if (text.trim().startsWith('//')) {
    return `<span class="${theme.comment}">${escapeHtml(text)}</span>`;
  }

  // Split by strings first
  const parts = text.split(/("[^"]*")/g);
  let result = '';

  parts.forEach(part => {
    if (!part) return;

    // String literals
    if (part.startsWith('"')) {
      // Check if it's a URL
      const stringContent = part.slice(1, -1);
      const urlMatch = stringContent.match(/(https?:\/\/[^\s"<>{}]+)/);
      if (urlMatch && urlMatch[0] === stringContent) {
        result += `<span class="${theme.string}">"<a href="${escapeHtml(stringContent)}" target="_blank" rel="noopener noreferrer" class="${theme.link}" style="display: inline; padding: 0; margin: 0; text-decoration: underline; text-decoration-color: var(--nord-primary); text-underline-offset: 2px; cursor: pointer;">${escapeHtml(stringContent)}</a>"</span>`;
      } else {
        result += `<span class="${theme.string}">${escapeHtml(part)}</span>`;
      }
      return;
    }

    // Tokenize the rest
    let processedPart = part;

    // Handle array types like string[]
    processedPart = processedPart.replace(/(\w+)\[\]/g, (match, type) => {
      return `<span class="${theme.type}">${type}</span><span class="${theme.operator}">[]</span>`;
    });

    // Split into tokens
    const tokens = processedPart.split(/(\s+|==|!=|<=|>=|&&|\|\||\+\+|--|->|::|[;{}()=,\[\]<>&|+\-*/%!])/).filter(Boolean);

    tokens.forEach(token => {
      const trimmed = token.trim();

      // Numbers
      if (/^\d+$/.test(trimmed)) {
        result += `<span class="${theme.number}">${token}</span>`;
        return;
      }

      // Keywords
      if (cppKeywords.includes(trimmed) || trimmed === 'public:' || trimmed === 'private:' || trimmed === 'protected:') {
        result += `<span class="${theme.keyword}">${token}</span>`;
        return;
      }

      // Types
      if (cppTypes.includes(trimmed) || trimmed.startsWith('std::') || trimmed.startsWith('absl::')) {
        result += `<span class="${theme.type}">${token}</span>`;
        return;
      }

      // Operators
      const operators = ['{', '}', '};', '[', ']', '(', ')', ';', '=', ',', '<', '>', '&', '|', '+', '-', '*', '/', '%', '!', '::', '->', '==', '!=', '<=', '>=', '&&', '||', '++', '--'];
      if (operators.includes(trimmed)) {
        result += `<span class="${theme.operator}">${token}</span>`;
        return;
      }

      // Default
      result += escapeHtml(token);
    });
  });

  return `<span class="text-break">${result}</span>`;
}

// Helper function to escape HTML
function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
