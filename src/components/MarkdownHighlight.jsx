import { theme } from '../config/theme';

// Markdown syntax highlighter - only highlights markdown-specific syntax
const MarkdownHighlight = ({ text }) => {
  // Split by strings first (in case there are any quoted strings)
  const parts = text.split(/("[^"]*")/g);
  
  return (
    <span className="text-break">
      {parts.map((part, i) => {
        if (!part) return null;

        // String literals - green (if any)
        if (part.startsWith('"')) {
          return <span key={i} className={theme.string}>{part}</span>;
        }

        // Markdown headers - highlight the # symbols in gray, text in white
        if (/^#{1,6}\s/.test(part.trim())) {
          const headerMatch = part.match(/^(#{1,6})\s+(.+)$/);
          if (headerMatch) {
            return (
              <span key={i}>
                <span className={theme.comment}>{headerMatch[1]}</span>
                <span> {headerMatch[2]}</span>
              </span>
            );
          }
        }
        
        // Markdown bold text (**text**) - highlight bold text in keyword color
        if (part.includes('**')) {
          const boldParts = part.split(/(\*\*[^*]+\*\*)/g);
          return (
            <span key={i}>
              {boldParts.map((p, j) => {
                if (p.startsWith('**') && p.endsWith('**')) {
                  return <span key={j} className={theme.keyword}>{p.slice(2, -2)}</span>;
                }
                return <span key={j}>{p}</span>;
              })}
            </span>
          );
        }
        
        // Default: just return the text as-is (no syntax highlighting for regular words/numbers)
        return <span key={i}>{part}</span>;
      })}
    </span>
  );
};

export default MarkdownHighlight;

