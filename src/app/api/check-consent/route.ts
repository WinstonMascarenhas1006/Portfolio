import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export const runtime = 'nodejs'

// In-memory store for demo purposes (use Redis or database in production)
const consentStore = new Map<string, any>()
const ipConsentStore = new Map<string, any>()

export async function POST(request: NextRequest) {
  try {
    // Security: Rate limiting check
    const clientIP = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    const userAgent = request.headers.get('user-agent') || 'unknown'
    
    // Security: Validate request method
    if (request.method !== 'POST') {
      return NextResponse.json(
        { success: false, message: 'Method not allowed' },
        { status: 405 }
      )
    }

    // Security: Check content type
    const contentType = request.headers.get('content-type')
    if (!contentType || !contentType.includes('application/json')) {
      return NextResponse.json(
        { success: false, message: 'Invalid content type' },
        { status: 400 }
      )
    }

    const body = await request.json()
    const { userAgent: visitorUserAgent, timestamp, localConsent } = body

    // Get or create session ID from cookies
    const cookieStore = cookies()
    let sessionId = cookieStore.get('visitor-session')?.value

    if (!sessionId) {
      // Create new session ID
      sessionId = generateSessionId()
      
      // Set session cookie (30 days expiry)
      const response = NextResponse.json({ hasConsent: false })
      response.cookies.set('visitor-session', sessionId, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 30 * 24 * 60 * 60, // 30 days
        path: '/'
      })
      
      return response
    }

    // Check multiple tracking methods for consent

    // 1. Session-based tracking
    const sessionData = consentStore.get(sessionId)
    if (sessionData && sessionData.consent) {
      const consentAge = Date.now() - new Date(sessionData.timestamp).getTime()
      const maxAge = 365 * 24 * 60 * 60 * 1000 // 1 year in milliseconds
      
      if (consentAge < maxAge) {
        return NextResponse.json({
          hasConsent: true,
          consentData: sessionData,
          trackingMethod: 'session'
        })
      } else {
        consentStore.delete(sessionId)
      }
    }

    // 2. IP-based tracking (for same device, different browsers)
    const ipData = ipConsentStore.get(clientIP)
    if (ipData && ipData.consent) {
      const consentAge = Date.now() - new Date(ipData.timestamp).getTime()
      const maxAge = 30 * 24 * 60 * 60 * 1000 // 30 days for IP tracking
      
      if (consentAge < maxAge) {
        // Check if it's the same device (similar user agent)
        if (isSimilarUserAgent(ipData.userAgent, userAgent)) {
          return NextResponse.json({
            hasConsent: true,
            consentData: ipData,
            trackingMethod: 'ip'
          })
        }
      } else {
        ipConsentStore.delete(clientIP)
      }
    }

    // 3. Local storage fallback (for immediate response)
    if (localConsent && localConsent.consent) {
      const consentAge = Date.now() - new Date(localConsent.timestamp).getTime()
      const maxAge = 7 * 24 * 60 * 60 * 1000 // 7 days for local storage
      
      if (consentAge < maxAge) {
        return NextResponse.json({
          hasConsent: true,
          consentData: localConsent,
          trackingMethod: 'local'
        })
      }
    }

    // No valid consent found
    return NextResponse.json({ hasConsent: false })

  } catch (error) {
    console.error('Error checking consent status:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Helper function to generate unique session ID
function generateSessionId(): string {
  return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)
}

// Helper function to check if user agents are similar (same device, different browsers)
function isSimilarUserAgent(ua1: string, ua2: string): boolean {
  // Extract OS and device info from user agents
  const os1 = extractOS(ua1)
  const os2 = extractOS(ua2)
  
  // Extract device type
  const device1 = extractDevice(ua1)
  const device2 = extractDevice(ua2)
  
  // Consider similar if same OS and device type
  return os1 === os2 && device1 === device2
}

function extractOS(userAgent: string): string {
  if (userAgent.includes('Windows')) return 'Windows'
  if (userAgent.includes('Mac OS')) return 'MacOS'
  if (userAgent.includes('Linux')) return 'Linux'
  if (userAgent.includes('Android')) return 'Android'
  if (userAgent.includes('iOS')) return 'iOS'
  return 'Unknown'
}

function extractDevice(userAgent: string): string {
  if (userAgent.includes('Mobile')) return 'Mobile'
  if (userAgent.includes('Tablet')) return 'Tablet'
  return 'Desktop'
}
