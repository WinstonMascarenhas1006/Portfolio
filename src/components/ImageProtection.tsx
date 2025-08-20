'use client'

import { useEffect } from 'react'

export default function ImageProtection() {
  useEffect(() => {
    // Prevent right-click context menu
    const preventContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      return false
    }

    // Prevent keyboard shortcuts for saving
    const preventKeyboardShortcuts = (e: KeyboardEvent) => {
      // Prevent Ctrl+S, Ctrl+Shift+S, F12, Ctrl+Shift+I, Ctrl+U
      if (
        (e.ctrlKey && e.key === 's') ||
        (e.ctrlKey && e.shiftKey && e.key === 'S') ||
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.key === 'u') ||
        (e.ctrlKey && e.key === 'U')
      ) {
        e.preventDefault()
        return false
      }
    }

    // Prevent drag and drop
    const preventDrag = (e: DragEvent) => {
      e.preventDefault()
      return false
    }

    // Prevent image saving via various methods
    const preventImageSaving = (e: Event) => {
      e.preventDefault()
      return false
    }

    // Detect developer tools
    const detectDevTools = () => {
      const devtools = {
        open: false,
        orientation: null as string | null
      }

      const threshold = 160

      const emitEvent = (isOpen: boolean, orientation?: string) => {
        if (isOpen !== devtools.open) {
          devtools.open = isOpen
          devtools.orientation = orientation || null
          
          // You can add custom logic here when dev tools are detected
          console.warn('Developer tools detected!')
        }
      }

      setInterval(() => {
        const widthThreshold = window.outerWidth - window.innerWidth > threshold
        const heightThreshold = window.outerHeight - window.innerHeight > threshold
        const orientation = widthThreshold ? 'vertical' : 'horizontal'

        if (
          !(heightThreshold && widthThreshold) &&
          (((window as any).Firebug && (window as any).Firebug.chrome && (window as any).Firebug.chrome.isInitialized) || widthThreshold || heightThreshold)
        ) {
          emitEvent(true, orientation)
        } else {
          emitEvent(false)
        }
      }, 500)
    }

    // Prevent print screen
    const preventPrintScreen = (e: KeyboardEvent) => {
      if (e.key === 'PrintScreen' || e.key === 'PrtScn') {
        e.preventDefault()
        return false
      }
    }

    // Add event listeners
    document.addEventListener('contextmenu', preventContextMenu)
    document.addEventListener('keydown', preventKeyboardShortcuts)
    document.addEventListener('keydown', preventPrintScreen)
    document.addEventListener('dragstart', preventDrag)
    document.addEventListener('drop', preventDrag)
    document.addEventListener('dragover', preventDrag)

    // Prevent image saving
    const images = document.querySelectorAll('img')
    images.forEach(img => {
      img.addEventListener('dragstart', preventImageSaving)
      img.addEventListener('contextmenu', preventImageSaving)
    })

    // Start dev tools detection
    detectDevTools()

    // Disable text selection on images
    const disableImageSelection = () => {
      const images = document.querySelectorAll('img')
      images.forEach(img => {
        img.style.userSelect = 'none';
        (img.style as any).webkitUserSelect = 'none';
        (img.style as any).mozUserSelect = 'none';
        (img.style as any).msUserSelect = 'none';
        img.style.pointerEvents = 'none'
      })
    }

    // Run on load and periodically
    disableImageSelection()
    const interval = setInterval(disableImageSelection, 1000)

    // Cleanup function
    return () => {
      document.removeEventListener('contextmenu', preventContextMenu)
      document.removeEventListener('keydown', preventKeyboardShortcuts)
      document.removeEventListener('keydown', preventPrintScreen)
      document.removeEventListener('dragstart', preventDrag)
      document.removeEventListener('drop', preventDrag)
      document.removeEventListener('dragover', preventDrag)
      
      images.forEach(img => {
        img.removeEventListener('dragstart', preventImageSaving)
        img.removeEventListener('contextmenu', preventImageSaving)
      })
      
      clearInterval(interval)
    }
  }, [])

  return null
}
