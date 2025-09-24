import { create } from 'zustand'

const useWindowStore = create((set, get) => ({
  // Window state
  windows: [],
  activeWindowId: null,
  nextZIndex: 1000,
  
  // Desktop state
  desktopIcons: [
    { id: 'hobbies-1', name: 'Hobbies', icon: '📸', x: 50, y: 100, type: 'hobbies' },
    { id: 'interests-1', name: 'Interests', icon: '🎨', x: 200, y: 100, type: 'interests' }
  ],
  
  // Actions
  openWindow: (windowData) => {
    const { windows, nextZIndex } = get()
    
    // Check if window already exists
    const existingWindow = windows.find(w => w.type === windowData.type)
    if (existingWindow) {
      // Bring existing window to front
      set({
        activeWindowId: existingWindow.id,
        windows: windows.map(w => 
          w.id === existingWindow.id 
            ? { ...w, zIndex: nextZIndex, minimized: false }
            : w
        ),
        nextZIndex: nextZIndex + 1
      })
      return
    }
    
    // Create new window
    const newWindow = {
      id: `window-${Date.now()}`,
      type: windowData.type,
      title: windowData.title,
      x: typeof windowData.x === 'number' ? windowData.x : 100 + (windows.length * 30),
      y: typeof windowData.y === 'number' ? windowData.y : 100 + (windows.length * 30),
      width: typeof windowData.width === 'number' ? windowData.width : 800,
      height: typeof windowData.height === 'number' ? windowData.height : 600,
      zIndex: nextZIndex,
      minimized: false,
      maximized: false
    }
    
    console.log('Creating new window:', newWindow)
    
    set({
      windows: [...windows, newWindow],
      activeWindowId: newWindow.id,
      nextZIndex: nextZIndex + 1
    })
  },
  
  closeWindow: (windowId) => {
    const { windows, activeWindowId } = get()
    const newWindows = windows.filter(w => w.id !== windowId)
    
    // If closing active window, set new active window
    let newActiveWindowId = activeWindowId
    if (activeWindowId === windowId && newWindows.length > 0) {
      // Find the window with highest z-index
      const sortedWindows = [...newWindows].sort((a, b) => b.zIndex - a.zIndex)
      newActiveWindowId = sortedWindows[0].id
    } else if (newWindows.length === 0) {
      newActiveWindowId = null
    }
    
    set({
      windows: newWindows,
      activeWindowId: newActiveWindowId
    })
  },
  
  minimizeWindow: (windowId) => {
    set(state => ({
      windows: state.windows.map(w => 
        w.id === windowId ? { ...w, minimized: true } : w
      ),
      activeWindowId: state.activeWindowId === windowId ? null : state.activeWindowId
    }))
  },
  
  maximizeWindow: (windowId) => {
    set(state => ({
      windows: state.windows.map(w => 
        w.id === windowId ? { ...w, maximized: !w.maximized } : w
      )
    }))
  },
  
  updateWindow: (windowId, updates) => {
    console.log('updateWindow called:', { windowId, updates })
    
    set(state => ({
      windows: state.windows.map(w => {
        if (w.id === windowId) {
          // Validate numeric values to prevent NaN
          const validatedUpdates = { ...updates }
          
          if (typeof validatedUpdates.x === 'number' && !isNaN(validatedUpdates.x)) {
            validatedUpdates.x = validatedUpdates.x
          } else if ('x' in validatedUpdates) {
            console.warn('Invalid x value:', validatedUpdates.x)
            delete validatedUpdates.x
          }
          
          if (typeof validatedUpdates.y === 'number' && !isNaN(validatedUpdates.y)) {
            validatedUpdates.y = validatedUpdates.y
          } else if ('y' in validatedUpdates) {
            console.warn('Invalid y value:', validatedUpdates.y)
            delete validatedUpdates.y
          }
          
          if (typeof validatedUpdates.width === 'number' && !isNaN(validatedUpdates.width)) {
            validatedUpdates.width = validatedUpdates.width
          } else if ('width' in validatedUpdates) {
            console.warn('Invalid width value:', validatedUpdates.width)
            delete validatedUpdates.width
          }
          
          if (typeof validatedUpdates.height === 'number' && !isNaN(validatedUpdates.height)) {
            validatedUpdates.height = validatedUpdates.height
          } else if ('height' in validatedUpdates) {
            console.warn('Invalid height value:', validatedUpdates.height)
            delete validatedUpdates.height
          }
          
          console.log('Validated updates:', validatedUpdates)
          return { ...w, ...validatedUpdates }
        }
        return w
      })
    }))
  },
  
  bringToFront: (windowId) => {
    const { nextZIndex } = get()
    set(state => ({
      windows: state.windows.map(w => 
        w.id === windowId 
          ? { ...w, zIndex: nextZIndex, minimized: false }
          : w
      ),
      activeWindowId: windowId,
      nextZIndex: nextZIndex + 1
    }))
  },
  
  // Desktop icon actions
  openDesktopIcon: (iconType) => {
    if (iconType === 'hobbies') {
      get().openWindow({
        type: 'hobbies',
        title: 'Photo Booth - Hobbies',
        width: 900,
        height: 700
      })
    } else if (iconType === 'interests') {
      get().openWindow({
        type: 'interests',
        title: 'Interests & Passions',
        width: 800,
        height: 600
      })
    }
  }
}))

export default useWindowStore
