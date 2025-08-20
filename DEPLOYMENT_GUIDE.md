# 🚀 Portfolio Deployment Guide

## Email Functionality Setup

### 1. Gmail Setup (Recommended)

#### Step 1: Enable 2-Factor Authentication
1. Go to [Google Account Settings](https://myaccount.google.com)
2. Security → 2-Step Verification → Turn On

#### Step 2: Generate App Password
1. Go to [App Passwords](https://myaccount.google.com/apppasswords)
2. Select "Mail" and "Other (Custom name)"
3. Enter "Portfolio Website"
4. Copy the 16-character password

### 2. Environment Variables for Deployment

**All contact form submissions will be sent to: `winstonmascarenhas@gmail.com`**

**All visitor notifications will be sent to: `winstonmascarenhasjobs@gmail.com`**

When deploying to **Vercel/Netlify**, add these environment variables:

```
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=winstonmascarenhas@gmail.com
EMAIL_PASS=your-16-char-app-password
EMAIL_FROM=winstonmascarenhas@gmail.com
```

---

## 🌟 Deployment Options

### Option 1: Vercel (Recommended for Next.js)

#### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

#### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import your repository
5. Add environment variables in Settings → Environment Variables
6. Deploy!

### Option 2: Netlify

#### Step 1: Build Settings
1. Go to [netlify.com](https://netlify.com)
2. Connect GitHub repository
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Add environment variables in Site Settings → Environment Variables

---

## 📧 Email Testing

### Development
- Uses Ethereal test accounts automatically
- Check console for preview URLs

### Production
- Uses your Gmail/SMTP configuration
- Real emails sent to your inbox
- **Contact form emails**: Sent to `winstonmascarenhas@gmail.com`
- **Visitor notifications**: Sent to `winstonmascarenhasjobs@gmail.com`

---

## 🔒 Security Features Implemented

### ✅ **Input Validation & Sanitization**
- **XSS Protection**: Blocks script tags, JavaScript, and HTML injection
- **Input Length Limits**: Prevents oversized requests (max 10KB)
- **Email Validation**: Strict regex pattern validation
- **Content Sanitization**: Trims and limits all input fields

### ✅ **Spam & Attack Prevention**
- **Spam Detection**: Blocks common spam keywords
- **Suspicious Pattern Detection**: Blocks malicious code patterns
- **Request Method Validation**: Only allows POST requests
- **Content-Type Validation**: Only accepts JSON requests

### ✅ **Security Headers**
- **X-Content-Type-Options**: Prevents MIME type sniffing
- **X-Frame-Options**: Prevents clickjacking attacks
- **X-XSS-Protection**: Enables browser XSS filtering
- **Referrer-Policy**: Controls referrer information
- **Content-Security-Policy**: Restricts resource loading

### ✅ **Monitoring & Logging**
- **IP Address Logging**: Tracks all contact attempts
- **Suspicious Activity Detection**: Logs potential attacks
- **Legitimate Contact Logging**: Monitors real submissions

### ✅ **Environment Security**
1. **Never commit `.env.local`** to GitHub
2. **Use App Passwords** for Gmail (not regular password)
3. **Keep environment variables** in deployment platform only
4. **Test email functionality** after deployment

---

## 🎯 Quick Deployment Checklist

✅ Code builds successfully (`npm run build`)  
✅ Email route configured  
✅ Environment variables ready  
✅ GitHub repository created  
✅ Vercel/Netlify account ready  
✅ Gmail app password generated  

## 🆘 Troubleshooting

### Email Not Working
1. Check environment variables are set correctly
2. Verify Gmail app password (not regular password)
3. Check Vercel/Netlify function logs
4. Test with development fallback first

### Build Errors
1. Run `npm run build` locally first
2. Check all dependencies are in package.json
3. Verify no TypeScript errors
4. Check Next.js version compatibility
