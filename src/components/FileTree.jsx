import { theme } from '../config/theme';
import { fileSystem, Folder, NavArrowRight, NavArrowLeft } from '../config/fileSystem';
import { CONFIG } from '../config/config';
import { useState, useEffect } from 'react';

// 1. File Tree (Sidebar)
const FileTree = ({ activeFile, setActiveFile, onBackToHome }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsOpen(true); // Always open on desktop
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Toggle sidebar on mobile
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Close sidebar when a file is clicked on mobile
  const handleFileClick = (file) => {
    setActiveFile(file);
    if (isMobile) {
      setIsOpen(false);
    }
  };

  // On mobile, show toggle button
  if (isMobile) {
    return (
      <>
        {/* Toggle Button - Only on mobile */}
        {!isOpen && (
          <button
            onClick={toggleSidebar}
            className={`${theme.sidebarBg} border-0 d-flex align-items-center justify-content-center`}
            style={{
              position: 'fixed',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 1000,
              width: '32px',
              height: '64px',
              borderTopRightRadius: '8px',
              borderBottomRightRadius: '8px',
              borderRight: '1px solid var(--nord-border)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              color: 'var(--nord-primary)'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'var(--nord-active-bg)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'var(--nord-sidebar-bg)';
            }}
          >
            <NavArrowRight width={20} height={20} />
          </button>
        )}

        {/* Sidebar - Overlay on mobile when open */}
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              onClick={toggleSidebar}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 999
              }}
            />
            {/* Sidebar */}
            <div 
              className={`${theme.sidebarBg} d-flex flex-column`} 
              style={{ 
                position: 'fixed',
                left: 0,
                top: 0,
                bottom: 0,
                width: '280px',
                maxWidth: '80%',
                zIndex: 1000,
                borderRight: '1px solid var(--nord-border)',
                boxShadow: '2px 0 8px rgba(0, 0, 0, 0.3)'
              }}
            >
              <div 
                className="d-flex align-items-center justify-content-between gap-2 p-3 border-bottom"
                style={{
                  borderBottom: '1px solid var(--nord-border)',
                  flexShrink: 0
                }}
              >
                <div
                  className="d-flex align-items-center gap-2"
                  style={{ cursor: 'pointer', flex: 1 }}
                  onClick={onBackToHome}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(136, 192, 208, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <Folder width={18} height={18} className={theme.primary} />
                  <span className="fw-bold" style={{ color: 'var(--nord-text)' }}>{CONFIG.name}</span>
                </div>
                <button
                  onClick={toggleSidebar}
                  className="border-0 bg-transparent"
                  style={{
                    color: 'var(--nord-text)',
                    cursor: 'pointer',
                    padding: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <NavArrowLeft width={20} height={20} />
                </button>
              </div>
              <div className="p-3 overflow-auto" style={{ flex: 1, minHeight: 0, overflowY: 'auto' }}>
                <ul className="list-unstyled mb-0">
                  {fileSystem.map(file => (
                    <li key={file.name}>
                      <button
                        onClick={() => handleFileClick(file.name)}
                        className={`d-flex align-items-center gap-2 w-100 text-start p-2 rounded border-0 ${theme.text} ${
                          activeFile === file.name
                            ? `${theme.activeFileBg}`
                            : `${theme.textDim}`
                        }`}
                        style={{ 
                          transition: 'all 0.1s',
                          backgroundColor: activeFile === file.name ? 'var(--nord-active-bg)' : 'transparent'
                        }}
                        onMouseEnter={(e) => {
                          if (activeFile !== file.name) {
                            e.target.style.backgroundColor = 'rgba(136, 192, 208, 0.15)';
                            e.target.style.color = 'var(--nord-text)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (activeFile !== file.name) {
                            e.target.style.backgroundColor = 'transparent';
                            e.target.style.color = 'var(--nord-text-dim)';
                          }
                        }}
                      >
                        <file.icon width={16} height={16} />
                        <span>{file.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
      </>
    );
  }

  // Desktop: Normal sidebar
  return (
    <div 
      className={`${theme.sidebarBg} d-flex flex-column`} 
      style={{ 
        width: '100%', 
        minWidth: '240px', 
        maxWidth: '288px', 
        flexShrink: 0,
        borderRight: '1px solid var(--nord-border)',
        alignSelf: 'stretch'
      }}
    >
      <div 
        className="d-flex align-items-center gap-2 p-3 border-bottom"
        style={{
          borderBottom: '1px solid var(--nord-border)',
          cursor: 'pointer',
          flexShrink: 0,
          transition: 'background-color 0.2s ease'
        }}
        onClick={onBackToHome}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(136, 192, 208, 0.15)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
      >
        <Folder width={18} height={18} className={theme.primary} />
        <span className="fw-bold" style={{ color: 'var(--nord-text)' }}>{CONFIG.name}</span>
      </div>
      <div className="p-3 overflow-auto" style={{ flex: 1, minHeight: 0, overflowY: 'auto' }}>
        <ul className="list-unstyled mb-0">
          {fileSystem.map(file => (
            <li key={file.name}>
              <button
                onClick={() => setActiveFile(file.name)}
                className={`d-flex align-items-center gap-2 w-100 text-start p-2 rounded border-0 ${theme.text} ${
                  activeFile === file.name
                    ? `${theme.activeFileBg}`
                    : `${theme.textDim}`
                }`}
                style={{ 
                  transition: 'all 0.1s',
                  backgroundColor: activeFile === file.name ? 'var(--nord-active-bg)' : 'transparent'
                }}
                onMouseEnter={(e) => {
                  if (activeFile !== file.name) {
                    e.target.style.backgroundColor = 'rgba(136, 192, 208, 0.15)';
                    e.target.style.color = 'var(--nord-text)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeFile !== file.name) {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = 'var(--nord-text-dim)';
                  }
                }}
              >
                <file.icon width={16} height={16} />
                <span>{file.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FileTree;
