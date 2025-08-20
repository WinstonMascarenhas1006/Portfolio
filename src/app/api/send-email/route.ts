import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Ensure this route runs on the Node.js runtime (required for Nodemailer)
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

    // Security: Limit request body size (max 10KB)
    const contentLength = request.headers.get('content-length')
    if (contentLength && parseInt(contentLength) > 10240) {
      return NextResponse.json(
        { success: false, message: 'Request too large' },
        { status: 413 }
      )
    }

    const body = await request.json()
    const { name, email, subject, message, company, phone } = body

    // Security: Validate required fields with strict checks
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Security: Input sanitization and validation
    const sanitizedName = String(name).trim().substring(0, 100)
    const sanitizedEmail = String(email).trim().toLowerCase().substring(0, 254)
    const sanitizedSubject = String(subject).trim().substring(0, 200)
    const sanitizedMessage = String(message).trim().substring(0, 2000)
    const sanitizedCompany = company ? String(company).trim().substring(0, 100) : ''
    const sanitizedPhone = phone ? String(phone).trim().substring(0, 20) : ''

    // Security: Validate email format with stricter regex
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

    const allInput = `${sanitizedName}${sanitizedEmail}${sanitizedSubject}${sanitizedMessage}${sanitizedCompany}${sanitizedPhone}`
    
    for (const pattern of suspiciousPatterns) {
      if (pattern.test(allInput)) {
        console.warn(`Suspicious input detected from IP: ${clientIP}`)
        return NextResponse.json(
          { success: false, message: 'Invalid input detected' },
          { status: 400 }
        )
      }
    }

    // Security: Check for spam indicators
    const spamKeywords = ['viagra', 'casino', 'loan', 'credit', 'debt', 'free money', 'lottery', 'winner']
    const inputLower = allInput.toLowerCase()
    
    if (spamKeywords.some(keyword => inputLower.includes(keyword))) {
      console.warn(`Potential spam detected from IP: ${clientIP}`)
      return NextResponse.json(
        { success: false, message: 'Message contains prohibited content' },
        { status: 400 }
      )
    }

    // Production email configuration
    let smtpHost = process.env.EMAIL_HOST
    let smtpPort = process.env.EMAIL_PORT ? parseInt(process.env.EMAIL_PORT, 10) : 587
    let smtpUser = process.env.EMAIL_USER
    let smtpPass = process.env.EMAIL_PASS
    let smtpFrom = process.env.EMAIL_FROM || smtpUser
    // Always send to Winston's email address
    const smtpTo = 'winstonmascarenhas@gmail.com'

    let transporter: nodemailer.Transporter

    if (!smtpHost || !smtpUser || !smtpPass || !smtpFrom) {
      // Dev fallback: use Ethereal test account so emails work without real SMTP
      const testAccount = await nodemailer.createTestAccount()
      smtpHost = testAccount.smtp.host
      smtpPort = testAccount.smtp.port
      // @ts-ignore: nodemailer types allow boolean here
      const secure = testAccount.smtp.secure
      smtpUser = testAccount.user
      smtpPass = testAccount.pass
      smtpFrom = `Portfolio Contact <${testAccount.user}>`

      transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure,
        auth: { user: smtpUser, pass: smtpPass }
      })
    } else {
      transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: { user: smtpUser, pass: smtpPass }
      })
    }

    // Security: Log legitimate contact attempts (for monitoring)
    console.log(`Contact form submission from: ${sanitizedEmail} (IP: ${clientIP})`)

    const plainText = `
Name: ${sanitizedName}
Email: ${sanitizedEmail}
Company: ${sanitizedCompany || 'Not provided'}
Phone: ${sanitizedPhone || 'Not provided'}

Subject: ${sanitizedSubject}

Message:
${sanitizedMessage}
    `

    const htmlBody = `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${sanitizedName}</p>
<p><strong>Email:</strong> ${sanitizedEmail}</p>
<p><strong>Company:</strong> ${sanitizedCompany || 'Not provided'}</p>
<p><strong>Phone:</strong> ${sanitizedPhone || 'Not provided'}</p>
<p><strong>Subject:</strong> ${sanitizedSubject}</p>
<br>
<p><strong>Message:</strong></p>
<p>${sanitizedMessage.replace(/\n/g, '<br>')}</p>
    `

    const info = await transporter.sendMail({
      from: smtpFrom,
      to: smtpTo,
      replyTo: sanitizedEmail,
      subject: `Portfolio Contact: ${sanitizedSubject}`,
      text: plainText,
      html: htmlBody
    })
    const previewUrl = nodemailer.getTestMessageUrl?.(info) || null

    // Security: Add security headers to response
    const response = NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully',
        previewUrl
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
    console.error('Error in send-email API:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error' 
      },
      { status: 500 }
    )
  }
}
