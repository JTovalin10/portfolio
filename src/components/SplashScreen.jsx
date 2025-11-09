import { useState, useEffect, useMemo } from 'react';
import { FileSearch, Sparkles } from 'lucide-react';
import { theme } from '../config/theme';
import { fileSystem } from '../config/fileSystem';

// --- New Splash Screen Component (LazyVim style) ---
const SplashScreen = ({ onNavigate }) => {
  // Remove fake load time, add state for real load time
  const [pageLoadTime, setPageLoadTime] = useState(null);
  
  // Detect mobile device
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // A slight delay to ensure performance API has data
    const timer = setTimeout(() => {
      if (performance && performance.getEntriesByType) {
        const navTiming = performance.getEntriesByType("navigation")[0];
        if (navTiming) {
          // Calculate time from start to DOM content loaded
          const loadTime = navTiming.domContentLoadedEventEnd - navTiming.startTime;
          setPageLoadTime(loadTime.toFixed(2));
        } else {
          setPageLoadTime("~??"); // Fallback
        }
      } else {
        setPageLoadTime("~??"); // Fallback
      }
    }, 100); // 100ms delay
    return () => clearTimeout(timer);
  }, []); // Run only once on mount

  // ASCII ART - Individual letters for easier modification
  const letterJ = [
    '██████╗ ',
    '╚════██║',
    '     ██║',
    '██   ██║',
    '╚█████╔╝',
    ' ╚════╝ '
  ];

  const letterU = [
    '██╗   ██╗',
    '██║   ██║',
    '██║   ██║',
    '██║   ██║',
    '╚██████╔╝',
    ' ╚═════╝ '
  ];

  const letterS = [
    '███████╗',
    '██╔════╝',
    '███████╗',
    '╚════██║',
    '███████║',
    '╚══════╝'
  ];

  const letterT = [
    '████████╗',
    '╚══██╔══╝',
    '   ██║   ',
    '   ██║   ',
    '   ██║   ',
    '   ╚═╝   '
  ];

  const letterI = [
    '██╗',
    '██║',
    '██║',
    '██║',
    '██║',
    '╚═╝'
  ];

  const letterN = [
    '███╗   ██╗',
    '████╗  ██║',
    '██╔██╗ ██║',
    '██║╚██╗██║',
    '██║ ╚████║',
    '╚═╝  ╚═══╝'
  ];

  const letterV = [
    '██╗   ██╗',
    '██║   ██║',
    '██║   ██║',
    '╚██╗ ██╔╝',
    ' ╚████╔╝ ',
    '  ╚═══╝  '
  ];

  const letterI2 = [
    '██╗',
    '██║',
    '██║',
    '██║',
    '██║',
    '╚═╝'
  ];

  const letterM = [
    '███╗   ███╗',
    '████╗ ████║',
    '██╔████╔██║',
    '██║╚██╔╝██║',
    '██║ ╚═╝ ██║',
    '╚═╝     ╚═╝'
  ];

  // Combine letters into "JustinVim"
  const combineLetters = (...letters) => {
    const lines = [];
    for (let i = 0; i < 6; i++) {
      const line = letters.map(letter => letter[i]).join('');
      // Trim trailing spaces to prevent gray lines
      lines.push(line.replace(/\s+$/, ''));
    }
    return lines.join('\n');
  };

  const asciiArt = combineLetters(
    letterJ, letterU, letterS, letterT, letterI, letterN, letterV, letterI2, letterM
  );

  const menuItems = [
    ...fileSystem.map(f => ({ ...f, icon: f.icon || FileSearch })),
  ];

  // Memoize z positions so they don't change on re-render
  const zPositions = useMemo(() => {
    return [...Array(5)].map(() => ({
      top: Math.random() * 30 + 10,
      left: Math.random() * 30 + 60,
      delay: Math.random() * 5,
      duration: Math.random() * 5 + 5,
    }));
  }, []);

  // Handle menu item click
  const handleMenuItemClick = (itemName) => {
    if (onNavigate) {
      onNavigate(itemName);
    }
  };

  return (
    <div 
      className={`${theme.editorBg} d-flex flex-column align-items-center justify-content-center position-relative`}
      style={{ 
        flex: 1, 
        padding: isMobile ? '20px 10px' : '40px', 
        userSelect: 'none',
        overflowY: 'auto',
        overflowX: 'hidden',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}
    >
      {/* "Zzz" animation - hidden on mobile */}
      {!isMobile && zPositions.map((pos, i) => (
        <span 
          key={i} 
          className="position-absolute fw-black animate-float"
          style={{
            top: `${pos.top}%`,
            left: `${pos.left}%`,
            animationDelay: `${pos.delay}s`,
            animationDuration: `${pos.duration}s`,
            fontSize: '18px',
            color: '#1a1a1a'
          }}
        >
          z
        </span>
      ))}

      <style>
        {`
          .ascii-art-wrapper::-webkit-scrollbar {
            display: none !important;
            width: 0 !important;
            height: 0 !important;
          }
          .ascii-art-wrapper {
            -ms-overflow-style: none !important;
            scrollbar-width: none !important;
          }
          .ascii-art-pre {
            overflow: visible !important;
          }
          .ascii-art-pre::-webkit-scrollbar {
            display: none !important;
            width: 0 !important;
            height: 0 !important;
          }
        `}
      </style>
      <div 
        className="mb-4 d-flex justify-content-center ascii-art-wrapper"
        style={{ 
          width: '100%',
          maxWidth: '100%',
          padding: isMobile ? '10px' : '0',
          overflow: 'hidden',
          overflowX: 'hidden',
          overflowY: 'hidden',
          position: 'relative'
        }}
      >
        <pre 
          className={`fw-bold ${theme.primary} monospace ascii-art-pre`}
          style={{ 
            lineHeight: '1.1',
            letterSpacing: '0',
            fontSize: isMobile ? 'clamp(5px, 1.8vw, 9px)' : 'clamp(9px, 1.6vw, 13px)',
            whiteSpace: 'pre',
            margin: 0,
            padding: 0,
            width: 'fit-content',
            maxWidth: '100%',
            transform: isMobile ? 'scale(0.8)' : 'scale(1)',
            transformOrigin: 'center',
            transition: 'transform 0.3s ease, font-size 0.3s ease',
            overflow: 'visible',
            display: 'inline-block'
          }}
        >
          {asciiArt}
        </pre>
      </div>
      <div 
        className={isMobile ? "d-flex flex-column gap-3 w-100" : "row g-3"} 
        style={{ 
          maxWidth: isMobile ? '100%' : '448px', 
          width: '100%',
          padding: isMobile ? '0 20px 80px 20px' : '0',
          marginBottom: isMobile ? '20px' : '0'
        }}
      >
        {menuItems.map(item => (
          <div 
            key={item.key} 
            className={isMobile ? "d-flex align-items-center justify-content-between w-100" : "col-6 d-flex align-items-center justify-content-between"} 
            style={{ 
              fontSize: isMobile ? '16px' : '18px',
              cursor: 'pointer',
              padding: isMobile ? '12px' : '0',
              borderRadius: isMobile ? '8px' : '0',
              transition: 'background-color 0.2s ease',
              gap: isMobile ? '12px' : '16px'
            }}
            onClick={() => handleMenuItemClick(item.name)}
            onTouchStart={(e) => {
              if (isMobile) {
                e.currentTarget.style.backgroundColor = 'rgba(136, 192, 208, 0.2)';
              }
            }}
            onTouchEnd={(e) => {
              if (isMobile) {
                setTimeout(() => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }, 150);
              }
            }}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.currentTarget.style.backgroundColor = 'rgba(136, 192, 208, 0.1)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobile) {
                e.currentTarget.style.backgroundColor = 'transparent';
              }
            }}
          >
            <div className="d-flex align-items-center" style={{ flex: 1, minWidth: 0, gap: '16px' }}>
              <item.icon size={isMobile ? 16 : 18} className={theme.primary} style={{ flexShrink: 0, marginRight: '4px' }} />
              <span 
                className={theme.text}
                style={{
                  textDecoration: 'underline',
                  textDecorationColor: 'var(--nord-primary)',
                  textUnderlineOffset: '3px',
                  textDecorationThickness: '2px'
                }}
              >
                {item.label}
              </span>
            </div>
            <span 
              className={`px-2 py-1 rounded ${theme.sidebarBg} ${theme.textAccent} fw-bold`}
              style={{
                flexShrink: 0,
                marginLeft: isMobile ? '16px' : '20px'
              }}
            >
              {item.key}
            </span>
          </div>
        ))}
      </div>

      <div 
        className={`${theme.lualineBg} position-absolute bottom-0 start-0 end-0 px-3 py-1 d-flex align-items-center gap-2`}
        style={{ 
          fontSize: isMobile ? '12px' : '14px',
          paddingBottom: isMobile ? 'env(safe-area-inset-bottom, 8px)' : '4px'
        }}
      >
        <Sparkles size={isMobile ? 14 : 16} className={theme.tertiary} />
        <span className={theme.text} style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          JustinVim loaded in {pageLoadTime ? `${pageLoadTime}ms` : '...'}
        </span>
      </div>
    </div>
  );
};

export default SplashScreen;
