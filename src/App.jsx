import { useState, useEffect } from 'react';
import { theme } from './config/theme';
import { fileSystem } from './config/fileSystem';
import SplashScreen from './components/SplashScreen';
import FileTree from './components/FileTree';
import Bufferline from './components/Bufferline';
import EditorPane from './components/EditorPane';
import LualineBar from './components/LualineBar';

export default function App() {
  const [view, setView] = useState('splash'); // 'splash' or 'editor'
  const [activeFile, setActiveFile] = useState('about.md');

  // Effect for keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();
      // In splash view, navigate to editor
      if (view === 'splash') {
        const targetFile = fileSystem.find(f => f.key === key);
        if (targetFile) {
          setActiveFile(targetFile.name);
          setView('editor');
        }
      }
      // In editor view
      else if (view === 'editor') {
        if (key === 'q') {
          // 'q' goes back to splash screen
          setView('splash');
        } else {
          // Other file keys switch files
          const targetFile = fileSystem.find(f => f.key === key);
          if (targetFile) {
            setActiveFile(targetFile.name);
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [view]); // Re-run effect when view changes

  // Main App Component
  return (
    <div
      className={`monospace ${theme.editorBg} ${theme.text} d-flex flex-column`}
      style={{ minHeight: '100vh', padding: 0, margin: 0, overflow: 'hidden' }}
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;800&display=swap');
        `}
      </style>
      {view === 'splash' ? (
        <SplashScreen 
          onNavigate={(file) => {
            setActiveFile(file);
            setView('editor');
          }}
        />
      ) : (
        <>
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0, overflow: 'hidden' }}>
            <main className="d-flex flex-column flex-md-row" style={{ flex: 1, overflow: 'hidden', width: '100%', minHeight: 0 }}>
              <FileTree
                activeFile={activeFile}
                setActiveFile={(file) => {
                  setActiveFile(file);
                  setView('editor'); // Ensure view is 'editor' on click
                }}
                onBackToHome={() => setView('splash')}
              />
              <div className="d-flex flex-column" style={{ flex: 1, overflow: 'hidden', minHeight: 0 }}>
                <Bufferline 
                  activeFile={activeFile} 
                  setActiveFile={setActiveFile} 
                  onBackToHome={() => setView('splash')}
                />
                <EditorPane 
                  activeFile={activeFile}
                />
              </div>
            </main>
            <LualineBar activeFile={activeFile} />
          </div>
        </>
      )}
    </div>
  );
}
