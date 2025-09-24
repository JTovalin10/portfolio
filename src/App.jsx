import React from 'react'
import MenuBar from './components/MenuBar'
import Desktop from './components/Desktop'
import Dock from './components/Dock'
import WindowManager from './components/WindowManager'
import useWindowStore from './store/windowStore'

function App() {
  const { windows, activeWindowId } = useWindowStore()

  return (
    <div className="macos-desktop">
      <MenuBar />
      <Desktop />
      <WindowManager 
        windows={windows}
        activeWindowId={activeWindowId}
      />
      <Dock />
    </div>
  )
}

export default App