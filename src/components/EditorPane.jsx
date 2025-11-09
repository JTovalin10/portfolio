import { theme } from '../config/theme';
import { CONFIG } from '../config/config';
import CppHighlight from './CppHighlight';
import MarkdownHighlight from './MarkdownHighlight';
import PlainText from './PlainText';
import Link from './Link';

// 3. Editor Pane (Main Content)
const EditorPane = ({ activeFile }) => {
  // This function generates the array of lines (or objects) to be rendered
  const renderContent = () => {
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
        
        return [
          ...imports,
          ...typeAliases,
          ...CONFIG.projects.flatMap(p => {
            const lines = [
              p.title,
              p.classDef,
              ...p.public.map(line => `    ${line}`),
            ];
            
            // Add links section
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
          }).filter(line => line !== null) // Filter out null lines
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

      case 'contact.txt':
        return [
          CONFIG.contact.title,
          "",
          ...CONFIG.contact.lines, // We'll render these objects specially
        ];

      default:
        return ["// File not found"];
    }
  };

  const contentLines = renderContent();

  return (
    <div 
      className={`${theme.editorBg}`}
      style={{ 
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        minHeight: 0,
        position: 'relative'
      }}
      >
      <div 
        className="p-3"
        style={{ 
          overflowY: 'auto',
          overflowX: 'auto',
          flex: '1 1 0',
          minHeight: 0,
          WebkitOverflowScrolling: 'touch',
          scrollBehavior: 'smooth'
        }}
      >
        {contentLines.map((line, index) => {
          const lineNumber = index + 1;
          return (
            <div 
              key={index} 
              className="d-flex"
              style={{ 
                minHeight: '1.5em',
                lineHeight: '1.5'
              }}
            >
              {/* Line Number */}
              <span 
                className={`${theme.lineNum} text-end`}
                style={{ 
                  width: '50px',
                  minWidth: '50px',
                  paddingRight: '16px',
                  userSelect: 'none',
                  flexShrink: 0,
                  fontFamily: 'monospace',
                  fontSize: '14px'
                }}
              >
                {lineNumber}
              </span>
              {/* Line Content */}
              <div 
                className="flex-grow-1"
                style={{ 
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                  overflowWrap: 'break-word',
                  minWidth: 0
                }}
              >
                {typeof line === 'object' ? (
                  // Render contact line object
                  <div className="d-flex align-items-center gap-3" style={{ flexWrap: 'wrap' }}>
                    <line.icon width={16} height={16} className={theme.textAccent} />
                    <span style={{ width: '128px', minWidth: '128px' }}>{line.label}:</span>
                    <Link href={line.href}>{line.value}</Link>
                  </div>
                ) : (
                  // Render text/code line string based on file type
                  (() => {
                    if (activeFile.endsWith('.cpp')) {
                      return <CppHighlight text={line || ""} />;
                    } else if (activeFile.endsWith('.md')) {
                      return <MarkdownHighlight text={line || ""} />;
                    } else {
                      return <PlainText text={line || ""} />;
                    }
                  })()
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EditorPane;
