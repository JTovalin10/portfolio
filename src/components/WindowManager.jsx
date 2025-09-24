import React from 'react'
import Window from './Window'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Resume from './Resume'
import Contact from './Contact'
import TechnicalSkills from './TechnicalSkills'
import Hobbies from './Hobbies'
import Interests from './Interests'
import useWindowStore from '../store/windowStore'

const WindowManager = ({ windows, activeWindowId }) => {
  const { closeWindow, minimizeWindow, maximizeWindow, updateWindow, bringToFront } = useWindowStore()

  const renderWindowContent = (window) => {
    switch (window.type) {
      case 'about':
        return <AboutMe />
      case 'projects':
        return <Projects />
      case 'resume':
        return <Resume />
      case 'contact':
        return <Contact />
      case 'skills':
        return <TechnicalSkills />
      case 'hobbies':
        return <Hobbies />
      case 'interests':
        return <Interests />
      default:
        return <div>Content not found</div>
    }
  }

  return (
    <>
      {windows.map((window) => (
        <Window
          key={window.id}
          window={{
            ...window,
            content: renderWindowContent(window)
          }}
          isActive={window.id === activeWindowId}
          onClose={closeWindow}
          onMinimize={minimizeWindow}
          onMaximize={maximizeWindow}
          onUpdate={updateWindow}
          onBringToFront={bringToFront}
        />
      ))}
    </>
  )
}

export default WindowManager
