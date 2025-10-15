import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  try {
    const clientIP =
      request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    const userAgent = request.headers.get('user-agent') || 'unknown'

    const contentType = request.headers.get('content-type')
    if (!contentType || !contentType.includes('application/json')) {
      return NextResponse.json({ success: false, message: 'Invalid content type' }, { status: 400 })
    }

    const contentLength = request.headers.get('content-length')
    if (contentLength && parseInt(contentLength) > 5120) {
      return NextResponse.json({ success: false, message: 'Request too large' }, { status: 413 })
    }

    const body = await request.json()
    const { name, company, email, message } = body

    if (!name || !company || !email) {
      return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 })
    }

    const sanitizedName = String(name).trim().substring(0, 50)
    const sanitizedCompany = String(company).trim().substring(0, 100)
    const sanitizedEmail = String(email).trim().toLowerCase().substring(0, 254)
    const sanitizedMessage = message ? String(message).trim().substring(0, 500) : ''

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(sanitizedEmail)) {
      return NextResponse.json({ success: false, message: 'Invalid email format' }, { status: 400 })
    }

    const suspiciousPatterns = [
      /<script/i,
      /javascript:/i,
      /on\w+\s*=/i,
      /data:text\/html/i,
      /vbscript:/i,
      /<iframe/i,
    ]

    const allInput = `${sanitizedName}${sanitizedCompany}${sanitizedEmail}${sanitizedMessage}`
    for (const pattern of suspiciousPatterns) {
      if (pattern.test(allInput)) {
        return NextResponse.json({ success: false, message: 'Invalid input detected' }, { status: 400 })
      }
    }

    console.log(
      `Recruiter interest: ${sanitizedName} @ ${sanitizedCompany} (${sanitizedEmail}) - IP: ${clientIP}`
    )

    const notificationEmail = process.env.NOTIFICATION_EMAIL || 'winstonmascarenhasjobs@gmail.com'
    const smtpHost = process.env.EMAIL_HOST || 'smtp.gmail.com'
    const smtpPort = parseInt(process.env.EMAIL_PORT || '587', 10)
    const smtpUser = process.env.EMAIL_USER
    const smtpPass = process.env.EMAIL_PASS

    if (smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: { user: smtpUser, pass: smtpPass },
      })

      await transporter.sendMail({
        from: process.env.EMAIL_FROM || smtpUser,
        to: notificationEmail,
        subject: `Recruiter interest: ${sanitizedName} @ ${sanitizedCompany}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #333;">Optional recruiter note</h2>
            <p>Someone left a voluntary hiring note on your portfolio (site was not gated).</p>
            <p><strong>Name:</strong> ${sanitizedName}</p>
            <p><strong>Company:</strong> ${sanitizedCompany}</p>
            <p><strong>Email:</strong> ${sanitizedEmail}</p>
            <p><strong>Note:</strong> ${sanitizedMessage || '(none)'}</p>
            <hr />
            <p style="font-size: 12px; color: #666;">IP: ${clientIP}<br/>UA: ${userAgent}<br/>${new Date().toISOString()}</p>
          </div>
        `,
        text: `Recruiter interest\nName: ${sanitizedName}\nCompany: ${sanitizedCompany}\nEmail: ${sanitizedEmail}\nNote: ${sanitizedMessage || '(none)'}`,
      })
    } else {
      console.warn('Recruiter note logged but email skipped: EMAIL_USER / EMAIL_PASS not set')
    }

    return NextResponse.json({ success: true, message: 'Note sent' })
  } catch (error) {
    console.error('Error in recruiter-interest API:', error)
    return NextResponse.json({ success: false, message: 'Failed to send note' }, { status: 500 })
  }
}
