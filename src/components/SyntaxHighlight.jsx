import { theme } from '../config/theme';

// Enhanced C++ syntax highlighter with g++-style coloring
const SyntaxHighlight = ({ text }) => {
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

        // String literals - green
        if (part.startsWith('"')) {
          return <span key={i} className={theme.string}>{part}</span>;
        }

        // Comments - gray
        if (part.startsWith('//')) {
          return <span key={i} className={theme.comment}>{part}</span>;
        }
        
        // Markdown headers - highlight the # and text differently
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
        
        // Other preprocessor directives (not #include) - gray
        if (part.startsWith('#') && !part.startsWith('#include') && !/^#{1,6}\s/.test(part.trim())) {
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
          
          // Markdown bold text (**text**)
          if (token.includes('**')) {
            const boldParts = token.split(/(\*\*[^*]+\*\*)/g);
            return (
              <span key={key}>
                {boldParts.map((p, k) => {
                  if (p.startsWith('**') && p.endsWith('**')) {
                    return <span key={k} className={theme.keyword}>{p.slice(2, -2)}</span>;
                  }
                  return <span key={k}>{p}</span>;
                })}
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

export default SyntaxHighlight;
