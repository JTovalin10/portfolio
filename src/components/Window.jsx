import React, { useState, useRef, useEffect } from 'react'
import { Resizable } from 'react-resizable'
import 'react-resizable/css/styles.css'

const Window = ({
  window,
  isActive,
  onClose,
  onMinimize,
  onMaximize,
  onUpdate,
  onBringToFront
}) => {
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const windowRef = useRef(null)

  const handleResize = (e, { size }) => {
    // Ensure size values are valid numbers
    const newWidth = typeof size.width === 'number' && !isNaN(size.width) ? size.width : 800
    const newHeight = typeof size.height === 'number' && !isNaN(size.height) ? size.height : 600
    
    onUpdate(window.id, { width: newWidth, height: newHeight })
  }

  const handleClick = (e) => {
    // Only bring to front if clicking on the window itself, not on interactive elements
    if (e.target.closest('.window-content') || e.target.closest('.window-title-bar')) {
      onBringToFront(window.id)
    }
  }

  const handleTitleBarMouseDown = (e) => {
    if (e.target.closest('.window-control')) return
    
    // Ensure window position values are valid numbers
    const currentX = typeof window.x === 'number' && !isNaN(window.x) ? window.x : 100
    const currentY = typeof window.y === 'number' && !isNaN(window.y) ? window.y : 100
    
    // Ensure clientX and clientY are valid numbers
    const clientX = typeof e.clientX === 'number' && !isNaN(e.clientX) ? e.clientX : 0
    const clientY = typeof e.clientY === 'number' && !isNaN(e.clientY) ? e.clientY : 0
    
    const dragStartX = clientX - currentX
    const dragStartY = clientY - currentY
    
    console.log('Drag start:', {
      clientX, clientY, currentX, currentY,
      dragStartX, dragStartY,
      window: { x: window.x, y: window.y, width: window.width }
    })
    
    setIsDragging(true)
    setDragStart({
      x: dragStartX,
      y: dragStartY
    })
    onBringToFront(window.id)
  }

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging && !window.maximized) {
        // Validate all input values
        const clientX = typeof e.clientX === 'number' && !isNaN(e.clientX) ? e.clientX : 0
        const clientY = typeof e.clientY === 'number' && !isNaN(e.clientY) ? e.clientY : 0
        const dragStartX = typeof dragStart.x === 'number' && !isNaN(dragStart.x) ? dragStart.x : 0
        const dragStartY = typeof dragStart.y === 'number' && !isNaN(dragStart.y) ? dragStart.y : 0
        
        const newX = clientX - dragStartX
        const newY = clientY - dragStartY
        
        // Ensure window dimensions are valid numbers
        const currentWidth = typeof window.width === 'number' && !isNaN(window.width) ? window.width : 800
        
        // Constrain window movement within viewport boundaries
        const viewportWidth = typeof window.innerWidth === 'number' && !isNaN(window.innerWidth) ? window.innerWidth : 1920
        const viewportHeight = typeof window.innerHeight === 'number' && !isNaN(window.innerHeight) ? window.innerHeight : 1080
        const titleBarHeight = 32 // Actual title bar height from CSS
        const menuBarHeight = 28 // Menu bar height
        const minVisibleTitleBar = titleBarHeight // Keep entire title bar visible
        
        // Constrain X position (keep window within viewport)
        const constrainedX = Math.max(0, Math.min(newX, viewportWidth - currentWidth))
        
        // Constrain Y position (keep title bar fully visible and below menu bar)
        const constrainedY = Math.max(menuBarHeight, Math.min(newY, viewportHeight - minVisibleTitleBar))
        
        // Only update if values are valid numbers
        if (!isNaN(constrainedX) && !isNaN(constrainedY) && 
            typeof constrainedX === 'number' && typeof constrainedY === 'number') {
          onUpdate(window.id, { x: constrainedX, y: constrainedY })
        } else {
          console.warn('Invalid drag values:', {
            clientX, clientY, dragStartX, dragStartY,
            newX, newY, constrainedX, constrainedY,
            window: { x: window.x, y: window.y, width: window.width }
          })
        }
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
      document.body.classList.remove('dragging')
    }

    const handleKeyDown = (e) => {
      // Reset window position if Escape is pressed while dragging
      if (e.key === 'Escape' && isDragging) {
        setIsDragging(false)
        document.body.classList.remove('dragging')
        // Reset to a safe position
        onUpdate(window.id, { 
          x: Math.max(28, Math.min(window.x || 100, window.innerWidth - (window.width || 800))),
          y: Math.max(28, Math.min(window.y || 100, window.innerHeight - 32))
        })
      }
    }

    if (isDragging) {
      document.body.classList.add('dragging')
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('keydown', handleKeyDown)
      document.body.classList.remove('dragging')
    }
  }, [isDragging, dragStart, window.id, window.width, window.maximized, onUpdate])

  const getWindowStyle = () => {
    // Ensure all values are valid numbers
    const width = typeof window.width === 'number' && !isNaN(window.width) ? window.width : 800
    const height = typeof window.height === 'number' && !isNaN(window.height) ? window.height : 600
    const zIndex = typeof window.zIndex === 'number' && !isNaN(window.zIndex) ? window.zIndex : 1000
    
    // Validate and constrain window position
    let x = typeof window.x === 'number' && !isNaN(window.x) ? window.x : 100
    let y = typeof window.y === 'number' && !isNaN(window.y) ? window.y : 100
    
    const viewportWidth = window.innerWidth || 1920
    const viewportHeight = window.innerHeight || 1080
    const titleBarHeight = 32
    const menuBarHeight = 28
    
    // Ensure window stays within bounds
    x = Math.max(0, Math.min(x, viewportWidth - width))
    y = Math.max(menuBarHeight, Math.min(y, viewportHeight - titleBarHeight))
    
    // If position was corrected, update the store
    if (x !== window.x || y !== window.y) {
      onUpdate(window.id, { x, y })
    }

    const baseStyle = {
      left: window.maximized ? 0 : x,
      top: window.maximized ? '28px' : y, // Account for menu bar height
      width: window.maximized ? '100vw' : width,
      height: window.maximized ? 'calc(100vh - 28px)' : height,
      zIndex: zIndex
    }

    return baseStyle
  }

  return (
    <div
      ref={windowRef}
      className={`window ${isActive ? 'active' : ''} ${window.minimized ? 'minimized' : ''}`}
      style={getWindowStyle()}
      onClick={handleClick}
    >
      <div 
        className="window-title-bar"
        onMouseDown={handleTitleBarMouseDown}
      >
        <div className="window-controls">
          <div
            className="window-control close"
            onClick={(e) => {
              e.stopPropagation()
              onClose(window.id)
            }}
          />
          <div
            className="window-control minimize"
            onClick={(e) => {
              e.stopPropagation()
              onMinimize(window.id)
            }}
          />
          <div
            className="window-control maximize"
            onClick={(e) => {
              e.stopPropagation()
              onMaximize(window.id)
            }}
          />
        </div>
        <div className="window-title">{window.title}</div>
        <div style={{ width: '60px' }} />
      </div>
      
      {!window.maximized ? (
        <Resizable
          width={typeof window.width === 'number' && !isNaN(window.width) ? window.width : 800}
          height={typeof window.height === 'number' && !isNaN(window.height) ? window.height : 600}
          onResize={handleResize}
          minConstraints={[300, 200]}
          maxConstraints={[window.innerWidth, window.innerHeight - 28]}
          handle={<div className="resize-handle" />}
        >
          <div className="window-content">
            {window.content}
          </div>
        </Resizable>
      ) : (
        <div className="window-content">
          {window.content}
        </div>
      )}
    </div>
  )
}

export default Window
