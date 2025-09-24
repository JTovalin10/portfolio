import React, { useState, useEffect } from 'react'
import useWindowStore from '../store/windowStore'

const MenuBar = () => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const { windows, activeWindowId } = useWindowStore()

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Get active window title
  const activeWindow = windows.find(w => w.id === activeWindowId)
  const activeWindowTitle = activeWindow ? activeWindow.title : 'Desktop'

  // Format time
  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })
  }

  return (
    <div className="menu-bar">
      <div className="menu-bar-left">
        <div className="shiba-logo"></div>
        <div className="active-window-title">{activeWindowTitle}</div>
      </div>
      <div className="menu-bar-right">
        <div className="time-display">{formatTime(currentTime)}</div>
      </div>
    </div>
  )
}

export default MenuBar
