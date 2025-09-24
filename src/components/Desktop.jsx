import React from 'react'
import useWindowStore from '../store/windowStore'

const Desktop = () => {
  const { desktopIcons, openDesktopIcon } = useWindowStore()

  return (
    <div className="desktop">
      {desktopIcons.map((icon) => (
        <div
          key={icon.id}
          className="desktop-icon"
          style={{ left: icon.x, top: icon.y }}
          onClick={() => openDesktopIcon(icon.type)}
        >
          <div className="desktop-icon-icon">{icon.icon}</div>
          <div className="desktop-icon-label">{icon.name}</div>
        </div>
      ))}
    </div>
  )
}

export default Desktop
