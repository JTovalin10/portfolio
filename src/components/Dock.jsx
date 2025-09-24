import React from 'react'
import useWindowStore from '../store/windowStore'

const Dock = () => {
  const { windows, openWindow } = useWindowStore()

  const dockItems = [
    {
      id: 'finder',
      name: 'About Me',
      icon: '👤',
      type: 'about',
      title: 'About Justin Hernandez-Tovalin',
      color: '#007AFF'
    },
    {
      id: 'pages',
      name: 'Resume',
      icon: '📄',
      type: 'resume',
      title: 'Résumé',
      color: '#FFD54F'
    },
    {
      id: 'vscode',
      name: 'Projects',
      icon: '💻',
      type: 'projects',
      title: 'Projects Portfolio',
      color: '#007ACC'
    },
    {
      id: 'settings',
      name: 'Technical Skills',
      icon: '⚙️',
      type: 'skills',
      title: 'Technical Skills',
      color: '#FF6B6B'
    },
    {
      id: 'mail',
      name: 'Contact',
      icon: '✉️',
      type: 'contact',
      title: 'Get in Touch',
      color: '#E1BEE7'
    },
    {
      id: 'safari',
      name: 'GitHub',
      icon: '🌐',
      type: 'github',
      title: 'GitHub Profile',
      color: '#9C27B0',
      external: true
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: '💼',
      type: 'linkedin',
      title: 'LinkedIn Profile',
      color: '#0077B5',
      external: true
    }
  ]

  const handleIconClick = (event, item) => {
    // Prevent any default browser behavior
    event.preventDefault()
    event.stopPropagation()
    
    // Handle external links
    if (item.external) {
      if (item.type === 'github') {
        window.open('https://github.com/JTovalin10', '_blank', 'noopener,noreferrer')
      } else if (item.type === 'linkedin') {
        window.open('https://www.linkedin.com/in/justin-hernandez-tovalin-uw2026/', '_blank', 'noopener,noreferrer')
      }
      return
    }

    // Open window using the state management function
    openWindow({
      type: item.type,
      title: item.title,
      width: 800,
      height: 600
    })
  }

  const handleKeyDown = (event, item) => {
    // Handle keyboard navigation (Enter and Space keys)
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleIconClick(event, item)
    }
  }

  const isActive = (type) => {
    return windows.some(w => w.type === type && !w.minimized)
  }

  return (
    <div className="dock" role="toolbar" aria-label="Application dock">
      {dockItems.map((item) => (
        <button
          key={item.id}
          className={`dock-item ${isActive(item.type) ? 'active' : ''}`}
          onClick={(e) => handleIconClick(e, item)}
          onKeyDown={(e) => handleKeyDown(e, item)}
          aria-label={`Open ${item.name}`}
          title={item.name}
          type="button"
        >
          <div className="dock-item-icon" aria-hidden="true">{item.icon}</div>
          <div className="dock-item-label" aria-hidden="true">{item.name}</div>
        </button>
      ))}
    </div>
  )
}

export default Dock
