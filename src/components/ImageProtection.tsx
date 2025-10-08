'use client'

import { useEffect } from 'react'

export default function ImageProtection() {
  useEffect(() => {
    // Prevent right-click context menu
    const preventContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      return false
    }

    // Prevent keyboard shortcuts for saving and developer tools
    const preventKeyboardShortcuts = (e: KeyboardEvent) => {
      // Prevent Ctrl+S, Ctrl+Shift+S, F12, Ctrl+Shift+I, Ctrl+U, Ctrl+Shift+C
      if (
        (e.ctrlKey && e.key === 's') ||
        (e.ctrlKey && e.shiftKey && e.key === 'S') ||
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.key === 'u') ||
        (e.ctrlKey && e.key === 'U') ||
        (e.ctrlKey && e.shiftKey && e.key === 'C') ||
        (e.ctrlKey && e.key === 'c') ||
        (e.metaKey && e.key === 's') || // Mac Cmd+S
        (e.metaKey && e.shiftKey && e.key === 'I') || // Mac Cmd+Shift+I
        (e.metaKey && e.key === 'u') || // Mac Cmd+U
        (e.metaKey && e.shiftKey && e.key === 'C') // Mac Cmd+Shift+C
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

    // Enhanced dev tools detection
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
          
          if (isOpen) {
            // Hide content when dev tools are opened
            document.body.style.display = 'none'
            // Or show a warning message
            alert('Developer tools detected! This content is protected.')
            document.body.style.display = 'block'
          }
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

    // Prevent print screen and screenshot keys
    const preventPrintScreen = (e: KeyboardEvent) => {
      if (
        e.key === 'PrintScreen' || 
        e.key === 'PrtScn' ||
        e.key === 'F11' ||
        (e.ctrlKey && e.key === 'p') || // Print
        (e.metaKey && e.key === 'p') // Mac print
      ) {
        e.preventDefault()
        return false
      }
    }

    // Screen recording detection
    const detectScreenRecording = async () => {
      try {
        // Check if screen recording is active
        const stream = await navigator.mediaDevices.getDisplayMedia({ video: true })
        if (stream) {
          // Screen recording detected
          alert('Screen recording detected! This content is protected.')
          stream.getTracks().forEach(track => track.stop())
        }
      } catch (error) {
        // No screen recording active
      }
    }

    // Voice assistant screenshot protection
    const preventVoiceAssistantScreenshots = () => {
      // Detect common voice assistant user agents
      const userAgent = navigator.userAgent.toLowerCase()
      const isVoiceAssistant = 
        userAgent.includes('google assistant') ||
        userAgent.includes('alexa') ||
        userAgent.includes('siri') ||
        userAgent.includes('cortana') ||
        userAgent.includes('bixby')

      if (isVoiceAssistant) {
        // Hide content for voice assistants
        document.body.style.display = 'none'
        document.body.innerHTML = '<div style="text-align: center; padding: 50px; font-size: 24px;">Content not available for voice assistants</div>'
      }
    }

    // CSS-based protection
    const addCSSProtection = () => {
      const style = document.createElement('style')
      style.textContent = `
        * {
          -webkit-user-select: none !important;
          -moz-user-select: none !important;
          -ms-user-select: none !important;
          user-select: none !important;
          -webkit-touch-callout: none !important;
          -webkit-tap-highlight-color: transparent !important;
        }
        
        img, video, canvas {
          -webkit-user-drag: none !important;
          -khtml-user-drag: none !important;
          -moz-user-drag: none !important;
          -o-user-drag: none !important;
          user-drag: none !important;
          pointer-events: none !important;
        }
        
        /* Prevent screenshots on some browsers */
        @media print {
          * {
            display: none !important;
          }
        }
        
        /* Disable text selection */
        ::selection {
          background: transparent !important;
          color: inherit !important;
        }
        
        ::-moz-selection {
          background: transparent !important;
          color: inherit !important;
        }
      `
      document.head.appendChild(style)
    }

    // Prevent clipboard access
    const preventClipboardAccess = (e: ClipboardEvent) => {
      e.preventDefault()
      return false
    }

    // Detect if page is being captured
    const detectPageCapture = () => {
      // Monitor for changes that might indicate screenshot tools
      let lastWidth = window.innerWidth
      let lastHeight = window.innerHeight
      
      setInterval(() => {
        if (window.innerWidth !== lastWidth || window.innerHeight !== lastHeight) {
          // Page size changed, might be screenshot tool
          console.warn('Page size change detected - possible screenshot tool')
        }
        lastWidth = window.innerWidth
        lastHeight = window.innerHeight
      }, 100)
    }

    // Add all event listeners
    document.addEventListener('contextmenu', preventContextMenu)
    document.addEventListener('keydown', preventKeyboardShortcuts)
    document.addEventListener('keydown', preventPrintScreen)
    document.addEventListener('dragstart', preventDrag)
    document.addEventListener('drop', preventDrag)
    document.addEventListener('dragover', preventDrag)
    document.addEventListener('copy', preventClipboardAccess)
    document.addEventListener('cut', preventClipboardAccess)

    // Prevent image saving
    const images = document.querySelectorAll('img')
    images.forEach(img => {
      img.addEventListener('dragstart', preventImageSaving)
      img.addEventListener('contextmenu', preventImageSaving)
    })

    // Initialize all protection features
    detectDevTools()
    detectPageCapture()
    addCSSProtection()
    preventVoiceAssistantScreenshots()

    // Periodic screen recording detection
    const recordingInterval = setInterval(detectScreenRecording, 5000)

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
      document.removeEventListener('copy', preventClipboardAccess)
      document.removeEventListener('cut', preventClipboardAccess)
      
      images.forEach(img => {
        img.removeEventListener('dragstart', preventImageSaving)
        img.removeEventListener('contextmenu', preventImageSaving)
      })
      
      clearInterval(interval)
      clearInterval(recordingInterval)
    }
  }, [])

  return null
}
