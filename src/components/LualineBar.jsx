import { GitBranch } from 'iconoir-react';
import { theme } from '../config/theme';
import { CONFIG } from '../config/config';
import Cursor from './Cursor';

// 4. Lualine (New Status Bar)
const LualineBar = ({ activeFile }) => {
  // Fake line count for aesthetic
  const lineCount = activeFile === 'projects.cpp' ? 38 : (activeFile === 'about.md' ? 5 : 8);
  
  const Seg = ({ children, bgColor, textColor, style = {} }) => {
    return (
      <div 
        className="d-flex align-items-center px-3 gap-2" 
        style={{ 
          height: '28px',
          backgroundColor: bgColor,
          color: textColor,
          ...style
        }}
      >
        {children}
      </div>
    );
  };

  return (
    <div 
      className={`${theme.lualineBg} d-flex justify-content-between align-items-center fw-bold`} 
      style={{ 
        flexShrink: 0,
        height: '28px',
        fontSize: '14px',
        overflow: 'hidden'
      }}
    >
      {/* Left Side */}
      <div className="d-flex align-items-center h-100" style={{ flex: 1, minWidth: 0, overflow: 'hidden' }}>
        <Seg bgColor="var(--nord-status-accent)" textColor="var(--nord-status-text)" style={{ flexShrink: 0 }}>
          <span className="fw-black" style={{ letterSpacing: '0.1em' }}>NORMAL</span>
        </Seg>
        {/* Powerline Arrow */}
        <div 
          style={{
            width: 0,
            height: 0,
            borderTop: '14px solid transparent',
            borderBottom: '14px solid transparent',
            borderLeft: '10px solid var(--nord-status-accent)',
            flexShrink: 0
          }}
        ></div>

        <Seg bgColor="var(--nord-lualine-section)" textColor="var(--nord-lualine-text)" style={{ flexShrink: 0 }}>
          <GitBranch width={16} height={16} />
          <span>main</span>
        </Seg>
        {/* Powerline Arrow */}
        <div 
          style={{
            width: 0,
            height: 0,
            borderTop: '14px solid transparent',
            borderBottom: '14px solid transparent',
            borderLeft: '10px solid var(--nord-lualine-section)',
            flexShrink: 0
          }}
        ></div>
        <div className="px-3 d-flex align-items-center gap-2" style={{ flexShrink: 0 }}>
          <span className={theme.text}>{activeFile}</span>
          <span className={theme.textDim}>[+]</span>
        </div>
        <div className="px-3 d-flex align-items-center" style={{ flex: 1, minWidth: 0 }}>
          <span 
            className={theme.textDim} 
            style={{ 
              fontSize: '11px',
              opacity: 0.6,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              minWidth: 0
            }}
            title="Press 'q' to return to homepage"
          >
            Press 'q' to return to homepage
          </span>
        </div>
      </div>

      {/* Right Side */}
      <div className="d-flex align-items-center h-100">
        <div className="px-3">
          <span className={theme.textAccent}>{CONFIG.name}@{CONFIG.host}</span>
        </div>

        {/* Powerline Arrow (Reversed) */}
        <div 
          style={{
            width: 0,
            height: 0,
            borderTop: '14px solid transparent',
            borderBottom: '14px solid transparent',
            borderRight: '10px solid var(--nord-lualine-section)'
          }}
        ></div>
        <Seg bgColor="var(--nord-lualine-section)" textColor="var(--nord-lualine-text)">
          <span>{lineCount}L</span>
          <Cursor />
        </Seg>
      </div>
    </div>
  );
};

export default LualineBar;
