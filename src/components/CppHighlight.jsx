import { theme } from '../config/theme';
import Link from './Link';

// C++ syntax highlighter with g++-style coloring
const CppHighlight = ({ text }) => {
  // URL pattern for detection
  const urlPattern = /(https?:\/\/[^\s"<>{}]+)/g;
  // C++ keywords
  const cppKeywords = [
    'class', 'public', 'private', 'protected', 'using', 'namespace', 'struct',
    'if', 'else', 'for', 'while', 'do', 'switch', 'case', 'default', 'break', 'continue',
    'return', 'void', 'int', 'char', 'bool', 'float', 'double', 'long', 'short',
    'const', 'static', 'extern', 'inline', 'virtual', 'override', 'final',
    'new', 'delete', 'this', 'nullptr', 'true', 'false',
    'template', 'typename', 'auto', 'decltype'
  ];
  
  // C++ types
  const cppTypes = ['string', 'vector', 'map', 'std::string', 'std::vector', 'std::map'];
  
  // Check for preprocessor directives first (before splitting)
  if (text.trim().startsWith('#include')) {
    const includeMatch = text.match(/^(#include\s*)(<[^>]+>|"[^"]+")/);
    if (includeMatch) {
      return (
        <span className="text-break">
          <span className={theme.keyword}>{includeMatch[1]}</span>
          <span className={theme.string}>{includeMatch[2]}</span>
        </span>
      );
    }
  }
  
  // Split by strings first
  const parts = text.split(/("[^"]*")/g);
  
  return (
    <span className="text-break">
      {parts.map((part, i) => {
        if (!part) return null;

        // String literals - green (but check for URLs inside)
        if (part.startsWith('"')) {
          // Extract URL from the string (remove quotes)
          const stringContent = part.slice(1, -1); // Remove surrounding quotes
          const urlMatch = stringContent.match(urlPattern);
          if (urlMatch && urlMatch[0] === stringContent) {
            // The entire string is a URL - make it clickable
            const url = urlMatch[0];
            return (
              <span key={i} className={theme.string}>
                "
                <Link href={url} target="_blank" rel="noopener noreferrer" style={{ 
                  display: 'inline',
                  padding: '0',
                  margin: '0',
                  textDecoration: 'underline',
                  textDecorationColor: 'var(--nord-primary)',
                  textUnderlineOffset: '2px',
                  cursor: 'pointer'
                }}>
                  {url}
                </Link>
                "
              </span>
            );
          }
          return <span key={i} className={theme.string}>{part}</span>;
        }

        // Comments - gray
        if (part.startsWith('//')) {
          return <span key={i} className={theme.comment}>{part}</span>;
        }
        
        // Other preprocessor directives (not #include) - gray
        if (part.startsWith('#') && !part.startsWith('#include')) {
          return <span key={i} className={theme.comment}>{part}</span>;
        }
        
        // Handle array types like string[] 
        let processedPart = part;
        const arrayMatches = [];
        processedPart = processedPart.replace(/(\w+)\[\]/g, (match, type) => {
          const placeholder = `__ARRAY_${arrayMatches.length}__`;
          arrayMatches.push({ placeholder, type });
          return placeholder;
        });
        
        // Split into tokens (words, operators, brackets, etc.)
        const tokens = processedPart.split(/(\s+|==|!=|<=|>=|&&|\|\||\+\+|--|->|::|[;{}()=,\[\]<>&|+\-*/%!])/).filter(Boolean);

        return tokens.map((token, j) => {
          const key = `${i}-${j}`;
          const trimmedToken = token.trim();
          
          // Check if this is an array type placeholder
          const arrayMatch = arrayMatches.find(m => token === m.placeholder);
          if (arrayMatch) {
            return (
              <span key={key}>
                <span className={theme.type}>{arrayMatch.type}</span>
                <span className={theme.operator}>[]</span>
              </span>
            );
          }
          
          // Numbers
          if (/^\d+$/.test(trimmedToken)) {
            return <span key={key} className={theme.number}>{token}</span>;
          }
          
          // Keywords - purple/magenta
          if (cppKeywords.includes(trimmedToken) || trimmedToken === 'public:' || trimmedToken === 'private:' || trimmedToken === 'protected:') {
            return <span key={key} className={theme.keyword}>{token}</span>;
          }
          
          // Types - yellow/amber
          if (cppTypes.includes(trimmedToken) || trimmedToken.startsWith('std::') || trimmedToken.startsWith('absl::')) {
            return <span key={key} className={theme.type}>{token}</span>;
          }
          
          // Operators and brackets - light gray
          if (['{', '}', '};', '[', ']', '(', ')', ';', '=', ',', '<', '>', '&', '|', '+', '-', '*', '/', '%', '!', '::', '->', '==', '!=', '<=', '>=', '&&', '||', '++', '--'].includes(trimmedToken)) {
            return <span key={key} className={theme.operator}>{token}</span>;
          }
          
          // Default text - white
          return <span key={key}>{token}</span>;
        });
      })}
    </span>
  );
};

export default CppHighlight;

