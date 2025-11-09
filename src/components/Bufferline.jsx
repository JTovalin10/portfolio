import { Xmark } from 'iconoir-react';
import { theme } from '../config/theme';
import { fileSystem } from '../config/fileSystem';
import { useState, useEffect } from 'react';

// 2. Bufferline (New Tabs Component)
const Bufferline = ({ activeFile, setActiveFile, onBackToHome }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Hide bufferline on mobile
  if (isMobile) {
    return null;
  }

  return (
    <div 
      className={`${theme.bufferBg} d-flex align-items-center overflow-x-auto`} 
      style={{ 
        flexShrink: 0,
        borderBottom: '1px solid var(--nord-border)'
      }}
    >
      {fileSystem.map((file) => (
        <button
          key={file.name}
          onClick={() => setActiveFile(file.name)}
          className={`d-flex align-items-center gap-2 px-3 py-2 border-0 ${theme.text} ${
            activeFile === file.name
              ? `${theme.bufferActiveBg}`
              : `${theme.bufferInactiveText}`
          }`}
          style={{ 
            flexShrink: 0,
            fontSize: '14px',
            transition: 'color 0.2s',
            backgroundColor: activeFile === file.name ? 'var(--nord-buffer-active-bg)' : 'transparent',
            color: activeFile === file.name ? 'var(--nord-lualine-text)' : 'var(--nord-buffer-inactive-text)'
          }}
          onMouseEnter={(e) => {
            if (activeFile !== file.name) {
              e.target.style.color = 'var(--nord-lualine-text)';
            }
          }}
          onMouseLeave={(e) => {
            if (activeFile !== file.name) {
              e.target.style.color = 'var(--nord-buffer-inactive-text)';
            }
          }}
        >
          <file.icon width={15} height={15} />
          <span>{file.name}</span>
          {activeFile === file.name && <Xmark width={15} height={15} className="ms-2" />}
        </button>
      ))}
    </div>
  );
};

export default Bufferline;
