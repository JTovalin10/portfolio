import './index.css';
import { inject } from '@vercel/analytics';
import { AppState } from './types';
import { clearElement } from './utils/dom';
import { fileSystem } from './config/fileSystem';
import { theme } from './config/theme';
import { createSplashScreen } from './components/SplashScreen';
import { createFileTree } from './components/FileTree';
import { createBufferline } from './components/Bufferline';
import { createEditorPane } from './components/EditorPane';
import { createLualineBar } from './components/LualineBar';

// Initialize Vercel Analytics
inject();

// Application state
const state: AppState = {
  view: 'splash',
  activeFile: 'about.md',
};

// Get root element
const root = document.getElementById('root');
if (!root) {
  throw new Error('Root element not found');
}

// Render functions
function render() {
  clearElement(root);

  const appContainer = document.createElement('div');
  appContainer.className = `monospace ${theme.editorBg} ${theme.text} d-flex flex-column`;
  appContainer.style.minHeight = '100vh';
  appContainer.style.padding = '0';
  appContainer.style.margin = '0';
  appContainer.style.overflow = 'hidden';

  if (state.view === 'splash') {
    const splashScreen = createSplashScreen((file: string) => {
      state.activeFile = file;
      state.view = 'editor';
      render();
    });

    appContainer.appendChild(splashScreen);
  } else {
    // Editor view
    const editorContainer = document.createElement('div');
    editorContainer.style.display = 'flex';
    editorContainer.style.flexDirection = 'column';
    editorContainer.style.flex = '1';
    editorContainer.style.minHeight = '0';
    editorContainer.style.overflow = 'hidden';

    const mainSection = document.createElement('main');
    mainSection.className = 'd-flex flex-column flex-md-row';
    mainSection.style.flex = '1';
    mainSection.style.overflow = 'hidden';
    mainSection.style.width = '100%';
    mainSection.style.minHeight = '0';

    // File tree
    const fileTree = createFileTree(
      state.activeFile,
      (file: string) => {
        state.activeFile = file;
        render();
      },
      () => {
        state.view = 'splash';
        render();
      }
    );

    mainSection.appendChild(fileTree);

    // Editor area (bufferline + editor pane)
    const editorArea = document.createElement('div');
    editorArea.className = 'd-flex flex-column';
    editorArea.style.flex = '1';
    editorArea.style.overflow = 'hidden';
    editorArea.style.minHeight = '0';

    // Bufferline
    const bufferline = createBufferline(
      state.activeFile,
      (file: string) => {
        state.activeFile = file;
        render();
      }
    );

    if (bufferline) {
      editorArea.appendChild(bufferline);
    }

    // Editor pane
    const editorPane = createEditorPane(state.activeFile);
    editorArea.appendChild(editorPane);

    mainSection.appendChild(editorArea);
    editorContainer.appendChild(mainSection);

    // Lualine bar
    const lualineBar = createLualineBar(state.activeFile);
    editorContainer.appendChild(lualineBar);

    appContainer.appendChild(editorContainer);
  }

  root.appendChild(appContainer);
}

// Keyboard navigation
function setupKeyboardNavigation() {
  window.addEventListener('keydown', (e: KeyboardEvent) => {
    const key = e.key.toLowerCase();

    if (state.view === 'splash') {
      // Navigate to editor
      const targetFile = fileSystem.find(f => f.key === key);
      if (targetFile) {
        state.activeFile = targetFile.name;
        state.view = 'editor';
        render();
      }
    } else if (state.view === 'editor') {
      if (key === 'q') {
        // Go back to splash
        state.view = 'splash';
        render();
      } else {
        // Switch files
        const targetFile = fileSystem.find(f => f.key === key);
        if (targetFile) {
          state.activeFile = targetFile.name;
          render();
        }
      }
    }
  });
}

// Initialize app
function init() {
  setupKeyboardNavigation();
  render();
}

// Start the application
init();
