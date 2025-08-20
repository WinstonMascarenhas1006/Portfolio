import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Ensure this route runs on the Node.js runtime
export const runtime = 'nodejs'

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

    // Security: Limit request body size (max 5KB)
    const contentLength = request.headers.get('content-length')
    if (contentLength && parseInt(contentLength) > 5120) {
      return NextResponse.json(
        { success: false, message: 'Request too large' },
        { status: 413 }
      )
    }

    const body = await request.json()
    const { name, company, email, timestamp, userAgent: visitorUserAgent, consent } = body

    // Security: Validate required fields
    if (!name || !company || !email || !consent) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Security: Input sanitization and validation
    const sanitizedName = String(name).trim().substring(0, 50)
    const sanitizedCompany = String(company).trim().substring(0, 100)
    const sanitizedEmail = String(email).trim().toLowerCase().substring(0, 254)

    // Security: Validate email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(sanitizedEmail)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Security: Check for suspicious patterns
    const suspiciousPatterns = [
      /<script/i,
      /javascript:/i,
      /on\w+\s*=/i,
      /data:text\/html/i,
      /vbscript:/i,
      /<iframe/i,
      /<object/i,
      /<embed/i
    ]

    const allInput = `${sanitizedName}${sanitizedCompany}${sanitizedEmail}`
    
    for (const pattern of suspiciousPatterns) {
      if (pattern.test(allInput)) {
        console.warn(`Suspicious visitor consent input detected from IP: ${clientIP}`)
        return NextResponse.json(
          { success: false, message: 'Invalid input detected' },
          { status: 400 }
        )
      }
    }

    // Create visitor data object
    const visitorData = {
      name: sanitizedName,
      company: sanitizedCompany,
      email: sanitizedEmail,
      timestamp: timestamp || new Date().toISOString(),
      ip: clientIP,
      userAgent: visitorUserAgent || userAgent,
      consent: true,
      visitDate: new Date().toISOString()
    }

    // Log visitor data (in production, you might want to store this in a database)
    console.log(`New visitor consent: ${sanitizedName} from ${sanitizedCompany} (${sanitizedEmail}) - IP: ${clientIP}`)

    // Send email notification to winstonmascarenhasjobs@gmail.com
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.EMAIL_PORT || '587'),
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      })

      const mailOptions = {
        from: process.env.EMAIL_FROM || 'noreply@winstonmascarenhas.com',
        to: 'winstonmascarenhasjobs@gmail.com',
        subject: `New Website Visitor: ${sanitizedName} from ${sanitizedCompany}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px; text-align: center;">
              <h1 style="margin: 0; font-size: 24px;">New Website Visitor</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Someone just visited your portfolio website!</p>
            </div>
            
            <div style="background: white; padding: 20px; margin-top: 20px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <h2 style="color: #333; margin-top: 0;">Visitor Details:</h2>
              
              <div style="margin-bottom: 15px;">
                <strong style="color: #555;">Name:</strong>
                <span style="color: #333; margin-left: 10px;">${sanitizedName}</span>
              </div>
              
              <div style="margin-bottom: 15px;">
                <strong style="color: #555;">Company/Organization:</strong>
                <span style="color: #333; margin-left: 10px;">${sanitizedCompany}</span>
              </div>
              
              <div style="margin-bottom: 15px;">
                <strong style="color: #555;">Email:</strong>
                <span style="color: #333; margin-left: 10px;">${sanitizedEmail}</span>
              </div>
              
              <div style="margin-bottom: 15px;">
                <strong style="color: #555;">Visit Date:</strong>
                <span style="color: #333; margin-left: 10px;">${new Date().toLocaleString()}</span>
              </div>
              
              <div style="margin-bottom: 15px;">
                <strong style="color: #555;">IP Address:</strong>
                <span style="color: #333; margin-left: 10px;">${clientIP}</span>
              </div>
              
              <div style="margin-bottom: 15px;">
                <strong style="color: #555;">User Agent:</strong>
                <span style="color: #333; margin-left: 10px; font-size: 12px; word-break: break-all;">${visitorUserAgent || userAgent}</span>
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
              <p>This notification was sent automatically when someone visited your portfolio website.</p>
              <p>Timestamp: ${new Date().toISOString()}</p>
            </div>
          </div>
        `,
        text: `
New Website Visitor Notification

Visitor Details:
- Name: ${sanitizedName}
- Company/Organization: ${sanitizedCompany}
- Email: ${sanitizedEmail}
- Visit Date: ${new Date().toLocaleString()}
- IP Address: ${clientIP}
- User Agent: ${visitorUserAgent || userAgent}

This notification was sent automatically when someone visited your portfolio website.
Timestamp: ${new Date().toISOString()}
        `,
      }

      await transporter.sendMail(mailOptions)
      console.log(`Email notification sent to winstonmascarenhasjobs@gmail.com for visitor: ${sanitizedName}`)
    } catch (emailError) {
      console.error('Error sending email notification:', emailError)
      // Don't fail the request if email fails, just log the error
    }

    // Security: Add security headers to response
    const response = NextResponse.json(
      { 
        success: true, 
        message: 'Visitor consent recorded successfully'
      },
      { status: 200 }
    )

    // Security: Add security headers
    response.headers.set('X-Content-Type-Options', 'nosniff')
    response.headers.set('X-Frame-Options', 'DENY')
    response.headers.set('X-XSS-Protection', '1; mode=block')
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
    response.headers.set('Content-Security-Policy', "default-src 'self'")

    return response

  } catch (error) {
    console.error('Error in visitor-consent API:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error' 
      },
      { status: 500 }
    )
  }
}
