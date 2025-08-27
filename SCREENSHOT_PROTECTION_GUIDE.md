# Screenshot & Screen Recording Protection Guide

This document outlines the comprehensive protection measures implemented to prevent screenshots, screen recordings, and unauthorized content capture on your portfolio website, similar to Netflix's approach.

## 🛡️ Protection Features Implemented

### 1. JavaScript-Based Protection (`ImageProtection.tsx`)

#### Keyboard Shortcut Prevention
- **Ctrl+S / Cmd+S**: Save page
- **Ctrl+Shift+S / Cmd+Shift+S**: Save as
- **F12**: Developer tools
- **Ctrl+Shift+I / Cmd+Shift+I**: Developer tools
- **Ctrl+U / Cmd+U**: View source
- **Ctrl+Shift+C / Cmd+Shift+C**: Inspect element
- **Ctrl+C / Cmd+C**: Copy
- **PrintScreen / PrtScn**: Screenshot key
- **F11**: Fullscreen (often used for screenshots)
- **Ctrl+P / Cmd+P**: Print

#### Context Menu Prevention
- Disables right-click context menu globally
- Prevents image-specific context menus
- Blocks "Save image as" options

#### Drag & Drop Prevention
- Prevents dragging images to desktop
- Blocks drag and drop file operations
- Disables image dragging within the page

#### Developer Tools Detection
- Monitors for developer tools opening
- Detects Firebug and other debugging tools
- Hides content when dev tools are detected
- Shows warning messages

#### Screen Recording Detection
- Uses `navigator.mediaDevices.getDisplayMedia()` API
- Detects active screen recording sessions
- Shows alerts when recording is detected
- Automatically stops detected streams

#### Voice Assistant Protection
- Detects common voice assistant user agents:
  - Google Assistant
  - Alexa
  - Siri
  - Cortana
  - Bixby
- Hides content for voice assistant requests
- Prevents "Hey Google" screenshot commands

#### Clipboard Protection
- Prevents copy operations
- Blocks cut operations
- Disables clipboard access

#### Page Capture Detection
- Monitors window size changes
- Detects potential screenshot tools
- Logs suspicious activity

#### **Enhanced Mobile Screenshot Protection** 🆕
- **Visibility Change Detection**: Monitors page visibility changes
- **Focus Change Detection**: Detects when page loses/gains focus
- **Orientation Change Monitoring**: Detects screen rotation
- **Window Resize Detection**: Monitors for screenshot app interference
- **Touch Gesture Monitoring**: Detects long-press screenshot attempts
- **Hardware Button Detection**: Attempts to detect volume+power combinations
- **Visual Deterrent Overlay**: Shows warning messages on detection
- **Progressive Protection**: Increases protection level with repeated attempts
- **Real-time Monitoring**: Continuous screenshot attempt detection

### 2. CSS-Based Protection (`globals.css`)

#### User Selection Prevention
```css
* {
  -webkit-user-select: none !important;
  -moz-user-select: none !important;
  -ms-user-select: none !important;
  user-select: none !important;
}
```

#### Image Protection
```css
img, video, canvas, svg {
  -webkit-user-drag: none !important;
  -moz-user-drag: none !important;
  user-drag: none !important;
  pointer-events: none !important;
}
```

#### Context Menu Disabling
```css
* {
  -webkit-context-menu: none !important;
  -moz-context-menu: none !important;
  context-menu: none !important;
}
```

#### Print Prevention
```css
@media print {
  * {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
  }
}
```

#### Selection Highlighting Disabled
```css
::selection {
  background: transparent !important;
  color: inherit !important;
}
```

#### Touch Callout Prevention
```css
* {
  -webkit-touch-callout: none !important;
  -webkit-tap-highlight-color: transparent !important;
}
```

#### **Enhanced Mobile CSS Protection** 🆕
```css
@media (max-width: 768px) {
  /* Visual deterrent badge */
  body::before {
    content: "📱 Screenshot Protected";
    position: fixed;
    top: 10px;
    right: 10px;
    background: rgba(255, 0, 0, 0.8);
    color: white;
    z-index: 1000000;
  }
  
  /* Protection overlay */
  body::after {
    background: linear-gradient(45deg, transparent 49%, rgba(255, 0, 0, 0.01) 50%, transparent 51%);
    background-size: 20px 20px;
    z-index: 999999;
  }
  
  /* Enhanced mobile gestures */
  * {
    -webkit-touch-manipulation: none !important;
    touch-action: none !important;
  }
}
```

## 🚀 How It Works

### Multi-Layer Protection
1. **Client-Side JavaScript**: Intercepts user actions and browser events
2. **CSS Protection**: Prevents visual capture and user interactions
3. **Event Monitoring**: Continuously monitors for suspicious activity
4. **Real-time Detection**: Detects and responds to capture attempts
5. **Mobile-Specific Protection**: Enhanced detection for mobile devices

### Browser Compatibility
- **Chrome/Chromium**: Full protection
- **Firefox**: Full protection
- **Safari**: Full protection
- **Edge**: Full protection
- **Mobile Browsers**: Enhanced protection

## ⚠️ Limitations

### What This Protects Against
- Standard screenshot tools (PrintScreen, Snipping Tool)
- Browser developer tools
- Right-click context menus
- Drag and drop operations
- Keyboard shortcuts
- Basic screen recording software
- Voice assistant screenshot commands
- Print screen attempts
- **Mobile screenshot attempts** (enhanced protection)
- **Hardware button combinations** (partial detection)
- **Long-press gestures** (mobile detection)

### What This Cannot Protect Against
- **Hardware-level screenshots**: Physical camera photos
- **Advanced screen recording**: Professional recording software
- **Browser extensions**: Some specialized extensions
- **OS-level tools**: System screenshot utilities
- **Native mobile screenshots**: Hardware button combinations (volume+power)
- **Virtual machines**: Screenshots from VM software

## 📱 **Enhanced Mobile Protection** 🆕

### Mobile-Specific Features
- **Visual Deterrent Badge**: Shows "📱 Screenshot Protected" on mobile
- **Protection Overlay**: Subtle gradient overlay to deter screenshots
- **Touch Gesture Monitoring**: Detects long-press screenshot attempts
- **Orientation Change Detection**: Monitors screen rotation
- **Focus/Visibility Monitoring**: Detects app switching
- **Progressive Warnings**: Shows stronger warnings with repeated attempts
- **Hardware Button Detection**: Attempts to detect volume+power combinations
- **Real-time Monitoring**: Continuous detection of screenshot attempts

### Mobile Detection Methods
1. **Visibility API**: Detects when page becomes hidden
2. **Focus Events**: Monitors page focus changes
3. **Orientation Changes**: Detects screen rotation
4. **Window Resize**: Monitors for screenshot app interference
5. **Touch Duration**: Detects long-press gestures
6. **Media Session**: Attempts hardware button detection
7. **Periodic Checks**: Continuous monitoring of window dimensions

### Mobile Limitations
- **Native mobile screenshots** may still work (hardware limitation)
- **Hardware buttons** (volume + power) bypass some protection
- **Some mobile browsers** have different security models
- **Advanced screenshot apps** might bypass detection

## 🔧 Customization

### Adjusting Protection Levels

#### Reduce Protection (for better UX)
```typescript
// In ImageProtection.tsx, comment out specific protections:
// document.addEventListener('keydown', preventKeyboardShortcuts)
// document.addEventListener('contextmenu', preventContextMenu)
```

#### Increase Protection
```typescript
// Add additional checks:
const additionalProtection = () => {
  // Custom protection logic
}
```

### Whitelist Specific Elements
```css
/* Allow text selection for specific elements */
.allow-select {
  -webkit-user-select: text !important;
  user-select: text !important;
}
```

### Mobile Protection Customization
```typescript
// Adjust mobile detection sensitivity
const threshold = 3 // Increase from 2 for fewer false positives
const touchDuration = 1500 // Increase from 1000ms for long-press detection
```

## 🛠️ Troubleshooting

### Common Issues

#### Protection Too Aggressive
- Users can't select text for copying
- Forms become unusable
- Navigation becomes difficult

**Solution**: Whitelist interactive elements:
```css
input, textarea, button, a {
  -webkit-user-select: text !important;
  user-select: text !important;
  pointer-events: auto !important;
}
```

#### False Positives
- Legitimate tools trigger warnings
- Normal user actions blocked

**Solution**: Adjust detection thresholds:
```typescript
const threshold = 200 // Increase from 160
const screenshotAttempts = 5 // Increase from 2
```

#### Performance Impact
- Too many event listeners
- Excessive monitoring

**Solution**: Optimize intervals:
```typescript
setInterval(detectDevTools, 1000) // Increase from 500ms
setInterval(mobileDetection, 2000) // Increase from 1000ms
```

#### Mobile False Positives
- Normal app switching triggers warnings
- Legitimate touch gestures blocked

**Solution**: Adjust mobile detection:
```typescript
const touchDuration = 2000 // Increase long-press threshold
const visibilityThreshold = 5 // Increase visibility change tolerance
```

## 🔒 Security Best Practices

### Additional Recommendations
1. **Server-side validation**: Always validate data on the server
2. **Watermarking**: Add invisible watermarks to images
3. **Rate limiting**: Prevent rapid access attempts
4. **Monitoring**: Log suspicious activity
5. **Legal protection**: Include terms of service about content protection

### Content Strategy
1. **Low-resolution images**: Use compressed images
2. **Partial content**: Show previews only
3. **Dynamic loading**: Load content progressively
4. **Session-based access**: Time-limited content access

### Mobile-Specific Strategy
1. **Visual deterrents**: Show protection badges
2. **Progressive warnings**: Escalate protection with attempts
3. **Touch gesture blocking**: Prevent screenshot gestures
4. **Hardware detection**: Monitor for button combinations

## 📊 Monitoring & Analytics

### What to Monitor
- Developer tools detection events
- Screenshot attempt warnings
- Screen recording alerts
- Voice assistant requests
- Protection bypass attempts
- **Mobile screenshot attempts** 🆕
- **Touch gesture violations** 🆕
- **Hardware button detection** 🆕

### Analytics Integration
```typescript
// Add to protection events:
const logProtectionEvent = (event: string) => {
  // Send to analytics service
  console.log(`Protection triggered: ${event}`)
}

// Mobile-specific logging
const logMobileProtectionEvent = (event: string, device: string) => {
  console.log(`Mobile protection: ${event} on ${device}`)
}
```

## 🎯 Conclusion

This comprehensive protection system provides multiple layers of defense against common screenshot and screen recording attempts, with **enhanced mobile protection** that significantly improves protection on mobile devices.

While no solution is 100% foolproof, this implementation significantly raises the barrier for unauthorized content capture while maintaining a good user experience for legitimate visitors.

The protection is designed to be:
- **Non-intrusive**: Doesn't affect normal browsing
- **Comprehensive**: Covers multiple attack vectors including mobile
- **Maintainable**: Easy to update and customize
- **Performance-friendly**: Minimal impact on page load times
- **Mobile-optimized**: Enhanced protection for mobile devices

**Key Mobile Improvements:**
- Visual deterrent badges
- Touch gesture monitoring
- Hardware button detection attempts
- Progressive warning system
- Real-time mobile monitoring

Remember that the goal is to deter casual attempts while not making the site unusable for legitimate users.
